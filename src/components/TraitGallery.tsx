import React, { useState, useMemo } from 'react';
import { siteConfig } from '../config/siteData';
import type { TraitItem } from '../types';
import { Dices, Search, Filter, Image as ImageIcon, Sparkles, X, RefreshCw } from 'lucide-react';

type CategoryFilter = 'All' | 'Background' | 'Fur' | 'Eyes' | 'Mouth' | 'Clothes' | 'Hat';

export const TraitGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [randomModalOpen, setRandomModalOpen] = useState(false);
  const [randomApeSelection, setRandomApeSelection] = useState<Record<string, TraitItem> | null>(null);

  const categories: CategoryFilter[] = ['All', 'Background', 'Fur', 'Eyes', 'Mouth', 'Clothes', 'Hat'];

  // Filtered traits
  const filteredTraits = useMemo(() => {
    return siteConfig.traits.filter((trait) => {
      const hasImage = Boolean(trait.image);
      const matchesCategory = selectedCategory === 'All' || trait.category === selectedCategory;
      const matchesSearch = trait.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            trait.category.toLowerCase().includes(searchQuery.toLowerCase());
      return hasImage && matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Generate a random combination across all 6 layers
  const handleShuffleApe = () => {
    const cats: Array<'Background' | 'Fur' | 'Eyes' | 'Mouth' | 'Clothes' | 'Hat'> = [
      'Background', 'Fur', 'Eyes', 'Mouth', 'Clothes', 'Hat'
    ];
    const combo: Record<string, TraitItem> = {};

    cats.forEach((cat) => {
      const itemsInCat = siteConfig.traits.filter((t) => t.category === cat);
      if (itemsInCat.length > 0) {
        const randomIndex = Math.floor(Math.random() * itemsInCat.length);
        combo[cat] = itemsInCat[randomIndex];
      }
    });

    setRandomApeSelection(combo);
    setRandomModalOpen(true);
  };

  return (
    <section id="trait-catalog" className="relative py-10 bg-brand-dark border-t-2 border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-brand-lime/40 text-brand-lime text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Layer Catalog</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              TRAIT <span className="text-brand-lime">GALLERY</span>
            </h3>
            <p className="text-zinc-400 mt-1 max-w-xl text-xs sm:text-sm">
              Explore the hand-drawn elements that construct each of the 2,222 Apes. Filter by category or roll random preview combinations.
            </p>
          </div>

          {/* Random Ape Shuffle CTA Button */}
          <button
            onClick={handleShuffleApe}
            className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-white text-black font-display font-black text-xs px-4 py-2.5 rounded-lg border-2 border-black shadow-comic-white hover:shadow-comic-lime active:translate-x-0.5 active:translate-y-0.5 transition-all shrink-0"
          >
            <Dices className="w-4 h-4 text-black" />
            <span>RANDOM APE PREVIEW</span>
          </button>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-zinc-950 p-4 rounded-xl border-2 border-zinc-800">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 mr-2 shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map((cat) => {
              const count = cat === 'All'
                ? siteConfig.traits.length
                : siteConfig.traits.filter((t) => t.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-md border transition-all duration-150 shrink-0 ${
                    isSelected
                      ? 'bg-brand-lime text-black border-black font-extrabold shadow-comic-lime-sm'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  {cat} <span className={`text-[10px] ml-1 ${isSelected ? 'text-black' : 'text-zinc-500'}`}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search traits by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Traits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTraits.map((trait) => (
            <div
              key={trait.id}
              className="group bg-zinc-950 border-2 border-zinc-800 rounded-xl p-3 shadow-comic-dark hover:border-brand-lime hover:shadow-comic-lime-sm transition-all duration-200 flex flex-col justify-between"
            >
              {/* Trait Card Thumbnail or Labeled Gray Placeholder */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-3 flex items-center justify-center">
                {trait.image ? (
                  <>
                    <img
                      src={trait.image}
                      alt={`${trait.name} ${trait.category} trait`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm border border-brand-lime/40 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-brand-lime">
                      Live Art
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center bg-zinc-900/90 text-zinc-500">
                    <ImageIcon className="w-7 h-7 mb-2 text-zinc-600 group-hover:text-brand-lime transition-colors" />
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-400">
                      Asset Pending
                    </span>
                    <span className="text-[9px] text-zinc-600 mt-1">
                      PNG In Progress
                    </span>
                  </div>
                )}

                {/* Category Pill Tag */}
                <div className="absolute bottom-2 left-2 bg-black/85 backdrop-blur-sm border border-zinc-700 px-2 py-0.5 rounded text-[10px] font-bold text-zinc-300">
                  {trait.category}
                </div>
              </div>

              {/* Trait Name */}
              <div>
                <h4 className="font-display font-extrabold text-sm sm:text-base text-white group-hover:text-brand-lime transition-colors truncate">
                  {trait.name}
                </h4>
                <div className="flex items-center justify-between mt-1 text-[11px] text-zinc-500">
                  <span className="font-mono uppercase text-[10px]">Layer: {trait.category}</span>
                  {/* Note: rarity field is present in data but hidden as requested */}
                  <span className="font-bold text-brand-robinhood">Robinhood</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTraits.length === 0 && (
          <div className="text-center py-16 bg-zinc-950 border-2 border-zinc-800 rounded-xl p-8">
            <p className="text-zinc-400 text-base mb-3">No traits found matching your filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-brand-lime hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Trait Data Config Callout Note */}
        <div className="mt-8 text-center text-xs text-zinc-500">
          Trait metadata is completely data-driven and configurable in <code className="text-zinc-400 font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">src/config/siteData.ts</code>.
        </div>

      </div>

      {/* Random Ape Preview Modal */}
      {randomModalOpen && randomApeSelection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setRandomModalOpen(false)} />

          <div className="relative w-full max-w-2xl bg-zinc-950 border-3 border-brand-lime rounded-2xl p-6 sm:p-8 shadow-comic-lime z-10 animate-scaleUp">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-lime text-black flex items-center justify-center font-black border-2 border-black">
                  <Dices className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    RANDOM APE GENERATOR
                  </h3>
                  <span className="text-xs text-brand-lime font-bold">
                    Shuffled 6-Layer Specimen Preview
                  </span>
                </div>
              </div>

              <button
                onClick={() => setRandomModalOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 rounded-lg border border-zinc-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              
              {/* Preview Artwork Container */}
              <div className="sm:col-span-5 flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-black bg-zinc-900 shadow-comic-dark">
                  {/* Fallback to one of the sneak peek images with badge */}
                  <img
                    src={siteConfig.assets.sneakPeeks[0].image}
                    alt="Random Ape Specimen Preview"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute top-2 left-2 bg-black/90 border border-brand-lime px-2 py-0.5 rounded text-[10px] font-bold text-brand-lime">
                    Composited Preview
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block">
                    Transparent PNG layers system ready
                  </span>
                </div>
              </div>

              {/* Shuffled Trait Layers List */}
              <div className="sm:col-span-7 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Rolled Layer Traits:
                </span>
                {Object.entries(randomApeSelection).map(([layerName, trait]) => (
                  <div
                    key={layerName}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs"
                  >
                    <span className="font-mono text-zinc-400 font-semibold uppercase text-[11px]">
                      {layerName}
                    </span>
                    <span className="font-display font-bold text-white text-sm">
                      {trait.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Graceful Fallback Notice (as instructed) */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-400 mb-6 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
              <span>
                <strong>Layer Engine Ready:</strong> When individual transparent PNG layers are placed in <code className="text-brand-lime font-mono">/public/assets/traits/</code>, this engine will composite them directly on a canvas in real time. Graceful fallback active until layer files are supplied.
              </span>
            </div>

            {/* Modal Controls */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => setRandomModalOpen(false)}
                className="px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white"
              >
                Close
              </button>
              
              <button
                onClick={handleShuffleApe}
                className="inline-flex items-center gap-2 bg-brand-lime hover:bg-white text-black font-display font-black text-xs px-5 py-2.5 rounded-lg border-2 border-black shadow-comic-sm transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Shuffle Again</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
