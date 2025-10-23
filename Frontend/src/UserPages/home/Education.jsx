import React from 'react'
import education from '../../All_Img/images/education.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Education() {
  return (
    <div className='containner p-5 mt-5'>
      <div className="row flex flex-col md:flex-row w-full gap-8 mt-10 justify-center items-center">
        <div className="left  md:w-[50%]  w-[90%]">
          <img src={education} alt="" />
        </div>
        <div className="right md:w-[50%] w-[80%] ">
          <h1 className='text-3xl mb-10 font-bold'>Free and open market education</h1>
          <p className='mb-4'>Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.</p>
            <a href="" className='text-blue-500'> Versity  <ArrowRightAltIcon/></a>
            <p className='mt-16 mb-4'>TradingQ&A, the most active trading and investment community in
            India for all your market related queries.</p>
            <a href="" className='text-blue-500'>  TradingQ&A<ArrowRightAltIcon/></a>
        </div>
      </div>
      
    </div>
  )
}

export default Education