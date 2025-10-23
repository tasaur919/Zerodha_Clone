import React from 'react'
import Hero from './Hero'
import CreateTicket from './CreateTicket'
function SupportPage() {
  return (
    <>
    <div className='overflow-y-scroll mt-22'>
    <Hero/>
    <CreateTicket/>
    </div>
    </>
  )
}

export default SupportPage