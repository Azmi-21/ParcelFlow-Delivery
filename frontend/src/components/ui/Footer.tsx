import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">DeliverEase</h2>
          <p className="text-sm">
            Fast, reliable delivery services at your fingertips.
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-md font-semibold mb-2">Legal</h3>
          <ul className="text-sm">
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-md font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © 2024 DeliverEase. All rights reserved.
      </div>
    </footer>
  );
}
