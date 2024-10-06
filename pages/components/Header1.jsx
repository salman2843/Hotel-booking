import ReviewSection from "./Reviews"; // Import the ReviewSection component
import FAQS from "./FAQ";

const Homepage = () => {
  return (
    <div className='bg-gray-50'>
      {/* Hero Image and About Section (Already exists, not repeated) */}

      {/* Services / Amenities Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold'>Our Services</h2>
            <p className='text-gray-600 mt-4'>
              Experience the best services during your stay.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <img
                src='/images/spa.jpg'
                alt='Spa'
                className='rounded-lg shadow-lg w-full'
              />
              <h3 className='text-xl font-semibold mt-4'>Luxury Spa</h3>
              <p className='text-gray-600 mt-2'>
                Relax and rejuvenate with our exclusive spa treatments.
              </p>
            </div>
            <div className='text-center'>
              <img
                src='/images/gym.jpg'
                alt='Gym'
                className='rounded-lg shadow-lg w-full'
              />
              <h3 className='text-xl font-semibold mt-4'>Fitness Center</h3>
              <p className='text-gray-600 mt-2'>
                Stay in shape with our state-of-the-art gym facilities.
              </p>
            </div>
            <div className='text-center'>
              <img
                src='/images/pool1.jpg'
                alt='Pool'
                className='rounded-lg shadow-lg w-full'
              />
              <h3 className='text-xl font-semibold mt-4'>Infinity Pool</h3>
              <p className='text-gray-600 mt-2'>
                Relax and unwind by our stunning infinity pool with breathtaking
                views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          {/* Integrating the Review Section */}
          <ReviewSection />
        </div>
      </section>

      {/* FAQs questions */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <FAQS />
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold'>Contact Us</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-semibold'>Location</h3>
              <p className='text-gray-600 mt-2'>
                123 Luxury Stays Road, City Name, Country
              </p>
              <p className='text-gray-600'>Phone: (123) 456-7890</p>
              <p className='text-gray-600'>Email: info@luxurystays.com</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Get in Touch</h3>
              <form className='mt-4'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
                />
                <textarea
                  placeholder='Your Message'
                  className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
                  rows='4'
                ></textarea>
                <button className='bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
