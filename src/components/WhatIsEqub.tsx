import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG } from '../data/equb';
import { TibebDivider } from './TibebDivider';
import { HeartHandshake, ShieldCheck, Gem } from 'lucide-react';

export const WhatIsEqub: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: HeartHandshake,
      title: t.whatIsEqub.pillar1Title,
      description: t.whatIsEqub.pillar1Desc,
      color: "from-emerald-500/20 to-emerald-700/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: Gem,
      title: t.whatIsEqub.pillar2Title,
      description: t.whatIsEqub.pillar2Desc,
      color: "from-equb-gold-500/20 to-amber-700/10",
      iconColor: "text-equb-gold-400",
      borderColor: "border-equb-gold-500/30",
    },
    {
      icon: ShieldCheck,
      title: t.whatIsEqub.pillar3Title,
      description: t.whatIsEqub.pillar3Desc,
      color: "from-slate-800/40 to-slate-900/40",
      iconColor: "text-blue-400",
      borderColor: "border-slate-700/40",
    },
  ];

  return (
    <section id="what-is-equb" className="relative py-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-equb-green-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-equb-gold-500/30 text-equb-gold-400 text-xs font-semibold mb-4">
            <span>{t.whatIsEqub.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.whatIsEqub.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.whatIsEqub.description1}
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.whatIsEqub.description2}
          </p>
        </div>

        {/* Traditional Tibeb Motif Divider */}
        <TibebDivider />

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-6 sm:p-8 rounded-2xl border ${pillar.borderColor} hover:border-equb-gold-400/50 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

