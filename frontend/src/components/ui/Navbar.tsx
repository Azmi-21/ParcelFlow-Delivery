import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg p-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide hover:text-gray-200"
        >
          ParcelFlow
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-lg font-medium hover:text-gray-200 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/tracking"
            className="text-lg font-medium hover:text-gray-200 transition-colors"
          >
            Tracking
          </Link>
          <Link
            to="/payment"
            className="text-lg font-medium hover:text-gray-200 transition-colors"
          >
            Payment
          </Link>
          <Link
            to="/support"
            className="text-lg font-medium hover:text-gray-200 transition-colors"
          >
            Support
          </Link>
          <Link
            to="/request-delivery"
            className="text-lg font-medium hover:text-gray-200 transition-colors"
          >
            Request Delivery
          </Link>
          <Link
            to="/Register"
            className="text-lg font-medium hover:text-gray-200 transition-colors"
          >
            Register
          </Link>
          <Link
            to="/Feedback"
            className="text-lg font-medium hover:text-gray-200 transition-colors"
          >
            Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
