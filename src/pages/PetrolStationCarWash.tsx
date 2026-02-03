import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { SEO } from '@/components/seo/SEO';
import { ShareButtons } from '@/components/ui/share-buttons';
import businessWoman from '@/assets/business-woman.jpg';

const PetrolStationCarWash = () => {
  const { t } = useTranslation();

  const positions = [
    t('petrolStationCarWash.position_1'),
    t('petrolStationCarWash.position_2'),
    t('petrolStationCarWash.position_3'),
    t('petrolStationCarWash.position_4'),
    t('petrolStationCarWash.position_5'),
    t('petrolStationCarWash.position_6'),
  ];

  return (
    <Layout>
      <SEO
        title={t('petrolStationCarWash.title')}
        description="Discover available positions in petrol stations and car wash services including attendants, laundry staff, receptionists, and cleaners. Professional petrol station recruitment in Cyprus."
        keywords="petrol station jobs, car wash positions, station attendant, laundry operator, petrol station staff recruitment cyprus"
        canonicalUrl="/petrol-station-car-wash"
        ogImage="https://mayasova.chameleon.page/images/og-petrol-station.png"
        author="Mayiasova Services"
      />

      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              {t('petrolStationCarWash.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('petrolStationCarWash.subtitle')}
            </p>
            <div className="flex justify-center">
              <ShareButtons
                url="/petrol-station-car-wash"
                title={t('petrolStationCarWash.title')}
                description={t('petrolStationCarWash.subtitle')}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positions List */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-lg p-8 md:p-12 border border-border"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                {t('petrolStationCarWash.availablePositions')}
              </h2>
              
              <ul className="space-y-4">
                {positions.map((position, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0"
                  >
                    <span className="font-serif text-lg font-semibold text-primary min-w-[40px] pt-0.5">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-base md:text-lg text-foreground pt-0.5">
                      {position}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default PetrolStationCarWash;
