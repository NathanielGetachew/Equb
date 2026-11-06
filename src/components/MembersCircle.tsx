import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { DEMO_MEMBERS, MemberProfile, EQUB_CONFIG } from '../data/equb';
import { Users, CheckCircle, Trophy, ShieldCheck } from 'lucide-react';

export const MembersCircle: React.FC = () => {
  const { t, isAmharic } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(null);

  const winnersCount = DEMO_MEMBERS.filter(m => m.hasWon).length;

  return (
    <section id="members" className="relative py-20 bg-equb-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{t.members.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.members.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.members.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.members.circleSummary}</span>
            <span className="text-slate-600">•</span>
            <span className="text-equb-gold-400 font-bold">{winnersCount} of 10 Cars Awarded</span>
          </div>
        </div>

        {/* 25 Member Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {DEMO_MEMBERS.map((member) => {
            const isWinner = member.hasWon;
            const isSelected = selectedMember?.id === member.id;

            return (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-3 group ${
                  isSelected
                    ? 'bg-equb-gold-500/20 border-equb-gold-400 shadow-lg'
                    : isWinner
                    ? 'bg-emerald-950/30 border-emerald-500/40 hover:border-emerald-400'
                    : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Avatar with initials */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-md ${member.avatarColor} relative`}
                >
                  {member.initials}
                  {isWinner && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-equb-gold-400 border border-equb-dark-950 flex items-center justify-center text-equb-dark-950">
                      <Trophy className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="truncate flex-1">
                  <div className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-equb-gold-300">
                    {isAmharic ? member.amharicName : member.name}
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] text-slate-400 mt-0.5">
                    {isWinner ? (
                      <span className="text-emerald-400 font-semibold flex items-center">
                        <CheckCircle className="w-3 h-3 mr-0.5" />
                        {t.members.wonTag}
                      </span>
                    ) : (
                      <span>{t.members.activeContributorTag}</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Member modal popup when clicked */}
        {selectedMember && (
          <div className="mt-8 max-w-md mx-auto p-5 rounded-2xl glass-panel border border-equb-gold-500/40 shadow-2xl flex items-center justify-between animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center space-x-3.5">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base text-white ${selectedMember.avatarColor}`}>
                {selectedMember.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {isAmharic ? selectedMember.amharicName : selectedMember.name}
                </h4>
                <div className="text-xs text-slate-400">
                  Member ID: <span className="font-mono text-slate-300">{selectedMember.id}</span> • Daily 12,000 ETB
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  {t.members.verifiedTag}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedMember(null)}
              className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

