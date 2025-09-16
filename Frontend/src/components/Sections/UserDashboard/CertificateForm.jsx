import React from "react";
import Stepper from "../UserDashboard/Stepper";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useResume } from "../UserDashboard/ResumeContext";

function CertificateForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { resumeData, updateResumeData } = useResume();

  const onSubmit = (data) => {
    updateResumeData("certificates", [
      ...(resumeData.certificates || []),
      data,
    ]);
    console.log("Certificate Data: ", data);
    navigate("/skills"); // navigate only after saving
  };

  return (
    <>
      <Stepper />

      <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Certificate</h2>
          <button type="button" className="text-blue-600 hover:underline">
            Skip
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          Let’s start with the basics. To ensure employers can reach you, input
          at least your degree, course name, and duration.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              {...register("certificateName", {
                required: "Certificate name is required",
              })}
              placeholder="Example: Google UX Design Certificate, AWS Certified"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              {...register("issuingOrganization", {
                required: "Issuing authority is required",
              })}
              placeholder="Example: Google, Microsoft, Udemy, Coursera"
              className="border rounded-lg p-2 w-full"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          {errors.authority && (
            <p className="text-red-500 text-sm">{errors.authority.message}</p>
          )}

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              {...register("credentialId")}
              placeholder="Credential ID (Optional)"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="date"
              {...register("startDate")}
              className="border rounded-lg p-2 w-full"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              {...register("endDate")}
              className="border rounded-lg p-2 w-full"
            />
          </div>

          {/* Description */}
          <textarea
            {...register("description")}
            placeholder="Description (Optional)"
            className="border rounded-lg p-2 w-full h-24"
          />

          {/* Credential URL */}
          <input
            type="url"
            {...register("credentialUrl")}
            placeholder="Credential URL (Optional)"
            className="border rounded-lg p-2 w-full"
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              onClick={() => navigate("/education")}
              type="button"
              className="border px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CertificateForm;
