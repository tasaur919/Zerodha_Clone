import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAcount from '../../Component/OpenAcount'

function HomePage() {
  return (
    <>
    <div className='overflow-y-scroll mt-22 px-2'>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAcount/>
    </div>
    </>
  )
}

export default HomePage