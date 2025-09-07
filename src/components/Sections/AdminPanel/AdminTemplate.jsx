// src/components/Template.jsx
import React, { useState } from "react";
import templateImg from "../../../assets/sample.png";
import { FaPencilAlt } from "react-icons/fa";

const AdminTemplate = () => {
  const [showAddTemplatePage, setShowAddTemplatePage] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {!showAddTemplatePage ? (
        // ---------------- Template Grid Page ----------------
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold text-gray-800">Template</h1>

            <button
              onClick={() => setShowAddTemplatePage(true)}
              className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-100 transition"
            >
              Add Template
            </button>
          </div>

          {/* Template Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white shadow rounded-lg p-3"
              >
                {/* Image container with relative positioning */}
                <div className="relative w-full h-60">
                  <img
                    src={templateImg}
                    alt={`Template ${i + 1}`}
                    className="w-full h-full object-contain rounded-md"
                  />

                  {/* Pen icon only on first image */}
                  {i === 0 && (
                    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                      <FaPencilAlt className="text-gray-700 text-sm" />
                    </button>
                  )}
                </div>

                <p className="mt-2 text-gray-700 font-medium">Modern</p>
              </div>
            ))}
          </div>
        </div>
      ) : !showForm ? (
        // ---------------- CV & Resume Options ----------------
        <div className="flex flex-col justify-center items-center min-h-screen bg-indigo-50 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Add new Template
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* CV Card */}
            <div
              onClick={() => setShowForm(true)}
              className="bg-white shadow rounded-xl p-6 w-72 text-center hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2">CV</h2>
              <p className="text-gray-600">
                Highlight Your Potential with a CV
              </p>
            </div>

            {/* Resume Card */}
            <div
              onClick={() => setShowForm(true)}
              className="bg-white shadow rounded-xl p-6 w-72 text-center hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2">Resume</h2>
              <p className="text-gray-600">
                Start Your Journey with Confidence
              </p>
            </div>
          </div>
        </div>
      ) : (
        // ---------------- Add Template Form ----------------
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
          <div className="w-full max-w-4xl border rounded-xl shadow-lg p-6 md:p-8">
            {/* Heading */}
            <h1 className="text-2xl font-bold mb-2">Add Template</h1>
            <p className="text-gray-600 mb-6 text-sm">
              Let’s start with the basics. To ensure employers can reach you,
              input at least your job title, company name, and duration.
            </p>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left form */}
              <div className="md:col-span-2 space-y-4">
                {/* Work Experience */}
                <div className="flex items-center justify-between">
                  <span className="font-medium">Work Experience</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                  </label>
                </div>

                {/* Template Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Template Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Modern"
                    className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-300"
                  />
                </div>

                {/* Category + Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      placeholder="Clean"
                      className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tags
                    </label>
                    <input
                      type="text"
                      placeholder="Designer"
                      className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-300"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="A Modern resume"
                    className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-300"
                  />
                </div>

                {/* File Upload 1 */}
                <div>
                  <p className="font-medium mb-2">
                    Compatible File Types (PDF, DOCX)
                  </p>
                  <label className="w-full cursor-pointer">
                    <div className="border border-black rounded-md p-6 text-center">
                      <p className="text-indigo-600 font-medium">Upload a File</p>
                      <p className="text-xs text-gray-400">
                        File Upload (.pdf, .jpg, .png)
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                {/* File Upload 2 */}
                <div>
                  <p className="font-medium mb-2">
                    Upload Template File (HTML/CSS or design format)
                  </p>
                  <label className="w-full cursor-pointer">
                    <div className="border border-black rounded-md p-6 text-center">
                      <p className="text-indigo-600 font-medium">Upload a File</p>
                      <p className="text-xs text-gray-400">
                        File Upload (.pdf, .jpg, .png)
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              {/* Right preview */}
              <div className="border border-gray-400 rounded-md flex items-center justify-center text-gray-500 w-[200px] h-[250px] md:w-[250px] md:h-[320px]">
                Preview Show
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-6">
              <button
                type="button"
                className="px-8 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition"
              >
                Clean
              </button>
              <button
                type="submit"
                className="px-8 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTemplate;