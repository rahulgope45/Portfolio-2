// In your main App.js or Home component
import { useEffect } from 'react'
import Lenis from 'lenis'
import About from '@/componets/About'
import Skills from '@/componets/Skills'
import Projects from '@/componets/Projects'
import Resume from '@/componets/Resume'
import ContactMe from '@/componets/ContactMe'
import StackedSkills from '@/components/StackedCards'
import FadeContent from '@/components/FadeContent'
import AnimatedContent from '@/Animations/AnimatedContent'
import { motion } from 'framer-motion';

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
      <Skills />
      <div className="border-t-5 border-dashed border-gray-400 mb-10"></div>
      <Projects />
      <div className="border-t-5 border-dashed border-gray-400 mb-10"></div>
      <Resume />
      <div className="border-t-5 border-dashed border-gray-400 mb-10"></div>
      <ContactMe />
      <div className="border-t-5 border-dashed border-gray-400 mb-20"></div>
      {/* Add a container to hold the glow and the text */}
      <div className="relative w-full py-40 overflow-hidden flex items-center justify-center">

        {/* The Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0  rounded-full blur-3xl z-0 scale-100"
        />

        {/* The Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className='font-extrabold font-[Dancing_Script] text-7xl md:text-9xl text-center'>
            Bye :(
          </h1>
        </motion.div>
      </div>


    </div>
  )
}

export default Home;