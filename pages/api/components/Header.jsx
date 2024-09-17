import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
          <Link href='/#reviews'>
            <p className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              Review
            </p>
          </Link>
          <Link href='/#FAQ'>
            <p className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              FAQ
            </p>
          </Link>
          <Link href='/login'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-150 ease-in-out'
            >
              Login/SignUp
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
