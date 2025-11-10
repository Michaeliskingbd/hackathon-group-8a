import React, { useState } from 'react'

const Assignment = () => {
    const submit = (e) => {
        e.preventDefault();
        alert("submission successful")
    }
     
  return (
   <form onClick={submit} className='flex flex-col gap-5'>
    <input required className='w-72 indent-3 h-11 border-2 border-black' type="url" placeholder='paste your assignment link here' />
    <button className='px-4 py-2 rounded-lg bg-green-400 text-center w-fit'> Submit</button>
   </form>
  )
}

export default Assignment;