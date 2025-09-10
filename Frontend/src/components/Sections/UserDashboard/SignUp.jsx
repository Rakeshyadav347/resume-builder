import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import logo from "../../../assets/logo.png";
import previewImg from "../../../assets/editor-resume.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../../../allservices/Apiservice"; // api function import karo

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    console.log(formData);
    try {
      const response = await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response._id) {
        setMessage("Signup successful ✅");
      } else {
        setMessage(response.message || "Signup failed ❌");
      }
    } catch (error) {
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <UserNavbar />
      <section className="mt-6 py-16 sm:py-24">
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-6xl h-auto md:h-[850px] bg-transparent md:bg-white md:shadow-lg p-4">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full max-w-md mx-auto bg-white p-6 lg:p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white shadow flex items-center justify-center">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">
                  Sign Up — Build Your Resume
                </h2>

                {/* Name */}
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                {/* Email */}
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                {/* Password */}
                <label className="text-sm text-gray-700">Password</label>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter a password"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Confirm Password */}
                <label className="text-sm text-gray-700">
                  Confirm Password
                </label>
                <div className="relative mb-6">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Enter a confirm password"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </button>

                {/* Status */}
                {message && (
                  <p className="text-sm text-center mt-4 text-red-500">
                    {message}
                  </p>
                )}
              </div>

              {/* Right side image */}
              <div className="hidden md:flex flex-1 p-8 items-center justify-center">
                <img
                  src={previewImg}
                  alt="Resume Preview"
                  className="rounded-md shadow-md w-full max-w-2xl"
                />
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
