import React, { useEffect, useState } from 'react';
import Trianglyfy from './Trianglyfy';




const AnimatedContent = ({ children }) => <div>{children}</div>;
const FadeContent = ({ children }) => <div>{children}</div>;

function About() {
    const greet = ["Morning", "Afternoon", "Evening"];
    const [time, setTime] = useState("Hello");

    function whatTime() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setTime(greet[0]);
        } else if (hour >= 12 && hour < 18) {
            setTime(greet[1]);
        } else {
            setTime(greet[2]);
        }
    }

    useEffect(() => {
        whatTime();
    }, []);

    return (
        <div className="mt-[100px] mb-10" id="about">
            {/* ============================================
          DESKTOP SECTION (hidden on mobile)
          ============================================ */}
            <div className="hidden lg:block">
                <div className="flex items-center justify-between lg:gap-[475px]">
                    <div className="relative">
                        <div className="absolute top-[34px] left-[-4px] z-0">
                            <div className="w-[500px] h-[500px] bg-red-900 rounded-full"></div>
                        </div>
                        {/* Image[140,245] and circle */}
                        <div className="w-[300px] h-[300px] relative">
                            <Trianglyfy />
                        </div>
                        <div className="absolute top-[200px] left-[300px] z-5">
                            <AnimatedContent>
                                <div className="relative bg-red-500 text-white px-6 py-3 w-fit font-[Dancing_Script] font-semibold text-lg">
                                    {time}
                                    <div className="absolute -left-4 top-[50%] w-0 h-0 border-t-[12px] border-b-[12px] border-r-[24px] border-t-transparent border-b-transparent border-r-red-500 transform rotate-[340deg]"></div>
                                </div>
                            </AnimatedContent>
                        </div>
                    </div>
                    <div>
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            {/* About */}
                            <p className="font-extrabold font-[Dancing_Script] text-[40px]">
                                Hello I'm Rahul!!<br />
                                I Like to Code<br />
                                & Draw..
                                <span >
                                    <div className='flex gap-2 mt-5'>
                                        <div className="relative w-3 h-3 rounded-full bg-green-400 animate-blink">
                                            <span className="absolute -inset-2 rounded-full  bg-green-200 blur-xl opacity-60"></span>
                                        </div>
                                        <p className='text-[20px]'>Available for Work</p>
                                    </div>
                                </span>
                            </p>
                        </FadeContent>
                    </div>
                </div>
            </div>

            {/* ============================================
          MOBILE VIEW (hidden on desktop)
          ============================================ */}
            <div className="lg:hidden">
                <div className="flex flex-col items-center gap-8 px-4">
                    {/* Mobile Image Section */}
                    <div className="relative w-full max-w-[280px]">
                        {/* Background circle - scaled down for mobile */}
                        <div className="absolute top-[20px] left-[50%] transform -translate-x-1/2 z-0">
                            <div className="w-[300px] h-[300px] bg-red-900 rounded-full opacity-80"></div>
                        </div>

                        {/* Image container - scaled for mobile */}
                        <div className="w-full aspect-square relative z-10 max-w-[240px] mx-auto">
                            <Trianglyfy />
                        </div>

                        {/* Greeting badge - repositioned for mobile */}
                        <div className="absolute -bottom-4 left-[50%] transform -translate-x-1/2 z-20">
                            <AnimatedContent>
                                <div className="relative bg-red-500 text-white px-5 py-2.5 w-fit font-[Dancing_Script] font-semibold text-base shadow-lg">
                                    {time}
                                    {/* Arrow pointing up instead of left */}
                                    <div className="absolute left-[50%] -translate-x-1/2 -top-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-red-500"></div>
                                </div>
                            </AnimatedContent>
                        </div>
                    </div>

                    {/* Mobile Text Section */}
                    <div className="text-center mt-8">
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <p className="font-extrabold font-[Dancing_Script] text-[32px] leading-tight">
                                Hello I'm Rahul!!<br />
                                I Like to Code<br />
                                & Draw..

                                <span >
                                    <div className='flex gap-2 mt-5'>
                                        <div className="relative w-3 h-3 rounded-full bg-green-400 animate-blink">
                                            <span className="absolute -inset-2 rounded-full  bg-green-200 blur-xl opacity-60"></span>
                                        </div>
                                        <p className='text-[20px]'>Available for Work</p>
                                    </div>
                                </span>
                            </p>
                        </FadeContent>
                    </div>
                </div>
            </div>

            {/* ============================================
          TABLET VIEW (optional - between mobile and desktop)
          ============================================ */}
            <style>{`
        @media (min-width: 640px) and (max-width: 1023px) {
          .lg\\:hidden .relative.w-full.max-w-\\[280px\\] {
            max-width: 320px;
          }
          
          .lg\\:hidden .font-\\[Dancing_Script\\].text-\\[32px\\] {
            font-size: 36px;
          }
        }
        
        /* Small mobile devices */
        @media (max-width: 380px) {
          .lg\\:hidden .relative.w-full.max-w-\\[280px\\] {
            max-width: 220px;
          }
          
          .lg\\:hidden .w-\\[300px\\].h-\\[300px\\] {
            width: 250px;
            height: 250px;
          }
          
          .lg\\:hidden .font-\\[Dancing_Script\\].text-\\[32px\\] {
            font-size: 28px;
          }
        }
      `}</style>
        </div>
    );
}

// Demo wrapper
export default About;