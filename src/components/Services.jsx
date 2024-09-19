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
              Social Media Marketing
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              Grow your brand's presence on social media platforms Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Corrupti illo
              voluptatibus amet alias maiores soluta quibusdam fugit culpa
              exercitationem ad?
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img
                src={img2}
                alt="Market Analysis"
                className="h-12 sm:h-10 "
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Market Analysis
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              Detailed market insights to drive your business strategy. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              eligendi repellat molestias expedita autem ad voluptas magnam
              consequuntur libero enim!
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img
                src={img4}
                alt="SEO Consultancy"
                className="h-12 sm:h-10"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              SEO Consultancy
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              Optimize your website to rank higher on search engines. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Libero
              asperiores, vel tenetur nesciunt aut ipsam at cum quisquam
              voluptate itaque.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-start mb-4">
              <img
                src={img3}
                alt="Page Ranking"
                className="h-12 sm:h-10"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Page Ranking
            </h3>
            <p className="mt-2 text-gray-600 text-xs">
              Improve your page ranking to attract more traffic. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Earum rem soluta
              quibusdam accusamus tempora animi assumenda laudantium sequi iusto
              deserunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
