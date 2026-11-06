import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyStatsStrip } from './components/KeyStatsStrip';
import { WhatIsEqub } from './components/WhatIsEqub';
import { HowItWorks } from './components/HowItWorks';
import { DrawTimeline } from './components/DrawTimeline';
import { PrizeSpotlight } from './components/PrizeSpotlight';
import { MembersCircle } from './components/MembersCircle';
import { SavingsCalculator } from './components/SavingsCalculator';
import { TrustTransparency } from './components/TrustTransparency';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-equb-dark-950 text-slate-100 flex flex-col selection:bg-equb-gold-500 selection:text-black">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero: Star of the page (Car + Equb name front and center) */}
        <Hero />

        {/* 3. Key Numbers Strip */}
        <KeyStatsStrip />

        {/* 4. What is an Equb? */}
        <WhatIsEqub />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Draw Timeline (90-day cycle, 10 draws) */}
        <DrawTimeline />

        {/* 7. The Prize: Suzuki Dzire Spotlight */}
        <PrizeSpotlight />

        {/* 8. Members Circle (25 close friends) */}
        <MembersCircle />

        {/* 9. Savings Calculator (Interactive) */}
        <SavingsCalculator />

        {/* 10. Trust & Transparency */}
        <TrustTransparency />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Final CTA & Footer */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;

