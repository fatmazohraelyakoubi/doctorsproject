import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import linkedin from '../assests/linkedin.jpg'
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
  },
  
]
const Header = () => {
  return (
    <header className='header flex items-center shadow-2xl mt-[10px]  mb-[10px]'>
      <div className='container'>
      <div className='flex items-center justify-between '>
        {/* logo */}
        <div>
        <img src='' alt='logo'/>
        </div>
        {/* menu */}
        <div className='navigation '>
        <ul className='menu flex items-center justify-center gap-[2.7rem] '>
        {navLink.map((link,index)=>
        <li key={index}>
        <NavLink to={link.path}
        className={navClass=>navClass.isActive
        ?"text-violet-800 text-[16px] leading-7 font-[600]"
        :"text-gray-500 text-[16px] leading-7 font-[500] hover:text-violet-800"
        }
        >
        {link.display}
        </NavLink>
        </li>
        )}
        </ul>
        </div>
        {/* nav right */}
        <div className='flex items-center gap-4'>
        <div className='hidden'>
         <Link to='/'>
         <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
         <img src={linkedin} alt='' className='w-full rounded-full'/>
         </figure>
         </Link>
        </div>
        {/* login */}
        <Link to='/Login'>
        <button className='bg-violet-800 py-2 px-6  text-white font-[600] h-[44px] 
        flex items-center cursor-pointer justify-center rounded-[50px] hover:bg-violet-900'>
          Login
        </button>
        </Link>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
