import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { ProcessSection } from '@/components/home/ProcessSection';
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

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reliable recruitment solutions tailored to your business and household needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List with Hover Effects */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
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
                <div className="relative">
                  {/* Full-width image that appears on hover */}
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 300 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-x-0 top-0 w-full overflow-hidden rounded-[15px] z-0"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[300px] object-cover rounded-[15px]"
                        />
                        {/* Overlay for text readability */}
                        <div className="absolute inset-0 bg-black/40 rounded-[15px]" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <motion.div 
                    className="relative py-8 flex items-center justify-between z-20"
                    animate={{
                      height: activeService === service.id ? 300 : 'auto',
                      alignItems: activeService === service.id ? 'flex-end' : 'center',
                      paddingBottom: activeService === service.id ? 32 : 32,
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="flex items-center gap-8">
                      <motion.span 
                        className="text-sm font-medium min-w-[40px]"
                        animate={{
                          color: activeService === service.id ? 'hsl(0, 0%, 100%)' : 'hsl(var(--muted-foreground))',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.id}.
                      </motion.span>
                      <motion.h3 
                        className="font-serif text-xl md:text-2xl"
                        animate={{
                          color: activeService === service.id ? 'hsl(0, 0%, 100%)' : 'hsl(var(--foreground))',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
                      animate={{ 
                        opacity: activeService === service.id ? 1 : 0,
                        color: activeService === service.id ? 'hsl(0, 0%, 100%)' : 'hsl(var(--foreground))',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="hidden sm:inline">View Details</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedService && (
            <>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-primary-foreground/60 text-sm font-medium">
                    {selectedService.id}.
                  </span>
                </div>
              </div>
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

      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Services;
