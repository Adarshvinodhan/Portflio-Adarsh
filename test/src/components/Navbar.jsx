// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-white text-2xl font-bold">
          Adarsh V
        </a>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="#home" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
