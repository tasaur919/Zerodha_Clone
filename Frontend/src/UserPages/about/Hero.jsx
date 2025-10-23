import React from 'react'

function Hero() {
  return (
    <div className='containner p-5 mt-5 px-10'>
     <div className="row flex justify-center items-center text-3xl font-bold">
      <h1 className='text-center py-16'> We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.</h1>
     </div>
     <hr  className='mb-10 text-zinc-200'/>
     <div className="bottom flex flex-col md:flex-row gap-10  ">
      <div className="up gap-8  flex flex-col">
        <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
      </div>
      <div className="down gap-4  flex flex-col ">
         <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" className='text-blue-500 hover:underline' >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
      </div>
     </div>
     <hr  className='my-10 text-zinc-200 '/>
    </div>
  )
}

export default Hero