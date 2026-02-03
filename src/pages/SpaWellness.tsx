import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { SEO } from '@/components/seo/SEO';
import spaWellness from '@/assets/spa-wellness.jpg';

const SpaWellness = () => {
  const { t } = useTranslation();

  const positions = [
    t('spaWellness.position_1'),
    t('spaWellness.position_2'),
    t('spaWellness.position_3'),
    t('spaWellness.position_4'),
    t('spaWellness.position_5'),
  ];

  return (
    <Layout>
      <SEO
        title={t('spaWellness.title')}
        description="Discover available positions in spa and wellness centres including masseurs, spa therapists, thai therapists, receptionists, and cleaners. Professional spa staff recruitment in Cyprus."
        keywords="spa jobs, wellness center positions, massage therapist, spa therapist recruitment, spa staff jobs cyprus"
        canonicalUrl="/spa-wellness"
        ogImage="https://mayasova.chameleon.page/images/og-spa.png"
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
              {t('spaWellness.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('spaWellness.subtitle')}
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
                {t('spaWellness.availablePositions')}
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

export default SpaWellness;
