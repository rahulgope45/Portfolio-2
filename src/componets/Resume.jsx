import React from 'react'

function Resume() {
  return (
    <div className="flex flex-col items-start gap-4 mb-10"
    id='resume'
    >
      {/* Heading */}
      <h1 className="font-[Dancing_Script] font-extrabold text-4xl text-black">
        Get My Resume
      </h1>

      {/* Sub text */}
     

      {/* Button */}
      <a
        href="/RahulGope2026jan.pdf"
        download
        className="inline-flex items-center justify-center
                   px-6 py-2 rounded-full
                   border border-black
                   font-medium text-black
                   hover:bg-black hover:text-white
                   transition-all duration-300"
      >
        Download Resume
      </a>
    </div>
  )
}

export default Resume
