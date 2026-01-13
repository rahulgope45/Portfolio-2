import React from 'react'

function Card({ title, description, stack, img, colors }) {
    return (
        <div className='w-[1000px] h-[500px]  border  mb-2 flex gap-5 sticky top-[50vh]'
            style={{ backgroundColor: colors }}
        >
            <div>
                {/* image */}
                <img src={img} className='w-[600px] h-[498px]' />
            </div>
            <div>
                {/* Text */}
                <h1 className='font-extrabold font-[Dancing_Script] text-[40px] '>{title}</h1>
                <p className='font-medium font-[Dancing_Script] text-[25px] '>{description}</p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {stack?.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white w-15 shadow-md rounded-lg flex items-center justify-center p-1"
                        >
                            <img
                                src={tech.src}
                                alt={tech.alt}
                                className="w-10 h-10 "
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Card