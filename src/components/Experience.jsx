// Experience.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Experience = ({ handleClose }) => {
  const experienceItems = [
    {
      icon: faGraduationCap,
      title: "Computer Science",
      date: "2007 - 2011",
      institution: "Harvard University",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: faBriefcase,
      title: "UI/UX Designer",
      date: "2012 - 2015",
      institution: "Freelance",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: faGraduationCap,
      title: "Bachelor Degree",
      date: "2011 - 2012",
      institution: "Harvard University",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: faBriefcase,
      title: "Full Stack Developer",
      date: "2015 - 2021",
      institution: "Freelance",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section id="experience" className="bg-gray-50 py-10 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Experience & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <FontAwesomeIcon icon={item.icon} className="text-2xl text-yellow-500 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date} / {item.institution}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button onClick={handleClose} className="text-gray-700 hover:text-gray-900 transition duration-300">
            <FontAwesomeIcon icon={faAngleUp} className="text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
