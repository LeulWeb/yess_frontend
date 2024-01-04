import React from 'react';
import story from '../../assets/story.jpg';
import vis from '../../assets/vis.png';
import mis from '../../assets/mis.png';
import pri from '../../assets/pri.png';
import val from '../../assets/val.png';
import Image from 'next/image';

const Story = () => {
  return (
    <div className="bg-cover bg-no-repeat story">
      <div className=" px-2 sm:px-4 md:px-6">
        <h1 className="text-[#0041ff] text-[60px] font-bold">Story</h1>
        <p className="text-black text-[28px] py-4">
          Welcome to Yess Ethiopia, a non-profit charity organization committed
          to transforming the lives of the youth in Ethiopia. Yess Ethiopia
          addresses the critical issues of unemployment and lack of
          opportunities face by the country's young population.
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap items-center justify-center  mx-2 sm:mx-6 md:mx-12 lg:mx-96 gap-10 lg:gap-20">
            <Image src={vis} alt="vision" width={400} height={400} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0041ff] text-[50px] font-bold ">Vision</h1>
              <p className="text-[28px] text-black text-center">
                Yess Ethiopia envisions a future where every <br />
                young person in Ethiopia has the opportunity
                <br />
                to realize their full potential.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse py-6 flex-wrap items-center justify-center  mx-2 sm:mx-6 md:mx-12 lg:mx-96 gap-10 lg:gap-20">
            <Image src={mis} alt="vision" width={400} height={400} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0041ff] text-[50px] font-bold ">Mission</h1>
              <p className="text-[28px] text-black text-center">
                Empower the youth of Ethiopia by addressing the challenges{' '}
                <br />
                of unemployment and lack of opportunities.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center  mx-2 sm:mx-6 md:mx-12 lg:mx-96 gap-10 lg:gap-20">
            <Image src={val} alt="vision" width={400} height={400} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0041ff] text-[50px] font-bold ">Value</h1>
              <p className="text-[28px] text-black text-start">
                1. Empowerment
                <br />
                2. Collaboration
                <br />
                3. Inclusive
                <br />
                4. Innovation
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-wrap items-center justify-center  mx-2 sm:mx-6 md:mx-12 lg:mx-96 gap-10 lg:gap-20">
            <Image src={pri} alt="vision" width={400} height={400} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#0041ff] text-[50px] font-bold ">
                Principle
              </h1>
              <p className="text-[28px] text-black text-start ">
                1. Holistic Development
                <br />
                2. Community Impact
                <br />
                3. Sustainability
                <br />
                4. Recognition and Celebration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
