import React from 'react'
import d2 from '../assests/d2.jpg'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
// import ServicesList from '../services/ServicesList';
import D1 from '../assests/D1.jpg'
// import DoctorsList from '../doctors/DoctorsList';
import Testimentails from '../testimentails/Testimentails';
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
const Home = () => {
  return (
    <>
    
      <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='max-w-full w-[1440px] px-5 mx-auto'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
      {/* hero content */}
      <div>
        <div className='lg:w-[570px]'>
          <h1 className='text-[36px] leading-[46px] font-[800] md:text-[60px] text-black md:leading-[70px] pl-[120px]'>
             we  
            <span className='text-violet-800'> help your child</span>{" "}
               for best smile.
          </h1>
          <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500 pl-[120px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
          dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
          euismod non, mi.
          </p>
          <div className='pl-[120px]'>
          <button className='bg-violet-800 py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px] hover:bg-violet-900 '>
          Get Started
          </button>
          </div>
         
        </div>
        {/* hero counter */}
        <div className='pl-[120px] mt-[20px] lg:mt-[30px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
        <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black'>
          11+
          </h2>
          <span className='w-[100px] h-2 bg-yellow-600 rounded-full block mt-[-14px]'/>
          <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500 '>Years of Experiences</p>

          
        </div>


        <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black'>
          30+
          </h2>
          <span className='w-[100px] h-2 bg-lime-700 rounded-full block mt-[-14px]'/>
          <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500 '>Clinick location</p>
        </div>



        <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black'>
          17+
          </h2>
          <span className='w-[100px] h-2 bg-orange-600 rounded-full block mt-[-14px]'/>
          <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500 '>Patient Satisfaction</p>

          
        </div>


        </div>
      </div>
      {/* hero content */}
      <div className='flex gap-[30px]  justify-end '>
      <div>
      <img src={d2} className='w-full rounded-tl-[146px] shadow-2xl'/>
      </div>
      </div>
      </div>
      </div>
      </section>

      <section>
        <div className='max-w-full w-[1440px] px-5 mx-auto'>
        <div className='lg:w-[470px] mx-auto'>
         <h2 className='text-center text-black text-[35px] mt-[52px] font-[600]' >
         Providing the <span className='text-violet-800'> Best Middical</span>   Services
         </h2>
         <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500'>
         Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
         </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
         <div className='py-[30px] px-5'>
         <div className='flex items-center justify-center'>
         <FaUsersViewfinder className=' w-[47px] h-[47px]'/>
         </div>
         <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>Find A Doctors </h2>
          <p className='text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center'>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
          </p>
          <Link to='/Doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-violet-800 hover:border-none'>
          <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
          </Link>
         </div>


         </div>
         {/* !!!!!!!!!!!!!!!!! */}
         <div className='py-[30px] px-5'>
         <div className='flex items-center justify-center '>
         <GiArchiveRegister  className=' w-[47px] h-[47px]'/>
         </div>
         <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>Register</h2>
          <p className='text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center'>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
          </p>
          <Link to='/Doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-violet-800 hover:border-none'>
          <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
          </Link>
         </div>


         </div>
         {/* ********* */}
         <div className='py-[30px] px-5'>
         <div className='flex items-center justify-center '>
         <FaMapLocationDot className=' w-[47px] h-[47px]'/>
         </div>
         <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>Find A Location</h2>
          <p className='text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center'>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
          </p>
          <Link to='/Doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-violet-800 hover:border-none'>
          <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
          </Link>
         </div>


         </div>
        </div>
        </div>
      </section>

      <section>
        <div className='max-w-full w-[1440px] px-5 mx-auto'>
         <div className='xl:w-[470px] mx-auto'>
          <h2 className='text-center text-black text-[35px] mt-[52px] font-[600]'>
          Our midical Services
          </h2>
          <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500'>
         Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
         </p>
         
         </div>
         {/* <ServicesList/> */}
        </div>
      </section>

      <secton>
        <div className='max-w-full w-[1440px] px-5 mx-auto'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            <div className='xl:w-[670px]'>
              <h2 className='text-center text-black text-[35px] mt-[52px] font-[600] '>
                Get vertiualle traitment
                <br/>
               any time
              </h2>
              <ul className='pl-4'>
                <li className='text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center'>
                1.Lorem ipsum dolor sit amet, consectetur
                 
                </li>
                <li className='text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center'>
                2.Lorem ipsum dolor sit amet, consectetur
                 
                </li>
                <li className='text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center'>
                3.Lorem ipsum dolor sit amet, consectetur
                 
                </li>
                <li className='text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center'>
                4.Lorem ipsum dolor sit amet, consectetur
                </li>
              </ul>
              <div className='pl-[120px]'>
              <Link to='/'>
              <button className='bg-violet-800 py-[15px] px-[35px] rounded-[50px] text-white font-[600] ml-[120px] mt-[38px] hover:bg-violet-900 '>
               Learn More 
             </button>
              </Link>
                </div>
            </div>
            <div className='relative z-10 xl:w-[400px] flex justify-end mt-[50px] lg:mt-0 '>
             <img src={D1} alt='' className='mr-[200px] mt-[70px] rounded-lg shadow-2xl' />
            </div>
            {/* w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5
             z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] */}
            {/* <div className=' w-[150px] g:w-[248px] bg-black absolute  z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
             <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[6px] lg:gap-3'>
               <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[600] '>Tue,2</p>
               <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-gray-700 font-[400] '>Tue,2</p>
              </div>
             </div>
            </div> */}
          </div>
        </div>
      </secton>

      <section>
  <div  className='max-w-full w-[1440px] px-5 mx-auto'>
  <div className='lg:w-[470px] mx-auto'>
         <h2 className='text-center text-black text-[35px] mt-[52px] font-[600]' >
        Our <span className='text-violet-800'> Great</span> Doctors
         </h2>
         <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500'>
         Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
         </p>
        </div>
        {/* <DoctorsList/> */}
  </div>
      </section>
 
      <section>
  <div className='max-w-full w-[1440px] px-5 mx-auto'>
  <div className='lg:w-[470px] mx-auto'>
         <h2 className='text-center text-black text-[35px] mt-[52px] font-[600]' >
        What our patients say
         </h2>
         <p className='text-[18px] leading-[30px] font-[400] mt-[18px] text-gray-500'>
         Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
         </p>
        </div>
        <Testimentails/>
  </div>
      </section>


    </>
  )
}

export default Home
