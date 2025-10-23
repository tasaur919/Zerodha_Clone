import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className='containner p-5 mt-5 px-10'>
             <div className="row  flex flex-col justify-center items-center leading-8 gap-4">
              <h1 className='text-3xl font-bold'>Technology</h1>
              <h3 className='text-[18px] text-zinc-500'>Sleek, modern and intuitive trading platforms</h3>
              <p>Check out our <Link to="" className='text-blue-500'> investment offerings<ArrowRightAltIcon /></Link></p>
             
             </div>
             <hr className='text-zinc-200 mt-16'/>
    </div>
  )
}

export default Hero