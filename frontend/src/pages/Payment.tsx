import React, { useState } from "react";
import axios from "axios";

const Payment: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [method, setMethod] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Handle form submission
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from reloading

    // Send payment request to the backend
    try {
      const response = await axios.post("http://localhost:3000/api/payment", {
        amount,
        method,
      });

      setMessage(`Payment Successful: ${response.data.message}`);
    } catch (error: any) {
      setMessage(
        `Payment Failed: ${error.response?.data?.error || error.message}`
      );
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Enter your payment details below:</p>

      <form onSubmit={handlePayment}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label htmlFor="method">Payment Method:</label>
          <select
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          >
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>

        <button type="submit">Submit Payment</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Payment;
