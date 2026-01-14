import React, { useState } from 'react'
import { Link } from 'react-router'//For Future 

function Navbar({scrollToSection}) {

const [active,setActive] = useState('About')

const handleActive = ()=>{
    //check which section we are on 
}


  return (
    <div className='flex gap-[46px] mt-[57px] font-[Dancing_Script] font-bold text-[40px]'>
        <button
        onClick={() =>scrollToSection("about")}
        >About</button>
        <button
        onClick={() =>scrollToSection("projects")}
        >Projects</button>
        <button
        onClick={() =>scrollToSection("resume")}
        >Resume</button>
        <button
        onClick={() =>scrollToSection("contactme")}
        >ContactMe</button>
        
    </div>
  )
}

export default Navbar