
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, CheckSquare } from 'lucide-react';

interface CertificationItem {
  title: string;
}

const Certifications: React.FC = () => {
  const certifications: CertificationItem[] = [
    { title: "Build a Face Recognition Application using Python" },
    { title: "65+ web vulnerabilities, VAPT, bug hunting, ethical hacking, network penetration testing, Kali Linux and other cybersecurity topics" },
    { title: "OWASP's top 10, Kali Linux, bug hunting, VAPT, ethical hacking, and other cybersecurity topics" }
  ];

  return (
    <section id="certifications" className="section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="opacity-0 animate-fade-in border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 flex gap-3">
                <Award className="text-portfolio-purple h-6 w-6 min-w-[24px] mt-1" />
                <p className="text-gray-800 dark:text-gray-200">{cert.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { language: "English", level: "C2" },
              { language: "Hindi", level: "B2" },
              { language: "Tamil", level: "A1" },
              { language: "Malayalam", level: "C1" },
              { language: "Kannada", level: "A1" }
            ].map((item, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fade-in bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 text-center border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-2">
                  <CheckSquare className="text-portfolio-purple h-5 w-5" />
                </div>
                <h4 className="font-medium">{item.language}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
