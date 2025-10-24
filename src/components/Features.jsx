import React from 'react'
import { FaBook, FaClock, FaCrown } from 'react-icons/fa';

const Features = () => {
  return (
    <section className='relative bg-[url("https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-09-free-img.jpg")]
    bg-cover bg-center bg-fixed'>
      <div className='bg-[#ecf0f2] absolute inset-0 opacity-90'></div>
      <div className='flex relative z-50 justify-between items-center px-8 py-[80px] font-[poppins]'>
        <div className='flex gap-4'>
            <div className='bg-[#Ff9635] flex justify-center h-[40px] w-[40px] items-center rounded-full transition-all
            duration-200 ease-in text-white p-3 text-xl hover:text-slate-500'><span><FaCrown /></span></div>
            <div className='space-y-3'>
            <h1 className='font-semibold text-[18px]'>Learn From Industry Leaders</h1>
            <p className='font-[roboto]'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Ut elit tellus, luctus nec <br />
            ullamcorper.</p>
            </div>
        </div>

        <div className='flex gap-4'>
          <div className='bg-[#Ff9635] flex justify-center h-[40px] w-[40px] items-center rounded-full transition-all
            duration-200 ease-in text-white p-3 text-xl hover:text-slate-500'><span><FaClock /></span></div>    
            <div className='space-y-3'>
            <h1 className='font-semibold text-[18px]'>Learn At Your Own Pace</h1>
            <p className='font-[roboto]'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Ut elit tellus, luctus nec <br />
            ullamcorper.</p>
            </div>
        </div>

       

         <div className='flex gap-4'>
            <div className='bg-[#Ff9635] flex justify-center h-[40px] w-[40px] items-center rounded-full transition-all
            duration-200 ease-in text-white p-3 text-xl hover:text-slate-500'><span><FaBook /></span></div> 
            <div className='space-y-3'>
            <h1 className='font-semibold text-[18px]'>Professional Certification</h1>
            <p className='font-[roboto]'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Ut elit tellus, luctus nec <br />
            ullamcorper.</p>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Features;