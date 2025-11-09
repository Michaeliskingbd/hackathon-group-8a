import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Instruct = () => {
  return (
    <section className='bg-gray-200'>
        <div className='relative bg-[url(https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-04-free-img.jpg)] h-[420px] lg:bg-center bg-cover rounded-br-[200px]  '>
        <div className='absolute inset-0 bg-[#007991] opacity-80 rounded-br-[200px] '>

        </div>
       
   
    <nav className='flex justify-between p-6 items-center'>
        <div className='lg: z-50 pl-0 '>
            <img className='lg:w-32 w-24' src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-retina-free-img.png" alt="" />
            </div>
        <div className='z-50'>
            <ul  className='lg:flex space-x-8 pl-40 text-white hidden '>
             <li>Home</li>
             <li>All Courses</li>
             <li>About Us </li>
             <li>Instructors</li> 
             <li>Prices & FAQ</li>
             <li>Contact</li> 
            </ul>
        </div>
        <div className='z-50'>

           
            <button className='bg-orange-500 hover:bg-[#007991] transition-all duration-300 ease-in text-white rounded-3xl h-12 lg:w-48 w-[120px] font-semibold lg:flex hidden px-8 py-3 '>START LEARNING</button>
            <button className='lg:hidden mr-5 flex justify-end items-end  text-white bg-orange-400'><GiHamburgerMenu className='p-1 text-3xl' />
        </button>
        </div>
    </nav>
     <div className='lg:m-16 m-0 lg:pl-20 pl-7 lg:pt:0 pt-11 flex flex-col gap-5 z-50'>
        <h1 className='font-bold lg:text-8xl text-2xl text-white z-50'>Instructors</h1>
        <p className='text-white lg:w-[500px] w-68 z-50'>At the heart of our e-learning platform is a group of passionate educators and real industry experts who brng real-world experience into every lesson.
</p>
        </div>
    </div>
    
    </section>
  )
}

export default Instruct;