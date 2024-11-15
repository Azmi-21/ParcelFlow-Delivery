import express from "express";
import paymentController from "../Controllers/PaymentController.js";

const router = express.Router();
router.post("/payment", paymentController.handlePayment);

export default router;
