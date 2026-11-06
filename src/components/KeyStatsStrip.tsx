import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG, DERIVED_EQUB, formatETB } from '../data/equb';
import { Users, Calendar, Coins, Clock, Sparkles } from 'lucide-react';

export const KeyStatsStrip: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: `${EQUB_CONFIG.totalMembers}`,
      unit: "Friends",
      label: t.stats.membersLabel,
      description: t.stats.membersDesc,
      highlightColor: "text-emerald-400",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: Coins,
      value: "12,000",
      unit: "ETB / Day",
      label: t.stats.dailyLabel,
      description: t.stats.dailyDesc,
      highlightColor: "text-equb-gold-400",
      borderColor: "border-equb-gold-500/20",
    },
    {
      icon: Clock,
      value: `9`,
      unit: "Days",
      label: t.stats.drawIntervalLabel,
      description: t.stats.drawIntervalDesc,
      highlightColor: "text-amber-400",
      borderColor: "border-amber-500/20",
    },
    {
      icon: Calendar,
      value: `${EQUB_CONFIG.durationMonths}`,
      unit: "Months",
      label: t.stats.durationLabel,
      description: t.stats.durationDesc,
      highlightColor: "text-emerald-300",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: Sparkles,
      value: "2,700,000",
      unit: "ETB",
      label: t.stats.poolLabel,
      description: t.stats.poolDesc,
      highlightColor: "text-equb-gold-300",
      borderColor: "border-equb-gold-500/30",
    },
  ];

  return (
    <section className="relative py-8 -mt-6 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-4 sm:p-5 rounded-2xl border ${stat.borderColor} hover:border-equb-gold-400/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-equb-gold-500/5 rounded-full blur-xl group-hover:bg-equb-gold-500/10 transition-colors" />

                <div className="flex items-center space-x-2 text-slate-400 mb-2">
                  <Icon className="w-4 h-4 text-equb-gold-400" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>

                <div className="flex items-baseline space-x-1.5">
                  <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.highlightColor}`}>
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {stat.unit}
                  </span>
                </div>

                <p className="mt-1.5 text-[11px] text-slate-400 line-clamp-1">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

