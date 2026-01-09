import React, { useState } from 'react'
import { Link } from 'react-router'//For Future 

function Navbar() {

const [active,setActive] = useState('About')

const handleActive = ()=>{
    //check which section we are on 
}


  return (
    <div className='flex gap-[46px] mt-[57px] font-[Dancing_Script] font-bold text-[40px]'>
        <button>About</button>
        <button>Projects</button>
        <button>Resume</button>
        <button>ContactMe</button>
        
    </div>
  )
}

export default Navbar