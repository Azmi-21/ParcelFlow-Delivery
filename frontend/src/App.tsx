import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import RequestDeliveryPage from "./pages/Request-delivery";
import FeedbackPage from "./pages/Feedback";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
