import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SITE_NAME = 'Mayiasova';
const DEFAULT_DESCRIPTION = 'Your Trusted Partner in Professional & Domestic Recruitment in Cyprus';
const DEFAULT_OG_IMAGE = 'https://mayasova.chameleon.page/og-image.png';
const SITE_URL = 'https://mayasova.chameleon.page';

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  structuredData,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Private Employment Agency`;
  const fullCanonicalUrl = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Structured data for the organization (use on home page)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Mayiasova Services',
  description: 'Licensed recruitment agency with over 25 years of experience providing trusted domestic and professional staff in Cyprus.',
  url: SITE_URL,
  telephone: '+357-25-334-477',
  email: 'vasileiana.law@hotmail.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '4 Kamelias Street, Ekali',
      addressLocality: 'Limassol',
      postalCode: '3110',
      addressCountry: 'CY',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Nicosia',
      addressCountry: 'CY',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Cyprus',
  },
  serviceType: [
    'Recruitment & Talent Matching',
    'CV Screening',
    'Interview Coordination',
    'Legal & Immigration Paperwork',
    'Training for Domestic Workers',
    'Post-Placement Support',
  ],
};
