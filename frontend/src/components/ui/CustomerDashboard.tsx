import React from "react";
import { Link } from "react-router-dom";

const CustomerDashboard: React.FC = () => {
  // TODO: Fetch recent orders and trackable deliveries from API
  const recentOrders = [
    { id: 1, status: "In Transit", destination: "123 Main St" },
    { id: 2, status: "Delivered", destination: "456 Elm St" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <ul className="space-y-4">
        {recentOrders.map((order) => (
          <li key={order.id} className="bg-white p-4 rounded shadow">
            <p>Order #{order.id}</p>
            <p>Status: {order.status}</p>
            <p>Destination: {order.destination}</p>
          </li>
        ))}
      </ul>
      <Link
        to="/request-delivery"
        className="block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Request New Delivery
      </Link>
    </div>
  );
};

export default CustomerDashboard;
