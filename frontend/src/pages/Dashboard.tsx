import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export default function Dashboard({ userRole = "customer" }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation userRole={userRole} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Welcome, {userRole === "customer" ? "Customer" : "Delivery Agent"}
        </h1>

        {userRole === "customer" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add list of recent orders here */}
                <p>You have no recent orders.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trackable Deliveries</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add list of trackable deliveries here */}
                <p>No active deliveries to track.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Request New Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/request-delivery">Request Delivery</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Assigned Deliveries</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add list of assigned deliveries here */}
                <p>You have no assigned deliveries.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Delivery Status Updates</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add delivery status updates here */}
                <p>No status updates available.</p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
