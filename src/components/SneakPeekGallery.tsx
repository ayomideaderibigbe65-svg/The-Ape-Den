import React, { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '../config/siteData';
import { SneakPeekItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export const SneakPeekGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const peeks = siteConfig.assets.sneakPeeks;

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev! + 1) % peeks.length));
  }, [selectedIdx, peeks.length]);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev! - 1 + peeks.length) % peeks.length));
  }, [selectedIdx, peeks.length]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleClose, handleNext, handlePrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext(); // Swiped left -> next
    } else if (diff < -50) {
      handlePrev(); // Swiped right -> prev
    }
    setTouchStart(null);
  };

  const activePeek: SneakPeekItem | null = selectedIdx !== null ? peeks[selectedIdx] : null;

  return (
    <section className="relative py-12 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-brand-lime/40 text-brand-lime text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Official Art</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              SNEAK PEEK <span className="text-brand-lime">GALLERY</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Preview verified specimens from the 2,222 supply. Click any Ape to open in full-screen lightbox.
            </p>
          </div>

          <span className="font-mono text-xs text-zinc-500 font-bold self-start sm:self-end">
            {peeks.length} Specimens Revealed
          </span>
        </div>

        {/* Sneak Peeks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {peeks.map((peek, index) => (
            <div
              key={peek.id}
              onClick={() => setSelectedIdx(index)}
              className="group cursor-pointer bg-zinc-950 border-2 border-zinc-800 rounded-xl overflow-hidden p-2 shadow-comic-dark hover:border-brand-lime hover:shadow-comic-lime-sm transition-all duration-200"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                  src={peek.image}
                  alt={peek.title}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{backgroundColor: '#111'}}
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-brand-lime text-black p-2 rounded-full border border-black shadow-comic-sm">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute bottom-1.5 left-1.5 bg-black/85 backdrop-blur-sm border border-zinc-700 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-brand-lime">
                  {peek.name}
                </div>
              </div>

              <div className="pt-2 px-1">
                <h4 className="font-display font-bold text-xs text-white truncate group-hover:text-brand-lime transition-colors">
                  {peek.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePeek && selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-2xl w-full bg-zinc-950 border-3 border-brand-lime rounded-2xl p-4 sm:p-6 shadow-comic-lime z-10 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close button */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-black bg-brand-lime px-2 py-0.5 rounded">
                  {activePeek.name}
                </span>
                <h3 className="font-display font-black text-sm sm:text-base text-white truncate">
                  {activePeek.title}
                </h3>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 rounded-md border border-zinc-700"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Area with Nav Controls */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black border-2 border-zinc-800 mb-4 flex items-center justify-center">
              <img
                src={activePeek.image}
                alt={activePeek.title}
                className="w-full h-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 hover:bg-brand-lime text-white hover:text-black border border-zinc-700 hover:border-black transition-colors"
                aria-label="Previous Ape"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 hover:bg-brand-lime text-white hover:text-black border border-zinc-700 hover:border-black transition-colors"
                aria-label="Next Ape"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trait Tags Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {activePeek.traits.map((trait, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="text-[11px] font-mono text-zinc-400">
                {selectedIdx + 1} / {peeks.length}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
