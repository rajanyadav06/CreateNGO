import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    
      <Navbar />
      <Outlet />
      <Footer />
      
    </>
  )
}

export default App
