// hotelb/pages/components/Navbar.jsx

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext"; // Adjust path as necessary

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout from context

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex flex-wrap items-center justify-between p-5'>
        <Link href='/'>
          <h2 className='text-4xl font-bold text-blue-600 tracking-wide uppercase'>
            QuickStay
          </h2>
        </Link>
        <nav className='flex flex-wrap items-center space-x-4 mt-4 lg:mt-0'>
          <Link href='/'>
            <p className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              Home
            </p>
          </Link>
          <Link href='/#about'>
            <p className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              About
            </p>
          </Link>
          <Link href='/rooms'>
            <p className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              Rooms
            </p>
          </Link>
          <Link href='/#header1'>
            <p className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              Review
            </p>
          </Link>
          <Link href='/#FAQ'>
            <p className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              FAQ
            </p>
          </Link>
          {user ? (
            <button
              onClick={logout}
              className='text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-150 ease-in-out'
            >
              Logout
            </button>
          ) : (
            <Link href='/login'>
              <button
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-150 ease-in-out'
              >
                Login/SignUp
              </button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
