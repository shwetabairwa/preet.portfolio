import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profileImage.png"; // Adjust the path according to your project structure

function Header() {
  return (
    <header className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-10 lg:px-8 flex flex-col sm:flex-row items-center">
        {/* Image Section - Will be above text on small screens */}
        <div className="sm:w-2/5 w-full flex justify-center sm:items-end mb-6 sm:mb-0 order-1 sm:order-2">
          <img
            src={profileImage}
            alt="Pooja Verma"
            className="h-3/4 w-3/4 mb-6 sm:h-3/5 sm:w-3/5 object-cover rounded-full bg-yellow-500"
          />
        </div>
        {/* Text Section */}
        <div className="sm:w-3/5 mb-8 sm:mb-0 text-center sm:text-left sm:pl-6 flex flex-col justify-center order-2 sm:order-1">
          <span className="block text-xl text-yellow-500 mb-2">
            Hello, I am
          </span>
          <h1 className="text-6xl font-bold text-gray-900 ">Pooja Verma,</h1>
          <h1 className="text-5xl font-bold text-yellow-500 uppercase leading-tight">
            Digital Marketer
          </h1>
          <p className="mt-3 sm:w-4/5 text-xs text-gray-600">
            Hi, I’m Pooja Verma, a dedicated digital marketer with a passion for
            driving growth and innovation. After spending years in traditional
            9-to-5 roles, I transitioned into digital marketing to pursue a more
            flexible and creative career. Now based in Gurugram, I focus on
            mastering the latest techniques in Google My Bussiness, social media
            management, Google Ads, and Meta Ads to help businesses thrive in
            the digital landscape.
          </p>
          <p className="mt-3 sm:w-4/5 text-xs text-gray-600">
            I specialize in creating data-driven campaigns and implementing
            online growth strategies that enhance brand visibility and foster
            meaningful connections with target audiences. My goal is to deliver
            impactful, results-oriented solutions that elevate your online
            presence and drive business success. Let’s collaborate and take your
            brand to new heights!
          </p>
          <div className="mt-8">
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
