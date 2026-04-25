import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Trianglyfy from './Trianglyfy';
import FadeContent from '@/components/FadeContent';
import AnimatedContent from '@/Animations/AnimatedContent';

function About() {
    const [time, setTime] = useState("Hello");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) setTime("Good Morning");
        else if (hour >= 12 && hour < 18) setTime("Good Afternoon");
        else setTime("Good Evening");
    }, []);

    return (
        <section className="mt-[100px] mb-20 px-6 max-w-7xl mx-auto" id="about">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                
                {/* Visual Section: Image & Background Circle */}
                <div className="relative group">
                    {/* Background Glow Circle */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute -inset-4 lg:-inset-10 bg-red-900/20 rounded-full blur-3xl z-0"
                    />
                    
                    <div className="relative z-10 w-[260px] h-[260px] md:w-[350px] md:h-[350px]">
                        <Trianglyfy />
                    </div>

                    {/* Dynamic Greeting Badge */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute -right-7 bottom-[-90px] lg:bottom-[-5] z-20"
                    >
                        <div className="relative bg-red-600 text-white px-6 py-2 rounded-lg shadow-xl font-[Dancing_Script] font-bold text-lg">
                            {time}
                            {/* Speech bubble tail */}
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 
                                          border-t-[8px] border-b-[8px] border-r-[12px] 
                                          border-t-transparent border-b-transparent border-r-red-600" />
                        </div>
                    </motion.div>
                </div>

                {/* Text Content Section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    <FadeContent blur={true} duration={1000}>
                        <h2 className="font-extrabold font-[Dancing_Script] text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Hello, I'm Rahul!<br />
                            I Love to Code<br />
                            <span className="text-amber-600">& Draw.</span>
                        </h2>
                    </FadeContent>

                    {/* Status Indicator */}
                    <AnimatedContent>
                        <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-black/5 py-2 px-4 rounded-full shadow-sm">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                            <p className="font-[Dancing_Script] font-bold text-xl text-gray-800">
                                Available for Work
                            </p>
                        </div>
                    </AnimatedContent>
                </div>

            </div>
        </section>
    );
}

export default About;