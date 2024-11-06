// src/pages/Payment.tsx
import React, { useState } from "react";

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement payment processing logic
    setShowConfirmation(true);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      {!showConfirmation ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="payment-method" className="block mb-1">
              Payment Method
            </label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          {paymentMethod === "credit_card" && (
            <>
              <div>
                <label htmlFor="card-number" className="block mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry-date" className="block mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry-date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            </>
          )}
          {paymentMethod === "paypal" && (
            <p>You will be redirected to PayPal to complete your payment.</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Pay Now
          </button>
        </form>
      ) : (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
          role="alert"
        >
          <p className="font-bold">Payment Successful</p>
          <p>Your payment has been processed. Delivery ID: #12345</p>
          <p>Status: Payment Confirmed</p>
          <p>Next Steps: Your delivery will be picked up soon.</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
