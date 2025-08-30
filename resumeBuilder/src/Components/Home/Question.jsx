import React from "react";
import { Plus } from "lucide-react";

function FAQ() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      {/* Tag */}
      <div className="flex justify-center">
        <span className="px-3 py-1 text-sm border rounded-full text-blue-600 border-blue-200 bg-blue-50">
          FAQ
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-gray-800 font-medium">
            Can I use Job Ease on mobile devices?
          </p>
          <Plus className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-gray-800 font-medium">
            Can I use Job Ease on mobile devices?
          </p>
          <Plus className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-gray-800 font-medium">
            Can I use Job Ease on mobile devices?
          </p>
          <Plus className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-gray-800 font-medium">
            Can I use Job Ease on mobile devices?
          </p>
          <Plus className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-gray-800 font-medium">
            Can I use Job Ease on mobile devices?
          </p>
          <Plus className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-gray-800 font-medium">
            Can I use Job Ease on mobile devices?
          </p>
          <Plus className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
