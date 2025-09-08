// src/components/Users.jsx
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const Users = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  if (selectedUser) {
    // Profile view
    return (
      <div className="bg-white shadow rounded-xl p-6">
        {/* Heading + Subtext */}
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-black text-2xl font-bold">User Information</h2>
          <p className="text-gray-600 sm:text-base">
            Let’s start with the basics. To ensure employers can reach you, input at least your job title, company name, and duration.
          </p>
        </div>

        {/* User Info + Activity Log */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT - User Information */}
          <div className="space-y-3">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">Aayush Gupta</h3>
                <p className="text-gray-600">+91 987 332 4343</p>
              </div>
            </div>

            {/*  Proper gap between label & value */}
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-40"><strong className="w-40">Email</strong><span>Email23@gmail.com</span></div>
              <div className="flex gap-40"><strong className="w-40">Country</strong><span>India</span></div>
              <div className="flex gap-40"><strong className="w-40">State</strong><span>Uttarakhand</span></div>
              <div className="flex gap-40"><strong className="w-40">City</strong><span>Saharanpur</span></div>
              <div className="flex gap-40"><strong className="w-40">Total Resumes Created</strong><span>5</span></div>
              <div className="flex gap-40"><strong className="w-40">Account Created</strong><span>13 Aug, 2025</span></div>
              <div className="flex gap-40"><strong className="w-40">Subscription Plan</strong><span>Basic</span></div>
              <div className="flex gap-40"><strong className="w-40">Login Type</strong><span>Google</span></div>
            </div>
          </div>

          {/* RIGHT - Activity Log */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr className="text-gray-600 border-b">
                  <th className="p-2 text-left">Date & Time</th>
                  <th className="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-2">23 Jul 2025, 10:05 AM</td><td className="p-2">Logged in</td></tr>
                <tr className="border-b"><td className="p-2">23 Jul 2025, 10:05 AM</td><td className="p-2">Edited Resume</td></tr>
                <tr className="border-b"><td className="p-2">23 Jul 2025, 10:05 AM</td><td className="p-2">Upgraded to Pro Plan</td></tr>
                <tr className="border-b"><td className="p-2">23 Jul 2025, 10:05 AM</td><td className="p-2">Logged in</td></tr>
                <tr><td className="p-2">23 Jul 2025, 10:05 AM</td><td className="p-2">Logged in</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Resume Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Resume</h3>

          {/* Make table scrollable with sticky header */}
          <div className="overflow-y-auto max-h-64 border rounded-lg">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr className="text-gray-600 border-b">
                  <th className="p-2 text-left">Resume ID</th>
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Created Date</th>
                  <th className="p-2 text-left">Last Edited</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Download</th>
                  <th className="p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">00001</td>
                  <td className="p-2">Marketing CV</td>
                  <td className="p-2">20 May 2025</td>
                  <td className="p-2">22 May 2025</td>
                  <td className="p-2">Draft</td>
                  <td className="p-2">PDF</td>
                  <td className="p-2 text-center">
                    <FaEye className="text-gray-600 cursor-pointer hover:text-blue-600 mx-auto"/>
                  </td>
                </tr>
                {/* Add more rows to test scroll */}
                {Array(5).fill(0).map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">00001</td>
                    <td className="p-2">Marketing CV</td>
                    <td className="p-2">20 May 2025</td>
                    <td className="p-2">22 May 2025</td>
                    <td className="p-2">Draft</td>
                    <td className="p-2">PDF</td>
                    <td className="p-2 text-center">
                      <FaEye className="text-gray-600 cursor-pointer hover:text-blue-600 mx-auto"/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Default view - Users List
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Email</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.contact}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 text-gray-500">
                  <FaEye
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => setSelectedUser(user)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;