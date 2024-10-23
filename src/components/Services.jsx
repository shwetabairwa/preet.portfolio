import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.png";

function Services() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-xl text-yellow-500 text-center">
          What the special
        </p>
        <h2 className="text-3xl font-bold text-gray-900  text-center">
          Want to boost your business growth?
        </h2>
        <h2 className="text-3xl font-bold text-gray-900  text-center">
          Solution is here.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img
                src={img1}
                alt="Social Media Marketing"
                className="h-12  sm:h-10 "
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Social Media Management
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              With expertise in social media management, I help brands cultivate
              a strong online presence by developing and executing engaging
              content strategies. I focus on building community interactions and
              fostering customer relationships to enhance brand loyalty
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img src={img2} alt="Market Analysis" className="h-12 sm:h-10 " />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Digital Marketing
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              As a digital marketer, I employ data-driven strategies to enhance
              brand visibility and drive growth across various online channels.
              My focus is on creating tailored campaigns that resonate with
              target audiences, ultimately leading to increased engagement and
              sales.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img src={img4} alt="SEO Consultancy" className="h-12 sm:h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Google My Business / Local Business
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              I optimize Google My Business listings for local businesses,
              enhancing their visibility in local searches. By managing customer
              reviews and providing accurate business information, I help
              businesses attract more foot traffic and increase customer
              engagement.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img src={img3} alt="Page Ranking" className="h-12 sm:h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Web Designing / Web Development:
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              With a strong foundation in web design and development, I create
              visually appealing and responsive websites tailored to user needs.
              My approach emphasizes user experience and functionality, ensuring
              seamless navigation and effective communication of brand
              messaging.
            </p>
          </div>
          {/* <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img src={img4} alt="SEO Consultancy" className="h-12 sm:h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
            Meta Ads:
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              In managing Meta Ads, I focus on reaching audiences on
              platforms like Facebook and Instagram. My strategy involves
              crafting engaging ad creatives and targeting specific demographics
              to enhance brand visibility and drive sales.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img src={img3} alt="Page Ranking" className="h-12 sm:h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Google Ads:</h3>
            <p className="mt-2 text-gray-600 text-xs">
              I specialize in managing Google Ads campaigns that maximize ROI
              through targeted advertising. By employing keyword research and
              audience segmentation, I create compelling ads that drive relevant
              traffic and conversions.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Services;