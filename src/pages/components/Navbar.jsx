import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className = 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#2f3c3f]'>
      <h1 className = 'w-full text-3xl font-bold text-[#ff6b6b]'>Nustriskin</h1>
      <ul className = 'hidden md:flex'>
        <li className = 'p-4'>

            <Link to='home' spy={true} smooth={true} offset={0} duration={500}>
                Home
            </Link>
        </li>

        <li className = 'p-4'>
            <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
                About
            </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className = {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className = 'w-full text-3xl font-bold text-[#ff6b6b] m-4'>MEND</h1>
          <li className = 'p-4 border-b border-gray-600'>
          <Link to='home' spy={true} smooth={true} offset={0} duration={500}>
                Home
            </Link>
          </li>
          <li className = 'p-4'>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
                About
            </Link>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;