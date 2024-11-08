import React, { useState } from "react";
import { Package, MapPin, Clock, DollarSign, Box, Weight, Ruler } from "lucide-react";

interface PackageDimensions {
  height: number;
  width: number;
  depth: number;
  weight: number;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

const PACKAGE_TYPES = [
  { id: 'document', name: 'Document', basePrice: 10 },
  { id: 'small', name: 'Small Package', basePrice: 15 },
  { id: 'medium', name: 'Medium Package', basePrice: 25 },
  { id: 'large', name: 'Large Package', basePrice: 35 },
];

const DeliveryRequest: React.FC = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [packageDetails, setPackageDetails] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [showQuotation, setShowQuotation] = useState(false);
  const [estimatedFee, setEstimatedFee] = useState(0);
  const [dimensions, setDimensions] = useState<PackageDimensions>({
    height: 0,
    width: 0,
    depth: 0,
    weight: 0
  });
  const [selectedPackageType, setSelectedPackageType] = useState('');
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateQuotation();
  };

  const calculateQuotation = () => {
    // TODO: Implement real calculation logic
    const basePrice = 10;
    const randomFee = Math.floor(Math.random() * 40);
    setEstimatedFee(basePrice + randomFee);
    setShowQuotation(true);
  };

  const handleConfirm = () => {
    // TODO: Implement order confirmation logic
    console.log("Delivery request confirmed", {
      customerInfo,
      pickupAddress,
      dropoffAddress,
      packageDetails,
      preferredTime,
      estimatedFee,
    });
  };

  const calculatePackageCost = () => {
    if (!dimensions.height || !dimensions.width || !dimensions.depth || !dimensions.weight) {
      return;
    }

    const volume = dimensions.height * dimensions.width * dimensions.depth;
    const selectedPackage = PACKAGE_TYPES.find(p => p.id === selectedPackageType);
    const basePrice = selectedPackage?.basePrice || 15;
    
    // Basic calculation formula (can be adjusted based on your needs)
    const volumePrice = volume * 0.01;
    const weightPrice = dimensions.weight * 0.5;
    const totalCost = basePrice + volumePrice + weightPrice;
    
    setCalculatedCost(Math.round(totalCost * 100) / 100);
    setEstimatedFee(totalCost);
  };

  const renderCalculator = () => (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Box className="mr-2" /> Calculate Your Cost
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-2 flex items-center">
            <Ruler className="w-4 h-4 mr-1" /> Height (cm)
          </label>
          <input
            type="number"
            value={dimensions.height || ''}
            onChange={(e) => setDimensions({...dimensions, height: parseFloat(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter height"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 flex items-center">
            <Ruler className="w-4 h-4 mr-1" /> Width (cm)
          </label>
          <input
            type="number"
            value={dimensions.width || ''}
            onChange={(e) => setDimensions({...dimensions, width: parseFloat(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter width"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 flex items-center">
            <Ruler className="w-4 h-4 mr-1" /> Depth (cm)
          </label>
          <input
            type="number"
            value={dimensions.depth || ''}
            onChange={(e) => setDimensions({...dimensions, depth: parseFloat(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter depth"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 flex items-center">
            <Weight className="w-4 h-4 mr-1" /> Weight (kg)
          </label>
          <input
            type="number"
            value={dimensions.weight || ''}
            onChange={(e) => setDimensions({...dimensions, weight: parseFloat(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter weight"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Package Type</label>
        <select
          value={selectedPackageType}
          onChange={(e) => setSelectedPackageType(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select package type</option>
          {PACKAGE_TYPES.map(type => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
      </div>
      <button
        onClick={calculatePackageCost}
        className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors"
      >
        Calculate Cost
      </button>
      {calculatedCost !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Total Cost: ${calculatedCost}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Request Delivery</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Package className="mr-2" /> Customer Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <MapPin className="mr-2" /> Delivery Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Pickup Address</label>
              <input
                type="text"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter pickup address"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Dropoff Address</label>
              <input
                type="text"
                value={dropoffAddress}
                onChange={(e) => setDropoffAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter dropoff address"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Package Details</label>
            <textarea
              value={packageDetails}
              onChange={(e) => setPackageDetails(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter package details (size, weight, special handling requirements)"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 flex items-center">
              <Clock className="mr-2" /> Preferred Delivery Time
            </label>
            <input
              type="datetime-local"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {renderCalculator()}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <DollarSign className="mr-2" /> Get Quotation
          </button>
        </form>

        {showQuotation && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <DollarSign className="mr-2" /> Delivery Quotation
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg">Estimated Fee: <span className="font-bold">${estimatedFee}</span></p>
              <button
                onClick={handleConfirm}
                className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Confirm Request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryRequest;
