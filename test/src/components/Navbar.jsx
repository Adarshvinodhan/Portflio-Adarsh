import React from 'react';
import { MailIcon, DocumentTextIcon } from '@heroicons/react/outline'; // Import heroicons
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import Font Awesome icons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-white text-2xl font-bold">
          Adarsh V
        </a>

        {/* Social Media Icons */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="https://www.linkedin.com/in/adarshvinodhan/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Adarshvinodhan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="mailto:adarshvinodhan@gmail.com" className="hover:text-gray-400">
              <MailIcon className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/11WCOTrfJZKpJwSyVLL0c-PILcEEt0EML_yogGFktAMY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <DocumentTextIcon className="w-6 h-6" />
            </a>
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
