import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG } from '../data/equb';
import { TibebDivider } from './TibebDivider';
import { MapPin, Phone, Mail, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-equb-dark-950 border-t border-slate-900 pt-12 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-equb-green-700 to-equb-dark-950 border border-equb-gold-500/40 p-2 flex items-center justify-center">
                <span className="text-equb-gold-400 font-extrabold text-base">እቁብ</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {EQUB_CONFIG.brandName}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              A high-trust digital community savings platform created for 25 close friends. 
              12,000 ETB daily contributions, 10 rounds across 3 months, awarding a brand-new {EQUB_CONFIG.rewardVehicle} every 9 days.
            </p>

            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-equb-gold-400 font-semibold">
                Frontend Pitch Demo
              </span>
              <span>•</span>
              <span>Client Presentation Build</span>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-equb-gold-400 uppercase tracking-wider">
              Office & Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{t.footer.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{t.footer.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-equb-gold-400 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#what-is-equb" className="hover:text-equb-gold-400 transition-colors">{t.nav.whatIsEqub}</a></li>
              <li><a href="#how-it-works" className="hover:text-equb-gold-400 transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#timeline" className="hover:text-equb-gold-400 transition-colors">{t.nav.timeline}</a></li>
              <li><a href="#prize" className="hover:text-equb-gold-400 transition-colors">{t.nav.prize}</a></li>
              <li><a href="#calculator" className="hover:text-equb-gold-400 transition-colors">{t.nav.calculator}</a></li>
            </ul>
          </div>

        </div>

        {/* Traditional Tibeb Divider */}
        <TibebDivider variant="subtle" />

        {/* Regulatory & Presentation Disclaimer Card */}
        {/* TODO: Formal regulatory review against Ethiopian National Bank and National Lottery Administration rules prior to live deployment */}
        <div className="my-8 p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 flex items-start space-x-3 text-xs text-slate-400 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-300 block mb-0.5">
              {t.footer.disclaimerTitle}
            </span>
            <span>{t.footer.disclaimerText}</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 pt-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-4">
            <span className="text-emerald-400 font-medium flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Verified Architecture
            </span>
            <span>Ethiopia 🇪🇹</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

