import React from 'react';
import Image from 'next/image';
import you from '../../assets/you.jpg';
import chapa from '../../assets/chapa.jpg';
import pay from '../../assets/pay.jpg';


const Don = () => {
  return (
    <div>
      <div>
        <h1></h1>
          {/* <!-- Modal toggle --> */}
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Toggle modal
          </button>

          {/* <!-- Main modal --> */}
          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden bg-transparent fixed top-0 right-0 left-0 z-50 justify-center items-center w-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5">
                  <button
                    type="button"
                    className="text-gray-400 -ml-24 bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-10 h-full ">
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
            </div>
          </div>
      </div>
    </div>
  );
};

export default Don;
