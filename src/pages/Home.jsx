// In your main App.js or Home component
import { useEffect } from 'react'
import Lenis from 'lenis'
import About from '@/componets/About'
import Skills from '@/componets/Skills'
import Projects from '@/componets/Projects'
import Resume from '@/componets/Resume'
import ContactMe from '@/componets/ContactMe'
import StackedSkills from '@/components/StackedCards'

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,  // Slower = smoother (was 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,  // Less aggressive
      touchMultiplier: 1.5,
      infinite: false,
      lerp: 0.08  // Lower = smoother (was 0.1)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      <About />
      <div className="border-t-5 border-dashed border-gray-400 mt-[300px] "></div>
      <Skills/>
      <div className="border-t-5 border-dashed border-gray-400 mb-10"></div>
      <Projects/>
      <div className="border-t-5 border-dashed border-gray-400 mb-10"></div>
      <Resume/> 
      <div className="border-t-5 border-dashed border-gray-400 mb-10"></div>  
      <ContactMe/>
      <div className="border-t-5 border-dashed border-gray-400 mb-20"></div>
      <div className='font-extrabold font-[Dancing_Script] text-7xl text-center mb-30'>

         <p> Bye :(</p>  
      </div>
    </div>
  )
}

export default Home;