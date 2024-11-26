import React from "react";
import { Truck, Clock, Shield } from "lucide-react";

//** TODO: Add needed pictures**
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url(https://jungleworks.me/wp-content/uploads/2020/10/Untitled-design-29-1024x543.png)",
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

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://www.costanalysts.com/wp-content/uploads/2022/12/package-delivery-companies.jpg"
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
                src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2016/05/17/1331795283494_8/max-verstappen-racing-his-red-bull-racing-rb12-to-victory-at-the-2016-spanish-formula-one-gp"
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
                src="https://vareli.co.in/vareliCMS/public/images/220111582/fdc4f82b-e2db-445b-a6bc-ad356c53798a.jpg"
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
                src="https://storage.googleapis.com/cdn-devwebsite-bolddesk/media/2023/07/483a3ef5-customer-support-team-compressed.jpg"
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
            Why Choose Us ?
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
