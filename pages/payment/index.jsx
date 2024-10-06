import { useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import Layout from "../components/Layout";

const PaymentPage = () => {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });
  // Function to handle changes in card details
  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const [upiId, setUpiId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
  const [showText, setShowText] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (selectedPaymentMethod === "Debit/Credit Card") {
      const { cardNumber, cardHolderName, expiryDate, cvv } = cardDetails;
      if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
        alert("Please fill in all card details.");
        return;
      }
    } else if (selectedPaymentMethod === "UPI" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    const paymentSuccess =
      selectedPaymentMethod === "Pay at Hotel"
        ? true
        : /* other conditions */ true;

    if (paymentSuccess) {
      router.push({
        pathname: "/confirmation",
        query: {
          paymentMethod: selectedPaymentMethod,
          amountPaid: selectedPaymentMethod === "Pay at Hotel" ? "N/A" : price,
          bookingDetails: JSON.stringify({
            room,
            checkInDate,
            checkOutDate,
            guests,
          }),
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
        },
      });
    } else {
      alert("Payment failed. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage("");
  };

  const handleContinue = () => {
    const { fullName, email, phoneNumber } = formData;

    // Validation logic for user details
    if (!fullName || !email || !phoneNumber) {
      setErrorMessage("Please fill in all fields before continuing.");
      return;
    }

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
              <div className='p-6 border border-gray-300 rounded-lg shadow-lg bg-white'>
                <h2 className='text-xl font-semibold mb-4 text-left'>
                  Choose Payment Method
                </h2>

                <div className='relative'>
                  <div className='flex items-center'>
                    <button
                      onClick={toggleDropdown}
                      className='text-xl border border-gray-300 rounded-md p-3 flex items-center w-full justify-between'
                    >
                      {selectedPaymentMethod || "Select Payment Method"}
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform ${
                          isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
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
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className='absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
                      <ul className='py-2 text-sm text-gray-700'>
                        <li>
                          <button
                            onClick={() =>
                              handlePaymentMethodChange("Debit/Credit Card")
                            }
                            className='block w-full px-4 py-2 hover:bg-gray-100'
                          >
                            Debit/Credit Card
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handlePaymentMethodChange("UPI")}
                            className='block w-full px-4 py-2 hover:bg-gray-100'
                          >
                            UPI
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handlePaymentMethodChange("Cash")}
                            className='block w-full px-4 py-2 hover:bg-gray-100'
                          >
                            Pay At Hotel
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Payment Method Details */}
                {selectedPaymentMethod === "Debit/Credit Card" && (
                  <div className='mt-6'>
                    <h3 className='text-lg font-semibold'>
                      Enter Card Details:
                    </h3>
                    <input
                      type='text'
                      placeholder='Card Number'
                      name='cardNumber'
                      value={cardDetails.cardNumber}
                      onChange={handleCardDetailsChange}
                      className='mt-2 w-full p-3 border border-gray-300 rounded-lg'
                      maxLength={16}
                      inputMode='numeric'
                    />
                    <input
                      type='text'
                      placeholder='Card Holder Name'
                      name='cardHolderName'
                      value={cardDetails.cardHolderName}
                      onChange={handleCardDetailsChange}
                      className='mt-2 w-full p-3 border border-gray-300 rounded-lg'
                    />
                    <div className='flex space-x-4 mt-2'>
                      <input
                        type='month'
                        placeholder='Expiry Date'
                        name='expiryDate'
                        value={cardDetails.expiryDate}
                        onChange={handleCardDetailsChange}
                        className='w-1/2 p-3 border border-gray-300 rounded-lg'
                      />
                      <input
                        type='text'
                        placeholder='CVV'
                        name='cvv'
                        value={cardDetails.cvv}
                        onChange={handleCardDetailsChange}
                        className='w-1/2 p-3 border border-gray-300 rounded-lg'
                        maxLength={4}
                        inputMode='numeric'
                      />
                    </div>
                  </div>
                )}

                {selectedPaymentMethod === "UPI" && (
                  <div className='mt-6'>
                    <h3 className='text-lg font-semibold'>Enter UPI ID:</h3>
                    <input
                      type='text'
                      placeholder='UPI ID'
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className='mt-2 w-full p-3 border border-gray-300 rounded-lg'
                    />
                  </div>
                )}

                {selectedPaymentMethod === "Pay at Hotel" && (
                  <div className='mt-6'>
                    <h3 className='text-lg font-semibold'>
                      You have chosen to pay at the hotel.
                    </h3>
                    <p className='text-sm text-gray-500'>
                      You will complete the payment when you arrive at the
                      hotel.
                    </p>
                  </div>
                )}

                {/* Payment Button */}
                <div className='mt-6'>
                  <button
                    onClick={handlePayment}
                    className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 inline-flex items-center justify-center'
                  >
                    {selectedPaymentMethod
                      ? `Pay with ${selectedPaymentMethod}`
                      : "Pay Now"}
                  </button>
                </div>
              </div>
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

          {/* Add more details */}
          <div className='mb-4'>
            <h2 className='text-xl font-bold mb-2'>Room Amenities</h2>
            <ul className='list-disc list-inside text-gray-600'>
              <li>Free Wi-Fi</li>
              <li>Breakfast Included</li>
              <li>Air Conditioning</li>
              <li>Television</li>
              <li>24/7 Room Service</li>
            </ul>
          </div>

          <div className='mb-4'>
            <h2 className='text-xl font-bold mb-2'>Payment Summary</h2>
            <div className='text-gray-600'>
              <p>Total: ₹{originalPrice}</p>

              <p>Room Price: ₹ {price}</p>
            </div>
          </div>

          <div className='mb-4'>
            <h2 className='text-xl font-bold mb-2'>Hotel Policies</h2>
            <p className='text-gray-600'>
              Check-in after 2:00 PM | Check-out before 12:00 PM. Free
              cancellation up to 24 hours before check-in.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
