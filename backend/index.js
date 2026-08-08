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

// If behind a proxy (Render, Heroku, etc.) enable trust proxy
// so Express knows it's running over HTTPS when setting secure cookies.
app.set("trust proxy", 1);
const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://interviewai-dlxt.onrender.com",
  "http://localhost:5173",
  "http://127.0.0.1:5173"
].filter(Boolean);

console.log("Allowed CORS origins:", allowedOrigins);
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("CORS rejection. Origin:", origin, "Allowed:", allowedOrigins);
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

// Debug route: returns cookies and relevant headers when DEBUG=true
app.get('/api/debug/cookies', (req, res) => {
  if (process.env.DEBUG !== 'true') {
    return res.status(403).json({ message: 'Debug disabled' });
  }

  return res.json({
    cookies: req.cookies || {},
    origin: req.get('origin') || null,
    referer: req.get('referer') || null,
    headers: {
      host: req.get('host') || null,
      'user-agent': req.get('user-agent') || null,
    }
  });
});


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
