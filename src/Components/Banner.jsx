import React, { useState } from 'react';
import banner from '../assets/banner.jpg'

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Banner = () => {
  const [results, setResults] = useState([]);
 
    return (
        <div className='relative'>
            <div className="carousel w-full h-[400px]">
  <div id="item1" className="carousel-item w-full">
    <img src={banner} className="w-full" />
    <div className='absolute flex items-center text-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
    <div className='mx-auto space-y-4'>
    <h2 className='md:text-6xl text-2xl text-white font-semibold text-center'>BookHaven: <span className='text-blue-500'>Connect. Explore. Read</span></h2>
    <div>
   <SearchBar setResults={setResults}></SearchBar>
   <SearchResult results={results}></SearchResult>
    </div>
    </div>
    </div>
  </div> 
</div> 
        </div>
    );
};

export default Banner;