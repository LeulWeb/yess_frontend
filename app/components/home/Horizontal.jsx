'use client';

// Horizontal.js
import React, { useState } from 'react';
import './horizontal.css'; // Import the CSS file

const Horizontal = () => {
  const [selectedInput, setSelectedInput] = useState(3); // Default to the first input

  const handleImageClick = (inputNumber) => {
    setSelectedInput(inputNumber);
  };

  const getCarouselItem = (index) => {
    const images = [
      'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
      'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
      'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
      'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
      'https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
      'https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
      'https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
    ];

    const totalImages = images.length;
    const normalizedIndex = (index + totalImages) % totalImages;

    const isSelected = selectedInput === normalizedIndex;

    return (
      <img
        key={normalizedIndex}
        src={images[normalizedIndex]}
        alt={`Option ${normalizedIndex + 1}`}
        className={`carousel-image ${isSelected ? 'selected' : ''}`}
        onClick={() => handleImageClick(normalizedIndex)}
      />
    );
  };

  return (
    <div>
      <p className="font-serif text-[50px] font-bold leading-13 text-center">Recommendation</p>
      <p className="pop text-[28px] font-normal leading-9 text-center">Discover recommendations from professionals across sectors endorsing YESS Ethiopia. Join us in our mission for positive change.</p>
      <div className="carousel-container carousel carousel-center h-[500px] py-5 bod lg:-ml-32">
        <div className="image-options carousel-item w-screen h-[500px]">
          {getCarouselItem(selectedInput - 2)}
          {getCarouselItem(selectedInput - 1)}
          {getCarouselItem(selectedInput)}
          {getCarouselItem(selectedInput + 1)}
          {getCarouselItem(selectedInput + 2)}
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
