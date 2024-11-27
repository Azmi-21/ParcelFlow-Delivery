// src/App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerDashboard from "./components/ui/CustomerDashboard";
import DeliveryAgentDashboard from "./components/ui/DeliveryAgentDashboard";
import Layout from "./components/ui/Layout";
import Dashboard from "./pages/Dashboard";
import DeliveryRequest from "./pages/DeliveryRequest";
import Feedback from "./pages/Feedback";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Support from "./pages/Support";
import Tracking from "./pages/Tracking";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/agent-dashboard" element={<DeliveryAgentDashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="request-delivery" element={<DeliveryRequest />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="support" element={<Support />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
