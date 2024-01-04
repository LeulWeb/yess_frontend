import Achievement from './components/home/Achievement';
import CallToAction from './components/home/CallToAction';
import CallToAction2 from './components/home/CallToAction2';
import Conference from './components/home/Conference';
import Documentary from './components/home/Documentary';
import FAQ from './components/home/FAQ';
import HomeIntro from './components/home/HomeIntro';
import Horizontal from './components/home/Horizontal';
import Input from './components/home/Input';
import Media from './components/home/Media';
import Partners from './components/home/Partners';
import Slide from './components/home/Slide';
import Testimonial from './components/home/Testimonial';
import React from 'react';

const Home = () => {
  return (
    <div className="story text-black overflow-x-hidden -mt-28 z-30">
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
        <Slide />
      {/* </div> */}
      <Input />
      <Horizontal />
      <div className="overflow-x-hidden">
        <CallToAction2 />
      </div>
      <Conference />
      <div className="overflow-x-hidden">
        <Testimonial />
      </div>
      <Partners />
      <FAQ />
      
    </div>
  );
};

export default Home;
