import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <section style={{borderBottomRightRadius: "150px"}} className='relative bg-[url(https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2021/03/bg-07-free-img.jpg)] h-[430px] bg-cover bg-center'>
        <div style={{borderBottomRightRadius: "150px"}} className='bg-[#007991] absolute inset-0 opacity-85'></div>
        <nav className="flex justify-between items-center py-3 px-8 z-50">
            <div className='z-[1000]'>
                <img src={Logo} 
                className='cursor-pointer'
                width={150}
                alt="Logo"/>
                
            </div>

            <div className='flex gap-6 z-50'>
                <ul className='flex gap-7 items-center text-white font-[roboto] text-[16px]'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>All Courses</li>
                    <li className='cursor-pointer'>About Us</li>
                    <li className='cursor-pointer'>Instructors</li>
                    <li className='cursor-pointer'>Pricing & FAQ</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                
                <button 
                className='bg-[#Ff9635] p-3 w-[200px] font-bold transition-all duration-[0.2s] ease-in
                 text-white font-[roboto] rounded-full text-sm hover:bg-[#01768e] tracking-widest'
                >START LEARNING
                </button>
            </div>
        </nav>


        {/*Hero Section*/}
        <section className='px-8 pt-[83px] relative text-white'>
            <h1 className='z-[1000] font-[poppins] font-semibold text-[80px] mb-2'>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br />
            ullamcorper mattis, pulvinar dapibus leo.</p>
        </section>
    </section>
  )
}

export default Navbar;

