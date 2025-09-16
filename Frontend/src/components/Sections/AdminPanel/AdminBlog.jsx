// src/components/Blog.jsx
import React, { useState, useEffect } from "react";
import blogImg from "../../../assets/card-img.png";
import { FaPencilAlt } from "react-icons/fa";
import { createBlog, getAllBlogs } from "../../../allservices/Apiservice";

const AdminBlog = () => {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken"); // 🔑 get token

  // fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs(token);
        console.log("Fetched blogs:", data);
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchBlogs();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const result = await createBlog(token, formData);
      alert("✅ Blog created successfully!");
      setShowForm(false);

      // refresh blogs
      const updatedBlogs = await getAllBlogs(token);
      setBlogs(updatedBlogs);
    } catch (err) {
      console.error("❌ Error creating blog:", err);
      alert("Failed to create blog");
    }
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="p-6">
      {!showForm ? (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Blog</h1>
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
            >
              Add Blog
            </button>
          </div>

          {/* Blog Grid */}
          {blogs.length === 0 ? (
            <p className="text-gray-500">No blogs found.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog, i) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={blog.image || blogImg}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    {i === 0 && (
                      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                        <FaPencilAlt className="text-gray-700 text-sm" />
                      </button>
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className="font-semibold text-lg mb-1">{blog.title}</h2>
                    <p className="text-gray-600 text-sm mb-3">
                      {blog.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()} • By{" "}
                      {blog.author || "Admin"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {/* Add Blog Form */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">Add New Blog</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Let’s start with the basics. To ensure employers can reach you,
              input at least your job title, company name, and duration.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="eg. UI/UX Design"
                  className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Keywords & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Keywords
                  </label>
                  <input
                    type="text"
                    name="keywords"
                    placeholder="Enter keywords"
                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    placeholder="Enter slug"
                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Short description"
                  className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Content
                </label>
                <textarea
                  name="content"
                  placeholder="Write blog content..."
                  className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                  rows="5"
                ></textarea>
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Images
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-28 border border-gray-300 rounded-md cursor-pointer bg-white hover:bg-gray-50"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="text-gray-600 font-medium">Upload a File</p>
                      <p className="text-xs text-gray-500">
                        File Upload (.jpg, .png)
                      </p>
                    </div>
                    <input
                      id="file-upload"
                      name="image"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  type="reset"
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Clean
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminBlog;
