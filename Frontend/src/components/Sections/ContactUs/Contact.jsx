import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later you can integrate with backend / email API here
    alert("Form submitted!");
  };

  return (
    <section className="mt-24">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6">
            How can we help?
          </h1>
          <p className="text-gray-600">
            Have questions or need help? We’re here for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* Left Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="flex items-start gap-4 p-6 rounded-2xl border bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
                <FaEnvelope className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">
                  Have a question? We’re here to help – reach out!
                </p>
                <a
                  href="mailto:info@novanectar.co.in"
                  className="text-blue-600 font-medium hover:underline"
                >
                  info@novanectar.co.in
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start gap-4 p-6 rounded-2xl border bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
                <FaPhoneAlt className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">Need assistance? Ring us up –</p>
                <a
                  href="tel:+917989791708"
                  className="text-blue-600 font-medium hover:underline"
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block font-medium">Contact</label>
                <input
                  id="contact"
                  type="text"
                  placeholder="Enter your contact number"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">How can we help?</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send your message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
