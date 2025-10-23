import React from 'react'
import { Link } from 'react-router-dom'

function Funds() {
  return (
    <div className='containner pt-20 pr-10'>
      <div className="row ">
              <div className="funds flex flex-row items-end justify-end  pl-20 gap-2">
                <p className='text-zinc-500 mb-3'>Instant, zero-cost fund transfers with UPI</p>
                <Link className="btn bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded py-1 px-3">Add funds</Link>
        <Link className="btn bg-blue-500 text-white rounded py-1 px-3 hover:bg-blue-600 cursor-pointer">Withdraw</Link>
              </div>

              <div className="row1 flex flex-col md:flex-row justify-between items-center">
                <div className="col1 pt-10">
                  <span className='text-2xl font-mono text-zinc-500'><p>Equity</p></span>

                  <div className="table border border-zinc-300 text-center pl-3 pr-10 py-10 mt-5">
                    <div className="data flex flex-row gap-4 justify-between">
                       <p>Available margin</p>
              <p className="">4,043.10</p>
                    </div>
                    <div className="data flex flex-row gap-4 justify-between">
                       <p>Used margin</p>
              <p className="">3,757.30</p>
                    </div>
                    <div className="data flex flex-row gap-4 justify-between">
                       <p>Available cash</p>
              <p className="">4,043.10</p>
                    </div>
                    <hr  className='w-full text-zinc-300 my-3'/>
                    <div className="data flex flex-row gap-4 justify-between">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr  className='w-full text-zinc-300 my-3'/>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data flex flex-row gap-4 justify-between">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
                  </div>
                </div>

                <div className="col2">
          <div className="commodity">
            <p className='text-zinc-500 mb-4'>You don't have a commodity account</p>
            <Link className="btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer">Open Account</Link>
          </div>
        </div>
              </div>
      </div>

    </div>
  )
}

export default Funds