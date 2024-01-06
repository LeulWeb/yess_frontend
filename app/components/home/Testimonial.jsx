import React from 'react';
import MySlider from './Slider';
import test1 from '../../assets/test1.jpg';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-center font-bold tes">Testimony</h1>
      <p className="px-4 sm:px-[6%] md:px-[8%] pop lg:mx-6 py-4 text-center pas">
      Explore concise testimonials from diverse professionals highlighting the positive influence of YESS Ethiopia. Join us in shaping a meaningful impact.
      </p>
      <div className="py-10">
      <div className="carousel rounded-box">
  <div className="carousel-item">
    <Image width={400} height={500} src={test1} alt=""  className='mx-2' />
  </div> 
  <div className="carousel-item">
    <Image width={400} height={500} src={test2} alt=""  className='mx-2' />
  </div> 
  <div className="carousel-item">
    <Image width={400} height={500} src={test3} alt=""  className='mx-2' />
  </div> 
  <div className="carousel-item">
    <Image width={400} height={500} src={test4} alt=""  className='mx-2' />
  </div> 

</div>
      </div>
    </div>
  );
};

export default Testimonial;
