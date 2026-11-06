import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, FileText, Video, Building2 } from 'lucide-react';

export const TrustTransparency: React.FC = () => {
  const { t } = useLanguage();

  const trustCards = [
    {
      icon: FileText,
      title: t.trust.card1Title,
      description: t.trust.card1Desc,
      tag: "Daily Audit",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: Video,
      title: t.trust.card2Title,
      description: t.trust.card2Desc,
      tag: "Live Broadcast",
      borderColor: "border-equb-gold-500/30",
    },
    {
      icon: Building2,
      title: t.trust.card3Title,
      description: t.trust.card3Desc,
      tag: "Official Dealership",
      borderColor: "border-blue-500/30",
    },
  ];

  return (
    <section className="relative py-20 bg-equb-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.trust.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.trust.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.trust.subtitle}
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-6 sm:p-8 rounded-2xl border ${card.borderColor} hover:border-equb-gold-400/50 transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-equb-gold-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase tracking-wider">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

