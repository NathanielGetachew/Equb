import React from 'react';

interface TibebDividerProps {
  className?: string;
  variant?: 'gold' | 'emerald' | 'subtle';
}

export const TibebDivider: React.FC<TibebDividerProps> = ({ className = '', variant = 'gold' }) => {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center my-8 ${className}`}>
      <div className="flex items-center space-x-2 max-w-5xl w-full px-4">
        {/* Left gradient line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-equb-gold-500/30 to-equb-gold-500/70" />

        {/* Traditional Ethiopian Tibeb Woven Geometric motif */}
        <div className="flex items-center space-x-1.5 shrink-0 px-2 py-1 bg-equb-dark-900/80 rounded-full border border-equb-gold-500/20 shadow-inner">
          <svg width="120" height="16" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Diamond 1 - Emerald */}
            <path d="M10 8L16 2L22 8L16 14L10 8Z" fill="#10B981" fillOpacity="0.8" />
            <path d="M13 8L16 5L19 8L16 11L13 8Z" fill="#F59E0B" />

            {/* Central Ethiopian Cross motif */}
            <path d="M36 8L42 2L48 8L42 14L36 8Z" fill="#D97706" />
            <circle cx="42" cy="8" r="2.5" fill="#DC2626" />

            {/* Centerpiece Star / Diamond */}
            <path d="M52 8L60 0L68 8L60 16L52 8Z" fill="#065F46" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="60" cy="8" r="3" fill="#F59E0B" />

            {/* Central Ethiopian Cross motif mirror */}
            <path d="M72 8L78 2L84 8L78 14L72 8Z" fill="#D97706" />
            <circle cx="78" cy="8" r="2.5" fill="#DC2626" />

            {/* Diamond 2 - Emerald */}
            <path d="M98 8L104 2L110 8L104 14L98 8Z" fill="#10B981" fillOpacity="0.8" />
            <path d="M101 8L104 5L107 8L104 11L101 8Z" fill="#F59E0B" />
          </svg>
        </div>

        {/* Right gradient line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-equb-gold-500/30 to-equb-gold-500/70" />
      </div>
    </div>
  );
};

