import React from 'react'
import user from '../../All_Img/images/user.jpg'
import { Link } from 'react-router-dom'
function Team() {
  return (
    <div className='containner p-5 mt-5 px-10'>
     <div className="row flex justify-center items-center text-3xl font-bold">
      <h1 className='text-center py-4 mb-10'> People</h1>
     </div>
     
     <div className="bottom flex flex-col md:flex-row gap-10 mb-16 ">
      <div className="left gap-4  flex flex-col justify-center items-center">
        <img src={user} alt="" className='w-[50%] h-[60%] md:h-[70%] md:w-[25%] rounded-full'/>
        <h4 className='font-bold text-2xl text-center'>Tasauvar Ansari</h4>
        <h6 className='font-thin text-center'>Founder, CEO </h6>
      </div>
      <div className="down gap-4  flex flex-col ">
         <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to={'/'} className='text-blue-500 hover:underline'>Homepage</Link> / <a href="" className='text-blue-500 hover:underline'>TradingQnA</a> /{" "}
            <a href="" className='text-blue-500 hover:underline'>Twitter</a>
          </p>
      </div>
     </div>
     
    </div>
  )
}

export default Team