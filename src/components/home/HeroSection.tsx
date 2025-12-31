import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-handshake.jpg';
import chefImage from '@/assets/chef.jpg';

export const HeroSection = () => {
  return (
    <section className="relative bg-primary min-h-[85vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Small Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 rounded-sm overflow-hidden mb-8"
            >
              <img
                src={chefImage}
                alt="Professional chef"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-8">
              Helping<br />
              Companies Grow
            </h1>

            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request Staff</Link>
            </Button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary-foreground/70 mt-12 max-w-md text-sm leading-relaxed"
            >
              Your Trusted Partner in Professional & Domestic Recruitment,
              connecting employers with qualified professionals.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-sm overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Business professionals meeting"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
