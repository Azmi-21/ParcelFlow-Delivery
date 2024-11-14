import PaymentService from "../../Domain/Services/PayementService.js";

class PaymentController {
  // Handle payment method
  async handlePayment(req, res) {
    const { amount, method } = req.body;

    const paymentService = new PaymentService();
    try {
      const result = paymentService.processPayment(amount, method);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new PaymentController();
