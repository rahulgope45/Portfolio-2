import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sampleData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, advanced analytics, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    stack: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "AWS", icon: "☁️" }
    ]
  },
  {
    id: 2,
    title: "AI-Powered Dashboard",
    description: "Intelligent analytics dashboard leveraging machine learning for predictive insights and automated reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    stack: [
      { name: "Python", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Docker", icon: "🐳" },
      { name: "Redis", icon: "📦" }
    ]
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with biometric authentication and instant transaction processing.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    stack: [
      { name: "React Native", icon: "📱" },
      { name: "Firebase", icon: "🔥" },
      { name: "Stripe", icon: "💳" },
      { name: "GraphQL", icon: "◆" }
    ]
  }
];

const Card = ({ data, index, totalCards }) => {
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
          filter: blur
        }}
        className="w-[1000px] h-[600px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl flex overflow-hidden"
      >
        <motion.div 
          style={{ opacity }}
          className="w-[600px] h-[598px] m-[1px]"
        >
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="flex-1 p-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {data.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {data.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="flex gap-3 flex-wrap">
              {data.stack.map((tech, i) => (
                <div
                  key={i}
                  className="w-[100px] h-[100px] bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 border border-slate-700/50 hover:scale-105 transition-transform"
                >
                  <span className="text-4xl">{tech.icon}</span>
                  <span className="text-xs text-slate-300 font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="min-h-screen ">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold font-[Dancing_Script]">
          I work on 
        </h1>
      </div>
      
      <div className="relative">
        {sampleData.map((data, index) => (
          <Card 
            key={data.id} 
            data={data} 
            index={index}
            totalCards={sampleData.length}
          />
        ))}
      </div>
      
      <div className="h-screen"></div>
    </div>
  );
}