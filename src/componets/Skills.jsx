import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiCloudinary, SiCss3, SiDart, SiDocker, SiExpress, SiFigma, SiFirebase, SiFlutter, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiSocketdotio, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const sampleData = [
  {
    id: 1,
    title: "FullStack",
    description: "I build complete web solutions from frontend to backend.Focused on clean architecture, scalability, and performance.Comfortable turning complex requirements into working products.",
    stack: [
      { type: "icon", icon: SiJavascript, alt: "Js" },
      { type: "icon", icon: SiHtml5, alt: "gtml" },
      { type: "icon", icon: SiCss3, alt: "Css" },
      { type: "icon", icon: SiReact, alt: "React" },
      { type: "icon", icon: SiMongodb, alt: "MongoDb" },
      { type: "icon", icon: SiNodedotjs, alt: "NodeJs" },
      { type: "icon", icon: SiExpress, alt: "ExpressJs" },
      { type: "icon", icon: SiTypescript, alt: "TypeScript" },
      { type: "icon", icon: SiGit, alt: "Git" },
      { type: "icon", icon: SiGithub, alt: "Github" },
      { type: "icon", icon: SiDocker, alt: "Docker" },
    ],
    img: "fullstack.png",
    colors: "#E08D79"
  },
  {
    id: 2,
    title: "Application",
    description: "I develop modern applications with real-world use in mind.Strong focus on performance, reliability, and smooth user flow.From idea to deployment, I handle the full development cycle.",
    stack: [
      { type: "icon", icon: SiDart, alt: "Dart" },
      { type: "icon", icon: SiFlutter, alt: "Flutter" },
      { type: "icon", icon: SiFirebase, alt: "Firebase" },
    ],
    img: "application.jpg",
    colors: "#E2BC53"
  },
  {
    id: 3,
    title: "UI/UX",
    description: "I design interfaces that feel intuitive and easy to use.Balancing visual appeal with practical user experience.Every design decision is made to improve usability and clarity.",
    stack: [
      { type: "icon", icon: SiFigma, alt: "Figma" },
    ],
    img: "cover.png",
    colors: "#753742"
  },
];

// ============================================
// DESKTOP CARD (Original with scroll animations)
// ============================================
const DesktopCard = ({ data, index, totalCards }) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [1, 1, 0.95 - (index * 0.05), 0.95 - (index * 0.05)]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5],
    [0.3, 0.3, 1, 1]
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    ["blur(10px)", "blur(10px)", "blur(0px)"]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="sticky flex items-center justify-center mb-20"
      style={{
        top: `${80 + index * 30}px`,
        height: '75vh'
      }}
    >
      <motion.div
        style={{
          scale,
          filter: blur,
          background: data.colors
        }}
        className="w-[1000px] h-[600px] bg-gradient-to-br rounded-3xl shadow-2xl flex overflow-hidden"
      >
        <motion.div
          style={{ opacity }}
          className="w-[600px] h-[598px] m-[1px]"
        >
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="flex-1 p-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-[40px] font-bold font-[Dancing_Script] mb-4">
              {data.title}
            </h2>
            <p className="font-[Dancing_Script] font-semibold leading-relaxed">
              {data.description}
            </p>
          </div>

          <div>
            <h3 className="text-bold font-[Dancing_Script] font-semibold mb-3 uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="flex gap-3 flex-wrap">
              {data.stack.map((tech, i) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={i}
                    className="w-[50px] h-[50px] bg-white backdrop-blur-sm rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 border border-slate-700/50 hover:scale-105 transition-transform p-1"
                  >
                    <IconComponent className="text-2xl text-slate-900" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// ============================================
// MOBILE CARD (With sticky stack effect)
// ============================================
const MobileCard = ({ data, index }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [1, 1, 0.96 - (index * 0.04), 0.96 - (index * 0.04)]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5],
    [0.4, 0.4, 1, 1]
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    ["blur(8px)", "blur(8px)", "blur(0px)"]
  );

  return (
    <div
      ref={cardRef}
      className="sticky mb-8"
      style={{
        top: `${60 + index * 20}px`,
        height: 'auto',
        minHeight: '500px'
      }}
    >
      <motion.div
        style={{
          scale,
          filter: blur,
          background: data.colors
        }}
        className="mx-4 rounded-2xl shadow-xl overflow-hidden"
      >
        <motion.div
          style={{ opacity }}
        >
          {/* Image Section */}
          <div className="w-full h-48 sm:h-56">
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-5 sm:p-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-[Dancing_Script] mb-3">
              {data.title}
            </h2>
            
            <p className="font-[Dancing_Script] font-semibold text-sm sm:text-base leading-relaxed mb-4">
              {data.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-[Dancing_Script] font-semibold mb-3 uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex gap-2 flex-wrap">
                {data.stack.map((tech, i) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white backdrop-blur-sm rounded-xl shadow-md flex items-center justify-center border border-slate-700/30 active:scale-95 transition-transform"
                    >
                      <IconComponent className="text-lg sm:text-xl text-slate-900" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// ============================================
// MAIN SKILLS COMPONENT
// ============================================
export default function Skills() {
  return (
    <div>
      {/* Heading */}
      <div className="h-40 sm:h-60 lg:h-70 flex items-center justify-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Dancing_Script] text-center">
          I work on
        </h1>
      </div>

      {/* ============================================
          DESKTOP VIEW (Original sticky cards)
          ============================================ */}
      <div className="hidden lg:block relative">
        {sampleData.map((data, index) => (
          <DesktopCard
            key={data.id}
            data={data}
            index={index}
            totalCards={sampleData.length}
          />
        ))}
      </div>

      {/* ============================================
          MOBILE VIEW (Sticky stack cards)
          ============================================ */}
      <div className="lg:hidden relative">
        {sampleData.map((data, index) => (
          <MobileCard
            key={data.id}
            data={data}
            index={index}
          />
        ))}
      </div>

      <div className="h-20"></div>
    </div>
  );
}