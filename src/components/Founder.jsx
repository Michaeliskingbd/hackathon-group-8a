import React from 'react'
import divider from "../assets/divider.jpg"

const Founder = () => {
  return (
    <section className='flex gap-12 items-center'>
        <div>
            <img src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/about-01-free-img.jpg"
            width={750}
            alt="Founder Image" />
        </div>

        <div className='space-y-2'>
            <h1 className='font-[poppins] text-[35px] font-semibold'>Learn Something <br />
            Every Day</h1>
            <img src={divider} width={80} alt="divider" />
            <p className='font-[roboto]'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
            commodo consequat. Duis aute irure dolor in reprehenderit <br />
            in voluptate velit esse cillum dolore eu fugiat.</p>
            <h2 className='font-semibold font-[poppins] text-[20px]'>Bobby Harris</h2>
            <p className='font-semibold'>Founder</p>
            <img src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/signature-free-img.png" 
            width={70}
            alt="Signature" />
        </div>
    </section> 
  )
}

export default Founder;