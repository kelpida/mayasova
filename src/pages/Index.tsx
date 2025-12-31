import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
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
