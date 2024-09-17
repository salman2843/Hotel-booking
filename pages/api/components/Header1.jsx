const Header1 = () => {
  return (
    <div className='mt-10 bg-gray-200 py-7'>
      <section className='container mx-auto px-4'>
        <form className='flex flex-col lg:flex-row gap-4 lg:gap-8 bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700'>
              Check in <span className='text-red-500'>*</span>
            </label>
            <input
              type='date'
              className='mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3'
            />
          </div>

          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700'>
              Check out <span className='text-red-500'>*</span>
            </label>
            <input
              type='date'
              className='mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3'
            />
          </div>

          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700'>
              Adults <span className='text-red-500'>*</span>
            </label>
            <select
              name='adults'
              className='mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3'
            >
              <option value='1'>1 adult</option>
              <option value='2'>2 adults</option>
              <option value='3'>3 adults</option>
              <option value='4'>4 adults</option>
              <option value='5'>5 adults</option>
              <option value='6'>6 adults</option>
            </select>
          </div>

          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700'>
              Children <span className='text-red-500'>*</span>
            </label>
            <select
              name='children'
              className='mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3'
            >
              <option value='1'>1 child</option>
              <option value='2'>2 children</option>
              <option value='3'>3 children</option>
              <option value='4'>4 children</option>
              <option value='5'>5 children</option>
              <option value='6'>6 children</option>
            </select>
          </div>

          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700'>
              Rooms <span className='text-red-500'>*</span>
            </label>
            <select
              name='rooms'
              className='mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3'
            >
              <option value='1'>1 room</option>
              <option value='2'>2 rooms</option>
              <option value='3'>3 rooms</option>
              <option value='4'>4 rooms</option>
              <option value='5'>5 rooms</option>
              <option value='6'>6 rooms</option>
            </select>
          </div>

          <div className='flex justify-end lg:col-span-2 mt-4'>
            <input
              type='submit'
              value='Check Availability'
              className='bg-blue-700 text-white font-medium text-sm px-6 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Header1;
