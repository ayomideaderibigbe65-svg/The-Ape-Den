import React from 'react';
import { siteConfig } from '../config/siteData';
import { Crown, Shield, Zap, Sparkles, Download, Compass, Check } from 'lucide-react';

export const HolderPerks: React.FC = () => {
  const getPerkIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Download':
        return <Download className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative py-10 bg-brand-dark border-t-2 border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-brand-lime text-brand-lime text-[11px] font-bold uppercase tracking-wider mb-2">
            <Crown className="w-3.5 h-3.5" />
            <span>Community Standing</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
            HOLDER <span className="text-brand-lime">PERKS</span>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400">
            Holding an Ape from the 2,222 supply grants direct membership in The Den and unlocks focused community access.
          </p>
        </div>

        {/* 6 Perk Cards (Tightened padding & sizes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {siteConfig.perks.map((perk) => (
            <div
              key={perk.id}
              className={`bg-zinc-950 border-2 rounded-xl p-4 sm:p-5 shadow-comic-dark transition-all duration-200 flex flex-col justify-between group ${
                perk.highlight
                  ? 'border-brand-lime hover:shadow-comic-lime-sm'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                    perk.highlight
                      ? 'bg-brand-lime text-black border-black shadow-comic-lime-sm'
                      : 'bg-zinc-900 text-brand-lime border-zinc-700'
                  }`}>
                    {getPerkIcon(perk.iconName)}
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {perk.subtitle}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-white mb-1.5 group-hover:text-brand-lime transition-colors">
                  {perk.title}
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {perk.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
                <Check className="w-3 h-3 text-brand-lime" />
                <span>Verified Ape Holder</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
