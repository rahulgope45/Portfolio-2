import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import Navbar from './componets/Navbar'

function App() {


  return (
    <div className='lg:ml-[190px] lg:mr-[190px] mt-4 '>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
