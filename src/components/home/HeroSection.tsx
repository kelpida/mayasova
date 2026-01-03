import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bakeryImage from '@/assets/bakery.jpg';
import chefImage from '@/assets/chef.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Diagonal gradient background */}
      <div className="absolute inset-0">
        {/* Base dark green - rgba(41, 58, 48, 1) */}
        <div className="absolute inset-0 bg-primary-dark" />
        {/* Diagonal lighter stripe - going from top-left to bottom-right */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                125deg, 
                hsl(145 17% 19%) 0%, 
                hsl(145 17% 19%) 30%, 
                hsl(140 19% 36% / 0.38) 30%, 
                hsl(140 19% 36% / 0.25) 55%, 
                hsl(145 17% 19%) 55%, 
                hsl(145 17% 19%) 100%
              )
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="w-36 h-44 sm:w-44 sm:h-52 lg:w-48 lg:h-56 rounded-sm overflow-hidden shadow-hover">
              <img
                src={bakeryImage}
                alt="Professional at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-8 lg:mb-10 font-light tracking-tight">
              Helping<br />
              Companies Grow
            </h1>

            <Button 
              variant="hero-outline" 
              size="xl" 
              asChild
              className="px-10 lg:px-12 border-white/40 text-white hover:bg-white/10"
            >
              <Link to="/contact">Request Staff</Link>
            </Button>
          </motion.div>
        </div>

        {/* Bottom row with tagline and right image */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-16 lg:mt-20 gap-8">
          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 max-w-lg text-sm md:text-base leading-relaxed"
          >
            Your Trusted Partner in Professional & Domestic Recruitment,
            connecting employers with qualified professionals.
          </motion.p>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="shrink-0 hidden sm:block"
          >
            <div className="w-48 h-40 lg:w-56 lg:h-44 rounded-sm overflow-hidden shadow-hover">
              <img
                src={chefImage}
                alt="Professional chef"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
