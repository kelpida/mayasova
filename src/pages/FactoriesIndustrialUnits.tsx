import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/seo/SEO';

const FactoriesIndustrialUnits = () => {
  const { t } = useTranslation();

  const categories = [
    {
      label: t('factoriesIndustrialUnits.position_1'),
      href: '/aluminium-factories',
    },
    { label: t('factoriesIndustrialUnits.position_2') },
    {
      label: t('factoriesIndustrialUnits.position_3'),
      href: '/plastic-factories',
    },
    { label: t('factoriesIndustrialUnits.position_4') },
  ];

  return (
    <Layout>
      <SEO
        title={t('factoriesIndustrialUnits.title')}
        description="Explore staffing options for factories and industrial units including aluminium, marbles, plastics, and warehouse operations."
        keywords="factories staffing, industrial units recruitment, aluminium factory jobs, marble factory positions, warehouse staff cyprus"
        canonicalUrl="/factories-industrial-units"
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
              {t('factoriesIndustrialUnits.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('factoriesIndustrialUnits.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories List */}
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
                {t('factoriesIndustrialUnits.availablePositions')}
              </h2>

              <ul className="space-y-4">
                {categories.map((category, index) => (
                  <motion.li
                    key={category.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0"
                  >
                    <span className="font-serif text-lg font-semibold text-primary min-w-[40px] pt-0.5">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    {category.href ? (
                      <Link
                        to={category.href}
                        className="text-base md:text-lg text-foreground pt-0.5 underline underline-offset-4 hover:text-primary transition-colors"
                      >
                        {category.label}
                      </Link>
                    ) : (
                      <span className="text-base md:text-lg text-foreground pt-0.5">
                        {category.label}
                      </span>
                    )}
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

export default FactoriesIndustrialUnits;
