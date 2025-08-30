import React from "react";
import { Mail, Phone } from "lucide-react";
import FAQ from "./Question";

export default function Contact() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">How can we help?</h1>
        <p className="text-gray-600 mt-2">
          Have questions or need help? We’re here for you
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Left Contact Cards */}
        <div className="space-y-6">
          {/* Email Card */}
          <div className="flex items-start gap-4 p-6 rounded-2xl border bg-white shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
              <Mail className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="text-gray-600">
                Have question? We’re here to Help reach out!
              </p>
              <a
                href="mailto:info@novanectar.co.in"
                className="text-blue-600 font-medium"
                > 
                Info@novanectar.co.in
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex items-start gap-4 p-6 rounded-2xl border bg-white shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
              <Phone className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="text-gray-600">
                Need assistance? Ring us up–
              </p>
              <a
                href="tel:+917989791708"
                className="text-blue-600 font-medium"
                >
                +91 79897 91708
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="p-6 rounded-2xl border bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            We’d love to help! Let us know how
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                placeholder="Have question? We’re here to Help reach out!"
                className="w-full p-3 border rounded-lg"
                />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                placeholder="Have question? We’re here to Help reach out!"
                className="w-full p-3 border rounded-lg"
                />
            </div>
            <div>
              <label className="block font-medium">Contact</label>
              <input
                type="text"
                placeholder="Have question? We’re here to Help reach out!"
                className="w-full p-3 border rounded-lg"
                />
            </div>
            <div>
              <label className="block font-medium">How can we help?</label>
              <textarea
                rows="4"
                placeholder="Have question? We’re here to Help reach out!"
                className="w-full p-3 border rounded-lg"
                />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700"
              >
              Sent your message
            </button>
          </form>
        </div>
      </div>

    </div>
      <FAQ></FAQ>
                </>

  );
}
