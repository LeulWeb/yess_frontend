import React from 'react';
import './slide.css'; // Adjust the path based on your project structure
import footer from '../../assets/footer.jpg';
import Image from 'next/image';

const Slide = () => {
  return (
    <div className="body story">
      <div className="container__slider">
        <div className="container">
          <input
            type="radio"
            name="slider"
            id="item-1"
            defaultChecked
            className="in hidden"
          />
          <input type="radio" name="slider" id="item-2" className="in hidden" />
          <input type="radio" name="slider" id="item-3" className="in hidden" />

          <div className="cards">
            <label className="card" htmlFor="item-1" id="selector-1">
              <Image
                src={footer}
                alt="sliders"
                width={400}
                height={400}
                className="img"
              />
              <p className="text-white justify-end items-end text-end pr-10 -mt-20">Read more</p>
            </label>
            <label className="card" htmlFor="item-2" id="selector-2">
              <Image
                src={footer}
                alt="sliders"
                width={400}
                height={400}
                className="img"
              />
            </label>
            <label className="card" htmlFor="item-3" id="selector-3">
              <Image
                src={footer}
                alt="sliders"
                width={400}
                height={400}
                className="img"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;