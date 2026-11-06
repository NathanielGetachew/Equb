import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG } from '../data/equb';
import { Sparkles, ArrowRight, CheckCircle, Send } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-radial-gradient from-equb-green-950/60 via-equb-dark-950 to-equb-dark-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-equb-gold-500/30 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle top badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-equb-gold-500/40 text-equb-gold-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{EQUB_CONFIG.brandName}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            {t.cta.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>

          {/* Interactive Lead Capture (Demo Form) */}
          <div className="mt-8 max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 flex items-center justify-center space-x-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Thank you! Demo interest recorded for {phone}.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  placeholder="Enter phone (+251 9...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-equb-gold-400 flex-1 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-bold text-equb-dark-950 bg-gradient-to-r from-equb-gold-400 to-amber-500 hover:from-equb-gold-300 hover:to-amber-400 transition-all flex items-center justify-center space-x-1.5 text-sm shrink-0 shadow-lg shadow-equb-gold-500/20"
                >
                  <span>{t.cta.btnClient}</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ 25 Friend Slots Pre-configured</span>
            <span>✓ 10 Suzuki Dzire Vehicles</span>
            <span>✓ Demo Mode Only</span>
          </div>

        </div>
      </div>
    </section>
  );
};

