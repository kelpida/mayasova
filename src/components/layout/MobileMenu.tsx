import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  isHomePage: boolean;
}

const contactInfo = {
  address: '4 Kamelias Street, Ekali, 3110 Limassol, Cyprus',
  phones: ['+357 25 334 477', '+357 99 531 212', '+357 99 594 945'],
  email: [ 'vasileiana.law@hotmail.com', 'si730@hotmail.com'],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export const MobileMenu = ({ isOpen, onClose, navLinks, isHomePage }: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Off-canvas menu from right */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="font-serif text-xl font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-900" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-8">
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={onClose}
                className="block py-3 text-lg text-gray-900 hover:text-primary transition-colors border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Contact Details */}
        <div className="px-6 py-8">
          <h3 className="font-serif text-lg font-semibold mb-6 text-gray-900">
            {t('footer.contact_info')}
          </h3>

          {/* Address */}
          <div className="flex gap-4 mb-6">
            <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {t('contact.location')}
              </p>
              <p className="text-sm text-gray-600">{contactInfo.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 mb-6">
            <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {t('contact.phone')}
              </p>
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="text-sm text-gray-600 hover:text-primary transition-colors block"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 mb-6">
            <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {t('contact.email')}
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Social Icons */}
        <div className="px-6 py-8">
          <p className="text-sm font-semibold text-gray-900 mb-4">Follow Us</p>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
