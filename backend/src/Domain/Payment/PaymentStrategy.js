import CreditCardPayment from "./Strategies/CreditCardPayment.js";
import DebitCardPayment from "./Strategies/DebitCardPayment.js";
import CashOnDelivery from "./Strategies/CashOnDeliveryPayment.js";

class PaymentStrategy {
  setStrategy(method) {
    switch (method) {
      case "creditCard":
        this.strategy = new CreditCardPayment();
        break;
      case "debitCard":
        this.strategy = new DebitCardPayment();
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
