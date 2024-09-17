import Link from "next/link";
import React from "react";

const GuestPolicy = () => {
  return (
    <div className='p-8 max-w-3xl mx-auto font-sans leading-relaxed'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>Guest Policy</h1>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          Check-In and Check-Out
        </h2>
        <p className='text-gray-600'>
          Check-in time is from 3:00 PM. Check-out time is before 11:00 AM.
          Early check-in and late check-out may be available upon request and
          subject to availability.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          Cancellation Policy
        </h2>
        <p className='text-gray-600'>
          Cancellations made 24 hours before the check-in date will receive a
          full refund. Cancellations made within 24 hours of check-in will incur
          a fee equivalent to one night's stay.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          Smoking Policy
        </h2>
        <p className='text-gray-600'>
          Our property is a non-smoking environment. Smoking is prohibited in
          all indoor areas. Designated smoking areas are provided outside.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>Pet Policy</h2>
        <p className='text-gray-600'>
          Pets are not allowed on the property, with the exception of service
          animals. Please inform us in advance if you have a service animal.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          Additional Guests
        </h2>
        <p className='text-gray-600'>
          Only registered guests are allowed to stay overnight. Any additional
          guests must be approved by the management in advance.
        </p>
      </div>

      {/* <div className='mt-6 text-center'>
        <Link href='/checkIn' className='text-blue-500 hover:underline'>
          Back to Check-In
        </Link>
      </div> */}
    </div>
  );
};

export default GuestPolicy;
