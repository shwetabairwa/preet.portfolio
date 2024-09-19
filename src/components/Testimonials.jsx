import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";


const testimonials = [
  {
    name: "Thomas Joe",
    title: "Manager Cargo",
    feedback:
      "Pellentesque tincidunt tortor dictum lobortis semper. Sed vestibulum quam est, eu sodales lacus tincidunt in. Integer accumsan consectetur scelerisque.",
  },
  {
    name: "Albert Tan",
    title: "Manager Cargo",
    feedback:
      "Pellentesque tincidunt tortor dictum lobortis semper. Sed vestibulum quam est, eu sodales lacus tincidunt in. Integer accumsan consectetur scelerisque.",
  },
  {
    name: "Donna Sely",
    title: "Manager Cargo",
    feedback:
      "Pellentesque tincidunt tortor dictum lobortis semper. Sed vestibulum quam est, eu sodales lacus tincidunt in. Integer accumsan consectetur scelerisque.",
  },
];

function Testimonials() {
  return (
    <section id="testimonial" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-xl text-yellow-500 text-center">Clients Testimonials</p>
        <h2 className="text-3xl font-bold text-gray-900 text-center">What People Say</h2>
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
                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.title}</p>
                <div className="flex justify-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-3">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
