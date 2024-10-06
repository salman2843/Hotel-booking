import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      {/* Back Button */}
      <Link
        href='/'
        className='text-blue-500 hover:underline mb-4 inline-block'
      >
        &lt; Back to Home
      </Link>
      <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>
      <p className='mb-4'>Last updated October 02, 2024</p>
      <p className='mb-4'>
        This Privacy Policy for QuickStay ("we," "us," or "our") describes how
        and why we might access, collect, store, use, and/or share ("process")
        your personal information when you use our services ("Services"),
        including when you:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>
          Visit our website at quickstay.com, or any website of ours that links
          to this Privacy Policy.
        </li>
        <li>
          Engage with us in other related ways, including any sales, marketing,
          or events.
        </li>
      </ul>
      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        Questions or Concerns?
      </h2>
      <p className='mb-4'>
        Reading this Privacy Policy will help you understand your privacy rights
        and choices. We are responsible for making decisions about how your
        personal information is processed. If you do not agree with our policies
        and practices, please do not use our Services. If you still have any
        questions or concerns, please contact us at help.quickstay@gmail.com.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        1. What Information Do We Collect?
      </h2>
      <h3 className='font-semibold mb-2'>
        Personal Information You Disclose to Us
      </h3>
      <p className='mb-4'>
        In Short: We collect personal information that you provide to us.
      </p>
      <p className='mb-4'>
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us. This
        may include:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Names</li>
        <li>Phone numbers</li>
        <li>Email addresses</li>
        <li>Mailing addresses</li>
        <li>Usernames</li>
        <li>Passwords</li>
        <li>Contact preferences</li>
        <li>Debit/credit card numbers</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        2. How Do We Process Your Information?
      </h2>
      <p className='mb-4'>
        We process your information to provide, improve, and administer our
        Services, communicate with you, and for other business purposes. This
        includes:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Creating and managing your account.</li>
        <li>Processing your transactions and managing your bookings.</li>
        <li>Providing customer support and responding to your inquiries.</li>
        <li>Sending you updates about your account or our Services.</li>
        <li>
          Sending marketing communications that may be of interest to you.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        3. When and With Whom Do We Share Your Personal Information?
      </h2>
      <p className='mb-4'>
        We may share your personal information in the following situations:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>
          With service providers: We may share your personal information with
          service providers to monitor and analyze the use of our Services.
        </li>
        <li>
          For business transfers: We may share or transfer your personal
          information in connection with, or during negotiations of, any merger,
          sale of company assets, financing, or acquisition of all or a portion
          of our business to another company.
        </li>
        <li>
          With affiliates: We may share your information with our affiliates, in
          which case we will require those affiliates to honor this Privacy
          Policy.
        </li>
        <li>
          With your consent: We may disclose your personal information for any
          other purpose with your consent.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        4. How Long Do We Keep Your Information?
      </h2>
      <p className='mb-4'>
        We will retain your personal information only for as long as is
        necessary for the purposes set out in this Privacy Policy. We will
        retain and use your personal information to the extent necessary to
        comply with our legal obligations, resolve disputes, and enforce our
        legal agreements and policies.
      </p>
      <p className='mb-4'>
        The retention period for personal data may vary based on the type of
        information and the purpose for which it was collected. We periodically
        review the data we hold to ensure we do not retain it longer than
        necessary.
      </p>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>
        5. What Are Your Privacy Rights?
      </h2>
      <p className='mb-4'>
        Depending on your location, you may have the following rights regarding
        your personal information:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>
          The right to access: You have the right to request copies of your
          personal information.
        </li>
        <li>
          The right to rectification: You have the right to request that we
          correct any information you believe is inaccurate.
        </li>
        <li>
          The right to erasure: You have the right to request that we erase your
          personal information, under certain conditions.
        </li>
        <li>
          The right to restrict processing: You have the right to request that
          we restrict the processing of your personal information, under certain
          conditions.
        </li>
        <li>
          The right to data portability: You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-4 mb-4'>Contact Us</h2>
      <p className='mb-4'>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Email: help.quickstay@gmail.com</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
