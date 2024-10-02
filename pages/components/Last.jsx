import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-300 py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-10'>
        {/* About Us Section */}
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>About Us</h3>
          <p className='text-sm'>
            Welcome to our hotel booking service, where luxury meets
            convenience. We strive to provide the best experience for our guests
            with modern amenities, 24/7 support, and easy booking options.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>
            Contact Info
          </h3>
          <ul className='space-y-3'>
            <li className='flex items-center'>
              {/* <FontAwesomeIcon icon={faPhone} className='mr-3 text-sm' /> */}
              <span>+91-1234567890</span>
            </li>
            <li className='flex items-center'>
              {/* <FontAwesomeIcon icon={faEnvelope} className='mr-3 text-sm' /> */}
              <span>support@hotelbooking.com</span>
            </li>
            <li className='flex items-center'>
              {/* <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-3 text-sm' /> */}
              <span>New Delhi, India</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Quick Links</h3>
          <ul className='space-y-3'>
            <li>
              <a href='#' className='hover:text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Rooms
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Facilities
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Policies */}
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Follow Us</h3>
          <div className='flex space-x-4 mb-6'>
            <a href='#' className='hover:text-white text-lg'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href='#' className='hover:text-white text-lg'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='#' className='hover:text-white text-lg'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='#' className='hover:text-white text-lg'>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <h3 className='text-xl font-semibold text-white mb-4'>
            Our Policies
          </h3>
          <ul className='space-y-3'>
            <li>
              <a href='#' className='hover:text-white'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Cancellation Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='container mx-auto text-center mt-8 border-t border-gray-700 pt-4'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Hotel Booking. All rights reserved. |
          Designed by <span className='text-blue-400'>QuickStay</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
