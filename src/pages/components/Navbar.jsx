import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-[#ff6b6b] hover:text-[#ff5252] transition-colors duration-200 cursor-pointer">
              Nutriskin
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to='home' 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
              className="text-[#2f3c3f] hover:text-[#ff6b6b] font-medium transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <Link 
              to='about' 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}
              className="text-[#2f3c3f] hover:text-[#ff6b6b] font-medium transition-colors duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link 
              to='home'
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
              className="bg-[#ff6b6b] text-white px-6 py-2 rounded-full font-medium hover:bg-[#ff5252] transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleNav}
              className="text-[#2f3c3f] hover:text-[#ff6b6b] transition-colors duration-200 p-2"
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        nav 
          ? 'opacity-100 visible transform translate-x-0' 
          : 'opacity-0 invisible transform -translate-x-full'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to='home' 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
              onClick={() => setNav(false)}
              className="block text-[#2f3c3f] hover:text-[#ff6b6b] font-medium transition-colors duration-200 cursor-pointer py-2"
            >
              Home
            </Link>
            <Link 
              to='about' 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}
              onClick={() => setNav(false)}
              className="block text-[#2f3c3f] hover:text-[#ff6b6b] font-medium transition-colors duration-200 cursor-pointer py-2"
            >
              About
            </Link>
            <Link 
              to='home'
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
              onClick={() => setNav(false)}
              className="block bg-[#ff6b6b] text-white px-6 py-3 rounded-full font-medium hover:bg-[#ff5252] transition-colors duration-200 text-center cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;