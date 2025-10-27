import React, { useState } from 'react'

const Newsletter = () => {
  return (
    <section className='text-center py-24 space-y-10'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[45px] font-[poppins] font-semibold'>Join Our Community</h1>
            <p className='text-gray-500 font-[poppins]'>Enter your email address to register to our
            newsletter subscription delivered on regular basis!</p>
        </div>
        <p id='newsMessage' className='text-gray-500 mt-0 font-[poppins] hidden'>Thanks for contacting us! We will be in touch with you shortly.</p>
        <form action=""
        className='flex justify-center gap-5'>
            <div 
            className='border-[1px] w-[350px] h-[50px]'
            >
            <input
            id='emailInput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[100%] h-[100%] indent-3 outline-none'
            type="text" placeholder='Enter your email' />
            </div>
            <button 
            className='bg-[#Ff9635] hover:bg-[#01768e] p-2 
            w-[180px] rounded-full font-[poppins] text-white 
            font-semibold text-[14px] tracking-widest
            transition-all duration-200 ease-in'
            id='btn'
            >    
            SUBSCRIBE</button>
        </form>
        <span id='message' className='text-red-700'></span>
    </section>
  )
}

export default Newsletter;