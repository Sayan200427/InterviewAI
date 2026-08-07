const express = require("express");
const { verifyPayment, createOrder } = require("../controllers/payment_controller");
const isAuth = require("../middlewares/isAuth");





const paymentRouter = express.Router()


paymentRouter.post("/order" , isAuth , createOrder);
paymentRouter.post("/verify" , isAuth , verifyPayment);

module.exports = paymentRouter;