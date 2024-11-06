import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">ParcelFlow</h2>
          <p className="text-sm text-gray-200">
            Fast and reliable at your fingertips.
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-200 space-y-1">
            <li>
              <Link
                to="/about"
                className="hover:text-gray-100 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-100 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-100 transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="text-sm text-gray-200 space-y-1">
            <li>
              <Link
                to="/terms"
                className="hover:text-gray-100 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-gray-100 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons with similar styling */}
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-200 text-sm">
        © 2024 ParcelFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
