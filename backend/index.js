const express = require("express");
const connectDb = require("./config/connectDb");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth_route");
const interviewRouter = require("./routes/interview_route");
const paymentRouter = require("./routes/payment_route");
dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://interviewai-client-u69a.onrender.com",
  "http://localhost:5173",
  "http://127.0.0.1:5173"
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user" , require('./routes/user_route'))
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)


const PORT = process.env.PORT || 6000;
const startServer = async () => {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`Server is running on the port ${PORT}`);
    });
  } catch (err) {
    console.error("Server did not start because MongoDB could not connect.");
    process.exit(1);
  }
};

startServer();
