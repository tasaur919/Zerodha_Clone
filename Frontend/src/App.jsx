import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import HomePage from './UserPages/home/HomePage'
import Signup from './UserPages/signup/Signup'
import AboutPage from './UserPages/about/AboutPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './UserPages/products/ProductPage'
import Pricing from './UserPages/pricing/PricingPage'
import SupportPage from './UserPages/support/SupportPage'
import NotFound from './Component/NotFound'

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App