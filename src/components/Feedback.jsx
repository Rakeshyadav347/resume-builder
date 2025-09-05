// src/components/Feedback.jsx
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const feedbacks = [
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "+91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "+91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "91 90991 34329",
    email: "Rose@gmail.com",
  },
  {
    id: "00001",
    name: "Rosie Pearson",
    contact: "91 90991 34329",
    email: "Rose@gmail.com",
  },
];

const Feedback = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">Feedback</h1>

      {/* Table */}
      <div className="bg-white shadow rounded-xl overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                NAME
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                CONTACT
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                EMAIL
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((f) => (
              <tr
                key={f.id}
                className="border-t hover:bg-black-50 transition cursor-pointer"
                 onClick={() => setSelected(f)} //  whole row clickable
              >
                <td className="px-6 py-3 text-sm">{f.id}</td>
                <td className="px-6 py-3 text-sm">{f.name}</td>
                <td className="px-6 py-3 text-sm">{f.contact}</td>
                <td className="px-6 py-3 text-sm">{f.email}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] md:w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Feedback Details</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>

             {/* Two-column layout for details */}

             <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
        <p className="font-semibold text-gray-600">ID</p>
        <p>45</p>

         <p className="font-semibold text-gray-600">Name</p>
        <p>Ravish</p>

        <p className="font-semibold text-gray-600">Email</p>
        <p>abc@gmail.com</p>

        <p className="font-semibold text-gray-600">Contact</p>
        <p>+91 43874 34893</p>

        <p className="font-semibold text-gray-600">Message</p>
        <p className="text-gray-700">dclkxjdkxj dsgkjdgksdjgkjdg sd;gjdg jdkjgdk jdkjgdkjd kgdkjgk djg kdjgkjdg</p>
        </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
