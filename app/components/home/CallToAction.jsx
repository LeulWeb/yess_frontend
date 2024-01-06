import React from 'react'

const CallToAction = () => {
  return (
    <div className='bg-[#0041ff] h-full py-3 lg:h-44 flex flex-col items-center justify-center my-10'>
        <p className='text-[30px] text-white font-serif text-center '>Join us to contribute to community empowerment.</p>
        <button type="button" class="w-44 text-[30px] mt-10 text-black bg-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2 rounded-2xl">Join Us</button>
    </div>
  )
}

export default CallToAction