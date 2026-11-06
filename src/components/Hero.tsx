import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG, DERIVED_EQUB, formatETB } from '../data/equb';
import { Sparkles, ShieldCheck, ArrowRight, Clock, Award, Users, Car } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, isAmharic } = useLanguage();

  // Demo live countdown timer (e.g. 4 days, 13 hours, 42 mins, 18 secs remaining for Round 4 draw)
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background radial gradients for luxury Ethiopian feel */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-radial-gradient from-equb-green-900/40 via-equb-dark-950/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] sm:w-[650px] h-[350px] bg-radial-gradient from-equb-gold-500/20 via-transparent to-transparent blur-2xl pointer-events-none" />

      {/* Subtle traditional diamond background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Trust Badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-equb-green-950/80 border border-equb-gold-500/40 text-equb-gold-300 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-equb-gold-400 animate-spin-slow" />
            <span>{t.hero.badge}</span>
            <span className="hidden sm:inline text-equb-gold-500/60">•</span>
            <span className="hidden sm:inline text-emerald-400 font-bold">{EQUB_CONFIG.brandName}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            <span className="block text-slate-100">{t.hero.titlePrefix}</span>
            <span className="bg-gradient-to-r from-equb-gold-300 via-amber-400 to-equb-gold-500 bg-clip-text text-transparent">
              {t.hero.titleCar}
            </span>{' '}
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-slate-300">
              {t.hero.titleSuffix}{' '}
              <span className="text-equb-gold-400 underline decoration-equb-gold-500/50 underline-offset-8">
                {EQUB_CONFIG.brandName}
              </span>
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Car Showcase Visual (Front & Center) */}
        <div className="relative max-w-4xl mx-auto my-4 sm:my-8">
          {/* Spotlight aura beneath car */}
          <div className="absolute inset-x-12 bottom-6 h-28 bg-gradient-to-t from-equb-gold-500/25 via-emerald-600/15 to-transparent blur-2xl rounded-full" />
          <div className="absolute inset-x-4 bottom-2 h-10 bg-black/60 blur-md rounded-full transform scale-95" />

          {/* Floating Car Container */}
          <div className="relative group transition-transform duration-500 hover:scale-[1.01]">
            <img
              src="/images/suzuki-dzire.png"
              alt={`${EQUB_CONFIG.rewardVehicle} Grand Prize for ${EQUB_CONFIG.brandName}`}
              className="w-full max-h-[380px] sm:max-h-[460px] object-contain mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter contrast-105 animate-float"
              loading="eager"
            />

            {/* Floating Badge: Round Prize Pool */}
            <div className="hidden sm:flex absolute top-6 left-4 glass-panel px-4 py-2.5 rounded-xl border border-equb-gold-500/30 shadow-xl items-center space-x-3 backdrop-blur-md">
              <div className="w-9 h-9 rounded-lg bg-equb-gold-500/20 border border-equb-gold-400/40 flex items-center justify-center text-equb-gold-400">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {t.hero.poolPerRoundLabel}
                </div>
                <div className="text-base font-extrabold text-equb-gold-300">
                  {formatETB(DERIVED_EQUB.poolPerRound)}
                </div>
              </div>
            </div>

            {/* Floating Badge: Verified 25 Members */}
            <div className="hidden sm:flex absolute top-6 right-4 glass-panel px-4 py-2.5 rounded-xl border border-emerald-500/30 shadow-xl items-center space-x-3 backdrop-blur-md">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {t.stats.membersLabel}
                </div>
                <div className="text-base font-extrabold text-emerald-300">
                  {EQUB_CONFIG.totalMembers} Friends
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Badge Strip (Visible only on mobile for clean spacing) */}
          <div className="flex sm:hidden items-center justify-between gap-2.5 mt-2 px-2">
            <div className="flex-1 glass-panel px-3 py-2 rounded-xl border border-equb-gold-500/30 flex items-center space-x-2">
              <Award className="w-4 h-4 text-equb-gold-400 shrink-0" />
              <div className="text-left truncate">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold truncate">
                  Round Pool
                </div>
                <div className="text-xs font-extrabold text-equb-gold-300 truncate">
                  {formatETB(DERIVED_EQUB.poolPerRound)}
                </div>
              </div>
            </div>

            <div className="flex-1 glass-panel px-3 py-2 rounded-xl border border-emerald-500/30 flex items-center space-x-2">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left truncate">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold truncate">
                  Verified
                </div>
                <div className="text-xs font-extrabold text-emerald-300 truncate">
                  {EQUB_CONFIG.totalMembers} Friends
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Countdown & Quick CTA Area */}
        <div className="max-w-2xl mx-auto mt-6">
          {/* Countdown Card */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-equb-gold-500/30 shadow-2xl backdrop-blur-xl mb-6">
            <div className="flex items-center justify-center space-x-2 text-equb-gold-400 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{t.hero.countdownTitle}</span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto text-center">
              {[
                { val: timeLeft.days, label: t.hero.days },
                { val: timeLeft.hours, label: t.hero.hours },
                { val: timeLeft.minutes, label: t.hero.minutes },
                { val: timeLeft.seconds, label: t.hero.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 rounded-xl p-2 sm:p-3 border border-slate-800 shadow-inner"
                >
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-equb-dark-950 bg-gradient-to-r from-equb-gold-400 via-amber-400 to-equb-gold-500 shadow-xl shadow-equb-gold-500/25 hover:shadow-equb-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 text-base"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 hover:border-equb-gold-400/50 hover:text-white transition-all flex items-center justify-center space-x-2 text-base"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Friends Group</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1.5">
              <Car className="w-4 h-4 text-equb-gold-400" />
              <span>{DERIVED_EQUB.totalDraws} Brand-New Suzuki Dzires</span>
            </div>
            <span>•</span>
            <div className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono text-[11px] border border-amber-500/20">
              {t.hero.demoNotice}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
