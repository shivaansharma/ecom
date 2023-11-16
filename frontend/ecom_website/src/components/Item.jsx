import React from 'react'
import { Link } from 'react-router-dom'
function Item(props) {
  return (
   <>
  <div className=''>
  <div className='hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ml-3 mr-3'>
   <Link to={`/Product/${props.id}`} > <img src={props.image} alt="" /> </Link>
    <p>{props.name}</p>
    <div className='flex '>
        <div className='ml-2'>
                ${props.new_price}
        </div>
        <div className=' font-extralight line-through ml-4'>
                ${props.old_price}
        </div>
    </div>
   </div>
  </div>
   </>
  )
}

export default Item