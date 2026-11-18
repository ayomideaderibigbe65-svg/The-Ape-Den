import React from 'react';
import { siteConfig } from '../config/siteData';

export const StatStrip: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
        {siteConfig.stats.map((stat) => (
          <div
            key={stat.label}
            className="min-w-0 bg-zinc-950 border-2 border-zinc-800 rounded-xl p-3 sm:p-4 shadow-comic-dark hover:border-brand-lime hover:shadow-comic-lime-sm transition-all duration-150 flex flex-col justify-between overflow-hidden"
          >
            {/* Stat Label */}
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 block truncate">
              {stat.label}
            </span>

            {/* Stat Value (Using clamp font size, min-width: 0 and word-break so text never leaves its card) */}
            <div className="min-w-0 my-1">
              <span className="font-display font-extrabold text-[clamp(0.95rem,2.2vw,1.35rem)] leading-tight text-white block truncate break-words">
                {stat.value}
              </span>
            </div>

            {/* Stat Tag (Strict tags: Strictly capped, Mint network, Mint marketplace, Hand-drawn) */}
            <div className="min-w-0 pt-1">
              <span className="inline-block max-w-full truncate text-[10px] font-semibold text-brand-robinhood bg-brand-robinhood/10 px-2 py-0.5 rounded border border-brand-robinhood/30">
                {stat.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
