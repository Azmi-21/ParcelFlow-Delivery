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

// Add this constant outside the component
const DEFAULT_PARCELS = [
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
];

const Dashboard: React.FC = () => {
  // Initialize state from localStorage or use default data
  const [parcels, setParcels] = useState<Parcel[]>(() => {
    const savedParcels = localStorage.getItem('parcels');
    if (savedParcels) {
      return JSON.parse(savedParcels);
    }
    // Store default data in localStorage
    localStorage.setItem('parcels', JSON.stringify(DEFAULT_PARCELS));
    return DEFAULT_PARCELS;
  });

  // Add this useEffect to reset data on component mount
  React.useEffect(() => {
    const currentParcels = localStorage.getItem('parcels');
    if (!currentParcels) {
      setParcels(DEFAULT_PARCELS);
      localStorage.setItem('parcels', JSON.stringify(DEFAULT_PARCELS));
    }
  }, []);

  // Add reset function
  const handleReset = () => {
    setParcels(DEFAULT_PARCELS);
    localStorage.setItem('parcels', JSON.stringify(DEFAULT_PARCELS));
  };

  // Add editing state
  const [editingParcel, setEditingParcel] = useState<Parcel | null>(null);

  // Update localStorage whenever parcels change
  React.useEffect(() => {
    localStorage.setItem('parcels', JSON.stringify(parcels));
  }, [parcels]);

  // Calculate statistics
  const stats = {
    total: parcels.length,
    inTransit: parcels.filter(p => p.status === "In Transit").length,
    pending: parcels.filter(p => p.status === "Pending").length,
    delivered: parcels.filter(p => p.status === "Delivered").length
  };

  const handleEdit = (id: number) => {
    const parcel = parcels.find(p => p.id === id);
    if (parcel) {
      setEditingParcel(parcel);
    }
  };

  const handleSaveEdit = (updatedParcel: Parcel) => {
    setParcels(parcels.map(p => p.id === updatedParcel.id ? updatedParcel : p));
    setEditingParcel(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this parcel?')) {
      const newParcels = parcels.filter(parcel => parcel.id !== id);
      setParcels(newParcels);
      localStorage.setItem('parcels', JSON.stringify(newParcels));
    }
  };

  // Add EditModal component within Dashboard
  const EditModal: React.FC<{ parcel: Parcel; onSave: (parcel: Parcel) => void; onClose: () => void }> = ({ parcel, onSave, onClose }) => {
    const [editedParcel, setEditedParcel] = useState<Parcel>(parcel);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Edit Parcel</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Addresses */}
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Address</label>
              <input
                type="text"
                value={editedParcel.pickupAddress}
                onChange={(e) => setEditedParcel({ ...editedParcel, pickupAddress: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Dropoff Address</label>
              <input
                type="text"
                value={editedParcel.dropoffAddress}
                onChange={(e) => setEditedParcel({ ...editedParcel, dropoffAddress: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Sender Details */}
            <div>
              <label className="block text-sm font-medium mb-1">Sender Name</label>
              <input
                type="text"
                value={editedParcel.senderName}
                onChange={(e) => setEditedParcel({ ...editedParcel, senderName: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sender Phone</label>
              <input
                type="text"
                value={editedParcel.senderPhone}
                onChange={(e) => setEditedParcel({ ...editedParcel, senderPhone: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Recipient Details */}
            <div>
              <label className="block text-sm font-medium mb-1">Recipient Name</label>
              <input
                type="text"
                value={editedParcel.recipientName}
                onChange={(e) => setEditedParcel({ ...editedParcel, recipientName: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Recipient Phone</label>
              <input
                type="text"
                value={editedParcel.recipientPhone}
                onChange={(e) => setEditedParcel({ ...editedParcel, recipientPhone: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Note and Status */}
            <div>
              <label className="block text-sm font-medium mb-1">Note</label>
              <input
                type="text"
                value={editedParcel.note}
                onChange={(e) => setEditedParcel({ ...editedParcel, note: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={editedParcel.status}
                onChange={(e) => setEditedParcel({ ...editedParcel, status: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="Pending">Pending</option>
                <option value="In Transit">In Transit</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

            {/* Delivery Staff */}
            <div>
              <label className="block text-sm font-medium mb-1">Delivery Staff Name</label>
              <input
                type="text"
                value={editedParcel.deliveryStaff?.name || ''}
                onChange={(e) => setEditedParcel({
                  ...editedParcel,
                  deliveryStaff: {
                    ...(editedParcel.deliveryStaff || { id: Date.now() }),
                    name: e.target.value,
                    phone: editedParcel.deliveryStaff?.phone || ''
                  }
                })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Delivery Staff Phone</label>
              <input
                type="text"
                value={editedParcel.deliveryStaff?.phone || ''}
                onChange={(e) => setEditedParcel({
                  ...editedParcel,
                  deliveryStaff: {
                    ...(editedParcel.deliveryStaff || { id: Date.now() }),
                    phone: e.target.value,
                    name: editedParcel.deliveryStaff?.name || ''
                  }
                })}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(editedParcel)}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with Stats */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset Data
          </button>
          <Link
            to="/request-delivery"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" /> New Parcel
          </Link>
        </div>
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
      {editingParcel && (
        <EditModal
          parcel={editingParcel}
          onSave={handleSaveEdit}
          onClose={() => setEditingParcel(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
