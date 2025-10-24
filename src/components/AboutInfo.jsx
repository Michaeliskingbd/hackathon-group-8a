import React from 'react'

const AboutInfo = () => {
  return (
    <section className=' py-[80px] px-8'>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-[40px] font-semibold font-[poppins]'>What We're All 
                    <br /> About</h1>
            </div>
                <div style={{borderRight: "2px solid #Ff9635", height:"100px"}}></div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua. Ut enim ad minim.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutInfo;