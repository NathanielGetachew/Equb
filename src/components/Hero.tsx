import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG, DERIVED_EQUB, formatETB } from '../data/equb';
import { Sparkles, ArrowRight, Clock, Award, Users, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Demo live countdown timer for Round 4 draw
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-16 pb-6 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 flex flex-col justify-center overflow-hidden min-h-[100dvh] lg:min-h-[calc(100vh-4rem)]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[900px] h-[400px] bg-radial-gradient from-equb-green-900/35 via-equb-dark-950/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] sm:w-[500px] h-[300px] bg-radial-gradient from-equb-gold-500/15 via-transparent to-transparent blur-2xl pointer-events-none" />

      {/* Subtle traditional diamond background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Column 1: Title, CTAs, and Desktop details */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-3 sm:space-y-4">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 py-0.5 sm:py-1 rounded-full bg-equb-green-950/90 border border-equb-gold-500/40 text-equb-gold-300 text-[11px] sm:text-xs font-semibold shadow-md">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-equb-gold-400" />
              <span>{EQUB_CONFIG.brandName}</span>
              <span className="text-equb-gold-500/60">•</span>
              <span className="text-emerald-400 font-bold">{EQUB_CONFIG.totalMembers} Friends</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              <span className="block text-slate-100">{t.hero.titlePrefix}</span>
              <span className="bg-gradient-to-r from-equb-gold-300 via-amber-400 to-equb-gold-500 bg-clip-text text-transparent">
                {t.hero.titleCar}
              </span>
              <span className="block text-lg sm:text-2xl lg:text-3xl font-bold mt-0.5 text-slate-300">
                {t.hero.titleSuffix}{' '}
                <span className="text-equb-gold-400 underline decoration-equb-gold-500/50 underline-offset-4">
                  {EQUB_CONFIG.brandName}
                </span>
              </span>
            </h1>

            {/* MOBILE ONLY: The Car placed directly under the title so it's 100% visible without scrolling */}
            <div className="block lg:hidden relative py-1 my-1">
              {/* Spotlight aura */}
              <div className="absolute inset-x-10 bottom-2 h-14 bg-gradient-to-t from-equb-gold-500/30 via-emerald-600/20 to-transparent blur-xl rounded-full" />
              <div className="absolute inset-x-8 bottom-0 h-4 bg-black/70 blur-sm rounded-full" />
              
              <div className="relative max-w-[340px] mx-auto">
                <img
                  src="/images/suzuki-dzire.png"
                  alt={`${EQUB_CONFIG.rewardVehicle} Grand Prize for ${EQUB_CONFIG.brandName}`}
                  className="w-full max-h-[170px] sm:max-h-[220px] object-contain mx-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] filter contrast-105"
                  loading="eager"
                />
                <div className="mt-1 inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full glass-panel border border-equb-gold-500/40 text-[10px] font-bold text-equb-gold-300">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>10 Cars Across 3 Months</span>
                </div>
              </div>
            </div>

            {/* Subtitle - hidden on very small screens to keep car and CTA above fold, visible on sm+ */}
            <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5">
              <div className="glass-panel px-3 py-1 rounded-xl border border-equb-gold-500/30 flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-equb-gold-400" />
                <span className="text-[11px] sm:text-xs font-bold text-equb-gold-300">
                  {formatETB(DERIVED_EQUB.poolPerRound)} / Round
                </span>
              </div>
              <div className="glass-panel px-3 py-1 rounded-xl border border-emerald-500/30 flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] sm:text-xs font-bold text-emerald-300">
                  {EQUB_CONFIG.totalMembers} Friends • Every 9 Days
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="#calculator"
                className="flex-1 sm:flex-none px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-equb-dark-950 bg-gradient-to-r from-equb-gold-400 via-amber-400 to-equb-gold-500 shadow-md shadow-equb-gold-500/20 hover:shadow-equb-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5 text-xs sm:text-sm"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href="#how-it-works"
                className="flex-1 sm:flex-none px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 hover:border-equb-gold-400/50 hover:text-white transition-all flex items-center justify-center space-x-1.5 text-xs sm:text-sm"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Compact Live Countdown */}
            <div className="pt-1">
              <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-400 mb-1">
                <Clock className="w-3 h-3 text-equb-gold-400 animate-pulse" />
                <span>{t.hero.countdownTitle}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-1.5 sm:space-x-2 font-mono">
                {[
                  { val: timeLeft.days, label: t.hero.days },
                  { val: timeLeft.hours, label: t.hero.hours },
                  { val: timeLeft.minutes, label: t.hero.minutes },
                  { val: timeLeft.seconds, label: t.hero.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/90 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-center min-w-[42px] sm:min-w-[50px]">
                    <span className="block text-xs sm:text-base font-extrabold text-white">
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-tight block">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* DESKTOP ONLY Right Column: Large Suzuki Dzire Car (hidden on mobile, visible on lg) */}
          <div className="hidden lg:flex lg:col-span-6 relative flex-col items-center justify-center">
            {/* Spotlight aura beneath car */}
            <div className="absolute inset-x-8 bottom-3 h-24 bg-gradient-to-t from-equb-gold-500/30 via-emerald-600/20 to-transparent blur-2xl rounded-full" />
            <div className="absolute inset-x-6 bottom-1 h-6 bg-black/70 blur-md rounded-full transform scale-95" />

            {/* Car Visual */}
            <div className="relative w-full max-w-[540px] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/suzuki-dzire.png"
                alt={`${EQUB_CONFIG.rewardVehicle} Grand Prize for ${EQUB_CONFIG.brandName}`}
                className="w-full max-h-[380px] object-contain mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] filter contrast-105 animate-float"
                loading="eager"
              />

              {/* Verified Car Reward Tag */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-panel px-3.5 py-1.5 rounded-full border border-equb-gold-500/40 text-[11px] font-bold text-equb-gold-300 shadow-xl flex items-center space-x-1.5 whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Brand-New Suzuki Dzire • 10 Cars Across 3 Months</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
