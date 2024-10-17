import React from 'react'
import s from '../assests/s.jpg'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <section className=' min-h-screen flex items-center justify-center'>
      <div className=' flex rounded-2xl shadow-lg max-w-4xl '>
         <div className='grid grid-cols-1 lg:grid-cols-2'>
        
         {/* form */}
         <div className='rounded-l-lg  lg:pl-16 py-10'>
          <h3 className='text-black font-bold leading-9  text-[22px] mb-10'>
          Create an 
          <span className='text-violet-800'> Account</span>
          </h3>
          <form>
          
              <div className='mb-5'>
              <input type='text' placeholder='Full Name' 
              className=' w-full py-3  border-b border-solid border-[#00000061] 
               focus:outline-none focus:border-b-black text-[16px] leading-7 text-black placeholder:text-gray-600 cursor-pointer
               ' />
              </div>

              <div className='mb-5'>
              <input type='text' placeholder='Email' className=' w-full py-3  border-b border-solid border-[#00000061] 
               focus:outline-none focus:border-black text-[16px] leading-7 text-black placeholder:text-gray-600 cursor-pointer
               ' />
              </div>

              <div className='mb-5'>
              <input type='text' placeholder='password' 
              className='w-full  py-3  border-b border-solid
               border-[#00000061] focus:border-black text-black leading-7 
               text-[16px] focus:outline-none  placeholder:text-gray-600 cursor-pointer' />
              </div>
          
              <Box sx={{ minWidth: 50 }} className='mb-5 flex items-center justify-between'>
      <FormControl fullWidth>
        <InputLabel className='text-black font-bold text-[16px] leading-7' >
        Are you a:
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'Are you a',
            
          }}
          className='text-gray-600 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none '
        >
          <option >Select</option>
          <option >Patient</option>
          <option > Doctor</option>
          <option >Nurse</option>
        </NativeSelect>
      </FormControl>


      <FormControl fullWidth>
        <InputLabel className='text-black font-bold text-[16px] leading-7' >
        Gender:
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'Gender',
           
          }}
          className='text-gray-600 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none '
        >
          <option >Select</option>
          <option >Male</option>
          <option >Female</option>
         
        </NativeSelect>
      </FormControl>
              </Box>

              <div className='mb-5 flex items-center gap-3'>
              <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-violet-400 flex items-center justify-center '>
             <img src='' className='w-full rounded-full'/>
              </figure>
              <div className='relative w-[130px] h-[50px]'>
             <input
               type='text'
               className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer '
             />
             <label className='absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75px] py-[0.35px]
                      text-[15px] leading-6 overflow-hidden bg-[#2b0f7146] text-black font-semibold rounded-lg truncate cursor-pointer
             '>
               Upload Photo
             </label>
             </div>
             </div>
 

          <div className='mt-7'>
            <button type='submit' className='w-full hover:bg-violet-900  bg-violet-800 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 '>
             Sign Up
           </button>
          </div>
          <p className='mt-5 text-gray-500 text-center '>
          Already have an account ?
          <Link to='/Login' className='text-violet-800 font-medium ml-1'>
           Login
          </Link>
           </p>

          </form>
         </div>
         {/* img */}
         <div className='md:block hidden w-[100%] p-5 mt-[10rem] '>
          
             <img src={s} alt='' className='rounded-2xl'/>
         
         </div>
         </div>
      </div>
    </section>
  )
}

export default SignIn
