"use client";



import React, {useState, useEffect} from 'react'
import Slide from './Slide';
import Reco from './Reco';

const Guidance = () => {
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
    <div>
      <div className="px-4 lg:mx-12 h-full">
        <h1 className="text-[#0041ff] tes font-bold">Scholarship Guidance</h1>
        <p className="text-black text-[28px] py-4">
          Welcome to Yess Ethiopia, a non-profit charity organization committed
          to transforming the lives of the youth in Ethiopia. Yess Ethiopia
          addresses the critical issues of unemployment and lack of
          opportunities face by the country's young population.
        </p>
        <div className="py-20">{isLargeScreen ? <Slide /> : <Reco />}</div>
      </div>
    </div>
  );
};

export default Guidance;
