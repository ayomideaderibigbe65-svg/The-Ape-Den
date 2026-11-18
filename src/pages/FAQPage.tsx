import React from 'react';
import { HeadMeta } from '../components/HeadMeta';
import { FAQ } from '../components/FAQ';
import { HelpCircle } from 'lucide-react';

export const FAQPage: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16">
      <HeadMeta
        title="FAQ & Information | The Ape Den"
        description="Frequently asked questions about The Ape Den, supply (2,222), Robinhood Chain, OpenSea mint, and whitelist spots."
        canonicalPath="/faq"
      />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-brand-lime text-brand-lime text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-2">
          QUESTIONS & <span className="text-brand-lime">ANSWERS</span>
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
          Short, transparent answers about The Ape Den, our 2,222 supply, and the Robinhood Chain launch.
        </p>
      </div>

      <FAQ />
    </div>
  );
};
