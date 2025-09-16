// src/components/Feedback.jsx
import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { getAllFeedbacks } from "../../../allservices/Apiservice";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await getAllFeedbacks(token);
        if (Array.isArray(data)) {
          setFeedbacks(data);
        } else {
          setFeedbacks([]);
        }
      } catch (err) {
        console.error("❌ Error fetching feedbacks:", err);
        setFeedbacks([]);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchFeedbacks();
  }, [token]);

  if (loading) return <p>Loading feedbacks...</p>;

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
            {feedbacks.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No feedbacks found.
                </td>
              </tr>
            ) : (
              feedbacks.map((f) => (
                <tr
                  key={f._id}
                  className="border-t hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => setSelected(f)}
                >
                  <td className="px-6 py-3 text-sm">{f._id}</td>
                  <td className="px-6 py-3 text-sm">{f.name}</td>
                  <td className="px-6 py-3 text-sm">{f.contact}</td>
                  <td className="px-6 py-3 text-sm">{f.email}</td>
                  <td className="px-6 py-3 text-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))
            )}
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
              <p>{selected._id}</p>

              <p className="font-semibold text-gray-600">Name</p>
              <p>{selected.name}</p>

              <p className="font-semibold text-gray-600">Email</p>
              <p>{selected.email}</p>

              <p className="font-semibold text-gray-600">Contact</p>
              <p>{selected.contact}</p>

              <p className="font-semibold text-gray-600">Message</p>
              <p className="text-gray-700">
                {selected.message || "No message provided"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
