import React from 'react'

function Login_signup() {
  return (
  <>
  <div className=' bg-purple-200 h-screen flex items-center justify-center'>
    <div className='bg-white flex flex-col items-center justify-evenly p-5'>
      <h1 className=' font-bold text-3xl '>Sign up</h1>
      <div className='flex flex-col items-center'>
        <input type="text" placeholder='your name ' className=' border-2 m-2 p-3'/>
        <input type="email" placeholder='Email' className=' border-2 m-2 p-3'/>
        <input type="password" placeholder='Password' className=' border-2 m-2 p-3'/>
        <button className=' bg-red-600 text-white m-2 p-3 w-full'>Continue </button>
      </div>
      
        <p className=' font-thin text-sm'>Already have an account? <span>Login here</span></p>
        <div className='flex m-1'>
          <input type="checkbox" name='' id='' />
          <p className=' font-thin text-sm ml-2' >By continuing i agree to terms & privacy poilicy</p>
        </div>
     
    </div>
  </div>
  </>
  )
}

export default Login_signup