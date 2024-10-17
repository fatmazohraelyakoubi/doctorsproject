import React from 'react'
import NavbarDoctor from './NavbarDoctor'
import TobbarDoctor from './TobbarDoctor'
import { Outlet } from 'react-router-dom'

const LayoutDoctor = () => {
  return (
    <>
      <NavbarDoctor/>
      
      <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900'>
      <TobbarDoctor/>
      <main className='mt-[50px]'>
       <Outlet/>
       </main>
      </div>
    
    </>
  )
}

export default LayoutDoctor
