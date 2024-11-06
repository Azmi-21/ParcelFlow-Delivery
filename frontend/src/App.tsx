import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import RequestDeliveryPage from "./pages/Request-delivery";
import FeedbackPage from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Request-delivery" element={<RequestDeliveryPage />} />
        <Route path="/Feedback" element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}
