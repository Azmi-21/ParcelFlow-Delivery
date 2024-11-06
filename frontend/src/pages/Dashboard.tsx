import React from "react";
import CustomerDashboard from "../components/ui/CustomerDashboard";
import DeliveryAgentDashboard from "../components/ui/DeliveryAgentDashboard";

const Dashboard: React.FC = () => {
  // TODO: Implement logic to determine user role
  const userRole = "customer"; // This should be dynamically set based on the logged-in user

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {userRole === "customer" ? (
        <CustomerDashboard />
      ) : (
        <DeliveryAgentDashboard />
      )}
    </div>
  );
};

export default Dashboard;
