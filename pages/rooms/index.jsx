import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faWifi,
  faTv,
  faUtensils,
  faSnowflake,
  faDumbbell,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import roomsData from "../Data/roomsData";
import Layout from "../components/Layout";

const RoomsList = () => {
  return (
    <Layout>
      <div className='container mx-auto my-10 p-4'>
        {roomsData.map((room) => (
          <RoomCard key={room.name} room={room} />
        ))}
      </div>
    </Layout>
  );
};

const RoomCard = ({ room }) => {
  const [bigImage, setBigImage] = useState(room.image); // Set initial big image to the room's main image

  return (
    <div className='mb-8 p-4 border rounded-lg shadow-lg'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-start'>
        <div className='relative col-span-1'>
          <Image
            src={bigImage}
            alt='Room Image'
            width={300}
            height={200}
            className='rounded-lg object-cover mb-2'
          />
          <div className='grid grid-cols-3 gap-2 mt-2'>
            {room.moreImages.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Additional Image ${idx + 1}`}
                width={100} // Set the same width for all small images
                height={100} // Set the same height for all small images
                className='rounded-lg object-cover cursor-pointer'
                onClick={() => {
                  const currentBigImage = bigImage; // Store the current big image
                  setBigImage(img); // Set the clicked small image as the big image
                  room.moreImages[idx] = currentBigImage; // Swap images in the array
                }}
              />
            ))}
          </div>
        </div>
        <RoomDetails room={room} />
        <BookingSection room={room} />
      </div>
    </div>
  );
};

const RoomDetails = ({ room }) => (
  <div className='col-span-1'>
    <h2 className='text-2xl font-bold text-gray-800 mb-2'>
      {room.name}{" "}
      <span className='text-yellow-400'>
        {Array.from({ length: room.rating }, (_, idx) => (
          <FontAwesomeIcon key={idx} icon={faStar} className='inline-block' />
        ))}
      </span>
    </h2>
    <p className='text-gray-600 text-sm mb-2'>{room.location}</p>
    <div className='inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mb-4'>
      {room.features}
    </div>
    <p className='text-lg text-gray-700 mb-4'>{room.description}</p>
    <div className='text-lg font-semibold text-gray-800 mb-4'>Facilities:</div>
    <ul className='list-none grid grid-cols-2 gap-y-2'>
      {room.facilities.map((facility, idx) => (
        <li key={idx} className='text-gray-700 flex items-center'>
          <FontAwesomeIcon
            icon={getIcon(facility.icon)}
            className='mr-2 text-blue-600'
          />
          {facility.name}
        </li>
      ))}
    </ul>
  </div>
);

const BookingSection = ({ room }) => (
  <div className='col-span-1 flex flex-col justify-between'>
    <div>
      <div className='text-blue-800 font-bold text-xl mb-1'>
        {room.ratingText}
      </div>
      <div className='text-sm text-gray-500 mb-4'>
        ({room.totalRatings} Ratings)
      </div>
      <div className='text-3xl font-bold text-gray-900 mb-2'>
        ₹ {room.price}
      </div>
      <div className='text-sm text-gray-500 mb-6'>
        + ₹ {room.tax} taxes & fees per night
      </div>
    </div>
    <Link href={`/checkIn?roomId=${room.id}`}>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>
        Book Now
      </button>
    </Link>
  </div>
);

const getIcon = (iconName) => {
  switch (iconName) {
    case "faWifi":
      return faWifi;
    case "faTv":
      return faTv;
    case "faUtensils":
      return faUtensils;
    case "faSnowflake":
      return faSnowflake;
    case "faDumbbell":
      return faDumbbell;
    case "faHouse":
      return faHouse;
    default:
      return faWifi;
  }
};

export default RoomsList;
