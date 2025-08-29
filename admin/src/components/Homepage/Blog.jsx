import React from "react";
import { FaCircle } from "react-icons/fa";
import card from "../../assets/card-img.png";

const Blog = () => {
  const blogs = [
    {
      title: "How to create a resume and cover letter.",
      subtitle: "Focus on highlighting your accomplish",
      date: "May 14, 2025",
      author: "Tatjana",
      image: "https://cdn-icons-png.flaticon.com/512/4322/4322991.png", // replace with your own image
    },
    {
      title: "How to create a resume and cover letter.",
      subtitle: "Focus on highlighting your accomplish",
      date: "May 14, 2025",
      author: "Tatjana",
      image: "https://cdn-icons-png.flaticon.com/512/4322/4322991.png", // replace with your own image
    },
    {
      title: "How to create a resume and cover letter.",
      subtitle: "Focus on highlighting your accomplish",
      date: "May 14, 2025",
      author: "Tatjana",
      image: "https://cdn-icons-png.flaticon.com/512/4322/4322991.png", // replace with your own image
    },
  ];

  return (
    <section className="py-16 px-6 text-center">
      <span className="mx-auto text-center text-sm font-medium p-2 rounded-full bg-white text-blue-600 border border-blue-600 mb-4 block w-max">
        BLOG
      </span>
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
        Career Tips, Resume Advice, Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col"
          >
            <div className="bg-gray-100 flex justify-center items-center h-56">
              <img
                src={card}
                alt="blog"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4 text-left">
              <h3 className="font-semibold text-lg">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{blog.subtitle}</p>
              <p className="text-xs text-gray-500 mt-3">
                {blog.date} • By {blog.author}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <FaCircle className="text-blue-500 text-xs" />
        <FaCircle className="text-gray-300 text-xs" />
        <FaCircle className="text-gray-300 text-xs" />
        <FaCircle className="text-gray-300 text-xs" />
      </div>
    </section>
  );
};

export default Blog;
