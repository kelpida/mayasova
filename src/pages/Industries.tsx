import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { SEO } from '@/components/seo/SEO';

import hotelStaff from '@/assets/hotel-staff.jpg';
import bakery from '@/assets/bakery.jpg';
import spaWellness from '@/assets/spa-wellness.jpg';
import businessWoman from '@/assets/business-woman.jpg';

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
    name: 'Factories & Industrial Units',
    image: businessWoman,
    description:
      'Machine operators, production staff, quality control, and warehouse workers.',
  },
  {
    name: 'Petrol Stations & Car Wash',
    image: businessWoman,
    description:
      'Cashiers, attendants, cleaners, and forecourt supervisors.',
  },
];

const Industries = () => {
  const navigate = useNavigate();

  const handleIndustryClick = (industryName: string) => {
    if (industryName === 'Hotel units & hotel chains') {
      navigate('/hotels-units');
    } else if (industryName === 'Bakeries') {
      navigate('/bakeries-patisseries');
    } else if (industryName === 'Spas & wellness centres') {
      navigate('/spa-wellness');
    } else if (industryName === 'Factories & Industrial Units') {
      navigate('/factories-industrial-units');
    } else if (industryName === 'Petrol Stations & Car Wash') {
      navigate('/petrol-station-car-wash');
    }
  };

  return (
    <Layout>
      <SEO
        title="Industries We Serve"
        description="Browse staffing solutions across multiple industries in Cyprus: hotels, bakeries, spas, factories, and petrol stations. Professional recruitment for specialized positions."
        keywords="industry staffing, hotel recruitment, bakery staff, spa positions, factory workers, petrol station jobs cyprus"
        canonicalUrl="/industries"
        ogImage="https://mayasova.chameleon.page/images/og-industries.png"
        author="Mayiasova Services"
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
                onClick={() => handleIndustryClick(industry.name)}
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
