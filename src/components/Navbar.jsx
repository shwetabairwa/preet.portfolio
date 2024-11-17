import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Logo */}
          <div className="text-xl font-bold text-yellow-500">
            <a href="/" aria-label="Home">Pooja.</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#home"
              className="text-gray-600 text-sm py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-600 text-sm py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              Services
            </a>
            <a
              href="#testimonial"
              className="text-gray-600 text-sm py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              Testimonials
            </a>
            <a
              href="#about"
              className="text-gray-600 text-sm py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
            >
              About
            </a>
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <a
              href="#hire-me"
              className="bg-yellow-500 text-gray-900 text-sm font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-yellow-600 hover:text-white"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <a
          href="#home"
          className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
        >
          Home
        </a>
        <a
          href="#services"
          className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
        >
          Services
        </a>
        <a
          href="#testimonial"
          className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
        >
          Testimonials
        </a>
        <a
          href="#about"
          className="block text-sm px-2 py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
        >
          About
        </a>
        <a
          href="#hire-me"
          className="block text-sm px-2 py-4 bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 hover:text-white transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
