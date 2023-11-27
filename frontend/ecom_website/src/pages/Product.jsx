import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { useParams } from 'react-router-dom';
import Bread from '/src/components/Bread.jsx'
import ProductDisplay from '../components/ProductDisplay.jsx';
function Product(props) {
  const { allProducts } = useContext(ShopContext);
  const {productId}= useParams();
  
  const product = allProducts.find((e)=>e.id===Number(productId))
  return (
    <>
    <div>
      <Bread product={product}/>
      <ProductDisplay product={product}/>
    </div>
    </>
  );
}

export default Product;
