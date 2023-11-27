import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

function CartItem() {
  const { allProducts, getCart, remTocart } = useContext(ShopContext);

  const cartItems = allProducts.filter((product) => getCart[product.id] > 0);

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <div className="flex items-center">
        <p className="flex-1 font-bold">Product</p>
        <p className="flex-2 font-bold">Title</p>
        <p className="flex-1 font-bold">Price</p>
        <p className="flex-1 font-bold">Quantity</p>
        <p className="flex-1 font-bold">Total</p>
        <p className="flex-1 font-bold">Remove</p>
      </div>
      <hr />
      {cartItems.map((product) => {
        const quantity = getCart[product.id];

        return (
          <div key={product.id} className="flex items-center">
            <div className="flex-1">
              <img src={product.image} alt="" className="w-16 h-16" />
            </div>
            <p className="flex-2">{product.name}</p>
            <p className="flex-1">${product.new_price}</p>
            <button className="flex-1">{quantity}</button>
            <p className="flex-1">${product.new_price * quantity}</p>
            <img
              src={remove_icon}
              alt=""
              onClick={() => {
                remTocart(product.id);
              }}
              className="flex-1 cursor-pointer w-6 h-6" 
            />
          </div>
        );
      })}
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
