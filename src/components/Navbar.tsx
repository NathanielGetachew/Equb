import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, Globe, Sparkles, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, language, toggleLanguage, isAmharic } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#what-is-equb', label: t.nav.whatIsEqub },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#timeline', label: t.nav.timeline },
    { href: '#prize', label: t.nav.prize },
    { href: '#members', label: t.nav.members },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-equb-dark-950/90 backdrop-blur-md border-b border-equb-gold-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-equb-dark-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-equb-green-700 via-equb-green-900 to-equb-dark-950 border border-equb-gold-500/40 p-2 flex items-center justify-center shadow-lg shadow-equb-green-950/50 group-hover:border-equb-gold-400 transition-colors">
              <span className="text-equb-gold-400 font-extrabold text-base tracking-tighter">
                እቁብ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-equb-gold-400 transition-colors">
                {t.nav.brand}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-equb-gold-500/90">
                25 Friends • Suzuki Dzire
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-equb-gold-400 transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Toggle + CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-equb-gold-500/30 text-xs font-semibold text-slate-200 hover:border-equb-gold-400 hover:text-white transition-all shadow-sm"
              title="Toggle English / አማርኛ"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-equb-gold-400" />
              <span>{language === 'en' ? 'አማርኛ' : 'English'}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-equb-gold-500/20 text-equb-gold-400 uppercase font-bold">
                {language}
              </span>
            </button>

            {/* Join CTA */}
            <a
              href="#calculator"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-equb-dark-950 bg-gradient-to-r from-equb-gold-400 via-equb-gold-500 to-amber-500 rounded-lg shadow-lg shadow-equb-gold-500/20 hover:shadow-equb-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{t.nav.joinCta}</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Mobile hamburger & Lang toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-md bg-slate-900 border border-equb-gold-500/40 text-xs font-bold text-equb-gold-400"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'አማ' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-equb-dark-950/95 border-b border-equb-gold-500/20 px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-equb-green-950/50 hover:text-equb-gold-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-center font-bold text-equb-dark-950 bg-gradient-to-r from-equb-gold-400 to-equb-gold-500 rounded-lg shadow-md"
            >
              {t.nav.joinCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

