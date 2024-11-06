import React, { useState } from "react";

interface Order {
  id: number;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
}

const Tracking: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      status: "In Transit",
      origin: "123 Main St",
      destination: "456 Elm St",
      estimatedDelivery: "2025-05-15 14:00",
    },
    {
      id: 2,
      status: "Delivered",
      origin: "789 Oak St",
      destination: "101 Pine St",
      estimatedDelivery: "2025-05-14 10:00",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-50"
              onClick={() => handleOrderClick(order)}
            >
              <p>Order #{order.id}</p>
              <p>Status: {order.status}</p>
              <p>Destination: {order.destination}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        {selectedOrder ? (
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">
              Order #{selectedOrder.id}
            </h3>
            <p>Status: {selectedOrder.status}</p>
            <p>Origin: {selectedOrder.origin}</p>
            <p>Destination: {selectedOrder.destination}</p>
            <p>Estimated Delivery: {selectedOrder.estimatedDelivery}</p>
            {/* TODO: Add a map component here to show the delivery route?? */}
            <div className="mt-4 h-64 bg-gray-200 flex items-center justify-center">
              Map Placeholder
            </div>
          </div>
        ) : (
          <p>Select an order to view details</p>
        )}
      </div>
    </div>
  );
};

export default Tracking;
