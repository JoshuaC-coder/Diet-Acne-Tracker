import React from 'react'
import debuggerCartoon from '../assets/acneVisual.jpg'
import { Link } from 'react-scroll';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Analytics = () => {
    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4" id="about">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section with parallax */}
                    <Parallax speed={-2}>
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <motion.img 
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl" 
                                    src={debuggerCartoon} 
                                    alt="Acne tracking visualization"
                                />
                            </div>
                            {/* Decorative background elements with parallax */}
                            <Parallax speed={-1}>
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ff6b6b]/20 rounded-full blur-xl"></div>
                            </Parallax>
                            <Parallax speed={-3}>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300/20 rounded-full blur-xl"></div>
                            </Parallax>
                        </motion.div>
                    </Parallax>

                    {/* Content Section with staggered animations */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff6b6b]/10 border border-[#ff6b6b]/20"
                        >
                            <span className="text-[#ff6b6b] font-semibold text-sm tracking-wide">
                                ABOUT THE TRACKER
                            </span>
                        </motion.div>

                        {/* Heading with parallax */}
                        <Parallax speed={-1}>
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3c3f] leading-tight"
                            >
                                Stop Wondering What's 
                                <span className="text-[#ff6b6b]"> Breaking You Out</span>
                            </motion.h2>
                        </Parallax>

                        {/* Description with staggered paragraphs */}
                        <div className="space-y-4">
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                Nutriskin allows users to log their daily meals and track the severity of 
                                their acne breakouts, helping them identify potential food triggers.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                The site generates personalized insights by analyzing the correlation between food consumption 
                                and skin health, providing users with valuable data to manage their diet for clearer skin.
                            </motion.p>
                        </div>

                        {/* Features with staggered animation */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                        >
                            {[
                                { text: "Easy meal logging", delay: 0.9 },
                                { text: "Visual data analysis", delay: 1.0 },
                                { text: "Personalized insights", delay: 1.1 },
                                { text: "Science-backed approach", delay: 1.2 }
                            ].map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: feature.delay, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-8 h-8 bg-[#ff6b6b]/10 rounded-full flex items-center justify-center"
                                    >
                                        <svg className="w-4 h-4 text-[#ff6b6b]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </motion.div>
                                    <span className="text-gray-700 font-medium">{feature.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button with enhanced animation */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="pt-6"
                        >
                            <Link to='home' spy={true} smooth={true} offset={0} duration={500}>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#ff6b6b] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                                >
                                    <span className="relative z-10">Get Started Today</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ff5252] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <motion.svg 
                                        className="ml-2 w-5 h-5"
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics;