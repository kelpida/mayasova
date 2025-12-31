import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { Check } from 'lucide-react';

import businessWoman from '@/assets/business-woman.jpg';

const stats = [
  { number: '25+', label: 'years of recruitment experience' },
  { number: '2', label: 'offices in Limassol & Nicosia' },
  { number: '6', label: 'partner countries' },
];

const trustReasons = [
  'In-house legal team ensuring accurate, compliant documentation',
  'Exclusive training program for domestic workers unique in Cyprus',
  'Proven track record with leading hotels, restaurants, and organisations',
  'Personalised support throughout the entire recruitment cycle',
];

const partners = [
  'AMATHUS',
  'SANCTUM',
  'MEDLOFT',
  'SUENSOSPA',
];

const About = () => {
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
              About Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building trusted recruitment relationships for over 25 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                Mayiasova Services is a licensed recruitment agency with over 25 years of experience 
                providing trusted domestic and professional staff through a careful, reliable, 
                and legally compliant process.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="stat-number text-foreground">{stat.number}</span>
                    <p className="text-xs text-muted-foreground mt-2">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={businessWoman}
                alt="Professional business woman"
                className="w-full h-[400px] object-cover rounded-sm shadow-medium"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Why Employers Trust Mayiasova
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trustReasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-secondary rounded-sm"
              >
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-primary-foreground" />
                </div>
                <p className="text-foreground/80">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-10">
            Trusted by leading organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-xl font-serif text-muted-foreground/60 tracking-widest"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
