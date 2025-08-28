import React from "react";
import Navbar from "./components/Navbar.jsx";
import Admin from "./components/Admin.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Admin />
    </div>
  );
}
