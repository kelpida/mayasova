import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import businessWoman from '@/assets/business-woman.jpg';

const stats = [
  { number: '25+', label: 'years of recruitment\nexperience' },
  { number: '2', label: 'offices in Limassol\n& Nicosia' },
  { number: '6', label: 'partner\ncountries' },
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Image - First Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-sm overflow-hidden shadow-medium">
              <img
                src={businessWoman}
                alt="Business professional"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="section-label mb-6">About Us</p>
            
            <p className="text-foreground/80 leading-relaxed mb-8">
              Mayiasova Services is a licensed recruitment agency with over 25 years of experience 
              providing trusted domestic and professional staff through a careful, reliable, and 
              legally compliant process.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <span className="stat-number text-foreground">{stat.number}</span>
                  <p className="text-xs text-muted-foreground mt-2 whitespace-pre-line">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button variant="default" asChild>
              <Link to="/about">learn more</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
