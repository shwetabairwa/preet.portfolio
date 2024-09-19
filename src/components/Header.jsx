import React from "react";
import { Link } from "react-router-dom";
import profileImage1 from "../assets/images/profileImage1.png"; // Adjust the path according to your project structure

function Header() {
  return (
    <header className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-10 lg:px-8 flex flex-col sm:flex-row items-center">
        {/* Image Section - Will be above text on small screens */}
        <div className="sm:w-2/5 w-full flex justify-center sm:items-end mb-6 sm:mb-0 order-1 sm:order-2">
          <img
            src={profileImage1}
            alt="Preet Bairwa"
            className="h-3/4 w-3/4 mb-6 sm:h-4/5 sm:w-4/5 object-cover rounded-full"
          />
        </div>
        {/* Text Section */}
        <div className="sm:w-3/5 mb-8 sm:mb-0 text-center sm:text-left sm:pl-6 flex flex-col justify-center order-2 sm:order-1">
          <span className="block text-xl text-yellow-500 mb-2">
            Hello, I am
          </span>
          <h1 className="text-6xl font-bold text-gray-900">Preet Bairwa,</h1>
          <h1 className="text-6xl font-bold text-gray-900">
            Digital Marketing
          </h1>
          <p className="mt-5 text-xs text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            libero sit soluta earum laudantium, quos nisi quibusdam expedita
            assumenda quas laboriosam ad porro, quod nobis nam? Esse commodi
            illum aut!
          </p>
          <div className="mt-6">
            <a
              href="/PreetBairwa_CV.pdf"
              download
              className="px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="ml-3 px-6 py-3 border border-transparent text-lg font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
