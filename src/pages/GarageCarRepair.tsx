import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { SEO } from '@/components/seo/SEO';

const GarageCarRepair = () => {
  const { t } = useTranslation();

  const positions = [
    t('garageCarRepair.position_1'),
    t('garageCarRepair.position_2'),
  ];

  return (
    <Layout>
      <SEO
        title={t('garageCarRepair.title')}
        description="Explore available positions in garage and car repair services including body paint and body straightener assistants."
        keywords="garage jobs, car repair technicians, body paint assistants, body straightener assistants, automotive staff cyprus"
        canonicalUrl="/garage-car-repair"
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
              {t('garageCarRepair.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('garageCarRepair.subtitle')}
            </p>
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
                {t('garageCarRepair.availablePositions')}
              </h2>

              <ul className="space-y-4">
                {positions.map((position, index) => (
                  <motion.li
                    key={position}
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

export default GarageCarRepair;
