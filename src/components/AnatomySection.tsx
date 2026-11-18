import React, { useState } from 'react';
import { siteConfig } from '../config/siteData';
import type { LayerCallout } from '../types';
import { Eye, Shirt, HardHat, Smile, Palette, Sparkles, X, ChevronRight, ChevronLeft } from 'lucide-react';

export const AnatomySection: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('hat');
  const [mobileSheetOpen, setMobileSheetOpen] = useState<boolean>(false);
  const [selectedSneakIndex, setSelectedSneakIndex] = useState<number>(2); // Default to Ape #3 (Hardhat & Ethernet Jacket)

  const activeLayer = siteConfig.anatomyLayers.find((l) => l.id === activeLayerId) || siteConfig.anatomyLayers[0];

  const currentApe = siteConfig.assets.sneakPeeks[selectedSneakIndex];

  // Helper icons for layers
  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'hat':
        return <HardHat className="w-4 h-4" />;
      case 'eyes':
        return <Eye className="w-4 h-4" />;
      case 'fur':
        return <Sparkles className="w-4 h-4" />;
      case 'mouth':
        return <Smile className="w-4 h-4" />;
      case 'clothes':
        return <Shirt className="w-4 h-4" />;
      case 'background':
        return <Palette className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const handleHotspotClick = (layer: LayerCallout) => {
    setActiveLayerId(layer.id);
    if (window.innerWidth < 1024) {
      setMobileSheetOpen(true);
    }
  };

  const handleNextLayer = () => {
    const currentIndex = siteConfig.anatomyLayers.findIndex((l) => l.id === activeLayerId);
    const nextIndex = (currentIndex + 1) % siteConfig.anatomyLayers.length;
    setActiveLayerId(siteConfig.anatomyLayers[nextIndex].id);
  };

  const handlePrevLayer = () => {
    const currentIndex = siteConfig.anatomyLayers.findIndex((l) => l.id === activeLayerId);
    const prevIndex = (currentIndex - 1 + siteConfig.anatomyLayers.length) % siteConfig.anatomyLayers.length;
    setActiveLayerId(siteConfig.anatomyLayers[prevIndex].id);
  };

  return (
    <section className="relative py-6 sm:py-8 bg-brand-dark overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
            ANATOMY OF AN <span className="text-brand-lime">APE</span>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400">
            Constructed from six distinct hand-drawn trait categories. Tap or hover any layer below to inspect the anatomy.
          </p>

          {/* Model Switcher */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mr-1">
              Specimen:
            </span>
            {siteConfig.assets.sneakPeeks.map((peek, idx) => (
              <button
                key={peek.id}
                onClick={() => setSelectedSneakIndex(idx)}
                className={`text-xs font-bold px-3 py-1.5 rounded border-2 transition-all duration-150 ${
                  selectedSneakIndex === idx
                    ? 'bg-brand-lime text-black border-black shadow-comic-lime-sm scale-105'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                }`}
              >
                {peek.name}
              </button>
            ))}
          </div>
        </div>

        {/* Layer Quick Select Pills (Desktop & Mobile) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {siteConfig.anatomyLayers.map((layer) => {
            const isSelected = layer.id === activeLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => handleHotspotClick(layer)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold border-2 transition-all duration-150 ${
                  isSelected
                    ? 'bg-brand-lime text-black border-black shadow-comic-white scale-105'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {getLayerIcon(layer.id)}
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Anatomy Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column (Desktop Only): Left Callouts */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-5">
            {siteConfig.anatomyLayers
              .filter((l) => l.lineDirection === 'left')
              .map((layer) => {
                const isActive = layer.id === activeLayerId;
                return (
                  <div
                    key={layer.id}
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-zinc-900 border-brand-lime shadow-comic-lime translate-x-2'
                        : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`p-1.5 rounded ${isActive ? 'bg-brand-lime text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                          {getLayerIcon(layer.id)}
                        </span>
                        <span className={`font-display font-bold text-sm ${isActive ? 'text-brand-lime' : 'text-white'}`}>
                          {layer.label}
                        </span>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-brand-lime px-2 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-300 leading-normal">
                      {layer.shortDesc}
                    </p>
                  </div>
                );
              })}
          </div>

          {/* Center Column: The Ape Artwork with Interactive Hotspots */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-2xl border-3 border-black bg-zinc-950 p-2 shadow-comic-lime-lg overflow-hidden group">
              
              {/* Ape Image */}
              <img
                src={currentApe.image}
                alt={currentApe.title}
                className="w-full h-full object-cover rounded-xl border border-zinc-800"
              />

              {/* Interactive Hotspot Dots */}
              {siteConfig.anatomyLayers.map((layer) => {
                const isActive = layer.id === activeLayerId;
                return (
                  <button
                    key={layer.id}
                    onClick={() => handleHotspotClick(layer)}
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    style={{ left: `${layer.x}%`, top: `${layer.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/hotspot focus:outline-none"
                    aria-label={`Inspect ${layer.label} layer`}
                  >
                    {/* Pulsing ring */}
                    <span
                      className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-lime/40 animate-ping'
                          : 'bg-white/20 group-hover/hotspot:bg-brand-lime/30'
                      }`}
                    />
                    
                    {/* Hotspot core button */}
                    <span
                      className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-200 ${
                        isActive
                          ? 'bg-brand-lime text-black border-black shadow-comic-lime scale-125'
                          : 'bg-black/90 text-white border-brand-lime group-hover/hotspot:scale-110'
                      }`}
                    >
                      {getLayerIcon(layer.id)}
                    </span>
                  </button>
                );
              })}

              {/* Visual Active Layer Watermark */}
              <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-sm border border-brand-lime/60 px-3 py-1 rounded text-right pointer-events-none">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block">Inspecting</span>
                <span className="font-display font-black text-xs text-brand-lime">{activeLayer.label}</span>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop Only): Right Callouts */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-5">
            {siteConfig.anatomyLayers
              .filter((l) => l.lineDirection === 'right')
              .map((layer) => {
                const isActive = layer.id === activeLayerId;
                return (
                  <div
                    key={layer.id}
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-zinc-900 border-brand-lime shadow-comic-lime -translate-x-2'
                        : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`p-1.5 rounded ${isActive ? 'bg-brand-lime text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                          {getLayerIcon(layer.id)}
                        </span>
                        <span className={`font-display font-bold text-sm ${isActive ? 'text-brand-lime' : 'text-white'}`}>
                          {layer.label}
                        </span>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-brand-lime px-2 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-300 leading-normal">
                      {layer.shortDesc}
                    </p>
                  </div>
                );
              })}
          </div>

        </div>

        {/* Active Layer Deep Dive Card (Full Width below on Desktop) */}
        <div className="mt-12 hidden lg:block max-w-4xl mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-xl p-6 shadow-comic-dark">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-lime text-black border-2 border-black flex items-center justify-center shrink-0">
                {getLayerIcon(activeLayer.id)}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display font-black text-xl text-white">
                    {activeLayer.label}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-brand-lime border border-zinc-700">
                    Hand-Drawn Vector & Ink Layer
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
                  {activeLayer.fullDesc}
                </p>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('trait-catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-brand-lime px-3.5 py-2 rounded border border-zinc-700 shrink-0 transition-colors"
            >
              <span>View All Traits</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Info Card (Visible under ape on mobile before bottom sheet open) */}
        <div className="lg:hidden mt-6 bg-zinc-950 border-2 border-zinc-800 rounded-xl p-4 shadow-comic-dark text-left">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-brand-lime text-black">
                {getLayerIcon(activeLayer.id)}
              </span>
              <span className="font-display font-bold text-sm text-white">
                {activeLayer.label}
              </span>
            </div>
            <button
              onClick={() => setMobileSheetOpen(true)}
              className="text-xs font-bold text-brand-lime underline"
            >
              Layer Details
            </button>
          </div>
          <p className="text-xs text-zinc-300">
            {activeLayer.shortDesc}
          </p>
        </div>

        {/* Mobile Bottom Sheet Modal (as instructed for mobile-first UX!) */}
        {mobileSheetOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0"
              onClick={() => setMobileSheetOpen(false)}
            />

            {/* Bottom Sheet Container */}
            <div className="relative w-full max-w-lg bg-zinc-950 border-t-3 border-x-3 border-brand-lime rounded-t-2xl p-6 shadow-2xl z-10 animate-slideUp">
              
              {/* Drag bar indicator */}
              <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-4" />

              <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-md bg-brand-lime text-black flex items-center justify-center font-bold">
                    {getLayerIcon(activeLayer.id)}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-lime tracking-wider block">
                      Layer Inspector
                    </span>
                    <h3 className="font-display font-black text-lg text-white">
                      {activeLayer.label}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setMobileSheetOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 rounded-md border border-zinc-800"
                  aria-label="Close bottom sheet"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  {activeLayer.fullDesc}
                </p>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-400 flex items-center justify-between">
                  <span>Layer Type:</span>
                  <span className="font-bold text-brand-lime">Hand-Drawn Inking</span>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevLayer}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs py-2.5 rounded border border-zinc-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNextLayer}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-brand-lime text-black font-display font-black text-xs py-2.5 rounded border-2 border-black shadow-comic-sm"
                >
                  <span>Next Layer</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
