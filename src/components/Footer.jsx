import React from 'react'
import Logo2 from "../assets/Logo2.png"
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white px-8 pt-10 pb-14 flex justify-between'>
        <div className='flex flex-col justify-between'>
            <img src={Logo2} alt="logo-retina" width={150}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <div className='flex gap-4'>
                <span className='text-lg hover:text-[#Ff9635] cursor-pointer transition-all duration-150 ease-in'><FaFacebook /></span>
                <span className='text-lg hover:text-[#Ff9635] cursor-pointer transition-all duration-150 ease-in'><FaTwitter /></span>
                <span className='text-lg hover:text-[#Ff9635] cursor-pointer transition-all duration-150 ease-in'><FaPinterest /></span>
                <span className='text-lg hover:text-[#Ff9635] cursor-pointer transition-all duration-150 ease-in'><FaYoutube /></span>
            </div>
        </div>

        <div>
            <h1 className='mb-5 font-semibold font-[poppins] text-[20px] text-[#22323d]'>Popular Courses</h1>
            <ul>
                <li className='cursor-pointer hover:text-[#007991] transition-all duration-150 ease-in'>LMS Interactive Content</li>
                <li className='cursor-pointer hover:text-[#007991] transition-all duration-150 ease-in'>Become a PHP Master</li>
                <li className='cursor-pointer hover:text-[#007991] transition-all duration-150 ease-in'>HTML5/CSS3 Essentials</li>
                <li className='cursor-pointer hover:text-[#007991] transition-all duration-150 ease-in'>JavaScript Development</li>
                <li className='cursor-pointer hover:text-[#007991] transition-all duration-150 ease-in'>WordPress Basic Tutorial</li>
                <li className='cursor-pointer hover:text-[#007991] transition-all duration-150 ease-in'>Introduction to Coding</li>
            </ul>
        </div>

        <div>
           <h1 className='mb-5 font-semibold font-[poppins] text-[20px] text-[#22323d]'>Contact Info</h1>
           <ul>
            <li className='font-semibold font-[poppins] text-[#22323d]'>Address</li>
            <li>123 Fifth Avenue, New York, NY 10160</li>
            <li className='font-semibold font-[poppins] text-[#22323d]'>Phone</li>
            <li>929-242-6868</li>
            <li className='font-semibold font-[poppins] text-[#22323d]'>Email</li>
            <li>contact@info.com</li>
           </ul>
        </div>
    </footer>
  )
}

export default Footer;