import React from "react";
import Stepper from "../UserDashboard/Stepper";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useResume } from "../UserDashboard/ResumeContext";

function PersonalInfoForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { updateResumeData } = useResume();

  function onSubmit(data) {
    updateResumeData("personalInfo", data);
    console.log("Data: ", data);
    navigate("/education"); // ✅ navigate only after saving
  }

  return (
    <>
      <Stepper />
      <div className="bg-[#f5f6fa] min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-2">Personal Information</h2>
          <p className="text-gray-600 text-sm mb-4">
            Let’s start with the basics. To ensure employers can reach you,
            input at least your name, email, and phone number.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-sm text-gray-500 mb-6">
              <input type="file" />
              Add a Photo to Your Resume (Optional)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <span>
                <p>First name</p>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="Enter your first name"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
              {/* Last Name */}
              <span>
                <p>Last name</p>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Enter your last name"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
              {/* Mobile */}
              <span>
                <p>Mobile No.</p>
                <input
                  {...register("phoneNumber")}
                  type="text"
                  placeholder="Enter your phone number"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
              {/* Email */}
              <span>
                <p>E-mail</p>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
              {/* Country */}
              <span>
                <p>Country</p>
                <input
                  {...register("country")}
                  type="text"
                  placeholder="eg. India"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
              {/* State */}
              <span>
                <p>State or Union Territory</p>
                <input
                  {...register("stateOrUnionTerritory")}
                  type="text"
                  placeholder="eg. Uttarakhand"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
              {/* City */}
              <span>
                <p>City</p>
                <input
                  {...register("city")}
                  type="text"
                  placeholder="eg. Dehradun"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
              {/* District */}
              <span>
                <p>District</p>
                <input
                  {...register("district")}
                  type="text"
                  placeholder="eg. Dehradun"
                  className="border rounded-lg p-2 w-full"
                />
              </span>
            </div>

            {/* Extra buttons */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Job Title",
                "Website",
                "LinkedIn",
                "Github",
                "Language Know",
                "Hobbies",
              ].map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className="flex items-center border rounded-lg px-3 py-1 text-sm hover:bg-gray-100"
                >
                  <span className="mr-1">+</span> {item}
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="border rounded-lg px-4 py-2 bg-gray-100"
              >
                Previous
              </button>
              <button
                type="submit"
                className="border rounded-lg px-4 py-2 bg-blue-600 text-white"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalInfoForm;
