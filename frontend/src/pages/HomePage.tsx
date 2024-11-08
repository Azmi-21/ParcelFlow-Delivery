import React from "react";
import { Truck, Clock, Shield, Phone } from "lucide-react";
import FeedbackForm from '../components/ui/FeedbackForm.tsx';

//** TODO: Add needed pictures**
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(../assets/pexels-mizunokozuki-13443801.jpg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Fast & Reliable Delivery Service
          </h1>
          <p className="text-xl mb-8">
            Your trusted partner for seamless logistics solutions
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <section>
        <h2>Give Us Your Feedback</h2>
        <FeedbackForm />
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://source.unsplash.com/random/600x400?courier,delivery"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 mb-6">
                We are committed to providing fast, reliable, and secure
                delivery services to our customers. Our mission is to connect
                businesses and individuals through efficient logistics
                solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Reliability</h3>
                  <p className="text-sm text-gray-600">
                    We ensure your packages arrive safely and on time, every
                    time.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Speed</h3>
                  <p className="text-sm text-gray-600">
                    Our efficient network allows for quick deliveries across the
                    country.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Customer Support</h3>
                  <p className="text-sm text-gray-600">
                    Our dedicated team is always ready to assist you with any
                    inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random/400x300?package,delivery"
                alt="Order Delivery"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Order Delivery</h3>
                <p className="text-gray-600">
                  Fast and secure delivery for all your packages, big or small.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random/400x300?tracking,map"
                alt="Real-Time Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600">
                  Track your deliveries in real-time with our advanced tracking
                  system.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random/400x300?customer,support"
                alt="Customer Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Customer Support</h3>
                <p className="text-gray-600">
                  24/7 customer support to assist you with any questions or
                  concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="mr-4">
                <Truck className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  We ensure quick and efficient delivery of your packages.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Your transactions are protected with our secure payment
                  system.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <Clock className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our customer support team is available round the clock to
                  assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
