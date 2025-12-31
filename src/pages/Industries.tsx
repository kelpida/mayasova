import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';

import hotelStaff from '@/assets/hotel-staff.jpg';
import bakery from '@/assets/bakery.jpg';
import spaWellness from '@/assets/spa-wellness.jpg';
import chef from '@/assets/chef.jpg';
import businessWoman from '@/assets/business-woman.jpg';
import heroImage from '@/assets/hero-handshake.jpg';

const industries = [
  { name: 'Hotel units & hotel chains', image: hotelStaff },
  { name: 'Bakeries', image: bakery },
  { name: 'Spas & wellness centres', image: spaWellness },
  { name: 'Supermarkets', image: businessWoman },
  { name: 'Restaurants, Food & Beverage', image: chef },
  { name: 'Construction Companies & Property Developers', image: heroImage },
  { name: 'Wineries & Rural Production Units', image: bakery },
  { name: 'Factories & Industrial Units', image: hotelStaff },
  { name: 'Personal Clients & Domestic Households', image: spaWellness },
];

const Industries = () => {
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
              Industries
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reliable staffing solutions for Cyprus's leading sectors from hospitality and 
              wellness to construction, retail, and private households.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-lg text-primary-foreground font-serif">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Industries;
