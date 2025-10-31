import React from 'react'
import { FaCaretRight } from 'react-icons/fa';


const CardSection = ({img, course, name, about, contact}) => {
  return (
    <article className=''>
      <div className='border-2 border-y-gray-300 rounded-2xl w-[350px] h-[400px] '> 
      <img className='rounded-2xl w-[400px] h-[200px]' src={img} alt="" />
      <div className='p-4 space-y-2'>
      <h2 className='font-semibold'>{course}</h2>
      <h1 className='font-semibold text-2xl'>{name}</h1>
      <span className='w-[70px]'>{about}</span>
      <p className='text-orange-400 hover:cursor-pointer flex items-center'><FaCaretRight />{contact}</p>
      </div>
      </div>
    </article>
  )
}

export default CardSection;