import { useState } from 'react';
import { motion } from 'framer-motion';
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
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="service-item group border-b border-border cursor-pointer"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative overflow-hidden">
                {/* Background image collage that appears on hover */}
                <motion.div
                  className="absolute inset-x-2 inset-y-0 z-0 rounded-[15px] overflow-hidden"
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
                  className="relative py-6 flex items-center justify-between z-20"
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
