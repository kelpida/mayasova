import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const contactInfo = {
  address: '4 Kamelias Street,\nEkali, 3110 Limassol,\nCyprus',
  phones: ['+357 25 334 477', '+357 99 531 212', '+357 99 594 945'],
  email: [ 'vasileiana.law@hotmail.com', 'si730@hotmail.com'],
};

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    navigation: [
      { name: t('nav.home'), href: '/' },
      { name: t('nav.services'), href: '/services' },
      { name: t('nav.industries'), href: '/industries' },
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    legal: [
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                MAYIASOVA
              </span>
              <p className="text-sm text-primary-foreground/70 mt-1">
                Helping Companies Grow
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-foreground/50 mt-1 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/70 whitespace-pre-line">
                  {contactInfo.address}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary-foreground/50 mt-1 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  {contactInfo.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary-foreground/50 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            Design & Developed by Chameleon Creative Studio
          </p>
        </div>
      </div>
    </footer>
  );
};
