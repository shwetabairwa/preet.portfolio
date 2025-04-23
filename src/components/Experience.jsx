// Experience.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

const Experience = ({ handleClose }) => {
  const experienceItems = [

    {
      icon: faBriefcase,
      title: "Digital Marketer Executive",
      date: "2024",
      institution: "Voik India",
      description:
        "Managed social media to boost brand visibility, engagement, and loyalty.Created content and ran paid campaigns across platforms to drive traffic and reach targets.Optimized strategies using performance metrics and ensured consistent messagin.",
    },
    {
      icon: faBriefcase,
      title: "Social Media Designer",
      date: "Feb-2024 - Apr-2024",
      institution: "Freelance",
      description:
        "Designed visually engaging social media graphics and storyboards for multiple clients. Created cohesive brand visuals across Instagram, Facebook, and LinkedIn using tools like Canva and Adobe Photoshop. Ensured timely delivery of creatives aligned with each brand’s voice and strategy.",
    },
    {
      icon: faBriefcase,
      title: "Social Media Marketing Specialist",
      date: "Jan-2023 - Mar-2024",
      institution: "Freelance",
      description:
        "Managed and executed content strategies for diverse brands across Instagram, LinkedIn, and Facebook. Increased audience engagement through data-driven campaigns, keyword research, and competitor analysis. Utilized tools like Meta Business Suite and Buffer for scheduling and analytics.",
    },
    {
      icon: faBriefcase,
      title: "Digital Marketing Intern",
      date: "Nov-2023 - Jan-2024",
      institution: "Freelance",
      description:
        "Assisted in planning and implementing digital marketing campaigns, including email marketing, SEO optimization, and social media engagement. Conducted market research and performance tracking using Google Analytics and SEMrush to support strategic decisions.",
    }
    
  ];

  return (
    <section
      id="experience"
      className="bg-gray-50 py-10 sm:py-16 lg:py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-2xl text-yellow-500 mt-1"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.date} / {item.institution}
                </p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={handleClose}
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faAngleUp} className="text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
