import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Dashboart from './component/Dashboart'
import TopBar from './component/TopBar'
function App() {
  return (
    <>
     <BrowserRouter>
     <TopBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard/*' element={<Dashboart/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App