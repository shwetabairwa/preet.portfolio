import React, { useState } from 'react';

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedbackMessage('');

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setFeedbackMessage('Message submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFeedbackMessage('Failed to submit message. Try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFeedbackMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
      onClose(); // Remove this if you want to keep the form open after submit
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-6">
        <h3 className="text-lg md:text-xl font-bold mb-4">Contact Form</h3>
        {feedbackMessage && (
          <div
            className={`mb-4 text-sm ${
              feedbackMessage.includes('success')
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {feedbackMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md text-sm"
              rows="4"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="w-full md:w-auto px-4 py-2 bg-gray-300 text-gray-700 rounded-md mb-2 md:mb-0 md:mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded-md ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
