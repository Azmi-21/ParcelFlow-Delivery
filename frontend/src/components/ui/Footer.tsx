import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const closeModal = () => setModalContent(null);

  return (
    <>
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
                <a
                  href="#about"
                  className="hover:text-gray-100 transition-colors"
                >
                  About Us
                </a>
              </li>
              <Link
                to="/Feedback"
                className="hover:text-gray-100 transition-colors"
              >
                Feedback
              </Link>
              <li>
                <Link
                  to="/Support"
                  className="hover:text-gray-100 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="text-sm text-gray-200 space-y-1">
              <li>
                <button
                  onClick={() => setModalContent("terms")}
                  className="hover:text-gray-100 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalContent("privacy")}
                  className="hover:text-gray-100 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={24}
                  className="hover:text-gray-100 transition-colors"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={24}
                  className="hover:text-gray-100 transition-colors"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={24}
                  className="hover:text-gray-100 transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-200 text-sm">
          © 2024 ParcelFlow. All rights reserved.
        </div>
      </footer>
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {modalContent === "terms" && "Terms of Service"}
                {modalContent === "privacy" && "Privacy Policy"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 text-lg"
              >
                &times;
              </button>
            </div>

            <div className="text-gray-700">
              {modalContent === "terms" && (
                <p>
                  These are the terms of service for ParcelFlow. Please read
                  them carefully. Welcome to ParcelFlow! By accessing or using
                  our services, you agree to comply with and be bound by the
                  following terms and conditions. Please read them carefully. If
                  you do not agree with any part of these terms, you must not
                  use our services.
                </p>
              )}
              {modalContent === "privacy" && (
                <p>
                  This is our privacy policy. Your privacy is important to us.
                </p>
              )}
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
