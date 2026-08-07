const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  const mongoUrl = process.env.MONGODB_URL && process.env.MONGODB_URL.trim();

  if (!mongoUrl) {
    throw new Error("MONGODB_URL is missing from backend/.env");
  }

  try {
    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Mongodb is connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err.message);

    if (mongoUrl.startsWith("mongodb+srv://") && /querySrv|ENOTFOUND|ECONNREFUSED/.test(err.message)) {
      console.error(
        "Atlas DNS/SRV lookup failed. Check your internet/DNS, Atlas cluster hostname, and Atlas Network Access IP allowlist."
      );
    }

    throw err;
  }
};

module.exports = connectDb;
