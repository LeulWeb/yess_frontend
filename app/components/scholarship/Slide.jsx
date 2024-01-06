import React from 'react';
import './slide.css'; // Adjust the path based on your project structure
import footer from '../../assets/footer.jpg';
import guid1 from '../../assets/guid1.png';
import guid2 from '../../assets/guid1.png';
import guid3 from '../../assets/guid1.png';

import Image from 'next/image';

const Slide = () => {
  return (
    <div className="body -mt-20">
      {/* <h1 className="title">Slider 3D con puro CSS</h1> */}

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
                src={guid1}
                alt="sliders"
                width={400}
                height={400}
                className="img"
              />
              <p className="text-white justify-end items-end text-end pr-10 -mt-20">Read more</p>
            </label>
            <label className="card" htmlFor="item-2" id="selector-2">
              <Image
                src={guid2}
                alt="sliders"
                width={400}
                height={400}
                className="img"
              />
            </label>
            <label className="card" htmlFor="item-3" id="selector-3">
              <Image
                src={guid3}
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
