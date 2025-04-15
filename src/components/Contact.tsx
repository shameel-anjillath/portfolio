import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        formRef.current?.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <section id="contact" className="section py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Feel free to reach out if you'd like to connect, collaborate, or discuss potential opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-portfolio-soft-purple p-3 rounded-full">
                    <MapPin className="text-portfolio-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">215 Street, Mehboola, Kuwait</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-portfolio-soft-purple p-3 rounded-full">
                    <Mail className="text-portfolio-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:shamee.anjillath@gmail.com" className="hover:text-portfolio-purple">
                        shamee.anjillath@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-portfolio-soft-purple p-3 rounded-full">
                    <Phone className="text-portfolio-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+9656033-2951" className="hover:text-portfolio-purple">
                        +965-6033-2951
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-portfolio-soft-purple p-3 rounded-full">
                    <Linkedin className="text-portfolio-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a 
                        href="https://www.linkedin.com/in/muhammedshameela/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-portfolio-purple"
                      >
                        linkedin.com/in/muhammedshameeela/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input 
                      id="from_name"
                      name="from_name" 
                      placeholder="Your name" 
                      required 
                      className="focus-visible:ring-portfolio-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input 
                      id="user_email"
                      name="user_email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                      className="focus-visible:ring-portfolio-purple"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    name="subject" 
                    placeholder="Subject" 
                    required 
                    className="focus-visible:ring-portfolio-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message" 
                    placeholder="Your message" 
                    required 
                    className="min-h-[150px] focus-visible:ring-portfolio-purple"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-portfolio-purple hover:bg-portfolio-light-purple">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
