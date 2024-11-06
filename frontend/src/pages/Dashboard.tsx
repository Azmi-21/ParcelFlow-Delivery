import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome,</h1>

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
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
