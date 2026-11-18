import React from 'react';
import { siteConfig } from '../config/siteData';
import { StatStrip } from '../components/StatStrip';
import { HeadMeta } from '../components/HeadMeta';
import { ArrowRight, Layers, Sparkles, MapPin, ExternalLink, Bell, Check } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [reminded, setReminded] = React.useState(false);

  const marqueeItems = [
    ...siteConfig.assets.sneakPeeks,
    ...siteConfig.assets.sneakPeeks,
  ];

  const handleSetReminder = () => {
    setReminded(true);
    window.open(siteConfig.socials.xUrl, '_blank');
  };

  return (
    <div className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <HeadMeta
        title="The Ape Den | 2,222 Hand-Drawn Apes on Robinhood Chain"
        description="The Ape Den is a collection of 2,222 hand-drawn Apes launching on Robinhood Chain. Mint on OpenSea, date TBA."
        canonicalPath="/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-10">
          
          {/* Left Column: Headlines, Tagline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Comic pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border-2 border-brand-lime shadow-comic-lime-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span className="font-display font-bold text-[11px] uppercase tracking-wider text-brand-lime">
                Official Drop on Robinhood Chain
              </span>
              <span className="text-zinc-600 font-bold">•</span>
              <span className="text-[11px] font-semibold text-zinc-300">Mint on OpenSea</span>
            </div>

            {/* Main Hero Headline (Display font used only for hero and page title) */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95] mb-3">
              THE <span className="text-brand-lime">APE DEN</span>
            </h1>

            {/* Tagline Placeholder in single place */}
            <p className="text-base sm:text-lg font-medium text-zinc-200 tracking-wide mb-3 border-l-3 border-brand-lime pl-3 py-0.5">
              {siteConfig.tagline}
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-xl">
              2,222 original hand-drawn Apes crafted with heavy comic ink outlines, high-contrast character, and zero shortcuts. Launching on Robinhood Chain with minting hosted on OpenSea.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6 w-full sm:w-auto">
              <a
                href={siteConfig.socials.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-lime text-black font-display font-extrabold text-xs sm:text-sm px-6 py-3 rounded-md border-2 border-black shadow-comic-white hover:bg-white hover:shadow-comic-lime active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Follow on X</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onNavigate('/collection')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-md border-2 border-zinc-700 shadow-comic-dark hover:border-brand-lime hover:text-brand-lime transition-all"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Compact Mint Schedule Strip */}
            <div className="w-full max-w-xl bg-zinc-950 border-2 border-zinc-800 rounded-xl p-3.5 shadow-comic-dark">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">Mint Schedule</span>
                  <div className="font-display font-extrabold text-lg sm:text-xl text-white">
                    MINT DATE: <span className="text-brand-lime">TBA</span>
                  </div>
                </div>

                <button
                  onClick={handleSetReminder}
                  className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold px-3 py-2 rounded border border-zinc-700 transition-colors"
                >
                  {reminded ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-lime" />
                      <span>Notified on X</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-3.5 h-3.5 text-brand-lime" />
                      <span>Notify Me on X</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Ape Art */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm group">
              <div className="absolute inset-0 bg-brand-lime rounded-2xl translate-x-2.5 translate-y-2.5 border-2 border-black" />
              <div className="relative bg-zinc-950 border-2 border-black rounded-2xl overflow-hidden p-2.5 z-10 shadow-xl">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  <img
                    src={siteConfig.assets.featuredApe}
                    alt="Featured Ape"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/90 border border-brand-lime px-2.5 py-1 rounded shadow-comic-lime-sm">
                    <span className="text-[10px] font-display font-extrabold text-brand-lime block">
                      GOLD FUR • 3D GLASSES
                    </span>
                    <span className="text-[9px] text-zinc-300">Specimen #01</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Compact Stat Strip (No overflow, clamp font sizes, 4 col desktop, 2x2 mobile) */}
        <div className="mb-10">
          <StatStrip />
        </div>

        {/* 3 Small Teaser Cards (Collection, Mint, Roadmap) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* Teaser 1: Collection */}
          <div
            onClick={() => onNavigate('/collection')}
            className="cursor-pointer bg-zinc-950 border-2 border-zinc-800 rounded-xl p-5 shadow-comic-dark hover:border-brand-lime hover:shadow-comic-lime-sm transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-brand-lime text-brand-lime flex items-center justify-center mb-3 group-hover:bg-brand-lime group-hover:text-black transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-brand-lime transition-colors">
                The Collection
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Interactive Anatomy of an Ape diagram, Trait Gallery, and full Sneak Peek gallery with lightbox.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-lime pt-2 border-t border-zinc-900">
              <span>View Collection</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Teaser 2: Mint */}
          <div
            onClick={() => onNavigate('/mint')}
            className="cursor-pointer bg-zinc-950 border-2 border-zinc-800 rounded-xl p-5 shadow-comic-dark hover:border-brand-lime hover:shadow-comic-lime-sm transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-brand-robinhood text-brand-robinhood flex items-center justify-center mb-3 group-hover:bg-brand-robinhood group-hover:text-black transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-brand-lime transition-colors">
                Mint Details & Phases
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Three phases (Team, GTD, FCFS), OpenSea marketplace link status, and full Holder Perks breakdown.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-lime pt-2 border-t border-zinc-900">
              <span>View Mint Info</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Teaser 3: Roadmap */}
          <div
            onClick={() => onNavigate('/roadmap')}
            className="cursor-pointer bg-zinc-950 border-2 border-zinc-800 rounded-xl p-5 shadow-comic-dark hover:border-brand-lime hover:shadow-comic-lime-sm transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-brand-lime text-brand-lime flex items-center justify-center mb-3 group-hover:bg-brand-lime group-hover:text-black transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-brand-lime transition-colors">
                Project Roadmap
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Milestones from website launch and smart contract deployment to post-mint activations.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-lime pt-2 border-t border-zinc-900">
              <span>View Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Marquee Strip of Apes */}
      <div className="relative w-full py-3 bg-zinc-950 border-y-2 border-black overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((ape, idx) => (
            <div
              key={`${ape.id}-${idx}`}
              onClick={() => onNavigate('/collection')}
              className="cursor-pointer flex items-center gap-3 mx-2.5 bg-zinc-900 border border-zinc-800 rounded-lg p-2 shrink-0 hover:border-brand-lime transition-colors"
            >
              <div className="w-12 h-12 rounded overflow-hidden border border-black bg-zinc-950 shrink-0">
                <img
                  src={ape.image}
                  alt={ape.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pr-2">
                <span className="font-mono text-[9px] font-bold uppercase text-brand-lime block">
                  {ape.name}
                </span>
                <span className="font-display font-bold text-xs text-white block">
                  {ape.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
