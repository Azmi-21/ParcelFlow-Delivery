import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

export default function RequestDeliveryPage() {
  const [showQuotation, setShowQuotation] = useState(false);
  const [estimatedFee, setEstimatedFee] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimatedFee(25.99); // Example fee
    setShowQuotation(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Request a Delivery</h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div>
            <Label htmlFor="pickup">Pickup Address</Label>
            <Input id="pickup" required />
          </div>
          <div>
            <Label htmlFor="dropoff">Drop-off Address</Label>
            <Input id="dropoff" required />
          </div>
          <div>
            <Label htmlFor="package-details">Package Details</Label>
            <Textarea id="package-details" required />
          </div>
          <div>
            <Label htmlFor="preferred-time">Preferred Delivery Time</Label>
            <Input id="preferred-time" type="datetime-local" required />
          </div>
          <Button type="submit">Get Quotation</Button>
        </form>

        {showQuotation && (
          <div className="mt-8 p-6 border rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Delivery Quotation</h2>
            <p className="text-lg mb-4">
              Estimated Delivery Fee: ${estimatedFee.toFixed(2)}
            </p>
            <Button
              onClick={() => {
                /* Handle confirmation logic */
              }}
            >
              Confirm Request
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
