import React from 'react'
import { BsDot } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

const Profile = () => {
  return (
    <section>
          <div className=' bg-gray-100 flex flex-[25%] w-[100%] flex-col  pl-8 text-black'>
      
       <div className='flex flex-col mx-32 items-center justify-center'>
        <div className='relative border-2 border-black rounded-full size-28 mt-11'>
            <FaRegUser className='absolute top-8 right-10 text-4xl' />
        </div>
        <div className='px-4 mt-3 flex flex-col gap-2 text-black text-3xl font-semibold'>
        <span>Jane Doe</span>
        <p>Student</p>
        </div>
       </div>

       <div className='flex flex-col mt-8 '>
        <div className='flex justify-between p-7'>
            <p>Date of Birth</p>
            <span>04-04-2005</span>
        </div>
        
        <div className='flex justify-between p-7'>
            <p>Phone Number</p>
            <span>+91867782</span> 
        </div>

        <div className='flex justify-between p-7'>
            <p>Religion</p>
            <span>Christian</span>
        </div>

        <div className='flex justify-between p-7'>
            <p>email</p>
            <span>janedoe@gmail.com</span>
        </div>
        
        
        

       </div>
    </div>
    </section>
  )
}

export default Profile;