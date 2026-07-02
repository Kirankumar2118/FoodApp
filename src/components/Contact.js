import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! If you have any questions, suggestions,
            or feedback, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p className="text-gray-600">
                  123 Food Street, Bangalore, Karnataka, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p className="text-gray-600">support@foodiehub.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">🕒 Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday: 9:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
