import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faSnowflake,
  faWifi,
  faTv,
  faBatteryFull,
  faShower,
  faElevator,
} from "@fortawesome/free-solid-svg-icons";
import roomsData from "./api/Data/roomsData";
import Layout from "./api/components/Layout";
import Link from "next/link";
import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const facilities = [
  { name: "AC", icon: faSnowflake },
  { name: "Free Wifi", icon: faWifi },
  { name: "TV", icon: faTv },
  { name: "Power backup", icon: faBatteryFull },
  { name: "Geyser", icon: faShower },
  { name: "Elevator", icon: faElevator },
];

const CheckIn = () => {
  const router = useRouter();
  const { roomId } = router.query;
  const [room, setRoom] = useState(null);
  const [guests, setGuests] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const discountPercentage = 20;

  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));

  useEffect(() => {
    if (roomId) {
      const foundRoom = roomsData.find((room) => room.id === roomId);
      setRoom(foundRoom);
    }
  }, [roomId]);

  const handleCheckInDateChange = (newValue) => {
    setCheckInDate(newValue);
    setCheckOutDate(dayjs(newValue).add(1, "day"));
  };

  if (!room) return <p>Loading...</p>;

  return (
    <Layout>
      <div className='container mx-auto my-10 p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='relative'>
            <Swiper
              direction='horizontal'
              spaceBetween={10}
              slidesPerView={1}
              navigation
              className='w-full'
            >
              {[room.image, ...room.moreImages].map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className='w-full h-[428px] flex items-center justify-center'>
                    <Image
                      src={img}
                      alt={`Image ${idx + 1}`}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='flex flex-col justify-between'>
            <div>
              <h2 className='text-2xl font-semibold text-green-600'>
                ₹{room.discountedPrice}{" "}
                <span className='text-lg text-gray-500 line-through ml-2'>
                  ₹{room.originalPrice}
                </span>
                <span className='discount-percentage text-orange-400 text-sm'>
                  ({discountPercentage}% off)
                </span>
              </h2>
              <h1 className='text-2xl font-bold'>{room.name}</h1>
              <p className='text-lg mt-2'>{room.description}</p>
              <div className='mt-4'>
                <h2 className='text-xl font-semibold'>Amenities</h2>
                <div className='mt-2 grid grid-cols-2 gap-4'>
                  {facilities.map((facility, idx) => (
                    <div key={idx} className='flex items-center'>
                      <FontAwesomeIcon icon={facility.icon} className='mr-2' />
                      <span>{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='inline-flex items-center mt-4 border border-gray-300 p-4 rounded-md space-x-4'>
              {/* Date Selection using MUI DatePicker */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='flex items-center space-x-4'>
                  <DatePicker
                    label='Check-in'
                    value={checkInDate}
                    onChange={handleCheckInDateChange}
                    renderInput={(params) => (
                      <input
                        {...params}
                        className='w-28 p-2 border border-gray-300 rounded-md'
                      />
                    )}
                  />
                  <DatePicker
                    label='Check-out'
                    value={checkOutDate}
                    onChange={(newValue) => setCheckOutDate(newValue)}
                    renderInput={(params) => (
                      <input
                        {...params}
                        className='w-28 p-2 border border-gray-300 rounded-md'
                      />
                    )}
                  />
                </div>
              </LocalizationProvider>

              {/* Guests Selection */}
              <div className='relative'>
                <span
                  className='cursor-pointer text-blue-500 border p-2 rounded-md'
                  onClick={() => setShowGuestPopup(!showGuestPopup)}
                >
                  {guests} Guest
                </span>
                {showGuestPopup && (
                  <div className='absolute bottom-full left-0 mb-2 w-40 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
                    <div className='flex items-center justify-between'>
                      <button
                        className='px-2 py-1 bg-gray-200 text-gray-700 rounded-l'
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                      >
                        -
                      </button>
                      <span className='px-4 py-1 bg-gray-100 text-gray-700 border'>
                        {guests}
                      </span>
                      <button
                        className='px-2 py-1 bg-gray-200 text-gray-700 rounded-r'
                        onClick={() => setGuests(Math.min(4, guests + 1))}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className='mt-2 text-red-500 text-sm'
                      onClick={() => setShowGuestPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className='mt-6 text-left'>
              <button className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'>
                Continue to Book
              </button>
            </div>

            <div className='mt-4 flex items-center relative'>
              <span className='text-red-500 font-semibold mr-2'>
                Cancellation Policy
              </span>
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='text-gray-400 cursor-pointer'
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-2 bg-white border border-gray-300 rounded shadow-md'>
                  <ul className='text-left text-sm'>
                    <li>
                      For cancellation done prior 9 AM on 4 September, 100%
                      Refundable
                    </li>
                    <li>
                      For cancellation done post 9 AM on 4 September, Non
                      Refundable
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Popup for Safety Measures */}
            <a
              href='#'
              className='mt-4 text-red-500 cursor-pointer'
              onClick={(e) => {
                e.preventDefault();
                setShowPopup(true);
              }}
            >
              Follow safety measures advised at the hotel
            </a>
            {showPopup && (
              <div className='fixed right-0 top-0 w-1/3 h-full bg-white border border-gray-300 shadow-lg z-50'>
                <div className='relative p-4'>
                  <span
                    className='absolute top-2 right-2 text-gray-500 cursor-pointer text-2xl'
                    onClick={() => setShowPopup(false)}
                  >
                    &times;
                  </span>
                  <h3 className='text-lg font-semibold'>Safety Measures</h3>
                  {/* Safety Do's and Don'ts */}
                  <div className='mt-4'>
                    <h4 className='text-md font-semibold'>Do's:</h4>
                    <ul className='list-disc ml-6 mt-2'>
                      <li>
                        Maintain a distance of at least 6 feet from others.
                      </li>
                      <li>Wear a mask in public areas.</li>
                      <li>Sanitize your hands frequently.</li>
                      <li>Report any symptoms to hotel staff immediately.</li>
                    </ul>
                    <h4 className='text-md font-semibold mt-4'>Don'ts:</h4>
                    <ul className='list-disc ml-6 mt-2'>
                      <li>Gather in large groups in confined areas.</li>
                      <li>Ignore any symptoms of illness or discomfort.</li>
                      <li>Share utensils or personal items with others.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <div className='mt-1 flex items-center relative'>
              <p className='font-semibold mr-2 pointer'>
                By proceeding, you agree to our
              </p>
              <Link href='./guestPolicy' className=' font-semibold mr-2'>
                <span className='text-red-700'> Guest Policies.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckIn;
