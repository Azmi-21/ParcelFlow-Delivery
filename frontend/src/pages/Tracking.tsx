import React, { useState } from "react";
import { Check, User } from "lucide-react";

interface Order {
  id: number;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  trackingNumber: string;
  deliveryStaff: {
    id: number;
    name: string;
    phone: string;
  } | null;
  timeline: {
    status: string;
    timestamp: string;
    completed: boolean;
  }[];
}

const allDeliveryStates = [
  "Item accepted by Courier",
  "Collected",
  "In-Transit",
  "Out for Delivery",
  "Delivered"
];

const Tracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [error, setError] = useState("");
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      trackingNumber: "630841707239",
      status: "In Transit",
      origin: "123 Main St",
      destination: "456 Elm St",
      estimatedDelivery: "2025-05-15 14:00",
      deliveryStaff: {
        id: 1,
        name: "John Smith",
        phone: "+1 555-0123"
      },
      timeline: [
        { status: "Item accepted by Courier", timestamp: "2025-05-14 09:00 AM", completed: true },
        { status: "Collected", timestamp: "2025-05-14 10:24 AM", completed: true },
        { status: "In-Transit", timestamp: "2025-05-14 10:34 AM", completed: true },
        { status: "Out for Delivery", timestamp: "", completed: false },
        { status: "Delivered", timestamp: "", completed: false }
      ],
    },
    {
      id: 2,
      trackingNumber: "630841707240",
      status: "Pending",
      origin: "789 Oak Ave",
      destination: "321 Pine St",
      estimatedDelivery: "2025-05-16 15:30",
      deliveryStaff: null,
      timeline: [
        { status: "Item accepted by Courier", timestamp: "2025-05-14 14:30 PM", completed: true },
        { status: "Collected", timestamp: "", completed: false },
        { status: "In-Transit", timestamp: "", completed: false },
        { status: "Out for Delivery", timestamp: "", completed: false },
        { status: "Delivered", timestamp: "", completed: false }
      ],
    },
    {
      id: 3,
      trackingNumber: "630841707241",
      status: "Delivered",
      origin: "555 Maple Dr",
      destination: "777 Cedar Ln",
      estimatedDelivery: "2025-05-14 12:00",
      deliveryStaff: {
        id: 2,
        name: "Jane Doe",
        phone: "+1 555-0124"
      },
      timeline: [
        { status: "Item accepted by Courier", timestamp: "2025-05-14 08:00 AM", completed: true },
        { status: "Collected", timestamp: "2025-05-14 09:15 AM", completed: true },
        { status: "In-Transit", timestamp: "2025-05-14 10:00 AM", completed: true },
        { status: "Out for Delivery", timestamp: "2025-05-14 11:30 AM", completed: true },
        { status: "Delivered", timestamp: "2025-05-14 12:00 PM", completed: true }
      ],
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setError("");
  };

  const handleTrackingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const order = orders.find((o) => o.trackingNumber === trackingNumber);
    if (order) {
      setSelectedOrder(order);
      setError("");
    } else {
      setError("No order found with this tracking number");
      setSelectedOrder(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Track Your Package</h2>
        <form onSubmit={handleTrackingSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Track
          </button>
        </form>
        {error && (
          <p className="mt-2 text-red-500">{error}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Orders List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedOrder?.id === order.id
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-white border border-gray-200 hover:border-blue-500"
                }`}
                onClick={() => handleOrderClick(order)}
              >
                <p className="font-semibold">Tracking #{order.trackingNumber}</p>
                <p className="text-sm text-gray-600">To: {order.destination}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking Details */}
        {selectedOrder && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Tracking Details</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Tracking #{selectedOrder.trackingNumber}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                  <div>
                    <p className="text-gray-600">From</p>
                    <p className="font-medium">{selectedOrder.origin}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">To</p>
                    <p className="font-medium">{selectedOrder.destination}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Status</p>
                    <p className="font-medium">{selectedOrder.status}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Estimated Delivery</p>
                    <p className="font-medium">{selectedOrder.estimatedDelivery}</p>
                  </div>
                </div>

                {selectedOrder.deliveryStaff && (
                  <div className="mt-4 border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Delivery Staff</h4>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <div>
                        <p className="font-medium">{selectedOrder.deliveryStaff.name}</p>
                        <p className="text-sm text-gray-500">{selectedOrder.deliveryStaff.phone}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Timeline */}
                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>
                  {allDeliveryStates.map((state, index) => {
                    const timelineEvent = selectedOrder.timeline.find(
                      (t) => t.status === state
                    );
                    const isCompleted = timelineEvent?.completed || false;

                    return (
                      <div key={state} className="flex items-start mb-8 relative">
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center
                          ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                          transition-colors duration-200 relative z-10
                        `}>
                          {isCompleted && <Check className="w-5 h-5 text-white" />}
                        </div>
                        <div className="ml-4 flex-1">
                          <p className={`font-medium ${isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                            {state}
                          </p>
                          {timelineEvent?.timestamp && (
                            <p className="text-sm text-gray-500">
                              {timelineEvent.timestamp}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
