import React from 'react'
import Item from './Item.jsx'
import new_collections from '../Assets/new_collections'
function NewCollection() {
  return (
    <>
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-thin underline decoration-orange-600 transition duration-300 ease-in-out transform hover:scale-105'>
            NEW COLLECTIONS</h1>
        <div className='grid grid-cols-4 mt-3 mb-4'>
          {new_collections.map((item,i)=>{
            return <Item
            key = {i}
            id = {item.id}
            name = {item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            image = {item.image}
            />
          })}
        </div>
    </div>
    </>
  )
}

export default NewCollection