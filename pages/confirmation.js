import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "./components/Layout";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ConfirmationPage = () => {
  const router = useRouter();
  const [hasSaved, setHasSaved] = useState(false); // State to track if the data has been saved
  const [bookingData, setBookingData] = useState(null); // State to hold booking details
  const [isCanceled, setIsCanceled] = useState(false); // State to track if the booking has been canceled

  useEffect(() => {
    const { bookingDetails, fullName, email, phoneNumber, paymentMethod } =
      router.query;

    if (bookingDetails && fullName && email && phoneNumber) {
      // Parse booking details from JSON string
      const parsedBookingDetails = JSON.parse(bookingDetails);

      const bookingInfo = {
        ...parsedBookingDetails,
        fullName,
        email,
        phoneNumber,
        paymentMethod,
      };

      setBookingData(bookingInfo); // Set booking data to display
    }
  }, [router.query]); // Only depend on router.query

  const handleConfirmBooking = async () => {
    if (!bookingData) return; // Ensure bookingData is available

    try {
      const response = await fetch("/api/saveBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Failed to save booking details");
      }

      const data = await response.json();
      console.log("Booking saved:", data);
      setHasSaved(true); // Set the state to indicate that data has been saved
      toast.success("Your booking is confirmed!"); // Toastify success message
    } catch (error) {
      console.error("Failed to save booking details:", error);
    }
  };

  const handleCancelBooking = async () => {
    try {
      const response = await fetch("/api/cancelBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: bookingData.email }), // Pass the email or other identifying info
      });

      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }

      alert("Your booking has been canceled.");
      setIsCanceled(true); // Set the canceled state
      setHasSaved(false); // Reset the saved state
    } catch (error) {
      console.error("Failed to cancel booking:", error);
    }
  };

  return (
    <Layout>
      <div className='container mx-auto my-10 p-4'>
        <h2 className='text-2xl font-semibold text-center'>
          Booking Confirmation
        </h2>
        {/* Display booking details if available */}
        {bookingData && (
          <div className='mt-4'>
            {/* Room Details Box */}
            <div className='bg-white p-4 border rounded shadow mb-4'>
              <h3 className='font-semibold'>Room Details</h3>
              <ul className='list-disc list-inside'>
                <li>
                  <strong>Room:</strong> {bookingData.room}
                </li>
                <li>
                  <strong>Check-In Date:</strong> {bookingData.checkInDate}
                </li>
                <li>
                  <strong>Check-Out Date:</strong> {bookingData.checkOutDate}
                </li>
                <li>
                  <strong>Guests:</strong> {bookingData.guests}
                </li>
              </ul>
            </div>

            {/* User Details Box */}
            <div className='bg-white p-4 border rounded shadow mb-4'>
              <h3 className='font-semibold'>User Details</h3>
              <p>
                <strong>Full Name:</strong> {bookingData.fullName}
              </p>
              <p>
                <strong>Email:</strong> {bookingData.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {bookingData.phoneNumber}
              </p>
            </div>

            {/* Payment Details Box */}
            <div className='bg-white p-4 border rounded shadow mb-4'>
              <h3 className='font-semibold'>Payment Details</h3>
              <p>
                <strong>Payment Method:</strong> {bookingData.paymentMethod}
              </p>
            </div>
          </div>
        )}
        {/* Confirm button */}
        {!hasSaved && !isCanceled && (
          <div className='mt-6 text-center'>
            <button
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </button>
          </div>
        )}
        {/* Cancel button */}
        {hasSaved && !isCanceled && (
          <div className='mt-6 text-center'>
            <button
              className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700'
              onClick={handleCancelBooking}
            >
              Cancel Booking
            </button>
          </div>
        )}
        {/* Display cancellation message after canceling */}
        {isCanceled && (
          <div className='mt-6 text-center'>
            <h4 className='text-lg font-semibold'>
              Your booking has been canceled.
            </h4>
          </div>
        )}
        <ToastContainer /> {/* Toastify container */}
      </div>
    </Layout>
  );
};

export default ConfirmationPage;
