import React, { useState } from "react";
import Stepper from "./personal_info";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
function SkillForm() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Data: ", { ...data, skills });
    reset(); // clears the form fields
    setSkills([]); // reset skills
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value && !skills.includes(value)) {
        setSkills([...skills, value]);
        e.target.value = ""; // clear input after adding
      }
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <>
      <Stepper />
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-2">Skill</h2>
        <p className="text-gray-600 mb-4">
          Let’s start with the basics. To ensure employers can reach you, input at least your degree,
          course name, and duration.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Skill Category + Proficiency */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">Skill Category</label>
              <input
                type="text"
                {...register("SkillCategory")}
                placeholder="Example categories: Technical, Design, Soft Skills, Tools"
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Proficiency Level (Optional)</label>
              <input
                type="text"
                {...register("ProficiencyLevel")}
                placeholder="Beginner, Intermediate, Advanced, Expert"
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>
          </div>

          {/* Skill Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Skill Name</label>
            <input
              type="text"
              placeholder="Type a skill and press Enter"
              className="w-full border rounded-lg px-3 py-2 mt-1"
              onKeyDown={handleKeyDown}
            />

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-red-500 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
            onClick={()=>navigate('/certificate')} 
            type="button" className="px-4 py-2 border rounded-lg">
              Previous
            </button>
            <button
             onClick={()=>navigate('/summary')} 
             type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SkillForm;
