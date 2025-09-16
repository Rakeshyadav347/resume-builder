import React from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";

export default function LoginAs() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <UserNavbar />
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        <h1 className="text-2xl font-semibold mb-6">Login As</h1>

        <button
          onClick={() => navigate("/login", { state: { role: "user" } })}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-gray-900 transition"
        >
          User
        </button>

        <button
          onClick={() => navigate("/login", { state: { role: "admin" } })}
          className="w-full px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-gray-900 transition"
        >
          Admin
        </button>
      </div>
    </section>
  );
}
