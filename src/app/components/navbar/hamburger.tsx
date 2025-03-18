// components/Nav.js
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={ `fixed top-0 right-0 flex flex-col justify-center items-center z-10 bg-[rgba(121,176,84,0.35)] rounded-full p-4 mt-1.5 z-20 mr-2`}
      >
        <span
          className={`bg-white text-white block transition-all duration-300 ease-out 
                      h-1 w-7 rounded-sm ${
                        isOpen? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                      }`}
        ></span>
        <span
          className={`bg-white text-white block transition-all duration-300 ease-out 
                      h-1 w-7 rounded-sm my-0.5 ${
                        isOpen? 'opacity-0' : 'opacity-100'
                      }`}
        ></span>
        <span
          className={`bg-white text-white block transition-all duration-300 ease-out 
                      h-1 w-7 rounded-sm ${
                        isOpen? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                      }`}
        ></span>
      </button>

      {/* Render menu items only if isOpen is true */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 w-full h-full flex flex-col items-start justify-center pl-8 bg-stone-200 z-10"
        >
          {['Home', 'Our Services', 'Projects', 'About Us', 'Get in Touch'].map((item, index) => (
            <motion.a
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              href={item === 'Get in Touch'? '/contact' : '/'}
              className="text-black my-4 text-lg font-medium hover:text-blue-500 transition duration-300 ease-out"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Nav;