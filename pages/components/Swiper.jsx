import React from "react";
import Link from "next/link"; // Import Link for navigation
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <section className='relative '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Link href='/rooms'>
            <img
              src='/images/home-slide1.jpg'
              alt='Luxurious hotel room view 1'
              className='w-full h-auto max-h-[500px] object-cover border-4 border-gray-300 shadow-lg rounded-lg'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/rooms'>
            <img
              src='/images/home-slide2.jpg'
              alt='Luxurious hotel room view 4'
              className='w-full h-auto max-h-[500px] object-cover border-4 border-gray-300 shadow-lg rounded-lg'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/rooms'>
            <img
              src='/images/home-slide3.jpg'
              alt='Luxurious hotel room view 2'
              className='w-full h-auto max-h-[500px] object-cover border-4 border-gray-300 shadow-lg rounded-lg'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/rooms'>
            <img
              src='/images/home-slide4.jpg'
              alt='Luxurious hotel room view 3'
              className='w-full h-auto max-h-[500px] object-cover border-4 border-gray-300 shadow-lg rounded-lg'
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
