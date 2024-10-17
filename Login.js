import React, { useState } from 'react'
import k from '../assests/k.jpg'
import { Link } from 'react-router-dom'
const Login = () => {
  const[Email,setEmail]=useState("");
  const[password,setpassword]=useState("");

  return (
    <>
     <section className=' min-h-screen flex items-center justify-center'>
      <div className=' flex rounded-2xl shadow-lg max-w-5xl '>
      {/* form */}
       <div className='md:w-11/12 px-16'>
        <h2 className='font-bold text-2xl text-violet-800 '>Login</h2>
        <p className='text-sm mt-4'>if you'are alredy memmber login in </p>
        <form className='flex flex-col gap-4'>
          <input type='email' placeholder='Email' value={Email}  onChange={(e)=>setEmail(e.target.value)} className='p-2 mt-8 rounded-xl border' />
          <div>
          <input type='text' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}  className='p-2 mt-8 w-full rounded-xl border' />
          </div>
         
          <button className='mt-0 bg-violet-800 hover:bg-violet-900  text-white font-[600] rounded-xl py-2'>
          Login
          </button>
        </form>


        <div className='mt-10 grid grid-cols-3 items-center  text-gray-500'>
          <hr className='border-gray-500'/>
          <p className='text-center'>OR</p>
          <hr className='border-gray-500'/>
        </div>
        
         <button className='bg-white border py-2 w-full mt-5 flex justify-center items-center text-sm rounded-xl'>
         Login with Google
         </button>
         <p className='mt-5 text-xs border-b py-4 border-gray-500'>
         Forget your password ?
         </p>
         <div className='flex justify-between text-xs mt-3  items-center'>
          <p>
           if you don't have an account
          </p>
          <Link to='/SignIn'>
          <button className='py-2 px-5 bg-white border rounded-xl  hover:bg-violet-800'>Rejister</button>
          </Link>
         </div>
         <div className='flex justify-between text-xs mt-5  items-center'>

         </div>

       </div>
       {/* img */}
       <div className='md:block hidden w-[100%] p-5 mt-[5rem] '>
       <img src={k} alt='' className='rounded-2xl'/>

       </div>
      </div>
     </section>
    </>
  )
}

export default Login










