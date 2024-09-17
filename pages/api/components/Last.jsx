// Get our FontAwesome imports
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapPin,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Last = () => {
  return (
    <footer className='bg-blue-500 text-white py-10 mt-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
        {/* Contact Info */}
        <div>
          <h3 className='text-xl font-bold mb-6'>Contact Info</h3>
          <ul className='space-y-4 cursor-pointer'>
            <li className='flex items-center hover:text-black'>
              <FontAwesomeIcon icon={faPhone} className='mr-4' />
              +91-3847635676
            </li>
            <li className='flex items-center hover:text-black'>
              <FontAwesomeIcon icon={faPhone} className='mr-4' />
              +91-9898252394
            </li>
            <li className='flex items-center hover:text-black'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-4' />
              quickstay@gmail.com
            </li>
            <li className='flex items-center hover:text-black'>
              <FontAwesomeIcon icon={faMapPin} className='mr-4' />
              Vadodara, Gujarat, India.
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-bold mb-6 '>Quick Links</h3>
          <ul className='space-y-4'>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Home
              </a>
            </li>
            <li>
              <a className='flex items-center hover:text-black'>About</a>
            </li>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Rolack
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Reservation
              </a>
            </li>
          </ul>
        </div>

        {/* Extra Links */}
        <div>
          <h3 className='text-xl font-bold mb-6'>Extra Links</h3>
          <ul className='space-y-4 '>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Refund Policy
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                Contact Support
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center hover:text-black'>
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className='container mx-auto flex justify-center items-center mt-10'>
        <div className='flex space-x-6'>
          <a href='#' className='text-white hover:text-black'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href='#' className='text-white hover:text-black'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='#' className='text-white hover:text-black'>
            <FontAwesomeIcon icon={faX} />
          </a>
          <a href='#' className='text-white hover:text-black'>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='container mx-auto flex justify-center items-center mt-10 border-t border-blue-400 pt-4 px-4'>
        <p className='text-white text-center'>
          © Copyright 2023 By <span className='text-black'>Quickstay</span>
        </p>
      </div>
    </footer>
  );
};

export default Last;
