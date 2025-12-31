import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import hotelStaff from '@/assets/hotel-staff.jpg';
import bakery from '@/assets/bakery.jpg';
import spaWellness from '@/assets/spa-wellness.jpg';
import chef from '@/assets/chef.jpg';

const industries = [
  { name: 'Hotel units & hotel chains', image: hotelStaff },
  { name: 'Bakeries', image: bakery },
  { name: 'Spas & wellness centres', image: spaWellness },
  { name: 'Restaurants', image: chef },
];

export const IndustriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Industries</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Industries We Serve
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Previous industry"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Next industry"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm text-primary-foreground font-medium">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="default" asChild>
            <Link to="/industries">View all</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
