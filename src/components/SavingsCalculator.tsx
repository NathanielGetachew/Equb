import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { EQUB_CONFIG, DERIVED_EQUB, formatETB } from '../data/equb';
import { Calculator, ArrowRight, Sparkles, TrendingUp, DollarSign } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [day, setDay] = useState<number>(36); // Default to current round 4 day 36

  // Mathematical derivations
  const memberSavingsToDate = day * EQUB_CONFIG.dailyContributionPerMember;
  const groupSavingsToDate = day * DERIVED_EQUB.dailyPool;
  const currentRoundNumber = Math.min(Math.floor(day / EQUB_CONFIG.drawIntervalDays) + 1, 10);
  const carsDeliveredByDay = Math.floor(day / EQUB_CONFIG.drawIntervalDays);

  return (
    <section id="calculator" className="relative py-20 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-equb-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-equb-gold-500/40 text-equb-gold-400 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.calculator.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-equb-gold-500/30 shadow-2xl">
          
          {/* Slider Control */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="day-slider" className="text-sm sm:text-base font-bold text-slate-200">
                {t.calculator.sliderLabel}
              </label>
              <div className="px-3.5 py-1 rounded-xl bg-equb-gold-500/20 border border-equb-gold-400/40 text-equb-gold-300 font-extrabold text-sm sm:text-base font-mono">
                {t.calculator.dayUnit} {day} / 90
              </div>
            </div>

            <input
              id="day-slider"
              type="range"
              min="1"
              max="90"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-equb-gold-400 focus:outline-none"
            />

            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
              <span>Day 1 (Start)</span>
              <span>Day 45 (Midway)</span>
              <span>Day 90 (10th Car Draw)</span>
            </div>
          </div>

          {/* Derived Real-time metrics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            
            {/* Metric 1: Member Savings To Date */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider mb-1">
                {t.calculator.statYourTotalToDate}
              </span>
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                {formatETB(memberSavingsToDate)}
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                12,000 ETB × {day} days
              </span>
            </div>

            {/* Metric 2: Circle Inflow To Date */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider mb-1">
                Total Circle Pool to Date
              </span>
              <span className="text-2xl font-extrabold text-equb-gold-400 font-mono">
                {formatETB(groupSavingsToDate)}
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                25 friends × {formatETB(memberSavingsToDate)}
              </span>
            </div>

            {/* Metric 3: Round Pool */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-equb-gold-500/20 sm:col-span-2 lg:col-span-1">
              <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider mb-1">
                {t.calculator.statRoundPool}
              </span>
              <span className="text-2xl font-extrabold text-amber-300 font-mono">
                {formatETB(DERIVED_EQUB.poolPerRound)}
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Funds 1 Suzuki Dzire Every 9 Days
              </span>
            </div>

          </div>

          {/* Full Cycle Summary Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-equb-green-950/70 to-slate-900/80 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Full 90-Day Cycle Projection</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {t.calculator.formulaExplanation}
              </p>
            </div>

            <div className="shrink-0 text-left md:text-right">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                {t.calculator.statGrandCycleTotal}
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                {formatETB(DERIVED_EQUB.totalGrandPool)}
              </span>
              <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">
                10 Suzuki Dzire Cars Delivered
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

