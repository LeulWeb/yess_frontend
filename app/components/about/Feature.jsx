import React from 'react'
import fea from '../../assets/feature.png';
import fea2 from '../../assets/fea2.png';
import fea3 from '../../assets/fea3.png';
import Image from 'next/image';

const Feature = () => {
  return (
    <div>
         <div className="story flex flex-col justify-center items-center">
          <div className="flex flex-wrap items-center justify-center  mx-2 sm:mx-6 md:mx-12 lg:mx-96 gap-10 lg:gap-20 py-10">
            <Image src={fea} alt="vision" width={400} height={400} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0041ff] tes font-bold ">Future plan:</h1>
              <p className="text-[28px] text-black text-start">
                1. Expansion
                <br />
                2. Global partnership
                <br />
                3. Innovation Hub

              </p>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse py-6 flex-wrap items-center justify-center  mx-2 sm:mx-6 md:mx-12 lg:mx-96 gap-10 lg:gap-20">
            <Image src={fea2} alt="vision" width={400} height={400} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0041ff] font-bold tes">Community Involvement</h1>
              <p className="text-[28px] text-black text-start">
                1. Tailored Programs
                <br />
                2. Volunteer Opportunities
                <br />
                3. Feedback Mechanisms

              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center  mx-2 sm:mx-6 md:mx-12 lg:mx-96 gap-10 lg:gap-20">
            <Image src={fea3} alt="vision" width={400} height={400} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0041ff] font-bold tes">Company Culture</h1>
              <p className="text-[28px] text-black text-start">
                1. Inclusive
                <br />
                2. Continuous Learning
                <br />
                3. Transparency and Accountability
                <br />
                4. Mission Commitment
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Feature