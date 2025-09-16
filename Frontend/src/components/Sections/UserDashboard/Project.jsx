import React from "react";
import { useForm } from "react-hook-form";
import Stepper from "../UserDashboard/Stepper";
import { Navigate, useNavigate } from "react-router-dom";
import { createFresherResume } from "../../../allservices/Apiservice";
import { useResume } from "../UserDashboard/ResumeContext";

function Project({ onPrevious, onFinish }) {
  const navigate = useNavigate();
  const { resumeData } = useResume();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      projectTitle: "",
      organizationName: "",
      role: "",
      projectUrl: "",
      startDate: "",
      endDate: "",
      description: "",
      toolsAndTechnologies: "",
    },
  });

  const onSubmit = async (data) => {
    const finalData = {
      ...resumeData,
      projects: [...(resumeData.projects || []), data],
    };
    console.log("Final Data to submit:", finalData);

    try {
      const token = localStorage.getItem("token"); // or however you store it
      const res = await createFresherResume(token, finalData);
      console.log("Resume Created:", res);
      if (res?.data?._id) {
        navigate(`/fresherresumepreview/${res.data._id}`);
        // 🔑 go to preview page
      }
    } catch (err) {
      console.error("Failed:", err.message);
    }

    console.log("Project Data:", data);
    onFinish && onFinish(data);

    reset();
  };

  return (
    <>
      <Stepper></Stepper>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-2">Project</h2>
          <p className="text-gray-600 mb-6">
            Let’s start with the basics. To ensure employers can reach you,
            input at least your project details.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Project Title & Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Project Title"
                {...register("projectTitle")}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Organization / Client Name (Optional)"
                {...register("organizationName")}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Role & Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Role / Position in Project"
                {...register("role")}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="url"
                placeholder="Project URL / Live Link (Optional)"
                {...register("projectUrl")}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="date"
                {...register("startDate")}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="date"
                {...register("endDate")}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Description */}
            <textarea
              placeholder="Project Description"
              {...register("description")}
              className="border rounded-lg p-2 w-full mb-4"
              rows={3}
            />

            {/* Tools (comma separated) */}
            <input
              type="text"
              placeholder="Tools (comma separated e.g. React, GitHub)"
              {...register("toolsAndTechnologies")}
              className="border rounded-lg p-2 w-full mb-6"
            />

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate("/summary")}
                className="px-6 py-2 border rounded-lg hover:bg-gray-100"
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Project;
