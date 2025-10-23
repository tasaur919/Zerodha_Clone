import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import OpenAcount from '../../Component/OpenAcount'

function PricingPage() {
  return (
    <>
    <div className='overflow-y-scroll mt-22'>
    <Hero/>
    <OpenAcount/>
    <Brokerage/>
    </div>
    </>
  )
}

export default PricingPage