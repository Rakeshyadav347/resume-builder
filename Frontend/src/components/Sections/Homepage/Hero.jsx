import { FaBriefcase, FaCheck, FaFileAlt, FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex flex-col items-center text- mt-24 pt-36 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      
      {/* Decorative Icons for md+ screens */}
      <div className="hidden md:block absolute top-16 left-40 bg-green-600 text-white p-4 rounded-xl shadow-lg rotate-[-15deg] z-0">
        <FaBriefcase size={24} />
      </div>

      <div className="hidden md:block absolute top-24 right-40 bg-orange-600 text-white p-4 rounded-xl shadow-lg rotate-[15deg] z-0">
        <FaFileAlt size={24} />
      </div>

      <div className="hidden md:block absolute bottom-28 left-44 bg-lime-500 text-white p-4 rounded-xl shadow-lg rotate-[-15deg] z-0">
        <FaCheck size={24} />
      </div>

      <div className="hidden md:block absolute bottom-32 right-44 bg-indigo-600 text-white p-4 rounded-xl shadow-lg rotate-[15deg] z-0">
        <FaChartPie size={24} />
      </div>

      {/* Hero Content */}
      <h2 className="text-3xl lg:text-7xl font-bold text-gray-900 max-w-3xl tracking-tight z-10">
        Online CV Builder With Creative Templates
      </h2>
      <p className="mt-5 text-lg font-normal text-black z-10">
        Standout resume in minutes—no design skills needed.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700">
          <Link to ="/login">Build a New Resume</Link>
        </button>
        <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50">
          Upload My Existing Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
