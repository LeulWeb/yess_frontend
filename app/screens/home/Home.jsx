import HeroIntro from '../../components/home'

import React from 'react';

const Homes = () => {
  return (
    <div className="bg-white text-black">
      <div className="overflow-x-hidden">
        <HomeIntro />
      </div>
      <div className="overflow-x-hidden">
        <Documentary />
      </div>
      <div className="overflow-x-hidden">
        <Achievement />
      </div>
      <div className="overflow-x-hidden">
        <CallToAction />
      </div>
      {/* <div className="overflow-x-hidden overflow-y-visible"> */}
        <Media />
      {/* </div> */}
      <div className="overflow-x-hidden">
        <CallToAction2 />
      </div>
      <div className="overflow-x-hidden">
        <Testimonial />
      </div>
      <Partners />
      <FAQ />
    </div>
  );
};

export default Homes;
