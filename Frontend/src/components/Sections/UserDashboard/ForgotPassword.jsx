import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import previewImg from "../../../assets/editor-resume.png";
import UserNavbar from "./UserNavbar";
import { forgotPassword } from "../../../allservices/Apiservice";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword({ email });
      if (res.message === "OTP sent to your email") {
        localStorage.setItem("resetEmail", email);
        navigate("/email-verification");
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <UserNavbar />

      <section className="mt-20 py-16 sm:py-24">
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-6xl flex flex-col md:flex-row md:bg-white md:shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
              <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center mb-6">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>

              <h2 className="text-2xl font-semibold mb-2 text-center">
                Forgot Your Password
              </h2>
              <p className="text-gray-500 text-center mb-6">
                Enter your email to receive a password reset code.
              </p>

              <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Send Code
                </button>
              </form>
            </div>

            <div className="hidden md:flex w-full md:w-2/3 p-8 items-center justify-center">
              <img
                src={previewImg}
                alt="Resume Preview"
                className="rounded-md shadow-md w-full max-w-2xl"
              />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
