import React from 'react'

const CallToAction2 = () => {
  return (
    <div className='bg-[#0041ff] py-4 h-full flex flex-col items-center justify-center my-16'>
        <p className='call text-center text-white font-serif'>Would you kindly consider making a donation to support Yess 
        Ethiopia's impactful initiatives <br/> and empower the youth for a bright future?</p>
        <button type="button" className="w-44 text-[30px] mt-10 text-black bg-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2 rounded-2xl">Donate</button>
    </div>
  )
}

export default CallToAction2