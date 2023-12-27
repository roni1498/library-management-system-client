import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[400px]">
  <div id="item1" className="carousel-item relative w-full">
    <img src={banner} className="w-full" />
    <div className='absolute flex items-center text-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
    <div className='mx-auto space-y-4'>
    <h2 className='md:text-6xl text-2xl text-white font-semibold text-center'>BookHaven: <span className='text-blue-500'>Connect. Explore. Read</span></h2>
    <input
              type="search"
              className="py-2.5 w-[400px] md:w-[950px] px-4 rounded-lg border-none"
              placeholder="Search here..."
            />
    </div>
    </div>
  </div> 
</div> 
        </div>
    );
};

export default Banner;