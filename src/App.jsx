import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import Navbar from './componets/Navbar'
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeProvider'

function App() {

  const [activeSection , setActiveSection] = useState('Home')
  const [scrollY,setScrollY] = useState(0)
  

  useEffect(() =>{
    const handleScroll =() => setScrollY(window.scrollY)
    window.addEventListener('scroll' ,handleScroll);
    return() => window.removeEventListener('scroll',handleScroll)
  },[]);

  const scrollToSection =(sectionId) =>{
    const element = document.getElementById(sectionId)
    if (element){
      element.scrollIntoView({behavior: 'smooth'})
      setActiveSection(sectionId)
    }

  }

  return (
    <ThemeProvider>
      <div className='lg:ml-[190px] lg:mr-[190px] mt-4 '>
      
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Toaster/>
    </div>
    </ThemeProvider>
  )
}

export default App
