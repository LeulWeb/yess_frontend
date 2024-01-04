import React from 'react';
import { IoFilter } from 'react-icons/io5';
import footer from '../../assets/footer.jpg';
import Image from 'next/image';
import './scholar.css';
import chev from '../../assets/chev.png';
import ccees from '../../assets/ccees.png';

const Webinar = () => {
  const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="story bg-cover bg-no-repeat text-black">
      <h1 className="text-[#0041ff] text-[40px] w-full font-bold flex flex-row justify-start items-center px-4 lg:mx-8">
        Expert Webinar and Workshops
      </h1>

      <div>
        <div className="h-[80vh] carousel carousel-vertical rounded-box">

          {/* item 1 */}
          <div className="mx-10 py-5 carousel-item h-[500px] md:h-[350px] lg:h-[250px] overflow-hidden bods bodey">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300 shadow-xl shadow-transparent rounded-xl">
              <Image
                src={chev}
                alt="introduction"
                width={200}
                height={200}
                className="lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl im"
              />
              <div className="flex flex-col gap-6 lg:mr-20 py-6">
                <div>
                  <p className="font-bold text-[35px] text-[#0041ff] text-start py-2 che">
                    The Chevening Scholarship
                  </p>
                  <p className="text-gray-700 font-medium pop text-[16px] line-clamp-2 lg:line-clamp-3 text-start">
                    The Chevening Scholarship is a prestigious international
                    award that provides fully-funded opportunities outstanding
                    individuals to purse postgraduate studies in the United
                    Kingdom.
                    <br />
                    This is the lik to the chevening Scholarship Facebook page,
                    when Scholarship winners can connect and communicate.
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10">
                  <button className="bg-[#0041ff] py-2 text-[18px] px-6 text-white rounded-xl border-2 border-white">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* item 2 */}
          <div className="mx-10 py-5 carousel-item h-[500px] md:h-[350px] lg:h-[250px] overflow-hidden bods bodey">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300 shadow-xl shadow-transparent rounded-xl">
              <Image
                src={ccees}
                alt="introduction"
                width={200}
                height={200}
                className="lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl im"
              />
              <div className="flex flex-col gap-6 lg:mr-20 py-6">
                <div>
                  <p className="font-bold text-[30px] text-center lg:text-[35px] text-[#0041ff] lg:text-start py-2">
                  International Council for Central and East European Studies
                  </p>
                  <p className="text-gray-700 font-medium pop text-[16px] line-clamp-2 lg:line-clamp-3 text-start">
                  The International Council for Central and East European Studies (ICCEES) is an organization dedicated to promoting research and collaboration in the field of Central and East European Studies, fostering academic exchange and understanding.
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10">
                  <button className="bg-[#0041ff] py-2 text-[18px] px-6 text-white rounded-xl border-2 border-white">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
