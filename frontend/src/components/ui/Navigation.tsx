import React from "react";
import Link from "next/link";

export default function Navigation({ userRole = "customer" }) {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DeliverEase
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/tracking" className="hover:underline">
            Tracking
          </Link>
          <Link href="/payment" className="hover:underline">
            Payment
          </Link>
          <Link href="/support" className="hover:underline">
            Support
          </Link>
          {userRole === "customer" && (
            <Link href="/request-delivery" className="hover:underline">
              Request Delivery
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
