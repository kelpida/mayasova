import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';
import { SEO, organizationSchema } from '@/components/seo/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Private Employment Agency Cyprus"
        description="Mayiasova is Cyprus's trusted private employment agency with 25+ years experience in professional & domestic recruitment. Offices in Limassol & Nicosia."
        keywords="employment agency cyprus, recruitment agency limassol, domestic staff cyprus, hotel staff recruitment, professional recruitment cyprus"
        canonicalUrl="/"
        structuredData={organizationSchema}
      />
      <HeroSection />
      <AboutSection />
      <IndustriesSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

