import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Analytics from './components/Analytics'
import Footer from './components/Footer'

const Home = () => {
    return (
        <ParallaxProvider>
            <div className="snap-container">
                {/* Navbar - Fixed outside snap container */}
                <Navbar />
                
                {/* Hero Section */}
                <section className="snap-section min-h-screen">
                    <Hero />
                </section>

                {/* How It Works Section */}
                <section className="snap-section min-h-screen">
                    <HowItWorks />
                </section>

                {/* Analytics/About Section */}
                <section className="snap-section min-h-screen">
                    <Analytics />
                </section>
            </div>
            
            {/* Footer - Outside snap container to eliminate gaps */}
            <Footer />
        </ParallaxProvider>
    )
}

export default Home;