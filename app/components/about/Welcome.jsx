import Image from 'next/image';
import React from 'react';
import you from '../../assets/you.jpg';

const Welcome = () => {
  return (
    <div className=" bg-[#0041ff] w-screen h-full overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 sm:px-6 md:px-12 lg:px-32 lg:mr-32 gap-10 py-20">
        <div className="md:col-span-2 flex flex-col px-2 md:px-4 lg:px-6">
        <h1 className="text-white text-[50px] text-center py-6 font-bold">Welcome</h1>
          <p className="text-white text-center py-2 text-[20px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            veniam minima vero, nostrum facere impedit beatae delectus unde,
            obcaecati quae veritatis deserunt, culpa maxime earum ea id
            exercitationem at iste? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eaque nulla, molestias similique tempore dolorem, quis dolorum iste necessitatibus nobis provident ipsa deleniti officiis maxime voluptatibus fugit debitis. Aspernatur, totam!
          </p>
        </div>
        <div className="sm:py-24 lg:py-0  ml-2 sm:ml-6 md:ml-12 lg:ml-32">
        <Image
            src={you}
            alt="welcome page"
            className="w-full lg:h-[300px] rounded-xl "
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
