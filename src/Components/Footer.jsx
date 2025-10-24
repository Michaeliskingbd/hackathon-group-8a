import React from 'react'
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className=''>
        <ul className='lg:h-[400px] lg:flex gap-3  justify-between white lg:p-32 p-10 px-3 lg:text-left text-center h-screen'>
            <li className='lg:flex flex-col gap-10'>
              <img className='w-36 lg:m-0 m-auto' src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png" alt="" />
            <p className='lg:w-[500px] lg:text-left text-center lg:text-[17px] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <div className='flex gap-2 lg:pl-0 pl-[150px]'>
               <FaFacebook /> 
              <FaTwitter />  
              <FaPinterest />
              <FaYoutube />
            
            </div>
            
            </li>
            <ul className='lg:flex flex-col'>
            <li className='font-semibold text-2xl '>Popular Courses</li>
            <div className='lg:pt-6 pt-2'>
            <li className='hover:cursor-pointer hover:text-[#007991]'>LMS Interactive Content</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>Become a PHP Master</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>HTML5/CSS3 Essentials</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>JavaScript Development</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>WordPress Basic Tutorial</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>Introduction to Coding</li>
            </div>
            </ul>
            <ul className=''>
            <li className='font-semibold text-2xl'>Contact Info</li>
            <div className='lg:pt-6 pt-2'>
            <li className='font-semibold'>Address</li>
            <li>123 Fifth Avenue, New York, NY 10160</li>
            <li className='font-semibold'>Phone</li>
            <li>929-242-6868</li>
            <li className='font-semibold'>Email</li>
            <li>contact@info.com</li>
            </div>
            </ul>
        </ul>
        
       
       
    
    </footer>
     <div className='border-[0.1px] border-t-0 mb-5'></div>
        <div className='lg:flex justify-around h-10 px-3'> 
        <p>copyright&copy; 2025</p>
        <span>Powered by Appclick students julycohort</span>
        </div>
        </>
  )
}

export default Footer;