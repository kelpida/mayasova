import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

import heroImage from '@/assets/hero-handshake.jpg';
import businessWoman from '@/assets/business-woman.jpg';
import chef from '@/assets/chef.jpg';
import hotelStaff from '@/assets/hotel-staff.jpg';
import spaWellness from '@/assets/spa-wellness.jpg';
import bakery from '@/assets/bakery.jpg';

const services = [
  { 
    id: '01', 
    title: 'Recruitment & Talent Matching',
    image: heroImage,
    description: 'We identify the best candidates for your specific needs through our extensive network across partner countries. Our team works closely with you to understand your requirements, culture, and expectations to find the perfect match for your organization or household.'
  },
  { 
    id: '02', 
    title: 'CV Screening',
    image: businessWoman,
    description: 'Thorough review and assessment of candidate qualifications, experience, and suitability for your requirements. We verify credentials, check references, and ensure that only the most qualified candidates are presented to you.'
  },
  { 
    id: '03', 
    title: 'Interview Coordination',
    image: chef,
    description: 'We arrange and coordinate interviews between employers and candidates, handling all logistics. This includes scheduling, video call setup for remote interviews, and providing guidance on interview best practices.'
  },
  { 
    id: '04', 
    title: 'Legal & Immigration Paperwork',
    image: hotelStaff,
    description: 'Complete handling of all legal documentation, work permits, and immigration requirements. Our legal experts ensure full compliance with Cyprus employment law and EU regulations, making the process smooth and stress-free.'
  },
  { 
    id: '05', 
    title: 'Training for Domestic Workers',
    image: spaWellness,
    description: 'Comprehensive training programs to prepare workers for their specific roles and responsibilities. Training covers professional skills, cultural integration, language basics, and household management practices.'
  },
  { 
    id: '06', 
    title: 'Post-Placement Support',
    image: bakery,
    description: 'Ongoing support for both employers and employees after placement to ensure satisfaction. We provide regular check-ins, conflict resolution assistance, and replacement guarantees within the first three months.'
  },
];

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Passion for People,
            <br />
            Dedication to Results
          </h2>
        </div>
   {/* Services List with Hover Effects */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative border-b border-border cursor-pointer"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                onClick={() => handleServiceClick(service)}
              >
                <div className="relative overflow-hidden rounded-[15px]">
                  {/* Background image collage that appears on hover */}
                  <motion.div
                    className="absolute inset-0 z-0 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: activeService === service.id ? 1 : 0,
                      scale: activeService === service.id ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <motion.div 
                      className="w-full h-full flex"
                      initial={{ x: -20 }}
                      animate={{ 
                        x: activeService === service.id ? 0 : -20,
                      }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {/* Multiple images in a row */}
                      {services.map((s, i) => (
                        <div key={i} className="flex-1 h-full">
                          <img
                            src={s.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </motion.div>
                    {/* Gray overlay */}
                    <div className="absolute inset-0 bg-gray-500/60" />
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    className="relative py-6 px-6 flex items-center justify-between z-20"
                    animate={{
                      paddingTop: activeService === service.id ? 40 : 24,
                      paddingBottom: activeService === service.id ? 40 : 24,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Number - stays on left */}
                    <motion.span 
                      className="text-sm font-medium min-w-[40px]"
                      animate={{
                        color: activeService === service.id ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 45%)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.id}.
                    </motion.span>

                    {/* Title - centers on hover */}
                    <motion.h3 
                      className="font-serif text-xl md:text-2xl absolute left-12"
                      animate={{
                        color: activeService === service.id ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 20%)',
                        left: activeService === service.id ? '50%' : '48px',
                        x: activeService === service.id ? '-50%' : '0%',
                        scale: activeService === service.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* View Details - stays on right */}
                    <motion.div
                      className="text-sm font-medium uppercase tracking-wide underline underline-offset-4"
                      animate={{ 
                        color: activeService === service.id ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 20%)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>View Details</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   

        {/* Learn More Button */}
        <div className="text-center mt-12">
          <Button variant="default" asChild>
            <Link to="/services">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedService && (
            <>
              <div className="p-6 pt-4">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground">
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="mt-4 text-muted-foreground text-base leading-relaxed">
                  {selectedService.description}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
