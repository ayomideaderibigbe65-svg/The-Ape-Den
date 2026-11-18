import React from 'react';
import { HeadMeta } from '../components/HeadMeta';
import { MintDetails } from '../components/MintDetails';
import { HolderPerks } from '../components/HolderPerks';
import { Sparkles } from 'lucide-react';

export const MintPage: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16">
      <HeadMeta
        title="Mint Details & Holder Perks | The Ape Den"
        description="Official mint specifications, three phases (Team, GTD, FCFS), and holder perks for The Ape Den on Robinhood Chain."
        canonicalPath="/mint"
      />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-brand-lime text-brand-lime text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Robinhood Chain • OpenSea</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-2">
          MINT <span className="text-brand-lime">DETAILS</span>
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
          2,222 hand-drawn Apes launching directly on OpenSea. Review the phases and holder perks below.
        </p>
      </div>

      {/* Mint Details & Phases */}
      <MintDetails />

      {/* Holder Perks sitting at bottom of Mint page as requested */}
      <HolderPerks />
    </div>
  );
};
