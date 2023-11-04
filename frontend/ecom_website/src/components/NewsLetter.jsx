import React from 'react'

function NewsLetter() {
  return (
  <>
 <div className='flex flex-col justify-evenly items-center bg-gradient-to-b from-purple-200 to-white m-10 p-6 rounded-lg shadow-lg'>
    <h1 className=' font-semibold text-3xl'>Get Exclusive Offers On Your Email</h1>
    <p className=' text-sm '>Subscribe our newsLetter and stay updated</p>
    <div className='p-4'>
        <input type="email" placeholder='Your email' className='border-1  border-black p-2 rounded-xl' />
        <button className='text-white bg-slate-900 p-2 rounded-xl'>Subscribe</button>
    </div>
  </div>
  </>
  )
}

export default NewsLetter