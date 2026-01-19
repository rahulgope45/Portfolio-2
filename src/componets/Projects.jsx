import React, { useState } from 'react';
import { fullStack, frontend, application } from '@/lib/data';
import { SiGithub, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';
import AnimatedContent from '@/Animations/AnimatedContent';


// const fullStack = [mockProject, { ...mockProject, title: "Social Media App" }];
// const frontend = [{ ...mockProject, title: "Portfolio Website" }];
// const application = [{ ...mockProject, title: "Mobile App" }];



function Projects() {
  const [category, setCategory] = useState('fullStack');
  const [index, setIndex] = useState(0);

  const dataMap = {
    fullStack,
    frontend,
    application,
  };

  const activeData = dataMap[category];
  const project = activeData[index];

  const handleCategoryChange = (type) => {
    setCategory(type);
    setIndex(0);
  };

  const handleNext = () => {
    if (index < activeData.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setIndex(0);
  };

  return (
    <section className="w-full flex flex-col items-center gap-10 py-20 px-4" id="projects">
      {/* ============================================
          DESKTOP SECTION (hidden on mobile)
          ============================================ */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-10 w-full">
        <AnimatedContent>
          {/* Heading */}
          <h1 className="font-extrabold font-[Dancing_Script] text-6xl">
            Projects
          </h1>
        </AnimatedContent>

        {/* Category Buttons - Desktop */}
        <div className="flex gap-4">
          <button
            onClick={() => handleCategoryChange('fullStack')}
            className={`
              relative px-5 py-2 rounded-full border
              transition-all duration-300 font-[Dancing_Script]
                   font-bold 
              ${category === 'fullStack'
                ? `bg-black text-white
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
                   after:bg-contain`
                : 'bg-white text-black'
              }
            `}
          >
            Fullstack
          </button>

          <button
            onClick={() => handleCategoryChange('frontend')}
            className={`
              relative px-5 py-2 rounded-full border
              transition-all duration-300 font-[Dancing_Script]
                   font-bold 
              ${category === 'frontend'
                ? `bg-black text-white
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
                   after:bg-contain`
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
              transition-all duration-300 font-[Dancing_Script]
                   font-bold 
              ${category === 'application'
                ? `bg-black text-white
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
                   after:bg-contain`
                : 'bg-white text-black'
              }
            `}
          >
            Application
          </button>
        </div>

        {/* Navigation Buttons - Desktop */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="px-4 py-2 rounded-full border disabled:opacity-40 font-[Dancing_Script] font-bold"
          >
            previous
          </button>
          <button
            onClick={handleNext}
            disabled={index === activeData.length - 1}
            className="px-4 py-2 rounded-full border disabled:opacity-40 font-[Dancing_Script] font-bold"
          >
            Next Project →
          </button>
        </div>

        {/* Project Card - Desktop */}
        <div className="w-[1000px] min-h-[500px] border rounded-xl p-6 flex gap-6">
          {/* Image */}
          <div className="w-[900px] h-[300px] bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
            {project.img ? (
              <img 
                src={project.img} 
                className="w-full h-full object-cover cursor-pointer" 
                onClick={() => window.open(project.src, "_blank")} 
                alt={project.title}
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold font-[Dancing_Script]">
              {project.title}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-lg font-[Dancing_Script] font-medium">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            
            <SiGithub 
              className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" 
              onClick={() => window.open(project.repo, "_blank")}
            />

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.stack.map((tech, i) => {
                const Icon = tech.icon;
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
                      <span className="text-xs text-red-500">⚠</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          MOBILE VIEW (hidden on desktop)
          ============================================ */}
      <div className="lg:hidden flex flex-col items-center gap-8 w-full max-w-[500px]">
        <AnimatedContent>
          {/* Heading - Mobile */}
          <h1 className="font-extrabold font-[Dancing_Script] text-4xl md:text-5xl text-center">
            Projects
          </h1>
        </AnimatedContent>

        {/* Category Buttons - Mobile (Stacked on small screens) */}
        <div className="flex flex-wrap justify-center gap-3 w-full px-2">
          <button
            onClick={() => handleCategoryChange('fullStack')}
            className={`
              relative px-4 py-2 rounded-full border text-sm
              transition-all duration-300 font-[Dancing_Script]
                   font-bold 
              ${category === 'fullStack'
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-black'
              }
            `}
          >
            Fullstack
          </button>

          <button
            onClick={() => handleCategoryChange('frontend')}
            className={`
              relative px-4 py-2 rounded-full border text-sm
              transition-all duration-300 font-[Dancing_Script]
                   font-bold 
              ${category === 'frontend'
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-black'
              }
            `}
          >
            Frontend
          </button>

          <button
            onClick={() => handleCategoryChange('application')}
            className={`
              relative px-4 py-2 rounded-full border text-sm
              transition-all duration-300 font-[Dancing_Script]
                   font-bold 
              ${category === 'application'
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-black'
              }
            `}
          >
            Application
          </button>
        </div>

        {/* Navigation Buttons - Mobile */}
        <div className="flex gap-2 w-full px-4">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="flex-1 px-3 py-2 text-sm rounded-full border disabled:opacity-40 transition-opacity font-[Dancing_Script] font-bold "
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={index === activeData.length - 1}
            className="flex-1 px-3 py-2 text-sm rounded-full border disabled:opacity-40 transition-opacity font-[Dancing_Script] font-bold"
          >
            Next →
          </button>
        </div>

        {/* Project Card - Mobile (Vertical Layout) */}
        <div className="w-full border rounded-xl p-4 md:p-6 flex flex-col gap-4">
          {/* Image - Mobile */}
          <div className="w-full aspect-video bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
            {project.img ? (
              <img 
                src={project.img} 
                className="w-full h-full object-cover cursor-pointer active:opacity-80 transition-opacity" 
                onClick={() => window.open(project.src, "_blank")} 
                alt={project.title}
              />
            ) : (
              <span className="text-gray-400 text-sm">No Image</span>
            )}
          </div>

          {/* Content - Mobile */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-bold font-[Dancing_Script]">
              {project.title}
            </h2>

            <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base font-[Dancing_Script] font-medium">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            
            <SiGithub 
              className="w-5 h-5 cursor-pointer hover:scale-110 active:scale-95 transition-transform" 
              onClick={() => window.open(project.repo, "_blank")}
            />

            {/* Tech Stack - Mobile */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-lg p-2 flex items-center justify-center"
                  >
                    {tech.type === "image" && tech.src ? (
                      <img src={tech.src} alt={tech.alt} className="w-6 h-6 md:w-7 md:h-7" />
                    ) : Icon ? (
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-black" />
                    ) : (
                      <span className="text-xs text-red-500">⚠</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Counter - Mobile */}
        <div className="text-sm text-gray-500 font-medium">
          {index + 1} / {activeData.length}
        </div>
      </div>
    </section>
  );
}

// Demo wrapper
export default Projects;