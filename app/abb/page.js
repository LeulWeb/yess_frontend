"use client"

import React from 'react'
import you from '../assets/homi.jpg';
import chapa from '../assets/chapa.jpg';
import pay from '../assets/pay.jpg';
import Image from 'next/image';

const page = () => {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal w-full h-full">
  <div className="modal-box">
<div className="w-full h-full">
<div className="p-4 md:p-5  grid grid-cols-1 md:grid-cols-2 gap-10 h-screen w-full ">
                  <div className="bg-[#0041ff] rounded-full hidden md:flex items-center justify-center flex-col h-[500px] py-3">
                    <Image
                      src={you}
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full h-[100px] w-[100px] text-white "
                    />
                    <p className="text-white text-[25px] py-5">Yess Ethiopia</p>
                    <p className="text-base leading-relaxed text-white px-3 font-light pop text-center">
                      With less than a month to go before the EuropeanWith less
                      than a month to go before the European Union enacts new
                      consumer privacy laws for its citizens.
                    </p>
                  </div>
                  <div className="pop text-gray-500 dark:text-gray-400 bg-white rounded-xl px-10 py-3 md:w-[300px]  lg:w-[400px]">
                    <div className="flex flex-col gap-2">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="bg-gray-200 border-none w-full rounded-lg"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-10 py-2 pt-5">
                      <div className="flex flex-col gap-2">
                        <label>Currency</label>
                        <input
                          type="text"
                          className="bg-gray-200 w-full border-none rounded-lg"
                          placeholder="ETB , Birr"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label>Phone Number</label>
                        <select className="bg-gray-200 border-none rounded-lg w-32">
                          <option>Monthly</option>
                          <option>Yearly</option>
                          <option>One Time</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 py-2">
                      <label>What to consider?</label>
                      <textarea
                        cols={20}
                        rows={3}
                        className="bg-gray-200 border-none w-full rounded-lg"
                      />
                    </div>
                    <p className="text-center text-gray-500 dark:text-gray-400 pop text-[16px] py-3">
                      Choose payment{' '}
                    </p>
                    <div className="flex items-center justify-center gap-3 py-3">
                      <Image src={chapa} alt="" width={100} height={100} />
                      <Image src={pay} alt="" width={100} height={100} />
                    </div>
                    <div className="text-center flex justify-center items-center py-5">
                      <button
                        data-modal-hide="default-modal"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] pop px-10 py-2 "
                      >
                        Donate Now
                      </button>
                    </div>
                  </div>
                </div>
</div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default page