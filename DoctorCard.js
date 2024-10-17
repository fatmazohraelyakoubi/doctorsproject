import React from 'react'
import D1 from '../assests/D1.jpg'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
const DoctorCard = ({doctors}) => {
    const{name,speselize,rating,hospital}=doctors;
  return (
    <div className=' p-3 lg:p-5'>
    <div>
        <img src={D1} className='w-full'/>
    </div>
    <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 mt-3 lg:mt-5 text-black font-[700]'>
    {name}
    </h2>
    <div className='mt-2 lg:mt-4 flex items-center justify-between'>
    <span className='bg-[#CCF0F3] text-blue-500 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 rounded lg:text-[16px] lg:leading-7 font-semibold'>
    {speselize}
    </span>
    </div>
    <div className='flex items-center gap-[6px]'>
     <span className='flex items-center text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-black '>
     <img/>
     {rating}
     </span>
    </div>
    <div className=' mt-[18px] lg:mt-5 flex items-center justify-between '>
    <p className='text-[14px] leading-6 text-gray-500 font-[400] mt-4'>At {hospital}</p>
    </div>
    <Link to='/Doctors/:id' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-violet-800 hover:border-none'>
          <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
    </Link>
  </div>
  )
}

export default DoctorCard
