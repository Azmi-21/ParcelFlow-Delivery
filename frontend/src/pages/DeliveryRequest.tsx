// src/pages/DeliveryRequest.tsx
import React, { useState } from "react";

const DeliveryRequest: React.FC = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [packageDetails, setPackageDetails] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [showQuotation, setShowQuotation] = useState(false);
  const [estimatedFee, setEstimatedFee] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to get quotation
    // For now, we'll just set a random fee
    setEstimatedFee(Math.floor(Math.random() * 50) + 10);
    setShowQuotation(true);
  };

  const handleConfirm = () => {
    // TODO: Implement confirmation logic
    console.log("Delivery request confirmed");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Request Delivery</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="pickup" className="block mb-1">
            Pickup Address
          </label>
          <input
            type="text"
            id="pickup"
            value={pickupAddress}
            onChange={(e) => setPickupAddress(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="dropoff" className="block mb-1">
            Dropoff Address
          </label>
          <input
            type="text"
            id="dropoff"
            value={dropoffAddress}
            onChange={(e) => setDropoffAddress(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="package" className="block mb-1">
            Package Details
          </label>
          <textarea
            id="package"
            value={packageDetails}
            onChange={(e) => setPackageDetails(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div>
          <label htmlFor="time" className="block mb-1">
            Preferred Delivery Time
          </label>
          <input
            type="datetime-local"
            id="time"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Get Quotation
        </button>
      </form>
      {showQuotation && (
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Delivery Quotation</h2>
          <p>Estimated Fee: ${estimatedFee}</p>
          <button
            onClick={handleConfirm}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Confirm Request
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryRequest;
