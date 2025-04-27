import React from 'react';

import {
  FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#ff6b6b]'>Nutriskin</h1>
        <p className='py-4'>AI-powered debugger that identifies code issues and guides users step-by-step, aimed for both efficiency and learning.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <a href="https://github.com/JoshuaC-coder" target="_blank" rel="noopener noreferrer">

            <FaGithubSquare size={30} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;