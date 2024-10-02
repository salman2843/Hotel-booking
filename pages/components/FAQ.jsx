// FAQ.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "How can I make a reservation?",
    answer:
      "You can make a reservation through our website by selecting your desired dates and room type, and then following the booking process. You will receive a confirmation email once your reservation is complete.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your reservation up to 24 hours before your scheduled check-in time for a full refund. Cancellations made after this period may incur a fee depending on the terms of your booking.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer:
      "We do not allow pets in our hotel to ensure the comfort and safety of all our guests. However, we do offer assistance for service animals.",
  },
  {
    question: "What amenities are included in the room rate?",
    answer:
      "Room rates include access to our fitness center, swimming pool, and Wi-Fi. Additional amenities such as spa treatments or room service are available for an extra charge.",
  },
  {
    question: "Do you offer airport shuttle services?",
    answer:
      "Yes, we offer airport shuttle services for an additional fee. Please contact our front desk to arrange transportation.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=' bg-white py-12'>
      <div className='FAQ container mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-gray-300 rounded-lg shadow-sm'
            >
              <button
                onClick={() => toggleQuestion(index)}
                className='w-full px-4 py-2 text-left bg-gray-100 rounded-t-lg focus:outline-none'
              >
                <h3 className='text-lg font-semibold'>{faq.question}</h3>
              </button>
              {openIndex === index && (
                <div className='px-4 py-2'>
                  <p className='text-gray-700'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
