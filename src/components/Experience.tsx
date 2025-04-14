
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      position: "Software Engineer",
      company: "Nuron Network Pvt Ltd",
      period: "Nov 2022 - Jan 2025",
      responsibilities: [
        "Created responsive, mobile-first web pages using HTML, CSS, and Bootstrap; designed user interfaces following global design standards.",
        "Designed dynamic content with Embedded JavaScript (EJS) to create templates for reusable code, enabling quick front-end development.",
        "Worked closely with UI/UX teams to convert wireframes and mockups into functional pages, adhering to design guidelines and best practices.",
        "Utilized modern front-end development tools, package managers, and version control systems to streamline the development process.",
        "Collaborated with the solution team to create custom applications on Zoho Creator based on client requirements.",
        "Wrote backend code in Deluge scripting, Zoho Creator's proprietary language, to apply complex business logic and automate workflows.",
        "Analyzed client requirements, created application architectures, and ensured that solutions met or exceeded client expectations.",
        "Trained and supported end-users in effectively utilizing and maintaining applications developed on Zoho Creator."
      ]
    },
    {
      position: "Intern",
      company: "EyeQ Dot Net Pvt. Ltd",
      period: "Feb 2023 - Jan 2024",
      responsibilities: [
        "Completed training and internship with hands-on experience in OWASP Top 10, VAPT, bug hunting, and ethical hacking.",
        "Identified and mitigated 65+ web vulnerabilities, conducted network penetration testing with Kali Linux and industry-standard tools.",
        "Strengthened security frameworks through thorough assessments, cyber threat analysis, risk mitigation, and secure coding practices.",
        "Proficient in security auditing, vulnerability assessment, web/API security, and familiar with ISO 27001 compliance."
      ]
    },
    {
      position: "Web Development Bootcamp",
      company: "Udemy",
      period: "Jul 2024 - Dec 2024",
      responsibilities: [
        "Front-End & Back-End: HTML5, CSS3, Bootstrap 5, JavaScript (ES6), React.js, Node.js, Express.js, REST APIs, SQL, PostgreSQL",
        "Web3 & Blockchain: Token contracts, NFT minting, Web3 applications",
        "Version Control & Deployment: Git, GitHub, GitHub Pages",
        "Additional Tools: Bash, EJS, Flexbox, Grid and 20+ real-world projects"
      ]
    },
    {
      position: "Security Operations Center (SOC) Analyst Training",
      company: "Udemy",
      period: "Dec 2024 - Mar 2024",
      responsibilities: [
        "SOC Operations & Incident Response: Monitoring, analyzing, and responding to security incidents using IDS, EDR, and other SOC technologies.",
        "Threat Detection & Response: Expertise in SIEM tools (Splunk, ELK, ArcSight) for event correlation and security analysis.",
        "Threat Intelligence & Security Fundamentals: Proactive defense strategies, understanding threat types, network security, and vulnerability management.",
        "Practical Experience: Hands-on implementing security strategies and security tools."
      ]
    }
  ];

  return (
    <section id="experience" className="section py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto"></div>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="overflow-hidden border-l-4 border-l-portfolio-purple hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Briefcase size={20} className="text-portfolio-purple" />
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Badge variant="outline" className="flex gap-1 items-center text-sm border-portfolio-purple text-portfolio-purple">
                        <Calendar size={14} />
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle2 size={18} className="min-w-[18px] mt-1 text-portfolio-purple" />
                        <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
