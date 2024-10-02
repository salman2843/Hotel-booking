import { useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import Layout from "../components/Layout";

const PaymentPage = () => {
  const router = useRouter();
  const {
    room,
    originalPrice, // This will be a string
    price, // This will be a string
    description,
    checkInDate,
    checkOutDate,
    guests,
  } = router.query;

  const formattedCheckInDate = dayjs(checkInDate).format("ddd, DD MMM");
  const formattedCheckOutDate = dayjs(checkOutDate).format("ddd, DD MMM");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [showText, setShowText] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Clear error message when user starts typing
  };

  const handleContinue = () => {
    // Validation logic
    const { fullName, email, phoneNumber } = formData;
    if (!fullName || !email || !phoneNumber) {
      setErrorMessage("Please fill in all fields before continuing.");
      return;
    }

    // Email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitted(true);
  };

  const handleModify = () => {
    setIsSubmitted(false);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown open state
    setShowText(!isDropdownOpen); // Show text only when dropdown is open
  };

  return (
    <Layout>
      <div className='container mx-auto my-10 p-4 flex justify-center'>
        {/* Main container */}
        <div className='w-full md:w-2/3 p-6 border border-gray-300 rounded-lg shadow-lg'>
          {!isSubmitted ? (
            // User Information Form
            <>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                Your details
              </h3>
              <p>We will use these details to share your booking information</p>{" "}
              <br />
              {errorMessage && (
                <p className='text-red-500 text-center mb-4'>{errorMessage}</p>
              )}
              <div className='space-y-3'>
                <div>
                  <label
                    htmlFor='fullName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder='Enter your first and last name'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='name@abc.com'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phoneNumber'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Mobile Number
                  </label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder='eg. 1234567890'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    pattern='[0-9]{10}'
                  />
                </div>

                <button
                  onClick={handleContinue}
                  className='mt-4 w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300'
                >
                  Continue
                </button>
              </div>
            </>
          ) : (
            // Display entered information with a modify button and payment options
            <>
              <h2 className='text-2xl font-semibold mb-4 text-center'>
                Review Your Information
              </h2>
              <div className='p-4 border border-gray-300 rounded-lg  mb-4'>
                <div className=' p-4 rounded-lg shadow-md'>
                  <div className='mb-4'>
                    <div className='flex justify-end mb-2'>
                      <span
                        onClick={handleModify}
                        className='text-red-600 underline cursor-pointer hover:text-red-700 transition duration-300'
                      >
                        Modify Information
                      </span>
                    </div>
                    <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                      Your details
                    </h3>

                    <div className='bg-gray-100 p-2 border border-gray-300 rounded-lg'>
                      <p className='text-2px flex justify-between'>
                        <span>{formData.fullName}</span> |
                        <span>{formData.email}</span> |
                        <span>{formData.phoneNumber}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Method Section */}
              <h2 className='text-xl font-semibold mb-4 text-left'>
                Choose payment method to pay
              </h2>
              <p>100% safe and secure payments</p> <br />
              <div>
                <div className='flex items-center'>
                  <button
                    onClick={toggleDropdown}
                    className='text-xl border border-gray-300 rounded-md p-3 flex items-center'
                  >
                    {selectedPaymentMethod || "Pay At Hotel"}
                    <svg
                      className='w-2.5 h-2.5 ms-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 10 6'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 5l4-4 4 4'
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <span className='ml-4 text-lg text-gray-600'>
                      No payment needed
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={toggleDropdown}
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
              >
                {selectedPaymentMethod || "Pay Now"}
                <svg
                  className='w-2.5 h-2.5 ms-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className='z-10 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow'>
                  <ul className='py-2 text-sm text-gray-700'>
                    <li>
                      <button
                        onClick={() =>
                          handlePaymentMethodChange("Debit/Credit Card")
                        }
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        Debit/Credit Card
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handlePaymentMethodChange("UPI")}
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        UPI
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handlePaymentMethodChange("Net Banking")}
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        Net Banking
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {/* Payment Details Section based on selected payment method */}
              {selectedPaymentMethod === "Debit/Credit Card" && (
                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>Enter Card Details:</h3>
                  <input
                    type='text'
                    placeholder='Card Number'
                    className='mt-2 w-full p-2 border border-gray-300 rounded-lg'
                  />
                  <input
                    type='text'
                    placeholder='Card Holder Name'
                    className='mt-2 w-full p-2 border border-gray-300 rounded-lg'
                  />
                  <input
                    type='text'
                    placeholder='Expiry Date (MM/YY)'
                    className='mt-2 w-full p-2 border border-gray-300 rounded-lg'
                  />
                  <input
                    type='text'
                    placeholder='CVV'
                    className='mt-2 w-full p-2 border border-gray-300 rounded-lg'
                  />
                </div>
              )}
              {selectedPaymentMethod === "UPI" && (
                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>Enter UPI ID:</h3>
                  <input
                    type='text'
                    placeholder='UPI ID'
                    className='mt-2 w-full p-2 border border-gray-300 rounded-lg'
                  />
                </div>
              )}
              {selectedPaymentMethod === "Net Banking" && (
                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>Choose Bank:</h3>
                  <select className='mt-2 w-full p-2 border border-gray-300 rounded-lg'>
                    <option value=''>Select your bank</option>
                    <option value='bank1'>Bank 1</option>
                    <option value='bank2'>Bank 2</option>
                    <option value='bank3'>Bank 3</option>
                    {/* Add more banks as needed */}
                  </select>
                </div>
              )}
            </>
          )}
        </div>

        {/* Room Details (Right Side) */}
        <div className='w-1/2 p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-50 ml-6 hidden md:block'>
          <h1 className='text-2xl font-bold mb-4'>{room}</h1>
          <div className='mb-4'>
            <p className='text-gray-600'>{description}</p>
            <p>
              {formattedCheckInDate} - {formattedCheckOutDate} | {guests}{" "}
              Guest(s)
            </p>
            <h3 className='text-lg font-semibold'>Price: ₹ {originalPrice}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
