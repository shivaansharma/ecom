import React, { createContext, useState } from "react";
import allProducts from '../Assets/all_product.js';

export const ShopContext = createContext(null);
const DefaultCart = ()=>{
     let cart ={}
     for (let index = 0; index < allProducts.length+1; index++) {
      
      cart[index]=0
     }
     return cart;
}

const ShopContextProvider = (props) => {
  const [getCart,setCart]= useState(DefaultCart);
 
  const addTocart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(getCart);
  };
  
  const remTocart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(getCart);
  };
  const getTotalCart=()=>{
    let total =0
    for(const item in getCart)
    {
      if(getCart[item]>0)
      {
        total +=getCart[item]
      }
    }
    return total;
  }
const contextValue = { getTotalCart,allProducts,getCart,addTocart,remTocart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider
