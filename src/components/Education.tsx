
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: "Bachelor's Engineering in Computer Science",
      institution: "A J Institute of Engineering and Technology",
      period: "Aug 2018 - Aug 2022",
      specialization: "Specialization in Computer Science Engineering"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Nithyananda Bhavan English Medium School (CBSE)",
      period: "Jun 2016 - Mar 2018",
      specialization: "Specialization in Bio-Science"
    },
    {
      degree: "Secondary Education",
      institution: "Nithyananda Bhavan English Medium School (CBSE)",
      period: "Jun 2015 - Mar 2016"
    }
  ];

  return (
    <section id="education" className="section py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <Card 
              key={index} 
              className="opacity-0 animate-fade-in hover:shadow-lg transition-shadow border-t-4 border-t-portfolio-purple"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={24} className="text-portfolio-purple" />
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.institution}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                {item.specialization && (
                  <p className="text-sm bg-portfolio-soft-purple text-portfolio-purple dark:bg-gray-700 dark:text-gray-300 py-1 px-3 rounded-full inline-block">
                    {item.specialization}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
