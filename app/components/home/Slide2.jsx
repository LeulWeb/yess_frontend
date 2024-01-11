import React from 'react';
import reco1 from '../../assets/med1.png';
import reco2 from '../../assets/med2.png';
import reco3 from '../../assets/med3.png';
import Image from 'next/image';

const Slide2 = () => {
  return (
    <div>
        <h1 className="font-serif tes font-bold leading-13 text-center">Recommendation</h1>
      <p className="pop text-[28px] font-normal leading-9 text-center pb-5">Discover recommendations from professionals across sectors endorsing YESS Ethiopia. Join us in our mission for positive change.</p>
      <div className="carousel rounded-box">
        <div className="carousel-item px-2">
          <Image
            src={reco1}
            width={400}
            height={450}
            alt="Burger"
          />
        </div>
        <div className="carousel-item px-2">
        <Image
            src={reco2}
            width={400}
            height={450}
            alt="Burger"
          />
        </div>
        <div className="carousel-item px-2">
        <Image
            src={reco1}
            width={400}
            height={450}
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
