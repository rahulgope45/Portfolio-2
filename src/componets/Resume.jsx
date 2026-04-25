import AnimatedContent from '@/Animations/AnimatedContent'
import FadeContent from '@/components/FadeContent'
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi' // Adding a nice icon
import React from 'react'

function Resume() {
  return (
    <section 
      id='resume' 
      className="flex flex-col items-center md:items-start gap-6 py-10 px-4 md:px-0"
    >
      {/* Heading */}
      <FadeContent>
        <h1 className="font-[Dancing_Script] font-extrabold text-4xl md:text-5xl text-center md:text-left">
          Get My Resume
        </h1>
      </FadeContent>

      {/* Subtext (Optional placeholder if you want a tagline) */}
      <FadeContent>
        <p className="font-[Dancing_Script] text-lg opacity-70 text-center md:text-left max-w-md">
          Lets Work Together.
        </p>
      </FadeContent>

      {/* Button */}
      <AnimatedContent>
        <motion.a
          href="/RahulDevA17.pdf"
          download="RahulDevA17.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-3
                     px-8 py-3 rounded-full border-2 border-black
                     font-[Dancing_Script] font-bold text-lg
                     bg-transparent text-black
                     hover:bg-black hover:text-white
                     transition-colors duration-300 shadow-sm"
        >
          <FiDownload className="text-xl" />
          Download Resume
        </motion.a>
      </AnimatedContent>
    </section>
  )
}

export default Resume