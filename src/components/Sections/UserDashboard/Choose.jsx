import React from "react";
import UserNavbar from "./UserNavbar";


export default function Choose() {
  return (
    <div className="min-h-screen bg-[#f3f5fc] flex flex-col">
      <UserNavbar/>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
          What Do You Want to Create?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          {/* CV Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center cursor-pointer hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">CV</h3>
            <p className="text-gray-600">
              Highlight Your Potential with a CV
            </p>
          </div>

          {/* Resume Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center cursor-pointer hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Resume</h3>
            <p className="text-gray-600">
              Start Your Journey with Confidence
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
