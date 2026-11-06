import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG, CAR_SPECIFICATIONS } from '../data/equb';
import { Car, Fuel, Shield, Gauge, Cpu, Sparkles } from 'lucide-react';

export const PrizeSpotlight: React.FC = () => {
  const { t, isAmharic } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    engine: Gauge,
    fuel: Fuel,
    transmission: Cpu,
    infotainment: Sparkles,
    comfort: Car,
    safety: Shield,
  };

  return (
    <section id="prize" className="relative py-20 bg-gradient-to-b from-equb-dark-950 via-equb-dark-900/60 to-equb-dark-950 overflow-hidden">
      
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-equb-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-equb-gold-500/40 text-equb-gold-400 text-xs font-semibold mb-4">
            <Car className="w-3.5 h-3.5" />
            <span>{t.prize.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.prize.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.prize.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Car image showcase */}
          <div className="lg:col-span-6 relative">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-equb-gold-500/20 relative group overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-equb-gold-500/20 to-emerald-500/20 blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
              
              <img
                src="/images/suzuki-dzire.png"
                alt={EQUB_CONFIG.rewardVehicle}
                className="w-full object-contain relative z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
              />

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-3 relative z-10">
                <span className="font-semibold text-equb-gold-400">
                  {EQUB_CONFIG.brandName} Official Reward
                </span>
                <span>{EQUB_CONFIG.vehicleModelYear}</span>
              </div>
            </div>
          </div>

          {/* Right: Specifications grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CAR_SPECIFICATIONS.map((spec) => {
                const Icon = iconMap[spec.key] || Car;
                return (
                  <div
                    key={spec.key}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-equb-gold-500/40 transition-colors group"
                  >
                    <div className="flex items-center space-x-2.5 mb-2 text-slate-400 group-hover:text-equb-gold-400 transition-colors">
                      <Icon className="w-4 h-4 text-equb-gold-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {isAmharic ? spec.labelAm : spec.labelEn}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {isAmharic ? spec.valueAm : spec.valueEn}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note & Demo badge */}
            <div className="p-4 rounded-xl bg-equb-dark-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <p>{t.prize.demoDisclaimer}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

