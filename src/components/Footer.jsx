import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 ">
          {/* Column 1 */}
          <div className="w-full sm:col-span-2  mb-4 sm:mb-0">
            <h2 className="text-xl font-bold mb-2 text-yellow-500">Preet.</h2>
            <p className="text-gray-400 mb-4 text-xs w-3/5">
              iOS devices come in a variety of screen sizes and can be used in
              either portrait or landscape orientation.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/share/fuzGLj2MSPGkKEjh/?mibextid=qi2Omg" className="text-white  hover:text-yellow-400 text-xl">
                <i className="fab fa-facebook-f "></i>
              </a>
              <a href="https://www.instagram.com/thepreetbairwa/" className="text-white  hover:text-yellow-400 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/poojavermaa09/" className="text-white  hover:text-yellow-400 text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white  hover:text-yellow-400 text-xl">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:col-span-1 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold mb-2">Usefull Links</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white text-xs"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="text-gray-400 hover:text-white text-xs"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white text-xs"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}

          <div className="w-full sm:col-span-1 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold mb-2">Privacy & Term</h2>
            <ul>
              <li>
                <a  className="text-gray-400 hover:text-white text-xs">
                  Community
                </a>
              </li>
              <li>
                <a  className="text-gray-400 hover:text-white text-xs">
                  Guidelines
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-xs">
                  Terms
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-xs">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full sm:col-span-1 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact us</h2>
            <ul>
              <li>
                <a  className="text-gray-400 hover:text-white text-xs">
                  +91-8696983866
                </a>
              </li>
              <li>
                <a  className="text-gray-400 hover:text-white text-xs">
                  poojaverma887778@gmail.com
                </a>
              </li>
              <li>
                <a  className="text-gray-400 hover:text-white text-xs">
                  Gurugram,Haryana
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white text-xs"
                >
                  Contact Form
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
        </div>
        {/* end grid */}
      </div>
      {/* end container */}
      {/* Copyright section */}
      <div className="border-t border-gray-600 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400 pt-4">
          <p>&copy; 2024 the code journey Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
