import React from 'react'

const Instruct = () => {
  return (
    <section className='bg-gray-200  '>

        <div className='relative bg-[url(https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-04-free-img.jpg)] h-[420px] bg-center bg-cover rounded-br-[200px]  '>
        <div className='absolute inset-0 bg-[#007991] opacity-80 rounded-br-[200px] '></div>
       
   
    <nav className='flex justify-between p-6 '>
        <div className='pl-36 z-50'>
            <img className='w-32 ' src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-retina-free-img.png" alt="" />
            </div>
        <div className='z-50'>
            <ul  className='lg:flex space-x-8 pl-40 text-white hidden'>
             <li>Home</li>
             <li>All Courses</li>
             <li>About Us </li>
             <li>Instructors</li> 
             <li>Prices & FAQ</li>
             <li>Contact</li> 
            </ul>
        </div>
        <div className='pr-36 z-50'>

            <button className='bg-orange-500 hover:bg-[#007991] transition-all duration-300 ease-in text-white rounded-3xl h-12 lg:w-48 w-[120px] font-semibold'>START LEARNING</button>
        </div>
    </nav>
     <div className='lg:m-16 m-0 lg:pl-20 pl:0 flex flex-col gap-5 z-50'>
        <h1 className='font-bold lg:text-8xl text-2xl text-white z-50'>Instructors</h1>
        <p className='text-white lg:w-[500px] z-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
</p>
        </div>
    </div>
    
    </section>
  )
}

export default Instruct;