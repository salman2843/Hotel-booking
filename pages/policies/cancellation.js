import React from "react";
import Link from "next/link";

const CancellationPolicy = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      {/* Back Button */}
      <Link
        href='/'
        className='text-blue-500 hover:underline mb-4 inline-block'
      >
        &lt; Back to Home
      </Link>
      <h1 className='text-3xl font-bold mb-6'>Cancellation Policy</h1>
      <p className='mb-4'>Last updated October 02, 2024</p>
      <p className='mb-4'>
        At QuickStay, we strive to provide a seamless experience for our guests.
        If you need to cancel your booking, please review our cancellation
        policy outlined below.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        1. Cancellation Timeline
      </h2>
      <p className='mb-4'>
        You may cancel your booking at any time before your scheduled arrival
        date. However, the following cancellation charges may apply:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Cancellation 48 hours or more before arrival: Full refund.</li>
        <li>Cancellation 24 hours before arrival: 50% refund.</li>
        <li>No refund for cancellations made within 24 hours of arrival.</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>2. How to Cancel</h2>
      <p className='mb-4'>
        To cancel your booking, please contact our customer service team via
        email at help.quickstay@gmail.com with your booking details. You will
        receive a confirmation email once your cancellation has been processed.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        3. Modifications to Your Booking
      </h2>
      <p className='mb-4'>
        If you wish to modify your booking (change dates, room type, etc.),
        please contact us as soon as possible. We will do our best to
        accommodate your request based on availability.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>4. Refund Processing</h2>
      <p className='mb-4'>
        Refunds will be processed back to the original payment method within
        5-10 business days after the cancellation request is confirmed. Please
        note that depending on your bank or payment provider, it may take
        additional time for the funds to appear in your account.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        5. Non-Refundable Bookings
      </h2>
      <p className='mb-4'>
        Certain promotional rates or special offers may be non-refundable.
        Please review the terms of your specific booking at the time of
        reservation.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>Contact Us</h2>
      <p className='mb-4'>
        If you have any questions about our cancellation policy, please contact
        us:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Email: help.quickstay@gmail.com</li>
      </ul>
    </div>
  );
};

export default CancellationPolicy;
