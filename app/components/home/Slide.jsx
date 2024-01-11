'use client';

// Horizontal.js
import React, { useState } from 'react';
import './horizontal.css'; // Import the CSS file
import reco1 from '../../assets/med3.png';
import reco2 from '../../assets/med2.png';
import reco3 from '../../assets/med1.png';
import Image from 'next/image';

const Slide = () => {
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
      <div className="carousel-container carousel carousel-center h-[500px] py-5 bod ">
        <div className="image-options carousel-item w-screen h-[500px] pt-3">
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

export default Slide;
