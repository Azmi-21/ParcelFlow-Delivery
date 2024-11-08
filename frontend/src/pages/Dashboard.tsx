import React, { useState } from "react";
import { Package, Truck, Clock, MapPin, Edit, Trash2, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Parcel {
  id: number;
  trackingNumber: string;
  pickupAddress: string;
  dropoffAddress: string;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  note: string;
  status: string;
  estimatedDelivery: string;
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

const Dashboard: React.FC = () => {
  const [parcels, setParcels] = useState<Parcel[]>([
    {
      id: 1,
      trackingNumber: "630841707239",
      pickupAddress: "123 Main St",
      dropoffAddress: "456 Elm St",
      senderName: "Alok Mondala",
      senderPhone: "+1 234-567-8900",
      recipientName: "James Kagunga",
      recipientPhone: "+1 234-567-8901",
      note: "Perishable goods",
      status: "In Transit",
      estimatedDelivery: "2025-05-15 14:00",
      deliveryStaff: {
        id: 1,
        name: "John Smith",
        phone: "+1 555-0123"
      },
      timeline: [
        { status: "Item accepted by Courier", timestamp: "2025-05-14 10:24 AM", completed: true },
        { status: "Collected", timestamp: "2025-05-14 10:34 AM", completed: true },
        { status: "In-Transit", timestamp: "2025-05-14 10:34 AM", completed: true },
        { status: "Out for Delivery", timestamp: "", completed: false },
        { status: "Delivered", timestamp: "", completed: false }
      ]
    },
    {
      id: 2,
      trackingNumber: "630841707240",
      pickupAddress: "789 Oak Ave",
      dropoffAddress: "321 Pine St",
      senderName: "Sarah Johnson",
      senderPhone: "+1 234-567-8902",
      recipientName: "Mike Wilson",
      recipientPhone: "+1 234-567-8903",
      note: "Handle with care",
      status: "Pending",
      estimatedDelivery: "2025-05-16 15:30",
      deliveryStaff: null,
      timeline: [
        { status: "Item accepted by Courier", timestamp: "2025-05-14 14:30 PM", completed: true },
        { status: "Collected", timestamp: "", completed: false },
        { status: "In-Transit", timestamp: "", completed: false },
        { status: "Out for Delivery", timestamp: "", completed: false },
        { status: "Delivered", timestamp: "", completed: false }
      ]
    },
    {
      id: 3,
      trackingNumber: "630841707241",
      pickupAddress: "555 Maple Dr",
      dropoffAddress: "777 Cedar Ln",
      senderName: "David Brown",
      senderPhone: "+1 234-567-8904",
      recipientName: "Lisa Anderson",
      recipientPhone: "+1 234-567-8905",
      note: "Fragile items",
      status: "Delivered",
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
      ]
    }
  ]);

  // Calculate statistics
  const stats = {
    total: parcels.length,
    inTransit: parcels.filter(p => p.status === "In Transit").length,
    pending: parcels.filter(p => p.status === "Pending").length,
    delivered: parcels.filter(p => p.status === "Delivered").length
  };

  const handleEdit = (id: number) => {
    console.log(`Editing parcel ${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this parcel?')) {
      setParcels(parcels.filter(parcel => parcel.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with Stats */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link
          to="/request-delivery"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" /> New Parcel
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <Package className="w-10 h-10 text-blue-600" />
            <div className="ml-4">
              <p className="text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <Truck className="w-10 h-10 text-green-600" />
            <div className="ml-4">
              <p className="text-gray-500">In Transit</p>
              <p className="text-2xl font-bold">{stats.inTransit}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <Clock className="w-10 h-10 text-orange-600" />
            <div className="ml-4">
              <p className="text-gray-500">Pending</p>
              <p className="text-2xl font-bold">{stats.pending}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <MapPin className="w-10 h-10 text-purple-600" />
            <div className="ml-4">
              <p className="text-gray-500">Delivered</p>
              <p className="text-2xl font-bold">{stats.delivered}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parcels Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold">All Parcels</h2>
          <div className="flex gap-2">
            {/* Add any additional controls here */}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pickup Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dropoff Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sender Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipient Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Note
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Staff
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {parcels.map((parcel) => (
                <tr key={parcel.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {parcel.pickupAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {parcel.dropoffAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      <p className="font-medium">{parcel.senderName}</p>
                      <p className="text-gray-500">{parcel.senderPhone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      <p className="font-medium">{parcel.recipientName}</p>
                      <p className="text-gray-500">{parcel.recipientPhone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {parcel.note}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${
                        parcel.status === "In Transit" 
                          ? "bg-blue-100 text-blue-800" 
                          : parcel.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                      {parcel.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {parcel.deliveryStaff ? (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <div>
                          <p className="font-medium">{parcel.deliveryStaff.name}</p>
                          <p className="text-gray-500 text-xs">{parcel.deliveryStaff.phone}</p>
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400">Not assigned</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => handleEdit(parcel.id)}
                      className="text-teal-400 hover:text-teal-500 mr-3"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(parcel.id)}
                      className="text-red-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
