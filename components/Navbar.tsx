import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-md transition-colors duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-green-400">
          <Link href="/">
            <a>MyPortfolio</a>
          </Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link href="#about"><a className="hover:text-green-400 transition-colors duration-300 ease-in-out">About</a></Link>
          <Link href="#skills"><a className="hover:text-green-400 transition-colors duration-300 ease-in-out">Skills</a></Link>
          <Link href="#work-experience"><a className="hover:text-green-400 transition-colors duration-300 ease-in-out">Work Experience</a></Link>
          <Link href="#projects"><a className="hover:text-green-400 transition-colors duration-300 ease-in-out">Projects</a></Link>
          <Link href="#education"><a className="hover:text-green-400 transition-colors duration-300 ease-in-out">Education</a></Link>
          <Link href="#contact"><a className="hover:text-green-400 transition-colors duration-300 ease-in-out">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
