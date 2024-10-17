import React from 'react'
import {FaTachometerAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NavbarDoctor = () => {
  return (
    <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-blue-800 '>
     <h1 className='mt-10 ml-12 text-2xl font-bold hidden md:block'>
     Logo
     </h1>


     <ul className='flex flex-col mt-5 text-xl'>
        
      <Link to='das'>
        <li className='flex items-center py-3 px-2 space-x-4 mt-10 cursor-pointer bg-violet-800
         rounded-xl hover:text-white'>
       <FaTachometerAlt/>
      <span className='hidden md:inline'>
        Dashboard
      </span>
      </li>
      </Link>
      

      <Link to='pf'>
      <li className='flex items-center py-3 px-2  space-x-4 mt-5  cursor-pointer hover:bg-violet-800
       rounded-xl hover:text-white'>
      <FaTachometerAlt/>
      <span className='hidden md:inline'>
       Profile
      </span>
      </li>
      </Link>
      
      <Link to='or'>
      <li className='flex items-center py-3 px-2  space-x-4 mt-5  cursor-pointer hover:bg-violet-800
       rounded-xl hover:text-white'>
      <FaTachometerAlt/>
      <span className='hidden md:inline'>
       Ordonance
      </span>
      </li>
      </Link>

       
      <Link to="pt">
      <li className='flex items-center py-3 px-2  space-x-4 mt-5  cursor-pointer hover:bg-violet-800
       rounded-xl hover:text-white'>
      <FaTachometerAlt/>
      <span className='hidden md:inline'>
       all Patients
      </span>
      </li>
      </Link>
      
       
       <Link to='/Login'>
       <li className='flex items-center py-3 px-2  space-x-4 mt-5  cursor-pointer hover:bg-violet-800
       rounded-xl hover:text-white'>
      <FaTachometerAlt/>
      <span className='hidden md:inline'>
       Logout
      </span>
      </li>
       </Link>
     
       

     </ul>
    </div>
  )
}

export default NavbarDoctor
