import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Amit Kumar",
    title: "Founder:Eazy Pizy",
    feedback:
      "Pooja is a digital marketing powerhouse. Her attention to detail and data-driven strategies helped us significantly increase our online visibility. She’s not just creative but also highly organized and result-oriented.",
  },
  {
    name: "Dilkhush Bairwa",
    title: "Owner: DK Builders",
    feedback:
      "Working with Pooja was a game changer for our social media presence. Her innovative ideas and quick execution allowed us to connect with our audience in ways we hadn’t imagined.",
  },
  {
    name: "Chirag Singal",
    title: "Owner: fortune safety industries",
    feedback:
      "Pooja’s SEO expertise helped us rank higher in search results, which boosted our web traffic and sales. She’s a reliable, insightful partner who truly understands the digital marketing landscape."
  },
];

function Testimonials() {
  return (
    <section id="testimonial" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-xl text-yellow-500 text-center">
          Clients Testimonials
        </p>
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What People Say
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 bg-green-500 text-white p-2 rounded-bl-lg">
                <FontAwesomeIcon icon={faQuoteRight} className="text-2xl" />
              </div>
              <div className="text-center">
                <p className="text-gray-900 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-600">{testimonial.title}</p>
                <div className="flex justify-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
