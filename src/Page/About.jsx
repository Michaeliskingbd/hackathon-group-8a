import React from 'react'
import Navbar from '../components/Navbar';
import AboutInfo from '../components/AboutInfo';
import Founder from '../components/Founder';
import Vision from '../components/Vision';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import BgAttachment from '../components/BgAttachment';

const About = () => {
  return (
     <section className='bg-[#ecf0f2] selection:bg-[#Ff9635] selection:text-black '>
      <Navbar />
      <AboutInfo />
      <Founder />
      <BgAttachment />
      <Vision />
      <Features />
      <Newsletter />
      <Footer />
      <Copyright />
    </section>
  )
}

export default About;