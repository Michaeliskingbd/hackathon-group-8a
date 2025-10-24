import React from 'react'
import Card from '../utils/Card';

const Membership = () => {
   const memberships = [
    {
      title: "Monthly",
      price: 49,
      duration: "Month",
      features: ["Course Learning Checks", 
                 "Course Discussion",
                 "Excercise Files",
                 "Offline Viewing",
                  "Full Lifetime Access",
                "Certificate of Completion"],
      buttonText: "Purchase",
      textColor: "text-black",
      bgColor: "bg-white",
    },
    {
      title: "Annual",
      price: 485,
      duration: "Year",
      features: ["Course Learning Checks", 
                 "Course Discussion",
                 "Excercise Files",
                 "Offline Viewing",
                  "Certificate of Completion",
                  "Full Lifetime Access",
               ],
      textColor: "text-white",
      buttonText: "Purchase",
      bgColor: "bg-cyan-700"
    },
    {
      title: "Extended",
      price: 99,
      duration: "Month",
      features: ["Course Learning Checks", 
                 "Course Discussion",
                 "Excercise Files",
                 "Offline Viewing",
                  "Full Lifetime Access",
                "Certificate of Completion"],
      buttonText: "Purchase",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className='bg-slate-100'> 
    <div className='bg-cover bg-center bg-[url(https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-05-free-img.jpg)] rounded-br-[100px]'>
     <div className='bg-cyan-700/85 text-white py-32 px-8 rounded-br-[100px]'>
        <h1 className='text-7xl font-bold mb-8'>Pricing & FAQ</h1>
      <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br/>
         ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </div>
      
    
  <div className='flex mt-20 justify-between text-black px-10'>
    <div>
    <h4 className='text-sm font-bold mb-5'>Become a member</h4>
    <h2 className='text-4xl font-bold'>Membership</h2>
    </div>
    <ul className='text-orange-500 font-bold leading-none ml-32'>
      <li>|</li>
       <li>|</li>
        <li>|</li>
         <li>|</li>
          <li>|</li>
          <li>|</li>
    </ul>
    <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua. Ut enim ad minim.</p>
  </div>

   <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 ">
        {memberships.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            features={plan.features}
            buttonText={plan.buttonText}
            bgColor={plan.bgColor}
            textColor={plan.textColor}
          />
        ))}
      </div>
    </section>

  
  )
}

export default Membership;