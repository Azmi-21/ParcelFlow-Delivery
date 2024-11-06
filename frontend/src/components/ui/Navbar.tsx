import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          DeliverEase
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/tracking" className="hover:underline">
            Tracking
          </Link>
          <Link to="/payment" className="hover:underline">
            Payment
          </Link>
          <Link to="/support" className="hover:underline">
            Support
          </Link>
          <Link to="/request-delivery" className="hover:underline">
            Request Delivery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
