import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Resume Maker made creating my first resume so simple. The AI suggestions helped me highlight my internship in a way I never thought of!",
      name: "Sakshi Chaudhari",
      rating: 5,
      time: "2 weeks ago",
    },
    {
      text: "Resume Maker made creating my first resume so simple. The AI suggestions helped me highlight my internship in a way I never thought of!",
      name: "Sakshi Chaudhari",
      rating: 5,
      time: "2 weeks ago",
    },
    {
      text: "Resume Maker made creating my first resume so simple. The AI suggestions helped me highlight my internship in a way I never thought of!",
      name: "Sakshi Chaudhari",
      rating: 5,
      time: "2 weeks ago",
    },
    {
      text: "Resume Maker made creating my first resume so simple. The AI suggestions helped me highlight my internship in a way I never thought of!",
      name: "Sakshi Chaudhari",
      rating: 5,
      time: "2 weeks ago",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mb-12 text-center">
        <span className="mx-auto text-center text-sm font-medium p-2 rounded-full bg-white text-blue-600 border border-blue-600 mb-4 block w-max">
          TESTIMONIALS
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          What Our Users Say
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <FaQuoteLeft className="text-blue-600 text-xl mb-4" />
            <p className="text-gray-700 text-lg mb-4">{item.text}</p>
            <h4 className=" text-xl font-semibold">{item.name}</h4>

            <div className="flex items-center text-yellow-500 mt-2 mb-2">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-xs text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
