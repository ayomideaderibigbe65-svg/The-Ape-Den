import React from 'react';
import { HeadMeta } from '../components/HeadMeta';
import { AnatomySection } from '../components/AnatomySection';
import { SneakPeekGallery } from '../components/SneakPeekGallery';
import { TraitGallery } from '../components/TraitGallery';
import { Layers } from 'lucide-react';

export const CollectionPage: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16">
      <HeadMeta
        title="The Collection | The Ape Den (2,222 Hand-Drawn Apes)"
        description="Explore the Anatomy of an Ape diagram, Trait Gallery, and verified Sneak Peeks for The Ape Den on Robinhood Chain."
        canonicalPath="/collection"
      />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-brand-lime text-brand-lime text-xs font-bold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Art & Traits Architecture</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-2">
          THE <span className="text-brand-lime">COLLECTION</span>
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
          Every Ape in the 2,222 hand-drawn collection is built from six distinct layers. Inspect the anatomy, browse the trait catalog, and explore revealed specimens.
        </p>
      </div>

      {/* Anatomy Diagram Section */}
      <AnatomySection />

      {/* Sneak Peek Gallery with Lightbox */}
      <SneakPeekGallery />

      {/* Trait Gallery with Categories & Randomizer */}
      <TraitGallery />
    </div>
  );
};
