import React from 'react'
import homeHero from '../../All_Img/images/homeHero.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='containner p-5  mb-5'>
      <div className="row text-center items-center flex flex-col justify-center">
        <img src={homeHero} alt="Hero Image" className='mb-5' />
        <h1 className='font-bold text-3xl  font-serif'>Invest in everything</h1>
        <p className='mt-5 font-serif'>Online plateform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className='md:w-[20%] w-[40%] cursor-pointer bg-blue-500 text-white font-bold rounded py-2 mt-4 font-serif hover:bg-blue-600 mb-10'><Link to={'/signup'}>Signup now</Link></button>
      </div>
    </div>
  )
}

export default Hero