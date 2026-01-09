import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import Navbar from './componets/Navbar'

function App() {


  return (
    <div className='ml-[190px] mr-[190px] mt-4 '>
    <h1 className="font-['Dancing_Script'] font-bold text-[40px]">
      Rahul Gope
    </h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
