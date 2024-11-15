import PaymentStrategy from "../Payment/PaymentStrategy.js";

class PaymentService {
  processPayment(amount, method) {
    const strategy = new PaymentStrategy();
    strategy.setStrategy(method);
    return strategy.executePayment(amount);
  }
}

export default PaymentService;
