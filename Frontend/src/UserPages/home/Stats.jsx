import React from 'react'
import ecosystem from '../../All_Img/images/ecosystem.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Stats() {
  return (
    <div className='containner p-5 mt-5'>
         <div className="row flex flex-col gap-10 md:flex-row px-10">
          <div className="leftSection">
            <h1 className='text-3xl font-bold mb-8'>Trust with confidence</h1>
            <h2 className='text-2xl font-bold mb-3'>Customer-first always</h2>
            <p className='mb-8 text-gray-500'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.</p>
            <h2 className='text-2xl font-bold mb-3'>No spam or gimmicks</h2>
            <p className='mb-8 text-gray-500'> No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.</p>
            <h2 className='text-2xl font-bold mb-3'>The Zerodha universe</h2>
            <p className='mb-8 text-gray-500'> Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.</p>
            <h2 className='text-2xl font-bold mb-3'>Do better with money</h2>
            <p className='mb-1 text-gray-500'>With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.</p>
          </div>
          <div className="rightSection">
            <img src={ecosystem} alt=""  className='w-[90%]'/>
            <div className='changelink flex flex-row justify-evenly items-center mt-3 text-blue-500 gap-10'>
                  <a href="#"> Explore our products <ArrowRightAltIcon/></a>
                  <a href="#">Try Kite demo  <ArrowRightAltIcon/></a>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Stats