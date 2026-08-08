import { RiRobot2Line } from "react-icons/ri";
import { IoSparklesSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth , provider } from '../utils/firebase';
import axios from 'axios';
import {ServerUrl } from '../App';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/userSlice";


function Auth({isModel = false}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [authError, setAuthError] = useState("");


    const handleGoogleAuth = async () =>{
      try{
          setAuthError("");
          const response = await signInWithPopup(auth ,  provider);
          let User = response.user;
          let name = User.displayName;
          let email = User.email;
          const result = await axios.post(ServerUrl + "/api/auth/google" , 
            { name , email }, {withCredentials : true}
          );
          
          dispatch(setUserData(result.data));
          navigate("/");

      }catch(err){
        console.log(err);
        dispatch(setUserData(null));
        const message =
          err.response?.data?.message || err.message || "Authentication failed.";

        if (message.toLowerCase().includes("token")) {
          setAuthError(
            "Authentication failed because the session token is missing or invalid. Please try again."
          );
        } else if (message.toLowerCase().includes("popup")) {
          setAuthError(
            "Popup sign-in was blocked or closed. Please allow popups and try again."
          );
        } else {
          setAuthError("Authentication failed. Please try again.");
        }
      }
    }
  return (
      <div
        className={`w-full ${
          isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05 }}
          className={`
            w-full
            ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-3xl"}
            bg-white shadow-2xl border border-gray-200
          `}
        >
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-black text-white p-2 rounded-lg">
              <RiRobot2Line size={18} />
            </div>

            <h2 className="font-semibold text-lg">
              Interview.AI
            </h2>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-4">
            Continue With{" "}
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
              <IoSparklesSharp size={16} />
              AI Smart Interview
            </span>
          </h1>

          <p className='text-gray-500 text-center text-sm md:text-base , leading-relaxed mb-8'>
            Sign in to start AI-Powered mock interviews,
          track your progress , and unlock detailed performance insights.
          </p>

          <motion.button
          onClick = {handleGoogleAuth}
          whileHover={{opacity:0.9, scale:1.03}}
          whileTap={{opacity: 1 , scale:0.98}}
              className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md'>
                <FcGoogle size={20}/>
                Continue With Google
            </motion.button>
            {authError && (
              <p className="mt-4 text-center text-red-600 text-sm">
                {authError}
              </p>
            )}
        </motion.div>
      </div>
  );
}

export default Auth;
