import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const subscriptions = [
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Basic", price: "₹499", duration: "Monthly", paymentDate: "15 Aug, 2025", renewDate: "15 Sep, 2025", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Pro", price: "₹999", duration: "Monthly", paymentDate: "15 Aug, 2025", renewDate: "15 Sep, 2025", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Free", price: "₹0", duration: "Lifetime", paymentDate: "-", renewDate: "-", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Basic", price: "₹499", duration: "Monthly", paymentDate: "15 Aug, 2025", renewDate: "15 Sep, 2025", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Free", price: "₹0", duration: "Lifetime", paymentDate: "-", renewDate: "-", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Free", price: "₹0", duration: "Lifetime", paymentDate: "-", renewDate: "-", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Pro", price: "₹999", duration: "Monthly", paymentDate: "15 Aug, 2025", renewDate: "15 Sep, 2025", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Free", price: "₹0", duration: "Lifetime", paymentDate: "-", renewDate: "-", activityLog: "15 Aug, 2025" },
    { id: "00001", name: "Rosie Pearson", contact: "+91 90991 34329", email: "Rose@gmail.com", plan: "Pro", price: "₹999", duration: "Monthly", paymentDate: "15 Aug, 2025", renewDate: "15 Sep, 2025", activityLog: "15 Aug, 2025" },
    
  ];

  const planColors = {
    Free: "bg-purple-100 text-purple-600",
    Basic: "bg-green-100 text-green-600",
    Pro: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Subscription</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <p className="text-gray-500">Free Users</p>
          <h2 className="text-2xl font-bold">134</h2>
          <p className="text-green-500">+10%</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <p className="text-gray-500">Basic Plan</p>
          <h2 className="text-2xl font-bold">14</h2>
          <p className="text-green-500">+10%</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <p className="text-gray-500">Pro Plan</p>
          <h2 className="text-2xl font-bold">24</h2>
          <p className="text-green-500">+10%</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Email</th>
              <th className="p-3">Plan</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub, idx) => (
              <tr
                key={idx}
                className="border-t cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedPlan(sub)}
              >
                <td className="p-3">{sub.id}</td>
                <td className="p-3">{sub.name}</td>
                <td className="p-3">{sub.contact}</td>
                <td className="p-3">{sub.email}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${planColors[sub.plan]}`}
                  >
                    {sub.plan}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-gray-600 hover:text-blue-600">
                    <FaEye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setSelectedPlan(null)}
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4">Plan Details</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subscription Plan</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${planColors[selectedPlan.plan]}`}
                >
                  {selectedPlan.plan}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span>{selectedPlan.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Duration</span>
                <span>{selectedPlan.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Payment Date</span>
                <span>{selectedPlan.paymentDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Renew</span>
                <span>{selectedPlan.renewDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Activity Log</span>
                <span>{selectedPlan.activityLog}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
