import AnimatedContent from '@/Animations/AnimatedContent'
import React from 'react'

function Resume() {
  return (
    <div className="flex flex-col items-start gap-4 mb-10"
    id='resume'
    >
      {/* Heading */}
      <h1 className="font-[Dancing_Script] font-extrabold text-4xl ">
        Get My Resume
      </h1>

      {/* Sub text */}
     

      {/* Button */}
      <AnimatedContent>
        <a
        href="/Rahuldevjan15.pdf"
        download
        className="inline-flex items-center justify-center
                   px-6 py-2 rounded-full
                   border border-
                   font-medium 
                   hover:bg-black hover:text-white
                   transition-all duration-300"
      >
        Download Resume
      </a>
      </AnimatedContent>
    </div>
  )
}

export default Resume
