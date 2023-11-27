import React, { useContext } from 'react';
import star from '/src/Assets/star_icon.png';
import starDull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const {addTocart} = useContext(ShopContext)
  return (
    <div className="flex">
      <div className="flex">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={product.image} alt="" className="m-2 w-full h-full" />
          ))}
        </div>
        <div className="ml-2 h-full w-full">
          <img src={product.image} alt="" className="m-2 w-full h-full" />
        </div>
      </div>
      <div className="ml-4">
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={star} alt="" className="w-4 h-4" />
            ))}
            <img src={starDull} alt="" className="w-4 h-4" />
            <p className="ml-1">(122)</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-gray-500 line-through">${product.old_price}</div>
          <div className="text-lg font-bold">${product.new_price}</div>
          <div className="text-sm mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit officia sed accusamus esse, maiores
            numquam quibusdam fugit rem voluptatibus dignissimos, veniam, delectus quidem repudiandae in facere
            ratione dolorem illum culpa nostrum tempora dolores et voluptatum ab asperiores. Illum odio illo quod
            nihil nesciunt sint. Inventore nobis voluptatum ad laborum vel!
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-bold">Select size</h1>
            <div className="flex">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                <div key={index} className="mr-2 border border-gray-300 px-2 py-1 rounded cursor-pointer">
                  {size}
                </div>
              ))}
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{addTocart(product.id)}}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
