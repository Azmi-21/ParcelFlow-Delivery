import React from "react";

const DeliveryAgentDashboard: React.FC = () => {
  // TODO: Fetch assigned delivery tasks from DB? or use dummy data?

  const assignedTasks = [
    { id: 1, status: "Pending", pickup: "789 Oak St", dropoff: "101 Pine St" },
    {
      id: 2,
      status: "In Progress",
      pickup: "202 Maple Ave",
      dropoff: "303 Cedar Ln",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Assigned Delivery Tasks</h2>
      <ul className="space-y-4">
        {assignedTasks.map((task) => (
          <li key={task.id} className="bg-white p-4 rounded shadow">
            <p>Task #{task.id}</p>
            <p>Status: {task.status}</p>
            <p>Pickup: {task.pickup}</p>
            <p>Dropoff: {task.dropoff}</p>
            <button className="mt-2 bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600">
              Update Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryAgentDashboard;
