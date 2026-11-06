import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { UserCheck, Wallet, Trophy, Key, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      icon: UserCheck,
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
      tag: "Vetted Circle",
    },
    {
      num: "02",
      icon: Wallet,
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
      tag: "Daily Discipline",
    },
    {
      num: "03",
      icon: Trophy,
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
      tag: "Every 9th Day",
    },
    {
      num: "04",
      icon: Key,
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Desc,
      tag: "Suzuki Dzire",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 bg-equb-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-equb-gold-500/30 text-equb-gold-400 text-xs font-semibold mb-4">
            <span>{t.howItWorks.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.howItWorks.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-equb-gold-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800/90 text-equb-gold-400 border border-slate-700">
                    {step.tag}
                  </span>
                  <span className="text-3xl font-extrabold text-slate-700 group-hover:text-equb-gold-500/40 transition-colors font-mono">
                    {step.num}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-equb-green-800/40 to-slate-900 border border-equb-green-700/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-equb-gold-400" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector on large screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-500">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

