import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faFile,
  faCode,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm relative">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white"
        >
          <FontAwesomeIcon icon={faUserTie} className="text-blue-600 dark:text-blue-400" />
          <span>Bg.</span>
        </Link>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-500 dark:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-8 text-xl font-medium text-gray-700 dark:text-white">
          <Link to="/home" className="hover:text-blue-600 dark:hover:text-blue-400  px-3 py-2">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400  px-3 py-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> About
          </Link>
          <Link to="/project" className="hover:text-blue-600 dark:hover:text-blue-400  px-3 py-2">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />Project
          </Link>
          
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400  px-3 py-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </Link>
          <Link to="/resume"  className="hover:text-blue-600 dark:hover:text-blue-400  px-3 py-2">
           <FontAwesomeIcon icon={faFile} className="mr-2" />Resume
          </Link>
          <a
            href="https://github.com/babulabana?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400  px-3 py-2"
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" /> GitHub
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
          <ul className="flex flex-col text-lg font-medium text-gray-700 dark:text-white">
            <li>
              <Link
                to="/home"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" /> About
              </Link>
            </li>
             <li>
                 <Link to="/project"
                  onClick={() => setIsOpen(false)}
                   className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />Project
                  </Link>
             </li>
           
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
              </Link>
            </li>
             <li>
               <Link to="/resume"
               onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                   >     
                   <FontAwesomeIcon icon={faFile} className="mr-2" />Resume
               </Link>
             </li>
            <li>
              <a
                href="https://github.com/babulabana?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faCode} className="mr-2" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
