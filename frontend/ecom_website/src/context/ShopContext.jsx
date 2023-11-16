import React, { createContext, useState } from "react";
import allProducts from '../Assets/all_product.js';

export const ShopContext = createContext(null);
const DefaultCart = ()=>{
     let cart ={}
     for (let index = 0; index < allProducts.length; index++) {
      
      cart[index]=0
     }
     return cart;
}

const ShopContextProvider = (props) => {
  const [getCart,setCart]= useState(DefaultCart);
  const contextValue = { allProducts,getCart };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider
