// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DeliveryRequest from "./pages/DeliveryRequest";
import Tracking from "./pages/Tracking";
import Payment from "./pages/Payment";
import Support from "./pages/Support";
import Feedback from "./pages/Feedback";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="request-delivery" element={<DeliveryRequest />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="payment" element={<Payment />} />
          <Route path="support" element={<Support />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
