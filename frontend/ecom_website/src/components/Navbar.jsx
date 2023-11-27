import React, { useContext } from 'react'
import logo from '../Assets/logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
function Navbar() {
  const{getTotalCart}=useContext(ShopContext)
  return (
   <>
   <div className='flex justify-between items-center p-4'>
    <div className=''>
      <img src={logo} alt=""/>
      <p className='font-mono'>SHOPPER</p>
    </div>
    <ul className='flex'>
  <li className='mr-4 font-mono'>
    <NavLink to='/' className={({ isActive }) => (isActive ? 'underline' : 'no-underline')}>
      Shop
    </NavLink>
  </li>
  <li className='mr-4 font-mono'>
    <NavLink to='/men' className={({isActive})=>(isActive?'underline':'no-underline')}>Mens</NavLink>
  </li>
  <li className='mr-4 font-mono'>
    <NavLink to='/women' className={({isActive})=>(isActive?'underline':'no-underline')}>Women</NavLink>
  </li>
  <li className='mr-2 font-mono'>
    <NavLink to='/kid' className={({isActive})=>(isActive?'underline':'no-underline')}>Kids</NavLink>
  </li>
</ul>

    <div className='flex p-5'>
   <NavLink to='/login'> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mr-4">
  Login
</button></NavLink>
   
<NavLink to='/cart'><AiOutlineShoppingCart className='text-4xl hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105' />
    </NavLink>
<div className=''>{getTotalCart()}</div>
    </div>
   </div>
   <div>
    <hr />
   </div>
   </>
  )
}

export default Navbar