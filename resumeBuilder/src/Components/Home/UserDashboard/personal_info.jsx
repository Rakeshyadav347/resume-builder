import React from "react";
import { User, BookOpen, FileBadge2, Target, Flag, Monitor } from "lucide-react";

function Stepper() {
  // current active step (e.g., step 2)
  const activeStep = 2;

  // steps data
  const steps = [
    { id: 1, label: "Personal Info", icon: <User size={20} /> },
    { id: 2, label: "Education", icon: <BookOpen size={20} /> },
    { id: 3, label: "Certificate", icon: <FileBadge2 size={20} /> },
    { id: 4, label: "Skills", icon: <Target size={20} /> },
    { id: 5, label: "Summary", icon: <Flag size={20} /> },
    { id: 6, label: "Project", icon: <Monitor size={20} /> },
  ];

  return (
    <div className=" flex items-center justify-center gap-6 bg-gray-100 p-6 rounded-xl shadow-sm flex-col md:flex-row">
      {steps.map((step, index) => {
        // check if step is active
        const isActive = step.id === activeStep;
        const isCompleted = step.id < activeStep;

        return (
          <React.Fragment key={step.id}>
            {/* Step */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 
                ${isActive ? "border-blue-600 bg-blue-100 text-blue-600" : ""} 
                ${isCompleted ? "border-blue-600 bg-blue-600 text-white" : ""} 
                ${!isActive && !isCompleted ? "border-gray-300 text-gray-500" : ""}`}
              >
                {step.icon}
              </div>
              <span
                className={`mt-2 text-sm font-medium 
                ${isActive || isCompleted ? "text-blue-600" : "text-gray-500"}`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector Line (skip after last step) */}
            {index < steps.length - 1 && (
              <div
                className={`w-10 h-[2px] mx-2 
                ${isCompleted ? "bg-blue-500" : "bg-gray-300"}`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Stepper;

