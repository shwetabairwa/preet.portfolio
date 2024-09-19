import React, { useState } from 'react';

function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFeedbackMessage('');

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFeedbackMessage('Email sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setFeedbackMessage('Failed to send email');
            }
        } catch (error) {
            setFeedbackMessage('Error sending email');
        } finally {
            setIsLoading(false);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-6">
                <h3 className="text-lg md:text-xl font-bold mb-4">Contact Form</h3>
                {feedbackMessage && (
                    <div className={`mb-4 text-sm ${feedbackMessage.startsWith('Error') || feedbackMessage.startsWith('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                        {feedbackMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md text-sm"
                            aria-label="Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md text-sm"
                            aria-label="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md text-sm"
                            aria-label="Message"
                            rows="4"
                            required
                        ></textarea>
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
                            className={`w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
