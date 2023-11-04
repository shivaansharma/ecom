import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='flex justify-evenly bg-gradient-to-b from-purple-200 to-white m-10 p-6 rounded-lg shadow-lg'>
      <div className='flex items-start flex-col justify-center '>
        <h1 className='text-5xl font-bold mb-2'>Exclusive Offers for You</h1>
        <p className='text-sm text-gray-500 mb-2'>Only on best seller products</p>
        <button className='bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg'>
          Check Now
        </button>
      </div>
      <div>
        <img src={exclusive_image} alt="Exclusive Offer" className='h-60 mr-10 object-contain ' />
      </div>
    </div>
  );
};

export default Offers;
