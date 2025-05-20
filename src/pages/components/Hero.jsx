import React from 'react'
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className = 'text-[#2f3c3f]' id = "home"> 
            <div className = 'max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className = 'text-[#ff6b6b] font-bold p-2'>
                    YOUR SKIN IS A REFLECTION OF YOUR DIET
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Find out what's breaking you out.
                </h1>
                <div className = 'flex justify-center items-center'>
                    <p className = "md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Whether that be
                    </p>
                    
                <ReactTyped 
                className = 'md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings = {['Diary','Processed', 'High-GI', 'Sugar']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop/>
                </div>
                <p className = 'md:text-2xl text-xl font-bold text-black'>
                    Acne diet tracker that logs the food you eat, analyzing the data to show 
                    correlation between the foods you eat and you're acne.
                    </p>
                    <div className="flex justify-center">
                
                </div>


                <button className = 'bg-[#ff6b6b] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                    <Link to='/signup'>
                    Start

                    </Link>
                </button>
            </div>
        </div>
)
}

export default Hero;