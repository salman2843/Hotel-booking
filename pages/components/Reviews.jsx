// "use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import reviewsData from "../Data/reviewsData";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews data from JSON file
    setReviews(reviewsData);
  }, []);

  return (
    <div className='bg-gray-100 py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-3xl font-semibold text-center mb-6 text-gray-800'>
        Customer Reviews
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }} // Custom navigation class
        modules={[Navigation]} // Import Navigation module
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className='p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between'>
              <div>
                <h3 className='text-lg font-bold text-gray-800'>
                  {review.name}
                </h3>
                <p className='text-sm text-gray-500'>{review.date}</p>
                <div className='flex items-center my-2'>
                  {[...Array(5)].map((star, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`w-5 h-5 ${
                        index < review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className='text-gray-700 mt-2'>{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className='swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='text-gray-600 text-xl hover:text-blue-600'
          />
        </div>
        <div className='swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-gray-600 text-xl hover:text-blue-600'
          />
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewSection;
