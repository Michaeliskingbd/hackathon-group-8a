import React from 'react'
import { useState } from 'react';

const FaqItem = () => {
const [openIndex, setOpenIndex] = useState(null);

   
  const faqs = [
     { question: "Who Should Take an Online Course?", answer: "Anyone!" },
    { question: "How Do I Access My Course?", answer: "Through your email" },
    { question: "Are There Prerequisites or Language Requirements?", answer: "Check the course page" },
    { question: "Can I take more than One Course at a Time?", answer: "Yes" },
    { question: "My Payment Did Not Go Through. What Do I do?", answer: "Through your email" },
    { question: "How Does Online Learning Work", answer: "Through your email" },
]

const Click = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='flex gap-12'>
     <div className='mt-36 px-8'>
       <p className='text-black font-bold text-l mb-3'>Have Any Questions?</p>
       <h1 className='text-black text-5xl font-bold mb-6'>FAQ's</h1> 
       <h5>Lorem ipsum dolor sit amet, consectetur <br/>
         adipisicing elit, sed do eiusmod.</h5>
    </div>

    <div className='mt-36 flex-1 px-8'>
       {faqs.map((faq, index) => {
         const isOpen = openIndex === index;
    return (
            <div key={index} className="bg-slate-100 shadow-md px-24 py-4 mb-2  rounded">
            <button  onClick={() => Click(index)}
            className="w-full text-left flex items-center justify-between">
                {faq.question}
            </button>
            
          {isOpen && (
              <div className="mt-2 text-black">
                {faq.answer}
              </div>
            )}
            </div>
    );

})}

    </div>
    </section>
    
  )
};

export default FaqItem;