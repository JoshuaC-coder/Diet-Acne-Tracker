import React from 'react'
import debuggerCartoon from '../assets/acneVisual.jpg'
import { Link } from 'react-scroll';


const Analytics = () => {
    return (
        <div className = 'w-full bg-white py-16 px-4' id = "about">
            <div className = 'max-w-[1240px mx-auto grid md:grid-cols-2'>
                <img className = 'w-[500px] mx-auto my-4' src={debuggerCartoon} alt = "/"/>
                <div className = 'flex flex-col justify-center'>
                    <p className = 'text-[#ff6b6b] font-bold'>ABOUT THE TRACKER</p>
                    <h1 className = 'text-[#2f3c3f] md:text 4-xl sm:text-3xl text-2xl font-bold py-2'>Stop Wondering What's Breaking You Out</h1>
                    <p>
                        Nutriskin allows users to log their daily meals and track the severity of 
                        their acne breakouts, helping them identify potential food triggers. 
                        The site generates personalized insights by analyzing the correlation between food consumption 
                        and skin health, providing users with valuable data to manage their diet for clearer skin. 
                        It combines easy meal logging with visual data analysis to offer a user-friendly, informative 
                        experience.
                    </p>
                    <button className = 'bg-[#ff6b6b] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#ff6b6b]'>
                            <Link to='home' spy={true} smooth={true} offset={0} duration={500}>
                                    Get Started
                                </Link>
                </button>
                </div>
            </div>
        </div>
    )

}

export default Analytics;