const SITE_URL = 'https://mayasova.chameleon.page';

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
