// src/page/ResumeMaker.jsx
import React, { useState } from "react";
import { FaFileAlt, FaEllipsisV, FaChevronDown } from "react-icons/fa";

const ResumeCard = ({ isBlank, name }) => {
  return (
    <div className="flex flex-col items-center">
      {isBlank ? (
        <div className="w-56 h-[18rem] border-2 border-gray-400 flex items-center justify-center text-4xl font-bold text-gray-400 hover:bg-blue-50 transition duration-200">
          +
        </div>
      ) : (
        <div className="w-56 h-[18rem] border border-gray-300 bg-white p-1 hover:bg-blue-50 transition duration-200">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div className="flex flex-col leading-tight">
                <div className="font-bold text-[7px]">Madhusudhan</div>
                <div className="text-[6px] text-gray-600">Product Designer</div>
              </div>
            </div>
            <div className="text-[5px] text-right text-gray-500 leading-[8px] ml-1">
              <p>yourwebsite.com</p>
              <p>your@gmail.com</p>
              <p>LinkedIn : @id</p>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-2 gap-1 mt-1">
            {/* Left Column */}
            <div>
              <p className="font-semibold text-[6px]">Education</p>
              <p className="text-[5px] text-gray-600">University</p>
              <p className="text-[5px]">Aug 2022 | Location</p>
              <p className="text-[5px] mb-1">
                Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces
              </p>

              <p className="text-[5px] text-gray-600">College</p>
              <p className="text-[5px]">Aug 2022 | Location</p>
              <p className="text-[5px] mb-1">
                Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces
              </p>

              <p className="font-semibold text-[6px] mt-1">Skill</p>
              <p className="text-[5px]">User Interviews</p>
              <p className="text-[5px]">Affinity Diagramming</p>
              <p className="text-[5px]">Card Sorting</p>
              <p className="text-[5px]">Information Architecture</p>

              <p className="font-semibold text-[6px] mt-1">Extras</p>
              <p className="text-[5px]">10K Designer Member</p>
              <p className="text-[5px]">Winner Of Design Contest</p>
            </div>

            {/* Right Column */}
            <div>
              <p className="font-semibold text-[6px]">Experience</p>
              <p className="text-[5px]">
                Company <span className="font-semibold">Product Designer</span>
              </p>
              <p className="text-[5px]">Aug 2022 – Present</p>
              <p className="text-[5px] mb-1">
                Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces for web applications
              </p>

              <p className="text-[5px]">
                Company <span className="font-semibold">Product Designer</span>
              </p>
              <p className="text-[5px]">Aug 2022 – Present</p>
              <p className="text-[5px]">
                Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces
              </p>

               <p className="text-[5px]">
                Company <span className="font-semibold">Product Designer</span>
              </p>
              <p className="text-[5px]">Aug 2022 – Present</p>
              <p className="text-[5px]">
                Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces
              </p>

               <p className="text-[5px]">
                Company <span className="font-semibold">Product Designer</span>
              </p>
              <p className="text-[5px]">Aug 2022 – Present</p>
              <p className="text-[5px]">
                Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces
              </p>

               <p className="text-[5px]">
                Company <span className="font-semibold">Product Designer</span>
              </p>
              <p className="text-[5px]">Aug 2022 – Present</p>
              <p className="text-[5px]">
                Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces
              </p>
            </div>
          </div>
        </div>
      )}
      <p className="mt-1 text-[10px] font-medium text-gray-700 hidden md:block">
        {name}
      </p>
    </div>
  );
};

// Mobile row
const MobileResumeRow = ({ name }) => (
  <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm border hover:bg-blue-50 transition duration-200">
    <div className="flex items-center gap-3">
      <FaFileAlt className="text-gray-500 text-lg" />
      <div>
        <p className="font-medium text-gray-800 text-xs">{name}</p>
        <p className="text-[10px] text-gray-500">2 days ago</p>
      </div>
    </div>
    <FaEllipsisV className="text-gray-400 cursor-pointer" />
  </div>
);

const ResumeMaker = () => {
  const [showMenu, setShowMenu] = useState(false);

  const newTemplates = [
    { id: 1, name: "Blank", isBlank: true },
    { id: 2, name: "Modern" },
    { id: 3, name: "Standard" },
    { id: 4, name: "Office" },
    { id: 5, name: "Modern" },
  ];

  const recentResumes = Array(10).fill({ name: "surya_resume" });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Dropdown */}
      <div className="flex justify-end mb-6">
        <div className="relative">
          <FaChevronDown
            className="text-gray-700 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md border py-2 z-10">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main content area with light background for cards */}
      <div className="bg-blue-50 w-full max-w-8xl mx-auto rounded-lg shadow p-4 md:p-6 space-y-8">
        {/* New Templates */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">New</h2>
          </div>
          <div className="hidden md:grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-6">
            {newTemplates.map((template) => (
              <ResumeCard
                key={template.id}
                isBlank={template.isBlank}
                name={template.name}
              />
            ))}
          </div>
          <div className="block md:hidden space-y-3">
            {newTemplates.map(
              (template) =>
                !template.isBlank && (
                  <MobileResumeRow key={template.id} name={template.name} />
                )
            )}
          </div>
        </section>

        {/* Recent */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent</h2>
            <button className="text-sm text-blue-600 whitespace-nowrap">
              More Templates
            </button>
          </div>
          <div className="hidden md:grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-6">
            {recentResumes.map((resume, idx) => (
              <ResumeCard key={idx} name={resume.name} />
            ))}
          </div>
          <div className="block md:hidden space-y-3">
            {recentResumes.map((resume, idx) => (
              <MobileResumeRow key={idx} name={resume.name} />
            ))}
            <button className="text-sm text-blue-600 ml-2">
              More Templates
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeMaker;
