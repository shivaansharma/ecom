import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../components/Item.jsx';
function Shopcat(props) {
  const { allProducts } = useContext(ShopContext);
 
  return (
    <>
      <div>
        <img src={props.banner} />
       <div className=''>
       <p>
       <span>showing 1-12</span> out of 36 products
       </p>
       <div className='flex items-center font-bold'>
        sort by <img src={dropdown_icon} alt="" className='m-2'/>
       </div>
       <div className='grid grid-cols-4 mt-3 mb-4'>
        {
          allProducts.map((item,i)=>{
            if(props.category===item.category)
            {
               return(
                <Item key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price ={item.new_price}
                old_price ={item.old_price}
                />
               )
            }
          })
        }
       </div>
       <div>
        explore more
       </div>
       </div>
      </div>
    </>
  );
}

export default Shopcat;
