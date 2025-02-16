import React, { useState } from 'react'
import {FiMapPin, FiSearch} from 'react-icons/fi'
const Banner = ({query,handleInputChange}) => {
  // const[query,setquery]=useState("");
  // const handleInputChange=(event)=>{
  //     setquery(event.target.value)
  //     console.log(event.target.value)
  //   }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md: py-20 py-14'>
        <h1 className='text-5xl font-bold text-primary mb-3 '>Find your <span className='text-Lavender'>dream job </span> now</h1>
        <p className='text-lg text-primary/70 mb-8'>Explore countless opportunities in IT, marketing, sales, and beyond on our JobHub platform.</p>
        <form>
            <div className='flex justify-start md:flex-row flex-col md:gap-0 gap- 4'>
              <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  md:w-1/2 w-full mt-2'>
                <input type="text" name="title" id="title"placeholder='Enter skills / designations / companies' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:grey-400 focus:right-0 sm:text-sm sm:leading-6'
                onChange={handleInputChange}
                value={query}/>
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
            <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  md:w-1/3 w-full mt-2  '>
                <input type="text" name="title" id="title"placeholder='Job Location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:grey-400 focus:right-0 sm:text-sm sm:leading-6'
                
                />
                <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div> 
            <button type='submit' className='bg-Lavender py-2 px-8 text-white md:rounded-s-none rounded mt-2  '> Search
            </button> 
            </div>
            
        </form>
    </div>
  )
}

export default Banner