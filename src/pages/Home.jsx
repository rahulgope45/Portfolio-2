import React from 'react'
import About from '../componets/About'
import Projects from '../componets/Projects'
import Resume from '../componets/Resume'
import ContactMe from '../componets/ContactMe'
import Skills from '../componets/Skills'


function Home() {
  return (
    <div>
      <About/>
      <Projects/>
      <Resume/>
      <Skills/>
      <ContactMe/>
        
       
    </div>
  )
}

export default Home