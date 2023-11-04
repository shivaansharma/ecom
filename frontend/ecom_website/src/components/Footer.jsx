import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import insta_logo from '../Assets/instagram_icon.png'
import pintrest_logo from '../Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'
function Footer() {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
        <div className='flex justify-center items-center'>
            <img src={footer_logo} alt="" />
            <p className='text-4xl'>SHOPPER</p>
        </div>
        <ul className='flex'>
            <li className='m-3'>Company</li>
            <li className='m-3'>Products</li>
            <li className='m-3'>Offices</li>
            <li className='m-3'>About</li>
            <li className='m-3'>Contact</li>
        </ul>
        <div className='flex'>
            <div className='m-3'>
                <img src={insta_logo} alt="" />
            </div>
            <div className='m-3'>
                <img src={pintrest_logo} alt="" />
            </div>
            <div className='m-3'>
                <img src={whatsapp_logo} alt="" />
            </div>
        </div>
        
        <div className=' border-t-2'>
     
            <p>CopyRight @2023 - All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer