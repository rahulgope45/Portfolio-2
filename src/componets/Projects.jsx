import React, { useState } from 'react'
import { fullStack, application, frontend } from '@/lib/data'


function Projects() {
  const [category, setCategory] = useState('fullStack')
  const [index, setIndex] = useState(0)

  const dataMap = {
    fullStack,
    frontend,
    application,
  }

  const activeData = dataMap[category]
  const project = activeData[index]

  const handleCategoryChange = (type) => {
    setCategory(type)
    setIndex(0) // reset index when category changes
  }

  const handleNext = () => {
    if (index < activeData.length - 1) {
      setIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {

    setIndex(0)

  }

  return (
    <section className="w-full flex flex-col items-center gap-10 py-20" id='projects'>

      {/* Heading */}
      <h1 className="font-extrabold font-[Dancing_Script] text-6xl">
        Projects
      </h1>

      {/* Category Buttons */}
      <div className="flex gap-4">
        {/* <button
          onClick={() => handleCategoryChange('fullStack')}
          className={`px-5 py-2 rounded-full border 
            ${category === 'fullStack' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          Full Stack
        </button> */}

        <button
          onClick={() => handleCategoryChange('fullStack')}
          className={`
    relative px-5 py-2 rounded-full border
    transition-all duration-300
    ${category === 'fullStack'
              ? `
        bg-black text-white
        after:content-['']
        after:block
        after:absolute
        after:left-1/2
        after:-translate-x-1/2
        after:-bottom-3
        after:w-12
        after:h-[6px]
        after:bg-[url('/underline.svg')]
        after:bg-no-repeat
        after:bg-contain
      `
              : 'bg-white text-black'
            }
  `}
        >
          Fullstack
        </button>

        {/* <button
          onClick={() => handleCategoryChange('frontend')}
          className={`px-5 py-2 relative rounded-full border 
            ${category === 'frontend' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          Frontend
        </button> */}

        <button
          onClick={() => handleCategoryChange('frontend')}
          className={`
    relative px-5 py-2 rounded-full border
    transition-all duration-300
    ${category === 'frontend'
              ? `
        bg-black text-white
        after:content-['']
        after:block
        after:absolute
        after:left-1/2
        after:-translate-x-1/2
        after:-bottom-3
        after:w-12
        after:h-[6px]
        after:bg-[url('/underline.svg')]
        after:bg-no-repeat
        after:bg-contain
      `
              : 'bg-white text-black'
            }
  `}
        >
          Frontend
        </button>

        <button
          onClick={() => handleCategoryChange('application')}
          className={`
    relative px-5 py-2 rounded-full border
    transition-all duration-300
    ${category === 'application'
              ? `
        bg-black text-white
        after:content-['']
        after:block
        after:absolute
        after:left-1/2
        after:-translate-x-1/2
        after:-bottom-3
        after:w-12
        after:h-[6px]
        after:bg-[url('/underline.svg')]
        after:bg-no-repeat
        after:bg-contain
      `
              : 'bg-white text-black'
            }
  `}
        >
          Application
        </button>
      </div>

      {/* Next Button */}
      <div className='flex gap-2'>
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="px-4 py-2 rounded-full border disabled:opacity-40"
        >
          previous
        </button>
        <button
          onClick={handleNext}
          disabled={index === activeData.length - 1}
          className="px-4 py-2 rounded-full border disabled:opacity-40"
        >
          Next Project →
        </button>


      </div>

      {/* Project Card */}
      <div className="w-[1000px] min-h-[500px] border rounded-xl p-6 flex gap-6">

        {/* Image */}
        <div className="w-[500px] h-[300px] bg-gray-100 flex items-center justify-center">
          {project.img ? (
            <img src={project.img} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold font-[Dancing_Script]">
            {project.title}
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-lg">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-4">
            {project.stack.map((tech, i) => {
              const Icon = tech.icon

              return (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg p-2 flex items-center justify-center"
                >
                  {tech.type === "image" && tech.src ? (
                    <img src={tech.src} alt={tech.alt} className="w-8 h-8" />
                  ) : Icon ? (
                    <Icon className="w-8 h-8 text-black" />
                  ) : (
                    <span className="text-xs text-red-500">⚠</span> // fallback
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>



    </section>
  )
}

export default Projects
