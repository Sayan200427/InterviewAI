import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import InterviewPage from "./pages/InterviewPage";
import InterviewHistory from "./pages/InterviewHistory";
import Pricing from "./pages/Pricing";
import InterviewReport from "./pages/InterviewReport";

const isLocalhost = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

export const ServerUrl = import.meta.env.VITE_API_URL || (isLocalhost ? "http://localhost:8000" : "https://interviewai-y9w3.onrender.com");

function App() {
    const dispatch = useDispatch();
    const [authError, setAuthError] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axios.get(
                    ServerUrl + "/api/user/current-user",
                    {
                        withCredentials: true,
                    }
                );

                dispatch(setUserData(result.data));
                setAuthError("");
            } catch (err) {
                console.log(err);
                dispatch(setUserData(null));

                const message =
                    err.response?.data?.message || err.message || "Session expired.";
                if (message.toLowerCase().includes("token")) {
                    setAuthError(
                        "Session invalid or expired. Please sign in again to access your history and interview data."
                    );
                } else {
                    setAuthError("Unable to verify session. Please sign in again.");
                }
            }
        };

        getUser();
    }, [dispatch]);

    return (
        <>
            {authError && (
                <div className="w-full bg-red-100 border border-red-200 text-red-700 p-4 text-center">
                    {authError}
                </div>
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/interview" element={<InterviewPage />} />
                <Route path="/history" element={<InterviewHistory />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/report/:id" element={<InterviewReport />} />
            </Routes>
        </>
    );
}

export default App;
