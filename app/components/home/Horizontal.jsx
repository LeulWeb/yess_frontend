'use client';

// Horizontal.js
import React, { useState } from 'react';
import './horizontal.css'; // Import the CSS file
import reco1 from '../../assets/reco1.png';
import reco2 from '../../assets/reco2.png';
import reco3 from '../../assets/reco3.png';

import Image from 'next/image';

const Horizontal = () => {
  const [selectedInput, setSelectedInput] = useState(1); // Default to the first input

  const handleImageClick = (inputNumber) => {
    setSelectedInput(inputNumber);
  };

  const getCarouselItem = (index) => {
    const images = [reco1, reco2, reco3];

    const totalImages = images.length;
    const normalizedIndex = (index + totalImages) % totalImages;

    const isSelected = selectedInput === normalizedIndex;

    return (
      <Image
        key={normalizedIndex}
        src={images[normalizedIndex]}
        alt={`Option ${normalizedIndex + 1}`}
        width={400}
        height={450}
        className={`carousel-image ${isSelected ? 'selected' : ''}`}
        onClick={() => handleImageClick(normalizedIndex)}
      />
    );
  };

  return (
    <div className="px-20 lg:px-32">
      <h1 className="font-serif tes font-bold leading-13 text-center">
        Recommendation
      </h1>
      <p className="pop text-[28px] font-normal leading-9 text-center pb-10">
        Discover recommendations from professionals across sectors endorsing
        YESS Ethiopia. Join us in our mission for positive change.
      </p>
      <div className="carousel-container carousel carousel-center h-full pt-24 py-5 bod ">
        <div className="image-options carousel-item w-screen h-[500px]">
          {/* {getCarouselItem(selectedInput - 2)} */}
          {getCarouselItem(selectedInput - 1)}
          {getCarouselItem(selectedInput)}
          {getCarouselItem(selectedInput + 1)}
          {/* {getCarouselItem(selectedInput + 2)} */}
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
