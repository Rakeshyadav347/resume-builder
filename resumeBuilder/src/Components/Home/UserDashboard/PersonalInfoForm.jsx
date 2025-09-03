import React from "react";
import Stepper from "./personal_info";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function PersonalInfoForm() {
  // ✅ Hooks must be inside the component
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Submit handler
  function onSubmit(data) {
    console.log("Data: ", data);
  }
  return (

    <>
    <Stepper></Stepper>
    <div className="bg-[#f5f6fa] min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
        
        {/* Title & Description */}
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p className="text-gray-600 text-sm mb-4">
          Let’s start with the basics. To ensure employers can reach you, input
          at least your name, email, and phone number.
        </p>
        

        {/* Grid Inputs */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-sm text-gray-500 mb-6">
          <input type="file"
          {...register('image')}/> 
          Add a Photo to Your Resume (Optional)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <span>

          <p>First name</p>

          <input
          {...register('firstName')} 
          type="text"
          placeholder="Enter your first name"
          className="border rounded-lg p-2 w-full" />
          </span>
          <span>
          <p>Last name</p>
          <input
          {...register('lastName')}
          type="text" placeholder="Enter your last name" className="border rounded-lg p-2 w-full" />
          </span>
          <span>
          <p>Mobile No. </p>
          <input
          {...register('mobileNo')}
          type="text" placeholder="Enter your phone number" className="border rounded-lg p-2 w-full" />
          </span>
          <span>
            <p>E-mail</p>
          <input
        {...register('email')}
          type="email" placeholder="Enter your email" className="border rounded-lg p-2 w-full" />
          </span>
          <span>
          <p>Country</p>
          <input
          {...register('country')}
          type="text" placeholder="eg. India" className="border rounded-lg p-2 w-full" />
          </span>
          <span>  
            <p>State or Union Territory</p>
          <input
          {...register('state')}
          type="text" placeholder="eg. Dehradun" className="border rounded-lg p-2 w-full" />
          </span>
          <span>
            <p>city</p>
          <input
          {...register('city')}
          type="text" placeholder="eg. Dehradun" className="border rounded-lg p-2 w-full" />
          </span>
          <span>
          <p>District</p>
          <input
          {...register('district')}
          type="text" placeholder="eg. Dehradun" className="border rounded-lg p-2 w-full" />
          </span>
        </div>

        {/* Add-on Buttons */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["Job Title", "Website", "LinkedIn", "Github", "Language Know", "Hobbies"].map((item, i) => (
            <button key={i} className="flex items-center border rounded-lg px-3 py-1 text-sm hover:bg-gray-100">
              <span className="mr-1">+</span> {item}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button className="border rounded-lg px-4 py-2 bg-gray-100">Previous</button>
          <Link to="/education"> 
          <button type="submit" className="border rounded-lg px-4 py-2 bg-blue-600 text-white">Next</button>
          </Link>
        </div>
          </form>
      </div>
    </div>
          </>
  );
}


 export default PersonalInfoForm;