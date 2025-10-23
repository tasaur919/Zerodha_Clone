import React from 'react'
import logo from '../All_Img/images/logo.svg'
function Footer() {
  return (
    <footer>
      <div className="containner bg-zinc-100 px-10">
        <div className="row flex flex-col  md:flex-row py-10 gap-10 justify-center grid-cols-2 md:grid-cols-4">
          <div className="col1 flex flex-col gap-5 md:w-[25%]  ">
            <img src={logo} alt="" className='w-[60%]' />
            <p>&copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col2 leading-4 text-zinc-500 flex flex-col gap-0 md:w-[25%] ">
            <p className='text-black font-[500] mb-4'>Company</p>
            <div className='flex flex-wrap grid-cols-2 md:grid-cols-1 flex-row gap-8 md:flex-col md:leading-0 md:list-none'>
              
            <li><a href="" >About</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Referral programme</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Zerodha.tech</a></li>
            <li><a href="">Press & media</a></li>
            <li><a href="">Zerodha cares (CSR)</a></li>
        
            
            
            </div>
            
          </div>
          <div className="col3 md:w-[25%] leading-4 text-zinc-500 flex flex-col gap-0">
            <p className='text-black font-[500] mb-4'>Support</p>
            <div className='flex flex-wrap grid-cols-2 md:grid-cols-1 flex-row gap-8 md:flex-col md:leading-0 md:list-none'>
            <li><a href="">Contact</a></li>
            <li><a href="">Support portal</a></li>
            <li><a href="">Z-Connect blog</a></li>
            <li> <a href="">List of charges</a></li>
            <li><a href="">Downloads & resources</a></li>
            
          </div>
            
            
            
            
           
            
            
            
          </div>
          <div className="col4 md:w-[25%] leading-4 text-zinc-500 flex flex-col gap-0">
            <p className='text-black font-[500] mb-4'>Account</p>
<div className='flex flex-wrap grid-cols-2 md:grid-cols-1 flex-row gap-8 md:flex-col md:leading-0 md:list-none'>
            <li><a href="">Open an account</a></li>
            <li><a href="">Fund transfer</a></li>
            <li><a href="">60 day challenge</a></li>
            </div>
            
            
            
            
          </div>
        </div>
        <div className="para text-zinc-500 flex flex-col gap-4">
          <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF</p>
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances</p>
          <p>Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.</p>
          <p>"Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer