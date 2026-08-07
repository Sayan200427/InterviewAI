const express = require("express");
const { googleAuth  , logOut }= require("../controllers/authController")



const authRouter = express.Router()


authRouter.post("/google" , googleAuth);
authRouter.post("/logout" , logOut);

module.exports = authRouter;