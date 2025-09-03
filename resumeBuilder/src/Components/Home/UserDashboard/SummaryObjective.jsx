import React from "react";
import { useForm } from "react-hook-form";

function SummaryObjective({ onNext, onPrevious, onSkip }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onNext(data.summary); // Pass summary value to parent
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Summary Objective</h2>
          <button
            type="button"
            onClick={onSkip}
            className="text-blue-500 hover:underline text-sm"
          >
            Skip
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          Let’s start with the basics. To ensure employers can reach you, input
          at least your degree, courses name, and duration.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Summary Objective
          </label>
          <textarea
            {...register("summary", { required: "Summary is required" })}
            placeholder="eg. A passionate frontend developer with expertise in React and Next.js..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            rows={5}
          />
          {errors.summary && (
            <p className="text-red-500 text-sm mb-4">{errors.summary.message}</p>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onPrevious}
              className="px-6 py-2 border rounded-lg hover:bg-gray-100"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SummaryObjective;
