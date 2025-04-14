
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-portfolio-light-purple">Muhammed</span> Shameel A
          </h2>
          
          <div className="flex gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/muhammedshameeela/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-portfolio-purple transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-portfolio-purple transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:shamee.anjillath@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-portfolio-purple transition-colors flex items-center justify-center"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="w-full max-w-md mb-8">
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>

          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li><a href="#about" className="hover:text-portfolio-purple transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-portfolio-purple transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-portfolio-purple transition-colors">Skills</a></li>
              <li><a href="#education" className="hover:text-portfolio-purple transition-colors">Education</a></li>
              <li><a href="#certifications" className="hover:text-portfolio-purple transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-portfolio-purple transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Muhammed Shameel A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
