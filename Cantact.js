import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
const Cantact = () => {
  return (
    <>
    <section>
    <div className='px-4 mx-auto max-w-screen-md'>
    <h2 className='text-[44px] leading-[54px] font-[700] text-black  text-center mt-[120px]'>
     Cantact Us
    </h2>
    <p className='mb-8 lg:mb-16 font-light text-center text-[18px] leading-[30px]  mt-[18px] text-gray-500 pl-[120px]'>
     you have technical probleme ? send your probleme
    </p>
    <form className='space-y-5 mt-[1px]'>
     <div className='mb-5'>
              <input type='text' placeholder='Email' className=' w-full py-3  border-b border-solid border-[#00000061] 
               focus:outline-none focus:border-black text-[16px] leading-7 text-black placeholder:text-gray-600 cursor-pointer
               ' />
              </div>

              <div className='mb-5'>
              <input type='text' placeholder='Subject' className=' w-full py-3  border-b border-solid border-[#00000061] 
               focus:outline-none focus:border-black text-[16px] leading-7 text-black placeholder:text-gray-600 cursor-pointer
               ' />
              </div>       
     
     <div className='sm:col-span-2'>
      <label className='text-gray-500 font-semibold text-[16px] leading-7 mb-2'>
       Message
      </label>
      <textarea type='text' rows="5" className='w-full px-4 py-3 border border-solid border-black focus:outline-none focus:border-violet-700 text-[16px] leading-7 rounded-md '/>
     </div>
    </form>
    </div>
    </section>
      
    </>
  )
}

export default Cantact
