import React from "react";
import ats from "../assets/ats.png";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Ats = () => {
  return (
    <section className="bg-gradient-to-b from-[#E7F2FA] to-white w-full py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            How Our ATS Resume Scanner Works
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            An{" "}
            <span className="underline">applicant tracking system (ATS)</span>{" "}
            scans resumes for keywords that match the open job description. Our
            ATS Resume Checker instantly reviews your format, spelling, grammar,
            and word choice, and offers practical suggestions for optimization.
          </p>

          {/* Upload Section */}
          <div className="p-5 border-2 border-gray-500 rounded-xl max-w-sm">
            <h3 className="text-left text-xl font-medium mb-2">
              Upload Resume
            </h3>
            <div className="flex flex-row md:flex-col md:items-center gap-4 p-3 border-2 border-dashed border-gray-400 rounded-xl max-w-xs mx-auto">
              <IoCloudUploadOutline size={24} className="text-black" />
              <p className="text-gray-700 text-sm text-center md:text-left">
                Browse and choose the files you want to upload from <br />
                your computer
              </p>

              <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-xl shadow-lg">
                <FaPlus size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={ats}
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Ats;
