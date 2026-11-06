import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { DEMO_DRAW_ROUNDS, DEMO_MEMBERS, formatETB, DrawRound, MemberProfile } from '../data/equb';
import { CheckCircle2, Clock, Calendar, Trophy, Sparkles, Car, Play, X } from 'lucide-react';

export const DrawTimeline: React.FC = () => {
  const { t, isAmharic } = useLanguage();
  const [selectedRound, setSelectedRound] = useState<DrawRound>(DEMO_DRAW_ROUNDS[3]); // Round 4
  const [isSimulating, setIsSimulating] = useState(false);
  const [spinnerName, setSpinnerName] = useState('');
  const [simulatedWinner, setSimulatedWinner] = useState<MemberProfile | null>(null);

  // Eligible members who haven't won yet
  const eligibleMembers = DEMO_MEMBERS.filter(m => !m.hasWon);

  const startDrawSimulation = () => {
    setIsSimulating(true);
    setSimulatedWinner(null);
    let counter = 0;
    const interval = setInterval(() => {
      const randomMember = eligibleMembers[Math.floor(Math.random() * eligibleMembers.length)];
      setSpinnerName(isAmharic ? randomMember.amharicName : randomMember.name);
      counter++;

      if (counter > 25) {
        clearInterval(interval);
        const finalWinner = eligibleMembers[Math.floor(Math.random() * eligibleMembers.length)];
        setSimulatedWinner(finalWinner);
        setSpinnerName(isAmharic ? finalWinner.amharicName : finalWinner.name);
      }
    }, 100);
  };

  return (
    <section id="timeline" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-equb-gold-500/30 text-equb-gold-400 text-xs font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.timeline.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.timeline.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.timeline.subtitle}
          </p>
        </div>

        {/* 10-Round Horizontal Track */}
        <div className="relative mb-12">
          {/* Progress bar background line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0" />
          <div className="hidden md:block absolute top-1/2 left-0 w-[35%] h-1 bg-gradient-to-r from-emerald-500 to-equb-gold-500 -translate-y-1/2 z-0" />

          {/* Markers */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-3 relative z-10">
            {DEMO_DRAW_ROUNDS.map((round) => {
              const isSelected = selectedRound.roundNumber === round.roundNumber;
              const isCompleted = round.status === 'completed';
              const isCurrent = round.status === 'current';

              return (
                <button
                  key={round.roundNumber}
                  onClick={() => setSelectedRound(round)}
                  className={`p-3 rounded-xl text-center transition-all duration-300 flex flex-col items-center justify-between border ${
                    isSelected
                      ? 'bg-equb-gold-500/15 border-equb-gold-400 shadow-lg shadow-equb-gold-500/20 scale-105'
                      : isCompleted
                      ? 'bg-emerald-950/40 border-emerald-500/40 hover:border-emerald-400'
                      : isCurrent
                      ? 'bg-amber-950/40 border-amber-500/60 animate-pulse hover:border-amber-400'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Status Indicator Icon */}
                  <div className="mb-2">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : isCurrent ? (
                      <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
                    ) : (
                      <Clock className="w-5 h-5 text-slate-500" />
                    )}
                  </div>

                  <div className="text-xs font-bold text-white">
                    R{round.roundNumber}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Day {round.dayNumber}
                  </div>

                  <div className="mt-2">
                    <span
                      className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : isCurrent
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isCompleted
                        ? 'Won'
                        : isCurrent
                        ? 'Active'
                        : 'Soon'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Round Detail Spotlight Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-equb-gold-500/30 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-equb-gold-500/20 text-equb-gold-300 border border-equb-gold-500/40">
                  {t.timeline.roundLabel} {selectedRound.roundNumber} of 10
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {t.timeline.dayLabel} {selectedRound.dayNumber} • {isAmharic ? selectedRound.scheduledDateEth : `${selectedRound.scheduledDate} (${selectedRound.scheduledDateEth})`}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 flex items-center space-x-2">
                <span>{selectedRound.status === 'completed' ? t.timeline.statusCompleted : selectedRound.status === 'current' ? t.timeline.statusCurrent : t.timeline.statusUpcoming}</span>
              </h3>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
                {t.timeline.poolValueLabel}
              </span>
              <span className="text-2xl font-extrabold text-equb-gold-400 font-mono">
                {formatETB(selectedRound.poolAmount)}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="pt-6">
            {selectedRound.winner ? (
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <div className="w-12 h-12 rounded-full bg-emerald-700/80 border border-emerald-400 flex items-center justify-center font-bold text-white text-lg shadow-md">
                  {selectedRound.winner.avatarInitials}
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    {t.timeline.winnerLabel}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {isAmharic ? selectedRound.winner.amharicName : selectedRound.winner.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    ID: {selectedRound.winner.memberId} • Awarded on {selectedRound.winner.winDate}
                  </div>
                </div>
                <div className="ml-auto hidden sm:flex items-center space-x-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  <Car className="w-4 h-4" />
                  <span>Car Keys Handed Over</span>
                </div>
              </div>
            ) : selectedRound.status === 'current' ? (
              <div className="p-5 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Round 4 Active Lottery Draw</span>
                    </div>
                    <div className="text-sm text-slate-200 mt-1">
                      22 eligible friends remaining in pool. Payout value: <strong className="text-equb-gold-300">{formatETB(selectedRound.poolAmount)}</strong>
                    </div>
                  </div>

                  <button
                    onClick={startDrawSimulation}
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-equb-gold-400 to-amber-500 text-equb-dark-950 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Simulate Live Draw</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300 flex items-center justify-between">
                <span>
                  Scheduled for upcoming 9-day cycle. Each round consistently gathers {formatETB(selectedRound.poolAmount)}.
                </span>
                <span className="text-xs text-slate-500">Day {selectedRound.dayNumber}</span>
              </div>
            )}
          </div>
        </div>

        {/* Live Draw Simulation Modal */}
        {isSimulating && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel max-w-md w-full p-6 sm:p-8 rounded-3xl border border-equb-gold-400/60 shadow-2xl relative text-center">
              <button
                onClick={() => setIsSimulating(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-equb-gold-400 to-amber-600 flex items-center justify-center text-equb-dark-950 shadow-xl">
                <Trophy className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold text-equb-gold-400 uppercase tracking-widest block mb-1">
                I store by deb equb • Round 4 Draw
              </span>

              <h3 className="text-2xl font-black text-white mb-2">
                {simulatedWinner ? "🎉 Congratulations to the Winner!" : "Selecting Winner from 22 Friends..."}
              </h3>

              {/* Animated Spinner Card */}
              <div className="my-6 p-6 rounded-2xl bg-slate-900/90 border border-equb-gold-500/40 shadow-inner">
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${simulatedWinner ? 'text-equb-gold-300 scale-105' : 'text-slate-200 animate-pulse'} transition-all`}>
                  {spinnerName}
                </div>
                {simulatedWinner && (
                  <div className="mt-3 text-xs text-emerald-400 font-semibold flex items-center justify-center space-x-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Member ID: {simulatedWinner.id} • Verified Friend</span>
                  </div>
                )}
              </div>

              {simulatedWinner ? (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-slate-200">
                    Grand Prize: <strong className="text-white">Suzuki Dzire (Brand New)</strong> + {formatETB(selectedRound.poolAmount)} Car Value.
                  </div>
                  <button
                    onClick={() => setIsSimulating(false)}
                    className="w-full py-3 rounded-xl font-bold text-equb-dark-950 bg-gradient-to-r from-equb-gold-400 to-amber-400 shadow-lg"
                  >
                    Confirm & Close Demo Draw
                  </button>
                </div>
              ) : (
                <div className="text-xs text-slate-400 flex items-center justify-center space-x-2">
                  <Sparkles className="w-4 h-4 text-equb-gold-400 animate-spin" />
                  <span>Audited cryptographic randomizer active...</span>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
