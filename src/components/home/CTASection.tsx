import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Contact Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Let's Find the Right
              <br />
              Staff for You
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-muted-foreground mb-6 max-w-md md:ml-auto">
              Whether you need domestic or professional personnel, our team is here to help you 
              every step of the way.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Request Staff</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
