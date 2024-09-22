import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Swal from 'sweetalert2';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
const handleSubmit=(e)=>{
e.preventDefault()
Swal.fire({
    title: "Thank you!",
    text: "Our support team will review your case and reach out to you as soon as possible ",
    icon: "success"
  });

  e.target.reset()


}


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-6 py-3">
          <h1 className="text-2xl font-bold text-teal-600">About Us</h1>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full px-4 py-2 rounded-full border-2 border-teal-300 focus:outline-none focus:border-teal-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute right-3 top-3 text-teal-400" />
              </div>
            </div>

            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-teal-700 hover:text-teal-900 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-teal-50 text-teal-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/3">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="/faq.jpg"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Submit Your Question</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-teal-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-teal-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="question" className="block text-teal-700 font-semibold mb-2">Question</label>
              <textarea
                id="question"
                rows="4"
                className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Question"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">Share this FAQ</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/takibul.hassan.56" target='_blank' className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a target='_blank' href="https://github.com/Mirza2018" className="text-blue-700 hover:text-blue-900 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

const faqData = [
    {
      question: 'What services do We offer?',
      answer: 'We offer a Bangladesh of Cash on delivery and services , In world wide you have to pay al least 50% '
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team via email at web.takib@gmail.com or by phone at +8801707139055.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Our business hours are Monday to Friday, 9:00 AM to 5:00 PM.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all our products and services.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location. Typically, domestic orders take 3-5 business days, while international orders may take 7-14 business days.'
    }
  ];