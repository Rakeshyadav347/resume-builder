import { Wand2, FileText, User, Briefcase, Mail, BarChart } from "lucide-react";
import FAQ from "./Question";

function Price() {
  return (
    <>
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center text-center gap-2 mt-10">
        <p className="text-1xl border-2 border-blue-500 rounded-2xl p-1 text-blue-500 md:text-2xl">
          Our Pricing Plan
        </p>
        <p className="text-2xl font-bold md:text-3xl">
          Get Started Within Your Budget
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-10 flex-wrap">
        
        {/* Card 1 */}
        <div className="border-2 border-gray-300 rounded-2xl p-6 w-80 hover:shadow-lg bg-gray-200">
          <p className="font-bold text-lg">Free</p>
          <p className="text-gray-500 mt-2">For Career focused People</p>
          
          <div className="flex items-baseline mt-4">
            <p className="text-3xl font-bold">₹19.99</p>
            <p className="text-gray-500 ml-2">/month</p>
          </div>

          <div className="flex justify-center">
            <button className="mt-4 px-4 py-2 rounded-2xl hover:bg-blue-600 bg-white text-black w-60">
              Get Started
            </button>
          </div>

          <div className="space-y-4 text-gray-700 mt-6">
            <div className="flex items-center gap-3">
              <Wand2 className="w-5 h-5 text-gray-500" />
              <span>AI-Powered Resume Suggestions</span>
            </div>
            <div className="flex items-center gap-3">
              <BarChart className="w-5 h-5 text-gray-500" />
              <span>Full ATS Score Report & Insights</span>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <span>Resume Review by Experts</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-500" />
              <span>Export in PDF & DOCX Formats</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <span>Auto Tailoring for Job Descriptions</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>Priority Email Support</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-2 border-gray-300 rounded-2xl p-6 w-80 hover:shadow-lg bg-gray-200">
          <p className="font-bold text-lg">Premium</p>
          <p className="text-gray-500 mt-2">For Job Seekers</p>
          
          <div className="flex items-baseline mt-4">
            <p className="text-3xl font-bold">₹49.99</p>
            <p className="text-gray-500 ml-2">/month</p>
          </div>

          <div className="flex justify-center">
            <button className="mt-4 px-4 py-2 rounded-2xl hover:bg-blue-600 bg-white text-black w-60">
              Get Started
            </button>
          </div>

          <div className="space-y-4 text-gray-700 mt-6">
            <div className="flex items-center gap-3">
              <Wand2 className="w-5 h-5 text-gray-500" />
              <span>AI-Powered Resume Suggestions</span>
            </div>
            <div className="flex items-center gap-3">
              <BarChart className="w-5 h-5 text-gray-500" />
              <span>Full ATS Score Report & Insights</span>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <span>Resume Review by Experts</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-500" />
              <span>Export in PDF & DOCX Formats</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <span>Auto Tailoring for Job Descriptions</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>Priority Email Support</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-2 border-gray-300 rounded-2xl p-6 w-80 hover:shadow-lg bg-gray-200">
          <p className="font-bold text-lg">Enterprise</p>
          <p className="text-gray-500 mt-2">For Professionals & Teams</p>
          
          <div className="flex items-baseline mt-4">
            <p className="text-3xl font-bold">₹99.99</p>
            <p className="text-gray-500 ml-2">/month</p>
          </div>

          <div className="flex justify-center">
            <button className="mt-4 px-4 py-2 rounded-2xl hover:bg-blue-600 bg-white text-black w-60">
              Get Started
            </button>
          </div>

          <div className="space-y-4 text-gray-700 mt-6">
            <div className="flex items-center gap-3">
              <Wand2 className="w-5 h-5 text-gray-500" />
              <span>AI-Powered Resume Suggestions</span>
            </div>
            <div className="flex items-center gap-3">
              <BarChart className="w-5 h-5 text-gray-500" />
              <span>Full ATS Score Report & Insights</span>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <span>Resume Review by Experts</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-500" />
              <span>Export in PDF & DOCX Formats</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <span>Auto Tailoring for Job Descriptions</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>Priority Email Support</span>
            </div>
          </div>
        </div>

      </div>
      <FAQ></FAQ>
    </>
  );
}
 
export default Price;
