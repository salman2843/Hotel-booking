const About = () => {
  return (
    <section className='mt-10 bg-gray-50 py-10' id='about'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
          <figure className='flex-1 min-w-[30rem]'>
            <img
              src='/about.jpg'
              alt='Our team working together'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
              loading='lazy'
            />
            <figcaption className='text-center text-sm text-gray-500 mt-2'>
              Our team working together
            </figcaption>
          </figure>

          <div className='about flex-1'>
            <h3 className='text-3xl md:text-4xl font-bold text-primary mb-6'>
              About Us
            </h3>
            <p className='text-lg text-gray-700 mb-4 leading-7'>
              Welcome to Our Hotel, where luxury meets comfort and convenience.
              Our Hotel Booking System is designed to provide an exceptional
              experience for both our valued guests and dedicated hotel staff.
            </p>
            <p className='text-lg text-gray-700 mb-4 leading-7'>
              At our hotel, we believe that every stay should be memorable. Our
              intuitive online booking system allows you to effortlessly reserve
              rooms, explore our range of amenities, and enjoy a seamless
              check-in and check-out process. Whether you're planning a relaxing
              vacation or a business trip, we offer a variety of room options to
              suit your needs, including deluxe suites, standard rooms, and
              special accommodations. Our platform also provides real-time
              availability, secure payment options, and personalized service to
              ensure a smooth and enjoyable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
