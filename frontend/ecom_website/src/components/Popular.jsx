import React from 'react'
import data_product from '../Assets/data.js'
import Item from './Item'

function Popular() {
  return (
   <>
   <div className='flex item-center justify-center'>
   <div className='text-center '>
    <h1 className=' text-4xl font-thin underline decoration-orange-600 transition duration-300 ease-in-out transform hover:scale-105'>POPULAR IN WOMEN</h1>
    <div className='flex flex-row mt-5'>
        {data_product.map((item,i)=>{
           return <Item 
           key = {i} 
           id ={item.id} 
           name={item.name}
           image = {item.image} 
           new_price={item.new_price}
           old_price={item.old_price}
           />
        })}
    </div>
   </div>
   </div>
   </>
  )
}

export default Popular