import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// Define the strategy interface
interface FAQStrategy {
  getResponse(): string;
}

// Implement concrete strategies for each FAQ
class ShippingTimeStrategy implements FAQStrategy {
  getResponse(): string {
    return "Our standard shipping time is 3-5 business days.";
  }
}

class ReturnPolicyStrategy implements FAQStrategy {
  getResponse(): string {
    return "You can return any item within 30 days of purchase.";
  }
}

class PaymentMethodsStrategy implements FAQStrategy {
  getResponse(): string {
    return "We accept credit cards, PayPal, and bank transfers.";
  }
}

// Create a context to use the strategies
class FAQContext {
  private strategy: FAQStrategy;

  constructor(strategy: FAQStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: FAQStrategy) {
    this.strategy = strategy;
  }

  getResponse(): string {
    return this.strategy.getResponse();
  }
}

const Support: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  const handleFAQClick = (strategy: FAQStrategy) => {
    const context = new FAQContext(strategy);
    const botMessage = { sender: "bot", text: context.getResponse() };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <h4 className=" mb-4">Ask About...</h4>
      <div className="space-y-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              message.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mb-4">
        <Button onClick={() => handleFAQClick(new ShippingTimeStrategy())} className="bg-blue-600 text-white">
          Shipping Time
        </Button>
        <Button onClick={() => handleFAQClick(new ReturnPolicyStrategy())} className="bg-blue-600 text-white">
          Return Policy
        </Button>
        <Button onClick={() => handleFAQClick(new PaymentMethodsStrategy())} className="bg-blue-600 text-white">
          Payment Methods
        </Button>
      </div>
      <div className="flex space-x-2">
      </div>
    </div>
  );
};

export default Support;