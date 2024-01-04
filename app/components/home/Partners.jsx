import React from 'react';

const Partners = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center flex items-center justify-center flex-col">
          <h1 className="text-[#0041ff] text-[50px]">
            Be our partner and contribute <br />
            Your share to the community.
          </h1>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2 my-10 text-[30px] mt-10"
          >
            Address
          </button>
        </div>
        <div>
            <h1 className='text-[#0041ff] text-[50px] py-3 text-center'>Our Partners</h1>
          <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-white rounded-box">
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box w-[200px] h-[200px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box w-[200px] h-[200px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box w-[200px] h-[200px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box w-[200px] h-[200px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box w-[200px] h-[200px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box w-[200px] h-[200px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box w-[200px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
