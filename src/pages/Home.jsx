import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Footer from './components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
      <Hero/>
      <Analytics/>
      <Footer/>
        </div>
    )

}

export default Home;