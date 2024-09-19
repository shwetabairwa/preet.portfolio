import React, { useState } from "react";
import ContactForm from "./ContactForm";

function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-5 text-xl text-yellow-500">Get Connected</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Interested in working with me? Let's connect!
          </h2>
          <p className="mt-5 mb-8 text-sm sm:text-center sm:pr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            libero sit soluta earum laudantium, quos nisi quibusdam expedita
            assumenda quas laboriosam ad porro, quod nobis nam? Esse commodi
            illum aut!
          </p>
          <div className="mt-8">
            <button
              onClick={handleButtonClick}
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {showForm && <ContactForm onClose={handleCloseClick} />}
    </section>
  );
}

export default Contact;
