import React from 'react'
import largestBroker from '../../All_Img/images/largestBroker.svg'
import presslogo from '../../All_Img/images/pressLogos.png'
function Awards() {
  return (
    <div className='containner p-5 mt-5'>
      <div className="row w-full flex flex-col md:flex-row  gap-5 py-10  px-10 justify-evenly items-center">
        <div className='md:w-[50%] w-full sm:mt-10'>
          <img src={largestBroker} alt=""  />
        </div>
        <div className=" px-10 md:w-[50%] w-full ">
          <h1 className='text-3xl font font-semibold font-serif mb-8'>Largest stock broker in India</h1>
          <p className='flex flex-wrap  font-serif mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p>
          <div className=' text-blue-500 font-serif flex grid-cols-2 md:gap-24 mt-5  sm:grid-cols-1' >
            <ul className='list-disc flex flex-col gap-3 mt-2 '>
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
          <ul className='list-disc flex flex-col gap-3 mt-2  '>
            <li>Stocks & IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and G</li>
          </ul>
          </div>
          <img src={presslogo} alt="" className='mt-8 w-[80%] text-8xl' />
        </div>
      </div>

    </div>
  )
}

export default Awards