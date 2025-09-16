// src/components/Users.jsx
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { getAllUsers } from "../../../allservices/Apiservice";
import { useEffect } from "react";
const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const data = await getAllUsers(token);
        console.log("Fetched users:", data);
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          setUsers([]); // fallback
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  if (users.length === 0) return <p>No users found</p>;

  if (selectedUser) {
    // Profile view
    return (
      <div className="bg-white shadow rounded-xl p-6">
        {/* Heading + Subtext */}
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-black text-2xl font-bold">User Information</h2>
          <p className="text-gray-600 sm:text-base">
            Let’s start with the basics. To ensure employers can reach you,
            input at least your job title, company name, and duration.
          </p>
        </div>

        {/* User Info + Activity Log */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT - User Information */}
          <div className="space-y-3">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">
                  {selectedUser.username}
                </h3>
                <p className="text-gray-600">{selectedUser.contact}</p>
              </div>
            </div>

            {/*  Proper gap between label & value */}
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-40">
                <strong className="w-40">Email</strong>
                <span>{selectedUser.email}</span>
              </div>
              <div className="flex gap-40">
                <strong className="w-40">Country</strong>
                <span>{selectedUser.country || "N/A"}</span>
              </div>
              <div className="flex gap-40">
                <strong className="w-40">State</strong>
                <span>{selectedUser.state || "N/A"}</span>
              </div>
              <div className="flex gap-40">
                <strong className="w-40">City</strong>
                <span>{selectedUser.city || "N/A"}</span>
              </div>
              <div className="flex gap-40">
                <strong className="w-40">Total Resumes Created</strong>
                <span>{selectedUser.totalResumes || 0}</span>
              </div>
              <div className="flex gap-40">
                <strong className="w-40">Account Created</strong>
                <span>
                  {selectedUser.createdAt
                    ? new Date(selectedUser.createdAt).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
              <div className="flex gap-40">
                <strong className="w-40">Subscription Plan</strong>
                <span>{selectedUser.plan || "Free"}</span>
              </div>
              <div className="flex gap-40">
                <strong className="w-40">Login Type</strong>
                <span>{selectedUser.loginType || "Email"}</span>
              </div>
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
                {selectedUser.activityLog &&
                selectedUser.activityLog.length > 0 ? (
                  selectedUser.activityLog.map((log, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2">
                        {new Date(log.dateTime).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </td>
                      <td className="p-2">{log.action}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="p-2 text-center text-gray-500">
                      No activity found
                    </td>
                  </tr>
                )}
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
                    <FaEye className="text-gray-600 cursor-pointer hover:text-blue-600 mx-auto" />
                  </td>
                </tr>
                {/* Add more rows to test scroll */}
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">00001</td>
                      <td className="p-2">Marketing CV</td>
                      <td className="p-2">20 May 2025</td>
                      <td className="p-2">22 May 2025</td>
                      <td className="p-2">Draft</td>
                      <td className="p-2">PDF</td>
                      <td className="p-2 text-center">
                        <FaEye className="text-gray-600 cursor-pointer hover:text-blue-600 mx-auto" />
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
                <td className="p-3">{user._id}</td>
                <td className="p-3">{user.username}</td>
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
