import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-[#f1ecec] to-[#0000003a] text-gray-800 ">

      <div className="container mx-auto px-20 pt-20 pb-10">
      <hr className="border-t border-gray-300 mb-8" />
        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="w-full md:w-1/2 p-6 rounded-2xl  backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="mb-2"><strong>📞 Phone:</strong> +1 (123) 456-7890</p>
            <p className="mb-2"><strong>✉️ Email:</strong> contact@supplements-store.com</p>
            <p className="mb-4"><strong>📍 Location:</strong> 123 Fit Street, Muscle City, USA</p>
            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                title="Google Map"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.6025807067!2d-74.08508114415801!3d40.64524457930083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5bdf8b1e3%3A0x80d0c0ec77b8e4f9!2sNew%20York%2C%20USA!5e0!3m2!1sen!2s!4v1617883356704!5m2!1sen!2s"
              ></iframe>
            </div>
          </div>

          {/* Links & Branding */}
          <div className="flex flex-col justify-between space-y-6 font-size-xl">
            <a href="/" className="text-2xl font-bold text-black">Get Stronger</a>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#aboutus" className="hover:underline">About</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider & Copy */}
        <hr className="border-t border-gray-300 my-6" />
        <p className="text-center text-sm text-gray-600">
          © 2023 <a href="/" className="hover:underline font-medium">Ichri Nayek</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
