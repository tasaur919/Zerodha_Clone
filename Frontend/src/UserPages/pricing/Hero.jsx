import React from 'react'
import pricingEquity from '../../All_Img/images/pricingEquity.svg'
import intradaytrads from '../../All_Img/images/intradayTrades.svg'

function Hero() {
  return (
    <div className='containner p-5 mt-5 px-10'>
      <div className="row1 flex flex-col justify-center items-center">
        <h1 className='text-4xl font-bold mb-4'>Pricing</h1>
        <h3 className='mb-8 text-zinc-500'>Free equity investments and flat ₹20 traday and F&O trades</h3>
      </div>
      <hr className='border-zinc-200 my-10' />
      <div className="row2 flex flex-col md:flex-row justify-evenly items-center gap-10">
          <div className='md:w-[25%] w-full text-center'>
               <img src={pricingEquity} />
          <h1 className="text-2xl font-semibold mb-2">Free equity delivery</h1>
          <p className="text-zinc-500">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
          </div>
          <div className='md:w-[25%] w-full text-center'>
                 <img src={intradaytrads} />
          <h1 className="text-2xl font-semibold mb-2">Intraday and F&O trades</h1>
          <p className="text-zinc-500">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
          </div>

          <div className='md:w-[25%]  w-full text-center'>
                 <img src={pricingEquity} />
          <h1 className="text-2xl font-semibold mb-2">Free direct MF</h1>
          <p className="text-zinc-500">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
          </div>
      </div>
      <hr className='border-zinc-200 my-10' />
    </div>
  )
}

export default Hero