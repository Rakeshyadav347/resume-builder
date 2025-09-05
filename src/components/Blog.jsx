// src/components/Blog.jsx
import React, { useState } from "react";
import blogImg from "../assets/blog.png";
import { FaPencilAlt } from "react-icons/fa"; //  Added pen icon

const blogs = [
  {
    id: 1,
    title: "How to create a resume and cover letter.",
    description: "Focus on highlighting your accomplish",
    date: "May 14, 2025",
    author: "Tatjana",
    image: blogImg,
  },
  {
    id: 2,
    title: "How to create a resume and cover letter.",
    description: "Focus on highlighting your accomplish",
    date: "May 14, 2025",
    author: "Tatjana",
    image: blogImg,
  },
  {
    id: 3,
    title: "How to create a resume and cover letter.",
    description: "Focus on highlighting your accomplish",
    date: "May 14, 2025",
    author: "Tatjana",
    image: blogImg,
  },
  {
    id: 4,
    title: "How to create a resume and cover letter.",
    description: "Focus on highlighting your accomplish",
    date: "May 14, 2025",
    author: "Tatjana",
    image: blogImg,
  },
  {
    id: 5,
    title: "How to create a resume and cover letter.",
    description: "Focus on highlighting your accomplish",
    date: "May 14, 2025",
    author: "Tatjana",
    image: blogImg,
  },
  {
    id: 6,
    title: "How to create a resume and cover letter.",
    description: "Focus on highlighting your accomplish",
    date: "May 14, 2025",
    author: "Tatjana",
    image: blogImg,
  },
];

const Blog = () => {
  const [showForm, setShowForm] = useState(false);

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  {/*  Show pen icon only for first blog */}
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
                    {blog.date} • By {blog.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
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

            <form className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  placeholder="eg.UI/UX Design"
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
                    placeholder="Enter your email"
                    className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <input
                    type="text"
                    placeholder="Enter your r"
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
                  placeholder="eg.India"
                  className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                  placeholder="eg.India"
                  className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
                  rows="5"
                ></textarea>
              </div>

              {/* Images */}
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
                        File Upload (.pdf, .jpg, .png)
                      </p>
                    </div>
                    <input id="file-upload" type="file" className="hidden" />
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

export default Blog;
