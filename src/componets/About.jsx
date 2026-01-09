import React, { useEffect, useState } from 'react'
import Trianglyfy from './Trianglyfy'
import AnimatedContent from '../Animations/AnimatedContent'

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
        <div className='mt-[160px] '>
            <div className='flex  items-center justify-between lg:gap-[475px]'>
                <div className='relative '>
                    <div className='absolute top-[34px] left-[-4px] z-0 '>
                        <div className="w-[228px] h-[215px] bg-red-900 rounded-full"></div>
                    </div>
                    {/*Image[140,245] and circle*/}
                    <div className='w-[140px] h-[300px] relative  z-10 '>
                        <Trianglyfy />
                    </div>
                    <div className='absolute top-[48px] left-[170px] z-5 '>
                        <AnimatedContent>
                            <div class="relative bg-red-500 text-white px-6 py-3  w-fit font-[Dancing_Script] font-semibold text-lg">
                            {time}
                            <div class="absolute -left-4 top-[50%] w-0 h-0 border-t-[12px] border-b-[12px] border-r-[24px] border-t-transparent border-b-transparent border-r-red-500 transform rotate-[340deg]"></div>
                        </div>
                        </AnimatedContent>
                    </div>

                </div>
                <div>
                    {/* About */}
                    <p className='font-extrabold font-[Dancing_Script] text-[40px] '>
                        Hello I'm Rahul!!<br />
                        I Like to Code<br />
                        & Draw..
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About