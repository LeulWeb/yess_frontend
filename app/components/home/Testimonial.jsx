import React from 'react';
import MySlider from './Slider';

const Testimonial = () => {

  const view = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1 className="text-center font-bold text-[60px]">Testimony</h1>
      <p className="px-4 sm:px-[6%] md:px-[8%] pop lg:mx-6 text-[30px] py-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          blanditiis fugiat autem, nisi tenetur exercitationem.
        </p>
      <div className="py-10">
        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full h-full">
          {view.map((item, index)=>{
            return(
              <div className="carousel-item bg-[#0041ff] w-[350px] lg:w-[420px] px-3 rounded-box flex flex-col items-center justify-center h-[500px] my-10">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-full lg:-mt-20  w-[100px] h-[100px] mt-2"
            />
            <p className='text-white text-[18px] font-light mt-6 px-4 text-center pop'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              voluptate eaque pariatur in repellendus animi, a doloribus,
              officia repellat minus repudiandae ratione officiis consequuntur
              ea est iste illum aut nobis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae ipsum aperiam quo totam
              tempora temporibus. Ut vel tempora itaque, inventore perferendis
              aliquid voluptatem! Illo a distinctio esse quidem recusandae
              harum.
            </p>
          </div>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
