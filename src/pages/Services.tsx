import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { ProcessSection } from '@/components/home/ProcessSection';

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
    description: 'We identify the best candidates for your specific needs through our extensive network across partner countries.'
  },
  { 
    id: '02', 
    title: 'CV Screening',
    image: businessWoman,
    description: 'Thorough review and assessment of candidate qualifications, experience, and suitability for your requirements.'
  },
  { 
    id: '03', 
    title: 'Interview Coordination',
    image: chef,
    description: 'We arrange and coordinate interviews between employers and candidates, handling all logistics.'
  },
  { 
    id: '04', 
    title: 'Legal & Immigration Paperwork',
    image: hotelStaff,
    description: 'Complete handling of all legal documentation, work permits, and immigration requirements.'
  },
  { 
    id: '05', 
    title: 'Training for Domestic Workers',
    image: spaWellness,
    description: 'Comprehensive training programs to prepare workers for their specific roles and responsibilities.'
  },
  { 
    id: '06', 
    title: 'Post-Placement Support',
    image: bakery,
    description: 'Ongoing support for both employers and employees after placement to ensure satisfaction.'
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

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
                className="group relative border-b border-border overflow-hidden"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative">
                  {/* Background that appears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeService === service.id ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Image that slides in on hover */}
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 280 }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute left-0 top-0 h-full overflow-hidden z-10"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-[280px] object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <motion.div
                    className="relative py-8 flex items-center justify-between z-20"
                    animate={{
                      x: activeService === service.id ? 300 : 0,
                      paddingRight: activeService === service.id ? 20 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="flex items-center gap-8">
                      <motion.span
                        className="text-sm font-medium min-w-[40px]"
                        animate={{
                          color: activeService === service.id ? 'hsl(60, 9%, 98%)' : 'hsl(100, 8%, 45%)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.id}.
                      </motion.span>
                      <motion.h3
                        className="font-serif text-xl md:text-2xl"
                        animate={{
                          color: activeService === service.id ? 'hsl(60, 9%, 98%)' : 'hsl(100, 15%, 20%)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    <motion.button
                      className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
                      animate={{
                        color: activeService === service.id ? 'hsl(60, 9%, 98%)' : 'hsl(100, 15%, 26%)',
                        opacity: activeService === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="hidden sm:inline">View Details</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Services;
