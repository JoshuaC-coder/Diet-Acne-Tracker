import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#ff6b6b] mb-4">Nutriskin</h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your skin is a reflection of your diet. Track your meals, monitor your skin health, 
              and discover the correlation between what you eat and how your skin responds.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/JoshuaC-coder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200"
              >
                <FaGithubSquare size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="mailto:contact@nutriskin.com" 
                className="text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to='home' 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500}
                  className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to='about' 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}
                  className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to='/signup'
                  className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link 
                  to='/signin'
                  className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200 cursor-pointer">
                Meal Tracking
              </li>
              <li className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200 cursor-pointer">
                Skin Health Monitoring
              </li>
              <li className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200 cursor-pointer">
                Data Analytics
              </li>
              <li className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-200 cursor-pointer">
                Personalized Insights
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nutriskin. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#ff6b6b] text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6b6b] text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6b6b] text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;