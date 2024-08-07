import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Customer";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const Routers = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
