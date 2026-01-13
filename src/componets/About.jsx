import React, { useEffect, useState } from 'react'
import Trianglyfy from './Trianglyfy'
import AnimatedContent from '../Animations/AnimatedContent'
import FadeContent from '@/components/FadeContent'

function About() {

    const greet = ["Morning","Afternoon","Evening"]
    const [time,setTime] = useState("Hello")

    function whatTime(){
    const hour = new Date().getHours()
    if(hour >= 5 && hour < 12){
        setTime(greet[0])
    }
    else if(hour >= 12 && hour < 18){
        setTime(greet[1])
    }else{
        setTime(greet[2])
    }
    };

    useEffect(() =>{
        whatTime();
    },[])


    return (
        <div className='mt-[100px] mb-10 '>
            <div className='flex  items-center justify-between lg:gap-[475px]'>
                <div className='relative '>
                    <div className='absolute top-[34px] left-[-4px] z-0 '>
                        <div className="w-[500px] h-[500px] bg-red-900 rounded-full"></div>
                    </div>
                    {/*Image[140,245] and circle*/}
                    <div className='w-[300px] h-[300px] relative   '>
                        <Trianglyfy />
                    </div>
                    <div className='absolute top-[200px] left-[300px] z-5 '>
                        <AnimatedContent>
                            <div className="relative bg-red-500 text-white px-6 py-3  w-fit font-[Dancing_Script] font-semibold text-lg">
                            {time}
                            <div className="absolute -left-4 top-[50%] w-0 h-0 border-t-[12px] border-b-[12px] border-r-[24px] border-t-transparent border-b-transparent border-r-red-500 transform rotate-[340deg]"></div>
                        </div>
                        </AnimatedContent>
                    </div>

                </div>
                <div>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                     {/* About */}
                    <p className='font-extrabold font-[Dancing_Script] text-[40px] '>
                        Hello I'm Rahul!!<br />
                        I Like to Code<br />
                        & Draw..
                    </p>
                    </FadeContent>
                    
                </div>
            </div>
        </div>
    )
}

export default About