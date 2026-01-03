import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
          <div>
            {/* Section Label with Arrow */}
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight size={18} className="text-foreground" />
              <span className="text-sm font-medium uppercase tracking-wider text-foreground">
                Industries
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Industries We Serve
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 self-end sm:self-start">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-foreground/20 rounded-sm flex items-center justify-center hover:bg-foreground/5 transition-colors"
              aria-label="Previous industry"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-foreground/20 rounded-sm flex items-center justify-center hover:bg-foreground/5 transition-colors"
              aria-label="Next industry"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Industries Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex-shrink-0 w-[280px] md:w-[300px] aspect-[4/5] overflow-hidden rounded-sm cursor-pointer snap-start"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* White pill label at bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/95 backdrop-blur-sm rounded-lg py-3 px-5 text-center shadow-soft">
                  <span className="text-sm text-foreground font-medium">
                    {industry.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="default" asChild>
            <Link to="/industries">View all</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
