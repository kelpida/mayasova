import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { SEO } from '@/components/seo/SEO';

import hotelStaff from '@/assets/hotel-staff.jpg';
import bakery from '@/assets/bakery.jpg';
import spaWellness from '@/assets/spa-wellness.jpg';
import chef from '@/assets/chef.jpg';
import businessWoman from '@/assets/business-woman.jpg';
import heroImage from '@/assets/hero-handshake.jpg';

const industries = [
  {
    name: 'Hotel units & hotel chains',
    image: hotelStaff,
    description:
      'Housekeeping, front desk, chefs, waiters, maintenance, and seasonal hotel staff.',
  },
  {
    name: 'Bakeries',
    image: bakery,
    description:
      'Bakers, assistants, packers, cleaners, and production line workers.',
  },
  {
    name: 'Spas & wellness centres',
    image: spaWellness,
    description:
      'Massage therapists, receptionists, cleaners, and spa attendants.',
  },
  {
    name: 'Supermarkets',
    image: businessWoman,
    description:
      'Cashiers, shelf stackers, warehouse staff, and delivery drivers.',
  },
  {
    name: 'Restaurants, Food & Beverage',
    image: chef,
    description:
      'Chefs, kitchen staff, waiters, bartenders, and food runners.',
  },
  {
    name: 'Construction Companies & Property Developers',
    image: heroImage,
    description:
      'Labourers, electricians, plumbers, site supervisors, and engineers.',
  },
  {
    name: 'Wineries & Rural Production Units',
    image: bakery,
    description:
      'Harvesting crews, packers, production workers, and warehouse staff.',
  },
  {
    name: 'Factories & Industrial Units',
    image: hotelStaff,
    description:
      'Machine operators, production staff, quality control, and warehouse workers.',
  },
  {
    name: 'Personal Clients & Domestic Workers & Nannies',
    image: spaWellness,
    description:
      'Live-in and live-out domestic staff, cleaners, carers, and nannies.',
  },
  {
    name: 'Petrol Stations & Car Wash',
    image: spaWellness,
    description:
      'Cashiers, attendants, cleaners, and forecourt supervisors.',
  },
  {
    name: 'Supermarket & Kiosks',
    image: spaWellness,
    description:
      'Retail assistants, stock handlers, and counter staff.',
  },
  {
    name: 'Mechanics & Car Mechanics',
    image: spaWellness,
    description:
      'Technicians, helpers, and garage support staff.',
  },
];

const Industries = () => {
  return (
    <Layout>
      <SEO
        title="Industries We Serve"
        description="Staffing solutions for Cyprus's leading industries: hotels, restaurants, bakeries, spas, construction, supermarkets, factories, and private households."
        keywords="hotel staffing cyprus, restaurant staff recruitment, bakery workers, spa wellness staff, construction workers cyprus, domestic staff"
        canonicalUrl="/industries"
      />

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
        <div className="container mx-auto px-6 min-h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-[260px] md:h-[300px] lg:h-[320px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Title pill */}
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg py-3 px-6 shadow-soft mb-4 transition-all duration-500 group-hover:mb-2">
                    <span className="text-sm text-foreground font-medium text-center block">
                      {industry.name}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {industry.description}
                  </p>
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
