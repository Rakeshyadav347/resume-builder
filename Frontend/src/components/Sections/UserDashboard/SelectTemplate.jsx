import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import resumetemplate from "../../../assets/resumetemplate.png";

const SelectTemplate = () => {
  const [showAll, setShowAll] = useState(false);

  const templates = [...Array(10)];

  return (
    <>
      <section className="mt-24">
        <UserNavbar />
        <h1 className="text-2xl md:text-4xl font-semibold text-center pt-10">
          Designed for Seasoned Professionals
        </h1>
        <p className="my-5 text-center underline text-base md:text-lg font-normal text-blue-800">
          Choose Template Later
        </p>

       
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
            {[
              "bg-blue-400",
              "bg-gray-500",
              "bg-red-500",
              "bg-green-600",
              "bg-yellow-600",
            ].map((color, i) => (
              <span
                key={i}
                className={`${color} w-6 h-6 rounded-full cursor-pointer border`}
              ></span>
            ))}
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {templates.map((_, i) => {
            const shouldHide = !showAll && i >= 4; 
            return (
              <div
                key={i}
                className={`text-center ${shouldHide ? "hidden sm:block" : ""}`}
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={resumetemplate}
                    alt="Resume Template"
                    className="w-full"
                  />
                </div>
                <p className="mt-3 text-gray-700 font-medium">Modern</p>
              </div>
            );
          })}
        </div>

      
        {!showAll && (
          <div className="text-center mt-6 sm:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default SelectTemplate;
