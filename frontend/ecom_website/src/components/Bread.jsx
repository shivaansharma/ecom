import React from 'react';
import arrow from '../Assets/breadcrum_arrow.png';

function Bread(props) {
  const { product } = props;
  return (
    <div className='flex text-xs font-thin'>
      Home <img src={arrow} alt="" /> shop <img src={arrow} alt="" /> 
      {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  );
}

export default Bread;
