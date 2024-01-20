import React from 'react';
import Image from 'next/image';
import you from '../../assets/homi.jpg';
import chapa from '../../assets/chapa.jpg';
import pay from '../../assets/pay.jpg';

const Don = () => {
  return (
    <div className="overflow-x-hidden hero">
      <div className="flex justify-center items-center h-screen w-screen overflow-x-hidden">
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="false"
          className=" overflow-y-auto overflow-x-hidden  bg-transparent top-0 flex flex-col justify-center items-center w-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative">
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
                  <p className="text-lg leading-relaxed text-white px-3 cri text-center">
                  We kindly ask for your donation to Yess Ethiopia. Your contribution will directly benefit the youth we serve, providing them with access to different crucial resources. Your donation will enable us to continue our vital work and expand our reach to help even more individuals in need.
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
                      <label>Duration</label>
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
