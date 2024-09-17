// Reviews.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

const reviews = [
  {
    name: "Anand",
    review:
      "An amazing stay! The room was comfortable, and the service was excellent. Highly recommended!",
    rating: 5,
  },
  {
    name: "Piyush",
    review:
      "Great experience! The amenities were top-notch, and the booking process was smooth.",
    rating: 4,
  },
  {
    name: "Dhurv",
    review:
      "Very pleasant stay. The staff was friendly, and the facilities were clean and well-maintained.",
    rating: 4,
  },
  {
    name: "Rithvik",
    review:
      "I enjoyed my stay. The hotel exceeded my expectations with its comfort and service.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className='reviews bg-gray-100 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>
          What Our Guests Say
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className='mySwiper'
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <p className='text-lg font-semibold mb-2'>{review.name}</p>
                <p className='text-gray-700 mb-4'>{review.review}</p>
                <div className='flex items-center'>
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5 text-yellow-400'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2.25l2.428 4.926 5.438.789-3.934 3.827.93 5.416L12 13.773l-4.862 2.565.93-5.416-3.934-3.827 5.438-.789L12 2.25z' />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
