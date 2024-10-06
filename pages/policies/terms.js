import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      {/* Back Button */}
      <Link
        href='/'
        className='text-blue-500 hover:underline mb-4 inline-block'
      >
        &lt; Back to Home
      </Link>
      <h1 className='text-3xl font-bold mb-6'>Terms and Conditions</h1>
      <p className='mb-4'>Last updated October 02, 2024</p>
      <p className='mb-4'>
        Welcome to QuickStay! These Terms and Conditions outline the rules and
        regulations for the use of QuickStay's Services.
      </p>
      <p className='mb-4'>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use QuickStay if you do not agree to take
        all of the terms and conditions stated on this page.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>1. Introduction</h2>
      <p className='mb-4'>
        These Terms govern your use of our Services. If you do not agree with
        these Terms, you must not use our Services.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        2. User Responsibilities
      </h2>
      <p className='mb-4'>As a user of our Services, you agree to:</p>
      <ul className='list-disc list-inside mb-4'>
        <li>
          Provide accurate and complete information during registration and use
          of the Services.
        </li>
        <li>Use the Services for lawful purposes only.</li>
        <li>
          Not engage in any conduct that restricts or inhibits anyone's use or
          enjoyment of the Services.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        3. Intellectual Property
      </h2>
      <p className='mb-4'>
        The Services and their original content, features, and functionality are
        and will remain the exclusive property of QuickStay and its licensors.
        The Services are protected by copyright, trademark, and other laws.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        4. Links to Other Websites
      </h2>
      <p className='mb-4'>
        Our Service may contain links to third-party websites or services that
        are not owned or controlled by QuickStay. QuickStay has no control over,
        and assumes no responsibility for, the content, privacy policies, or
        practices of any third-party websites or services.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        5. Limitation of Liability
      </h2>
      <p className='mb-4'>
        In no event shall QuickStay, nor its directors, employees, partners,
        agents, suppliers, or affiliates, be liable for any indirect,
        incidental, special, consequential, or punitive damages, including
        without limitation, loss of profits, data, use, goodwill, or other
        intangible losses, resulting from:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>
          Your access to or use of, or inability to access or use, our Services.
        </li>
        <li>Any conduct or content of any third party on the Services.</li>
        <li>Any content obtained from the Services.</li>
        <li>
          Unauthorized access, use, or alteration of your transmissions or
          content.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        6. Changes to These Terms
      </h2>
      <p className='mb-4'>
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. If we make changes, we will provide notice by
        revising the "Last updated" date at the top of this page.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>7. Governing Law</h2>
      <p className='mb-4'>
        These Terms shall be governed by and construed in accordance with the
        laws of [Your Location], without regard to its conflict of law
        provisions.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>Contact Us</h2>
      <p className='mb-4'>
        If you have any questions about these Terms, please contact us:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Email: help.quickstay@gmail.com</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
