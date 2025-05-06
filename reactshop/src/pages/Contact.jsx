import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center gap-3.5 justify-center px-4 md:px-16 py-12 ">
      {/* Background Image */}
      <img
        src="/back.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover"
      />

      
      {/* Contact Form */}
      <div className="z-10 w-full md:w-1/2 max-w-xl bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Send Us a Message
        </h1>

        <form className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-48 h-12 bg-gray-700 text-white rounded-lg hover:bg-black transition duration-300 text-lg font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
