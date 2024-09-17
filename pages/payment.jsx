import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Payment = () => {
  const router = useRouter();
  const {
    roomName,
    roomPrice,
    roomDescription,
    roomRating,
    roomTotalRatings,
    roomTax,
  } = router.query;
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    if (!roomName) {
      router.push("/rooms");
    }
  }, [roomName]);

  const handlePayment = () => {
    // Add payment processing logic here
    alert(
      `Payment method: ${paymentMethod}\nRoom: ${roomName}\nPrice: ₹${roomPrice}`
    );
  };

  return (
    <div className='container mx-auto my-10 p-4'>
      <h1 className='text-3xl font-bold mb-8'>Payment Page</h1>
      {roomName && (
        <>
          <div className='mb-8 p-4 border rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              {roomName} <span className='text-yellow-400'>{roomRating}</span>
            </h2>
            <p className='text-sm text-gray-500 mb-2'>
              ({roomTotalRatings} Ratings)
            </p>
            <p className='text-lg text-gray-700 mb-4'>{roomDescription}</p>
            <div className='text-3xl font-bold text-gray-900 mb-2'>
              ₹ {roomPrice}
            </div>
            <div className='text-sm text-gray-500 mb-4'>
              + ₹ {roomTax} taxes & fees per night
            </div>
          </div>

          <div className='mb-8'>
            <h3 className='text-xl font-bold mb-4'>Select Payment Method</h3>
            <div>
              <input
                type='radio'
                id='credit-card'
                name='payment'
                value='Credit Card'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor='credit-card' className='ml-2'>
                Credit Card
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='paypal'
                name='payment'
                value='PayPal'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor='paypal' className='ml-2'>
                PayPal
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='bank-transfer'
                name='payment'
                value='Bank Transfer'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor='bank-transfer' className='ml-2'>
                Bank Transfer
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='cash'
                name='payment'
                value='Cash'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor='cash' className='ml-2'>
                Cash
              </label>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-150 ease-in-out'
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
};

export default Payment;
