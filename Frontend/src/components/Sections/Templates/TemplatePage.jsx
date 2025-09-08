import React from "react";
import resume from "../../../assets/image.png";

const TemplatePage = () => {
  return (
    <div className="mt-24 min-h-screen bg-gray-50 py-10 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-5xl font-semibold text-center">
          Resume templates built to impress.
        </h1>
        <p className="mt-5 text-base md:text-lg font-normal text-gray-700">
          Creative resume templates designed by professional typographers.
          <br /> No matter how you customize your resume, it will always stand out.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-white hover:text-black rounded-full">
          Resume Templates
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-white hover:text-black rounded-full">
          Cover Letter Template
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
        <div>
          <label className="text-gray-600 mr-2">Select job title:</label>
          <select className="border border-gray-300 rounded px-3 py-2">
            <option value="">eg: designer</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">Color:</span>
          {["bg-blue-400", "bg-gray-500", "bg-red-500", "bg-green-600", "bg-yellow-600"].map(
            (color, i) => (
              <span
                key={i}
                className={`${color} w-6 h-6 rounded-full cursor-pointer border`}
              ></span>
            )
          )}
        </div>
      </div>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className={`text-center ${i > 5 ? "hidden md:block" : ""}`} 
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={resume} alt="Resume Template" className="w-full" />
            </div>
            <p className="mt-3 text-gray-700 font-medium">Modern</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatePage;
