import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faUserCheck,
  faClock,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";

function About() {
  const [showExperience, setShowExperience] = useState(false);

  const serviceItems = [
    {
      icon: faTasks,
      title: "Completed Projects",
      description: "Achieved excellence in various projects.",
    },
    {
      icon: faUserCheck,
      title: "150+ Happy Clients",
      description: "Delivering satisfaction through dedicated services.",
    },
    {
      icon: faClock,
      title: "200+ Hours of Work",
      description: "Commitment to excellence in every project.",
    },
    {
      icon: faAward,
      title: "30 Awards Won",
      description: "Recognition in the industry for outstanding work.",
    },
  ];

  const handleExperienceClick = () => {
    setShowExperience(true);
    setTimeout(() => {
      document
        .getElementById("experience")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleCloseExperience = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setShowExperience(false);
    }, 500);
  };

  return (
    <>
      <section id="about" className="bg-gray-50 py-10 sm:py-16 lg:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-10">
          <header className="sm:w-2/5 text-center sm:text-left">
            <p className="text-xl text-yellow-500 mb-2">About Me</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              What are my strongest sides and signals?
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              i’m a digital marketer who loves to help businesses grow online. I
              have experience in many different areas of digital marketing. I'm
              good at learning new things and working in a fast-paced
              environment. I'm also comfortable working in a flexible way, which
              has helped me a lot in my career.
            </p>
            <button
              onClick={handleExperienceClick}
              className="inline-block px-6 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300"
            >
              See my experiences
            </button>
          </header>
          <div className="sm:w-3/5">
            <div className="grid grid-cols-2 gap-4">
              {serviceItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-2">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-2xl text-green-500"
                  />
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="text-xs text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showExperience && <Experience handleClose={handleCloseExperience} />}
    </>
  );
}

export default About;
