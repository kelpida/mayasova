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
        {/* Base dark green */}
        <div className="absolute inset-0 bg-primary-dark" />
        {/* Diagonal lighter stripe */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, transparent 35%, hsl(140 19% 36% / 0.38) 35%, hsl(140 19% 36% / 0.25) 65%, transparent 65%, transparent 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="relative">
          {/* Left Image - positioned absolutely */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 rounded-sm overflow-hidden shadow-hover hidden md:block"
          >
            <img
              src={bakeryImage}
              alt="Professional at work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center md:text-left md:ml-[280px] lg:ml-[320px] max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-10 font-light tracking-tight">
              Helping<br />
              Companies Grow
            </h1>

            <Button 
              variant="hero-outline" 
              size="xl" 
              asChild
              className="px-12"
            >
              <Link to="/contact">Request Staff</Link>
            </Button>
          </motion.div>

          {/* Right Image - positioned at bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 bottom-0 translate-y-1/3 w-48 h-40 md:w-56 md:h-48 lg:w-64 lg:h-52 rounded-sm overflow-hidden shadow-hover hidden lg:block"
          >
            <img
              src={chefImage}
              alt="Professional chef"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/80 mt-32 max-w-lg text-sm md:text-base leading-relaxed"
        >
          Your Trusted Partner in Professional & Domestic Recruitment,
          connecting employers with qualified professionals.
        </motion.p>
      </div>
    </section>
  );
};
