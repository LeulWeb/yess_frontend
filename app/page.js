"use client"


import { useEffect, useState } from 'react';
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
import Reco from './components/home/Reco';
import Slide from './components/home/Slide';
import Testimonial from './components/home/Testimonial';
import React from 'react';
import Slide2 from './components/home/Slide2';

const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Update isLargeScreen based on window width
      setIsLargeScreen(window.innerWidth >= 992); // Adjust the width according to your criteria
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <div className='med bg-cover bg-no-repeat'>
        <Media />
        <div >
      {isLargeScreen ? (
        <Slide />     ) : (
<Slide2 />      )}
    </div>
        </div>
      <Input />
      <div className="overflow-x-hidden">
        <CallToAction2 />
      </div>
      {/* <Conference /> */}
      <div>
      {isLargeScreen ? (
<Horizontal />      ) : (
<Reco />      )}
    </div>
      
      
      <div className="overflow-x-hidden">
        <Testimonial />
      </div>
      <Partners />
      <FAQ />
      
    </div>
  );
};

export default Home;
