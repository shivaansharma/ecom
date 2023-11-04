import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

function Hero() {
  return (
    <div className='flex justify-between items-center bg-gradient-to-b from-purple-200 to-white mb-10'>
      <div className='text-center'>
        <h2 className='font-extrabold text-xl'>NEW ARRIVALS ONLY</h2>
        <div className='flex items-center justify-center'>
          <p className='text-7xl'>NEW</p>
          <img src={hand_icon} alt="" className='h-20 w-20' />
        </div>
        <div className='text-7xl'>
          <p>COLLECTION</p>
          <p>FOR EVERYONE</p>
        </div>
        <div>
          <div className='flex bg-red-500 rounded-lg p-2 mt-3 mb-5 items-center justify-center'>
            LATEST COLLECTION
            <img src={arrow_icon} alt="" className='ml-5' />
          </div>
        </div>
      </div>

      <div className='flex items-center ml-56'>
        <img src={hero_image} alt="" className=' h-3/5 w-3/4' />
      </div>
    </div>
  );
}

export default Hero;
