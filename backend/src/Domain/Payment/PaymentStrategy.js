import CreditCardPayment from "./Strategies/CreditCardPayment.js";
import PayPalPayment from "./Strategies/PayPalPayment.js";
import CashOnDelivery from "./Strategies/CashOnDeliveryPayment.js";

class PaymentStrategy {
  setStrategy(method) {
    switch (method) {
      case "creditCard":
        this.strategy = new CreditCardPayment();
        break;
      case "paypal":
        this.strategy = new PayPalPayment();
        break;
      case "cashOnDelivery":
        this.strategy = new CashOnDelivery();
        break;
      default:
        throw new Error("Invalid payment method - " + method);
    }
  }

  executePayment(amount) {
    return this.strategy.pay(amount);
  }
}

export default PaymentStrategy;
