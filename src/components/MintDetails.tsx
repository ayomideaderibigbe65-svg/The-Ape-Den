import React from 'react';
import { siteConfig } from '../config/siteData';
import { Shield, ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const MintDetails: React.FC = () => {
  const { mint, phases } = siteConfig;

  return (
    <section className="relative py-8 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Parameters Strip (Compact) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="min-w-0 bg-zinc-950 border-2 border-zinc-800 rounded-xl p-3.5 shadow-comic-dark">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block truncate">
              Supply
            </span>
            <span className="font-display font-extrabold text-xl sm:text-2xl text-white block">
              2,222
            </span>
            <span className="text-[10px] font-semibold text-brand-lime">
              Strictly fixed
            </span>
          </div>

          <div className="min-w-0 bg-zinc-950 border-2 border-zinc-800 rounded-xl p-3.5 shadow-comic-dark">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block truncate">
              Blockchain
            </span>
            <span className="font-display font-extrabold text-lg sm:text-xl text-brand-robinhood block truncate">
              Robinhood
            </span>
            <span className="text-[10px] font-semibold text-zinc-400">
              Robinhood Chain
            </span>
          </div>

          <div className="min-w-0 bg-zinc-950 border-2 border-zinc-800 rounded-xl p-3.5 shadow-comic-dark">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block truncate">
              Marketplace
            </span>
            <span className="font-display font-extrabold text-xl sm:text-2xl text-white block truncate">
              OpenSea
            </span>
            <span className="text-[10px] font-semibold text-zinc-400">
              Official Mint Host
            </span>
          </div>

          <div className="min-w-0 bg-zinc-950 border-2 border-brand-lime rounded-xl p-3.5 shadow-comic-lime-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-lime block truncate">
              Mint Date
            </span>
            <span className="font-display font-extrabold text-xl sm:text-2xl text-white block">
              {mint.mintDateDisplay}
            </span>
            <span className="text-[10px] font-semibold text-zinc-400">
              Announcing on X
            </span>
          </div>
        </div>

        {/* Mint Phases Header & Sequence (Three phases only: Team, GTD, FCFS. NO spot counts.) */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-brand-lime" />
            <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase">
              Three Mint Phases
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400">
            Minting proceeds in three successive stages on OpenSea. There is no public phase.
          </p>
        </div>

        {/* Three Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
          {phases.map((phase, idx) => (
            <div
              key={phase.id}
              className="bg-zinc-950 border-2 border-zinc-800 rounded-xl p-4 sm:p-5 shadow-comic-dark flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-zinc-500 uppercase">
                    Stage 0{idx + 1}
                  </span>
                  <span className={`text-xs font-display font-black px-2.5 py-0.5 rounded border border-black ${
                    phase.price === 'Free' ? 'bg-brand-lime text-black' : 'bg-brand-robinhood text-black'
                  }`}>
                    {phase.badge}
                  </span>
                </div>

                <h4 className="font-display font-extrabold text-lg text-white mb-1.5">
                  {phase.name}
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {phase.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Price:</span>
                <span className="font-display font-black text-white text-sm">{phase.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mint CTA Panel (Disabled Button & OpenSea Info) */}
        <div className="bg-zinc-950 border-2 border-brand-lime rounded-2xl p-6 sm:p-8 shadow-comic-lime text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-2.5 py-0.5 rounded-full border border-brand-lime/30 mb-3">
            <Sparkles className="w-3 h-3" />
            <span>OpenSea Marketplace Integration</span>
          </div>

          <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase mb-2">
            Mint on OpenSea
          </h3>

          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed">
            When mint opens, the button below will activate and link directly to the collection page on Robinhood Chain.
          </p>

          {/* Config-driven button */}
          {mint.isMintActive ? (
            <a
              href={mint.openseaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-white text-black font-display font-black text-sm px-8 py-3.5 rounded-xl border-2 border-black shadow-comic-white hover:shadow-comic-lime active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <span>{mint.buttonActiveText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="flex flex-col items-center">
              <button
                disabled
                className="cursor-not-allowed inline-flex items-center justify-center gap-2 bg-zinc-900 text-zinc-500 font-display font-bold text-xs sm:text-sm px-6 py-3 rounded-lg border border-zinc-800 opacity-80"
              >
                <Shield className="w-4 h-4 text-zinc-500" />
                <span>{mint.buttonDisabledText}</span>
              </button>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-brand-robinhood shrink-0" />
            <span>No public phase. Whitelist spots are distributed exclusively via community collaborations on X.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
