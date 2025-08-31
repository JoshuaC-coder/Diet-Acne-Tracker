import React from 'react'
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="hero-container" id="home">
            {/* Background decorative elements with parallax */}
            <div className="hero-bg">
                <Parallax speed={-5}>
                    <div className="hero-bg-circle"></div>
                </Parallax>
                
                <Parallax speed={-3}>
                    <div className="hero-bg-circle"></div>
                </Parallax>
                
                <Parallax speed={-4}>
                    <div className="hero-bg-circle"></div>
                </Parallax>
            </div>

            {/* Main content with staggered animations */}
            <div className="hero-content">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff6b6b]/10 border border-[#ff6b6b]/20"
                    >
                        <span className="text-[#ff6b6b] font-semibold text-sm tracking-wide">
                            YOUR SKIN IS A REFLECTION OF YOUR DIET
                        </span>
                    </motion.div>

                    {/* Main heading with parallax */}
                    <Parallax speed={-2}>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <h1 className="hero-title">
                                Find out what's
                                <br />
                                <span className="text-[#ff6b6b]">breaking you out</span>
                            </h1>
                        </motion.div>
                    </Parallax>

                    {/* Animated text section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 text-2xl md:text-4xl lg:text-5xl font-bold text-[#2f3c3f]"
                    >
                        <span>Whether that be</span>
                        <div className="flex items-center">
                            <ReactTyped 
                                className="text-[#ff6b6b] ml-2 min-h-[1.2em]"
                                strings={['Dairy', 'Processed Foods', 'High-GI Foods', 'Sugar', 'Gluten']} 
                                typeSpeed={100} 
                                backSpeed={80} 
                                loop
                                showCursor={true}
                                cursorChar="|"
                            />
                        </div>
                    </motion.div>

                    {/* Description with parallax */}
                    <Parallax speed={-1}>
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="max-w-3xl mx-auto"
                        >
                            <p className="hero-subtitle">
                                Acne diet tracker that logs the food you eat, analyzing the data to show 
                                correlation between the foods you consume and your skin health.
                            </p>
                        </motion.div>
                    </Parallax>

                    {/* CTA Button with enhanced animation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="pt-8"
                    >
                        <Link to='/signup'>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hero-cta"
                            >
                                <span className="relative z-10">Start Your Journey</span>
                                <motion.svg 
                                    className="hero-cta-arrow ml-2 w-5 h-5"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </motion.svg>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Trust indicators with staggered animation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                        className="hero-trust"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="hero-trust-item"
                        >
                            <div className="hero-trust-icon"></div>
                            <span>Data-driven insights</span>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="hero-trust-item"
                        >
                            <div className="hero-trust-icon"></div>
                            <span>Personalized tracking</span>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            className="hero-trust-item"
                        >
                            <div className="hero-trust-icon"></div>
                            <span>Science-backed approach</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero;