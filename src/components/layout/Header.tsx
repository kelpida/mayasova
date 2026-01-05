import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/mayasova-logo.svg';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.industries'), href: '/industries' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        isHomePage 
          ? 'bg-primary-dark' 
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Mayiasova - Private Employment Agency" 
              className={`h-8 sm:h-10 w-auto ${!isHomePage ? 'brightness-0' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm transition-colors link-underline ${
                  isHomePage 
                    ? 'text-white/80 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher isLight={isHomePage} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher isLight={isHomePage} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isHomePage ? 'text-white' : 'text-gray-900'}`}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Off-canvas */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        isHomePage={isHomePage}
      />
    </header>
  );
};
