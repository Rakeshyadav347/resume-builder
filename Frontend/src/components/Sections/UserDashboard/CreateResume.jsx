import React from "react";
import UserNavbar from "./UserNavbar";

export default function CreateResume() {
  return (
    <div className="min-h-screen bg-[#f3f5fc] flex flex-col">
      <UserNavbar />

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 mt-12">
          How would you like to start?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Upload Resume Card */}
          <div className="bg-white rounded-2xl shadow-md p-2 pt-8 text-center cursor-pointer hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Upload your current resume
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              We’ll move everything to your new template
            </p>
          </div>

          {/* Build Resume Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center cursor-pointer hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Build a new resume
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              We’ll guide you through each section
            </p>
          </div>

          {/* Import LinkedIn Card */}
          <div className="bg-white rounded-2xl shadow-md p-2 pt-8 text-center cursor-pointer hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Import your LinkedIn profile
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              We’ll move everything to your new template
            </p>
          </div>
        </div>
        <p className="text-center text-base mt-10 text-gray-700">
          By clicking any of the above options, you agree to our <span className="underline">Terms and
          Conditions</span> and <span className="underline">Privacy Policy</span>.
        </p>
      </main>
    </div>
  );
}
