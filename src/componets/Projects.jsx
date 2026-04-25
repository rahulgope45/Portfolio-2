import React, { useState } from 'react';
import { fullStack, frontend, application } from '@/lib/data';
import { SiGithub } from 'react-icons/si';
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [category, setCategory] = useState('fullStack');
  const [index, setIndex] = useState(0);

  const dataMap = { fullStack, frontend, application };
  const activeData = dataMap[category];
  const project = activeData[index];

  const handleCategoryChange = (type) => {
    setCategory(type);
    setIndex(0);
  };

  const nextProject = () => {
    if (index < activeData.length - 1) setIndex(prev => prev + 1);
  };

  const prevProject = () => {
    if (index > 0) setIndex(prev => prev - 1);
  };

  return (
    <section className="w-full flex flex-col items-center gap-10 py-20 px-4 overflow-hidden " id="projects">
      {/* --- Section Heading --- */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-extrabold font-[Dancing_Script] text-5xl md:text-6xl mb-4"
      >
        Projects
      </motion.h1>

      {/* --- Category Selector --- */}
      <div className="flex gap-3 md:gap-6 ">
        {Object.keys(dataMap).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`relative px-6 py-2 rounded-full text-sm md:text-base text-yellow-700 font-bold font-[Dancing_Script] transition-colors duration-300 ${
              category === cat ? "text-white" : "text-black border border-black/10"
            }`}
          >
            <span className="relative z-10 capitalize">{cat.replace(/([A-Z])/g, ' $1')}</span>
            {category === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-black rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* --- Main Project Display --- */}
      <div className="w-full max-w-6xl flex flex-col gap-8">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center w-full px-2">
          <button
            onClick={prevProject}
            disabled={index === 0}
            className="group flex items-center gap-2 font-[Dancing_Script] font-bold disabled:opacity-30 transition-all"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Previous
          </button>
          
          <span className="text-sm font-mono opacity-50">{index + 1} / {activeData.length}</span>

          <button
            onClick={nextProject}
            disabled={index === activeData.length - 1}
            className="group flex items-center gap-2 font-[Dancing_Script] font-bold disabled:opacity-30 transition-all"
          >
            Next <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Animated Project Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${index}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-8 border rounded-3xl p-6 md:p-10 bg-white/50 backdrop-blur-sm shadow-sm"
          >
            {/* Image Container */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video lg:aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-inner cursor-pointer"
              onClick={() => window.open(project.src, "_blank")}
            >
              {project.img ? (
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-[Dancing_Script]">Coming Soon</div>
              )}
            </motion.div>

            {/* Project Details */}
            <div className="flex flex-col justify-between py-2">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-4xl font-bold font-[Dancing_Script]">{project.title}</h2>
                  <motion.a 
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    href={project.repo} 
                    target="_blank"
                    className="p-2 bg-black text-white rounded-full"
                  >
                    <SiGithub size={20} />
                  </motion.a>
                </div>

                <ul className="space-y-3 mb-8">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-lg font-medium font-[Dancing_Script] opacity-80">
                      <span className="text-black">•</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center p-2.5"
                      title={tech.alt || "Tech"}
                    >
                      {tech.type === "image" ? (
                        <img src={tech.src} alt={tech.alt} className="w-full h-full object-contain" />
                      ) : (
                        <Icon className="w-full h-full text-black" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;