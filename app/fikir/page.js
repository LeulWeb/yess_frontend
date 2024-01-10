import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgMail, CgTime } from 'react-icons/cg';
import footer from '../assets/fikir.png';
import helder from '../assets/helder.png';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAddressBook } from 'react-icons/fa';


const Fikir = () => {
  return (
    <div className="story">
      <div className="bg-white text-black">
        <Image
          src={footer}
          alt="startup one"
          className="w-full"
          width={800}
          height={500}
        />
        <div className="flex justify-start items-center pt-10 px-2 sm:px-4 md:px-10 lg:px-20 gap-6 flex-wrap pb-10">
          <div className="px-2 sm:px-4 md:px-10 lg:px-20">
            <h1 className="tes font-bold flex flex-wrap">
            Fikir charity for children and mothers
            </h1>
          </div>
        </div>
        <div className="px-2 sm:px-4 md:px-10 lg:px-20">
          <p className='text-[20px] lg:text-[32px]'>
          During the visit, the children at Fikir Charity expressed their gratitude and joy, warmly inviting the Yess Ethiopia team to engage with them. The genuine and sweet expressions of the children resonated with the core values of both organizations – a shared commitment to uplifting communities, especially the most vulnerable members. The interaction between Yess Ethiopia and Fikir Charity reflects the power of solidarity in making a meaningful impact on the lives of children and mothers.<br/><br/>
Yess Ethiopia continues to foster partnerships with organizations like Fikir Children and Mothers Charity to collectively address societal challenges and contribute to the well-being of communities. This collaborative spirit strengthens the bonds of compassion and reinforces the belief that positive change is achievable through shared efforts and genuine connections.


          </p>
        </div>
        <div className="flex justify-between items-start px-4 sm:px-8 md:px-16 lg:px-32 py-10">
          <div className="ml-2 md:ml-4 lg:ml-10 py-4 lg:py-10 flex flex-col items-center justify-start gap-3 flex-start  pop font-medium">
            <div className="flex justify-start items-start lg:-ml-6 text-start">
              <CgMail size={30}  className="font-normal"/>
              <p className="pl-5 pop lg:text-[20px]">Elders above 65</p>
            </div>{' '}
            <div className="flex justify-start items-start lg:ml-3 text-start">
              <FaMapMarkerAlt size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">Mekodonya, 22 <br/>
Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex justify-start items-start lg:-ml-36 test-start">
              <CgTime size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">3hr</p>
            </div>
          </div>
          <div>
            <Link href="#" className='text-[#0014ff] text-[25px] lg:pr-24'>Watch on Youtube</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fikir;
