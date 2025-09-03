import React, { useState } from "react";
import Stepper from "./personal_info";
import { useForm } from "react-hook-form";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function EducationForm() {


  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
  
    function onSubmit(data){
  
  
      console.log("Data: ",data)
      
    }

  return (
    <>
    <Stepper></Stepper>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-2">Education</h2>
      <p className="text-gray-600 mb-6">
        Let’s start with the basics. To ensure employers can reach you, input at
        least your degree, courses name, and duration.
      </p>

    
          <div
          >


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
            {...register('school')}
              type="text"
              name="school"
              placeholder="School / College / University Name"
              
              className="border p-2 rounded-md w-full"
              />
            <input
            {...register('degree')}
              type="text"
              name="degree"
              placeholder="Degree / Course"
              
              className="border p-2 rounded-md w-full"
              />
            <input
            {...register('field')}
              type="text"
              name="field"
              placeholder="Field of Study / Major"
              
              className="border p-2 rounded-md w-full"
              />
            <input
            {...register('startDate')}
              type="date"
              name="startDate"
              placeholder="Start Date"
              
              className="border p-2 rounded-md w-full"
              />
            <input
            {...register('endDate')}
              type="date"
              name="endDate"
              placeholder="End Date"
              
              className="border p-2 rounded-md w-full"
              />
            <input
            {...register('location')}
              type="text"
              name="location"
              placeholder="Location"
              
              className="border p-2 rounded-md w-full"
              />
            <input
            {...register('grade')}
              type="text"
              name="grade"
              placeholder="Grade / CGPA / Percentage"
              className="border p-2 rounded-md w-full"
              />
          </div>

          {/* Honors */}
          <textarea
          {...register('honors')}
            name="honors"
            placeholder="Honors / Achievements (Optional)"
            
            className="border p-2 rounded-md w-full mt-4"
            />

          {/* Description */}
          <textarea
          {...register('description')}
            name="description"
            placeholder="Description (Optional)"
            
            className="border p-2 rounded-md w-full mt-4"
            />
        </div>
    

      {/* Add Button */}
      <button
        
        className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition mb-6"
        >
        ➕ Add Another Education
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        
        <button
        onClick={() => navigate("/personal-info")}
         className="px-6 py-2 border border-gray-400 rounded-md">
          Previous
        </button>
        <button 
        onClick={() => navigate("/certificate")}
         type="submit"  className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md">
          Next
        </button>
      </div>
      
    </div>


          </form>
    
          </>
  );
}
