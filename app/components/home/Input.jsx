'use client';

import React, { useState, useRef } from 'react';
import styles from './input.css'; // Import your module.css file
import volu from '../../assets/volu.png';
import boost from '../../assets/boost.png';
import car from '../../assets/car.png';
import scho from '../../assets/scho.png';
import talent from '../../assets/talent.png';
import train from '../../assets/train.png';
import Image from 'next/image';

const Input = () => {
  const [selectedInput, setSelectedInput] = useState(3); // Default to the first input
  const [centeredInput, setCenteredInput] = useState(3); // Currently centered input

  const carouselRef = useRef(null);

  const handleInputChange = (inputNumber) => {
    setSelectedInput(inputNumber);
    setCenteredInput(inputNumber);

    // Scroll the selected item into view
    if (carouselRef.current) {
      carouselRef.current.children[inputNumber - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const images = [volu, car, scho, train, boost, talent];

  return (
    <div className="story w-full flex flex-col md:flex-row overflow-x-hidden justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-full px-1">
        <p className='font-bold text-center items-center text-[40px] py-5'>Yess Ethiopia</p>
        <p className="pop px-6 text-center text-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          asperiores minus quia beatae itaque. Culpa inventore voluptas enim
          fuga soluta quisquam sed nostrum nihil aspernatur dicta ullam
          similique, beatae assumenda.
        </p>
      </div>
      <div className="lg:w-[65%] md:w-[50%] w-[100%]">
        <div
          className="carousel carousel-vertical rounded-box h-[600px] w-full overflow-y-auto w-full mx-3"
          ref={carouselRef}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item h-[200px] w-[607px] ${
                centeredInput === index + 1
                  ? 'centered mx-10 h-[217px] w-[802]'
                  : 'mx-20'
              }`}
              onClick={() => handleInputChange(index + 1)}
            >
              <Image
                src={image}
                alt={`Carousel Item ${index + 1}`}
                height={300}
                width={400}
                className=" w-full my-3 mx-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input;
