import React from 'react'
import DoctorCard from './DoctorCard'
// manba3d na7ia
import Doctors from './Doctors'

const DoctorsList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
    {Doctors.map(doctors=> <DoctorCard doctors={doctors}  key={doctors.id}/>)
      }
  </div>
  )
}

export default DoctorsList
