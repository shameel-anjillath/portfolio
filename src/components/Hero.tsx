import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-portfolio-soft-purple to-portfolio-purple opacity-10"></div>
      <div 
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-3/5">
            <p className="text-portfolio-purple font-medium mb-3 animate-fade-in">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in animate-delay-100">
              MUHAMMED SHAMEEL A
            </h1>
            <div className="h-[4px] w-32 bg-portfolio-purple mb-6 animate-fade-in animate-delay-200"></div>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fade-in animate-delay-300">
              <span className="typing-container">
                <span className="typing-text">Software Engineer & Security Specialist</span>
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl animate-fade-in animate-delay-400">
              Driven Software Engineer with 2+ years of experience in Zoho Creator, full-stack development, and cybersecurity. 
              Proficient in front-end, back-end, and database administration, with expertise in penetration testing, VAPT, and ethical hacking.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in animate-delay-500">
              <Button className="bg-portfolio-purple hover:bg-portfolio-light-purple flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:shamee.anjillath@gmail.com">Contact Me</a>
              </Button>
              <a href="/MuhammedShameelA.pdf" download>
              <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-soft-purple flex items-center gap-2">
                <Download size={16} />
                Download CV
              </Button>
              </a>
            </div>

            <div className="flex gap-4 animate-fade-in animate-delay-500">
              <a 
                href="https://www.linkedin.com/in/muhammedshameela/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-portfolio-soft-purple text-portfolio-purple flex items-center justify-center transition-transform hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href ="https://github.com/shameel-anjillath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-portfolio-soft-purple text-portfolio-purple flex items-center justify-center transition-transform hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:shamee.anjillath@gmail.com" 
                className="w-10 h-10 rounded-full bg-portfolio-soft-purple text-portfolio-purple flex items-center justify-center transition-transform hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative animate-fade-in animate-delay-200">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-portfolio-purple rounded-full absolute -z-10 -top-3 -right-3"></div>
              <div className="border-8 border-white dark:border-gray-800 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}shameel.png`} 
                  alt="Muhammed Shameel A" 
                  className="w-64 h-66 md:w-72 md:h-74 lg:w-80 lg:h-82 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
