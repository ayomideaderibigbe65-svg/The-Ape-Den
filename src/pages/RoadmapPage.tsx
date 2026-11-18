import React from 'react';
import { HeadMeta } from '../components/HeadMeta';
import { Roadmap } from '../components/Roadmap';
import { MapPin } from 'lucide-react';

export const RoadmapPage: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16">
      <HeadMeta
        title="Roadmap | The Ape Den"
        description="Explore the phase-by-phase execution timeline for The Ape Den on Robinhood Chain."
        canonicalPath="/roadmap"
      />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-brand-lime text-brand-lime text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Execution Trajectory</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-2">
          PROJECT <span className="text-brand-lime">ROADMAP</span>
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
          A practical, milestone-driven roadmap designed for longevity on Robinhood Chain.
        </p>
      </div>

      <Roadmap />
    </div>
  );
};
