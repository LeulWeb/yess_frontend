import React from 'react';
import Image from 'next/image';
import you from '../../assets/homi.jpg';
// import chapa from '../../assets/chapa.jpg';
import pay from '../../assets/pay.jpg';
import Link from 'next/link';


const Don = () => {
  return (
    <div className="overflow-x-hidden overflow-y-visible hero">
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
                    We kindly ask for your donation to Yess Ethiopia. Your
                    contribution will directly benefit the youth we serve,
                    providing them with access to different crucial resources.
                    Your donation will enable us to continue our vital work and
                    expand our reach to help even more individuals in need.
                  </p>
                </div>
                <div className="pop text-gray-500 dark:text-gray-400 bg-white rounded-xl px-10 py-3 md:w-[300px]  lg:w-[400px]">
               <Link href="https://www.paypal.com/donate/?hosted_button_id=QPXMVXM8C3SKS">
               <div className="flex gap-4 font-bold text-xl items-center bg-blue-600 text-white w-full px-3 rounded py-2 pt-5 mb-5">
          <p className="text-normal font-light text-center">For International Donation</p>
         <div>
         <Link href="https://www.paypal.com/donate/?hosted_button_id=QPXMVXM8C3SKS">
            <Image
              src={pay}
              alt=""
              width={50}
              height={50}
              className="rounded hover:opacity-80 transition-opacity duration-300"
              title="Click Here"
            />
          </Link>
          </div>
          </div>
               </Link>
                  <div className="flex text-gray-800 justify-center items-center text-center gap-4">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="bg-gray-200 border-none w-full rounded-lg"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-10 py-2 pt-5">
                    <div className="flex flex-col gap-2">
                      <label>Currency</label>
                      <select className="bg-gray-200 border-none rounded-lg w-32">
                        <option>USD, $</option>
                        <option>ETB, Birr</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Duration</label>
                      <select className="bg-gray-200 border-none rounded-lg w-32">
                        <option>One Time</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                      </select>
                    </div>
                  </div>
                    <div className="flex gap-4 font-light justify-center items-center py-2">
          <p className="text-center">For Ethiopia</p> <p className="font-extrabold text-xl mx-2">-</p><p className="text-center"> 1000 60 18 97 605 CBE</p>
        </div>
                  <Link href="https://www.paypal.com/donate/?hosted_button_id=QPXMVXM8C3SKS">
               <div className="flex gap-4 font-bold text-xl items-center bg-blue-600 text-white w-full px-3 rounded py-1  my-2">
          <p className="text-normal font-light text-center">For International Donation</p>
         <div>
         <Link href="https://www.paypal.com/donate/?hosted_button_id=QPXMVXM8C3SKS">
            <Image
              src={pay}
              alt=""
              width={50}
              height={50}
              className="rounded hover:opacity-80 transition-opacity duration-300"
              title="Click Here"
            />
          </Link>
          </div>
          </div>
               </Link>
                
                  <div className="text-center flex justify-center items-center py-5">
                   <Link href="https://www.paypal.com/donate/?hosted_button_id=QPXMVXM8C3SKS">
                   <button
                      data-modal-hide="default-modal"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] pop px-10 py-2 "
                    >
                      Donate Now
                    </button>
                   </Link>
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
