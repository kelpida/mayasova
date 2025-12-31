import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    description: 'We identify the best candidates for your specific needs through our extensive network.'
  },
  { 
    id: '02', 
    title: 'CV Screening',
    image: businessWoman,
    description: 'Thorough review and assessment of candidate qualifications and experience.'
  },
  { 
    id: '03', 
    title: 'Interview Coordination',
    image: chef,
    description: 'We arrange and coordinate interviews between employers and candidates.'
  },
  { 
    id: '04', 
    title: 'Legal & Immigration Paperwork',
    image: hotelStaff,
    description: 'Complete handling of all legal documentation and immigration requirements.'
  },
  { 
    id: '05', 
    title: 'Training for Domestic Workers',
    image: spaWellness,
    description: 'Comprehensive training programs to prepare workers for their roles.'
  },
  { 
    id: '06', 
    title: 'Post-Placement Support',
    image: bakery,
    description: 'Ongoing support for both employers and employees after placement.'
  },
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

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

        {/* Services List */}
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="service-item group border-b border-border"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative py-6 flex items-center">
                {/* Image that appears on hover */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 200 }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="absolute left-0 top-0 h-full overflow-hidden z-10"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-[200px] object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content */}
                <motion.div
                  className="flex items-center justify-between w-full relative z-20"
                  animate={{
                    x: activeService === service.id ? 220 : 0,
                    color: activeService === service.id ? 'hsl(60, 9%, 98%)' : 'hsl(100, 15%, 20%)',
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-sm font-medium min-w-[40px]">
                      {service.id}.
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      color: activeService === service.id ? 'hsl(60, 9%, 98%)' : 'hsl(100, 15%, 26%)',
                    }}
                  >
                    <span className="hidden sm:inline">VIEW DETAILS</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-12">
          <Button variant="default" asChild>
            <Link to="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
