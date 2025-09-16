import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import previewImg from "../../../assets/editor-resume.png";
import UserNavbar from "./UserNavbar";
import { verifyOtp } from "../../../allservices/Apiservice";

export default function EmailVerification() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = async () => {
    const email = localStorage.getItem("resetEmail");
    const enteredOtp = otp.join("");

    try {
      const res = await verifyOtp({ email, otp: enteredOtp });
      if (res.message === "OTP verified successfully") {
        navigate("/reset-password");
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
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center mb-6">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>

              <h2 className="text-xl font-bold mb-2 text-center">
                Email Code Verification
              </h2>
              <p className="text-gray-500 text-center mb-6">
                Please enter the 6 digit code sent to your email.
              </p>

              <div className="flex gap-2 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="w-12 h-12 border rounded-lg text-center text-lg font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                ))}
              </div>

              <button
                onClick={handleVerify}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Verify and Proceed
              </button>
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
