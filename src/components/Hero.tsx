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
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 flex flex-col justify-center overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-radial-gradient from-equb-green-900/35 via-equb-dark-950/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] sm:w-[500px] h-[300px] bg-radial-gradient from-equb-gold-500/15 via-transparent to-transparent blur-2xl pointer-events-none" />

      {/* Subtle traditional diamond background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* 2-Column Desktop Grid for Instant Above-The-Fold Visibility */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Key Value Props & Quick CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4 sm:space-y-5">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-equb-green-950/90 border border-equb-gold-500/40 text-equb-gold-300 text-xs font-semibold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-equb-gold-400" />
              <span>{EQUB_CONFIG.brandName}</span>
              <span className="text-equb-gold-500/60">•</span>
              <span className="text-emerald-400 font-bold">{EQUB_CONFIG.totalMembers} Friends</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="block text-slate-100">{t.hero.titlePrefix}</span>
              <span className="bg-gradient-to-r from-equb-gold-300 via-amber-400 to-equb-gold-500 bg-clip-text text-transparent">
                {t.hero.titleCar}
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-bold mt-1 text-slate-300">
                {t.hero.titleSuffix}{' '}
                <span className="text-equb-gold-400 underline decoration-equb-gold-500/50 underline-offset-4">
                  {EQUB_CONFIG.brandName}
                </span>
              </span>
            </h1>

            {/* Simplified Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="glass-panel px-3.5 py-1.5 rounded-xl border border-equb-gold-500/30 flex items-center space-x-2">
                <Award className="w-4 h-4 text-equb-gold-400" />
                <span className="text-xs font-bold text-equb-gold-300">
                  {formatETB(DERIVED_EQUB.poolPerRound)} / Round
                </span>
              </div>
              <div className="glass-panel px-3.5 py-1.5 rounded-xl border border-emerald-500/30 flex items-center space-x-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">
                  {EQUB_CONFIG.totalMembers} Friends • Every 9 Days
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#calculator"
                className="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-equb-dark-950 bg-gradient-to-r from-equb-gold-400 via-amber-400 to-equb-gold-500 shadow-lg shadow-equb-gold-500/25 hover:shadow-equb-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 hover:border-equb-gold-400/50 hover:text-white transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Compact Live Countdown */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 text-[11px] font-semibold text-slate-400 mb-1.5">
                <Clock className="w-3.5 h-3.5 text-equb-gold-400 animate-pulse" />
                <span>{t.hero.countdownTitle}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 font-mono">
                {[
                  { val: timeLeft.days, label: t.hero.days },
                  { val: timeLeft.hours, label: t.hero.hours },
                  { val: timeLeft.minutes, label: t.hero.minutes },
                  { val: timeLeft.seconds, label: t.hero.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-lg text-center min-w-[50px]">
                    <span className="block text-sm sm:text-base font-extrabold text-white">
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-tight block">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Suzuki Dzire Car (Visible immediately on mobile & desktop) */}
          <div className="order-2 lg:order-last lg:col-span-6 relative flex flex-col items-center justify-center my-2 lg:my-0">
            {/* Spotlight aura beneath car */}
            <div className="absolute inset-x-8 bottom-3 h-20 sm:h-24 bg-gradient-to-t from-equb-gold-500/30 via-emerald-600/20 to-transparent blur-2xl rounded-full" />
            <div className="absolute inset-x-6 bottom-1 h-6 bg-black/70 blur-md rounded-full transform scale-95" />

            {/* Car Visual */}
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/suzuki-dzire.png"
                alt={`${EQUB_CONFIG.rewardVehicle} Grand Prize for ${EQUB_CONFIG.brandName}`}
                className="w-full max-h-[220px] sm:max-h-[300px] lg:max-h-[380px] object-contain mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] filter contrast-105 animate-float"
                loading="eager"
              />

              {/* Verified Car Reward Tag */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-panel px-3 py-1 rounded-full border border-equb-gold-500/40 text-[10px] sm:text-[11px] font-bold text-equb-gold-300 shadow-xl flex items-center space-x-1.5 whitespace-nowrap">
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
