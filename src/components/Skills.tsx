
import React, { useEffect, useRef } from 'react';
import { 
  Code, Database, GitBranch, Globe, 
  Laptop, Layout, Terminal, Server 
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.skill-item');
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-fade-in');
              }, i * 100);
            });
          }
        });
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

  const skillCategories: SkillCategory[] = [
    {
      name: "Operating System",
      icon: <Laptop className="text-portfolio-purple h-6 w-6" />,
      skills: ["Linux", "Windows", "MacOS"]
    },
    {
      name: "Programming Language",
      icon: <Code className="text-portfolio-purple h-6 w-6" />,
      skills: ["C++", "Python", "JavaScript"]
    },
    {
      name: "Web Development",
      icon: <Globe className="text-portfolio-purple h-6 w-6" />,
      skills: ["HTML", "CSS", "EJS", "jQuery"]
    },
    {
      name: "Framework",
      icon: <Layout className="text-portfolio-purple h-6 w-6" />,
      skills: ["Bootstrap", "Express.JS", "React.JS"]
    },
    {
      name: "Database",
      icon: <Database className="text-portfolio-purple h-6 w-6" />,
      skills: ["SQL", "PostgreSQL", "MongoDB"]
    },
    {
      name: "Version Control",
      icon: <GitBranch className="text-portfolio-purple h-6 w-6" />,
      skills: ["GitHub"]
    },
    {
      name: "API",
      icon: <Server className="text-portfolio-purple h-6 w-6" />,
      skills: ["RESTful APIs", "GraphQL", "Mapmindia", "Mappls API"]
    },
    {
      name: "Runtime Environment",
      icon: <Terminal className="text-portfolio-purple h-6 w-6" />,
      skills: ["Node.JS"]
    }
  ];

  return (
    <section id="skills" className="section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto"></div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-item opacity-0 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold ml-2">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-purple rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Penetration Testing Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Burp suite", "Metasploit", "Nmap", "Wireshark", "Zoho Creator", "Zoho Creator Development"].map((tool, index) => (
              <div 
                key={index}
                className="skill-item opacity-0 bg-portfolio-soft-purple dark:bg-gray-800 rounded-full py-3 px-6 flex justify-center"
              >
                <span className="font-medium text-portfolio-purple dark:text-gray-200">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
