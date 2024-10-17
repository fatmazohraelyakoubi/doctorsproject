import React from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const socailicons=[
  {
  path:"",
  icon:<AiFillYoutube className='group-hover:text-white w-4 h-5 '/>,
},
{
  path:"",
  icon:<AiFillGithub className='group-hover:text-white w-4 h-5 '/>,
},
{
  path:"",
  icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5 '/>,
},
{
  path:"",
  icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5 '/>,
},
]
const navLink=[
  {
    path:'/home',
    display:'Home',
  },
  {
    path:'/Doctors',
    display:'Doctors',
  },
  {
    path:'/Cantact',
    display:'Cantact',
  },
  {
    path:'/Services',
    display:'Services',
  },]
const Fouter = () => {
  const year=new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
       <div className='max-w-full w-[1440px] px-5 mx-auto'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            {/* <img src='' alt='logo'/> */}
            <p className='text-[16px] leading-7 font-[400] mt-4'>Copyright ¤ {year} By fatmazahra</p>
            <div className='flex items-center gap-3 mt-4'>
            {socailicons.map((link,index)=>(
              <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-violet-800 hover:border-none '>
               {link.icon}</Link>
            ))}
          </div>
          </div>
          
        </div>
       </div>
    </footer>
  )
}
export default Fouter













