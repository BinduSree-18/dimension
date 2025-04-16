import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed overflow-x-hidden top-0 left-0 w-full px-6 flex items-center justify-between z-50 transition-all duration-500 ${
        scrolled ? 'border-none' : 'bg-white/[0.03] py-4 backdrop-blur-lg border-b border-white/10'
      }`}
    >
      {/* Logo */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
          >
            <div className="">
              <div className=""><img src={logo} className='w-[33px] h-[33px]'/></div>
            </div>
            <span className="text-white text-lg font-semibold">Dimension</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu */}
      <div
        className={`hidden sm:flex gap-2 items-center mx-auto border border-white border-opacity-10 backdrop-blur-md rounded-full px-8 py-[12px] text-[14px] text-gray-400 font-semibold ${
          scrolled ? 'mt-4 bg-white/5' : ''
        }`}
      >
        <button className="hover:text-purple-300 transition mx-2">About</button>
        <button className="hover:text-purple-300 transition relative mx-2">
          Careers
          <span className="ml-1 text-xs bg-gray-300 bg-opacity-10 rounded-full px-1.5 py-0.5 text-white">2</span>
        </button>
        <button className="hover:text-purple-300 transition mx-2">Blog</button>
        <button className="hover:text-purple-300 transition mx-2">Changelog</button>

        {/* Inline button appears with animation */}
        <AnimatePresence>
          {scrolled && (
            <>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-white"
              >
                |
              </motion.span>
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.1 }}
                className="mx-2 text-white bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-yellow-400/90 px-4 py-1.5 rounded-[15px]"
              >
                Join waitlist
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Top-right Join Waitlist button */}
      <AnimatePresence>
        {!scrolled && (
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.2 }}
            className="text-white bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-md backdrop-blur-sm"
          >
            Join waitlist
          </motion.button>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
