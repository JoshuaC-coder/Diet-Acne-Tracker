import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { FaUtensils, FaChartLine, FaLightbulb, FaSmile } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            icon: FaUtensils,
            title: "Log Your Meals",
            description: "Simply log what you eat throughout the day. Our smart system recognizes thousands of foods and ingredients.",
            color: "bg-blue-500"
        },
        {
            icon: FaChartLine,
            title: "Track Your Skin",
            description: "Record your skin condition daily - breakouts, inflammation, oiliness. We track patterns you might miss.",
            color: "bg-purple-500"
        },
        {
            icon: FaLightbulb,
            title: "Get Insights",
            description: "Our AI analyzes the correlation between your diet and skin health, revealing your personal triggers.",
            color: "bg-green-500"
        },
        {
            icon: FaSmile,
            title: "Clearer Skin",
            description: "Armed with personalized insights, make informed dietary choices for healthier, clearer skin.",
            color: "bg-[#ff6b6b]"
        }
    ];

    return (
        <div className="w-full bg-white py-20 px-4" id="how-it-works">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 mb-6"
                    >
                        <span className="text-[#ff6b6b] font-semibold text-sm tracking-wide">
                            HOW IT WORKS
                        </span>
                    </motion.div>
                    
                    <Parallax speed={-1}>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3c3f] mb-6"
                        >
                            Your Journey to
                            <span className="text-[#ff6b6b]"> Clearer Skin</span>
                        </motion.h2>
                    </Parallax>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Four simple steps to discover what's really affecting your skin and take control of your complexion.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#ff6b6b] text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                                {index + 1}
                            </div>

                            {/* Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                {/* Icon */}
                                <motion.div 
                                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    whileHover={{ rotate: 5 }}
                                >
                                    <step.icon className="text-white text-2xl" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#2f3c3f] mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-transparent transform -translate-y-1/2 z-0"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
