import React from 'react';
import { siteConfig } from '../config/siteData';
import { MessageSquare, ArrowUpRight, Handshake } from 'lucide-react';

export const Collabs: React.FC = () => {
  const { collabs, socials } = siteConfig;

  return (
    <section id="collabs" className="relative py-24 bg-brand-dark overflow-hidden comic-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Collab Card */}
        <div className="relative bg-zinc-950 border-3 border-black rounded-3xl p-8 sm:p-12 shadow-comic-lime overflow-hidden">
          
          {/* Halftone accent overlay */}
          <div className="absolute inset-0 halftone-lime opacity-25 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-brand-lime text-brand-lime text-xs font-bold uppercase tracking-wider mb-4">
                <Handshake className="w-4 h-4" />
                <span>{collabs.subtitle}</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-4">
                PROJECT <span className="text-brand-lime">COLLABORATIONS</span>
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed mb-4">
                {collabs.description}
              </p>

              <div className="text-xs text-zinc-400 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-robinhood" />
                <span>No forms, no ticket queues. Direct community connections only.</span>
              </div>
            </div>

            {/* Direct X DM CTA */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <a
                href={socials.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-lime hover:bg-white text-black font-display font-black text-base px-8 py-4 rounded-xl border-3 border-black shadow-comic-white hover:shadow-comic-lime active:translate-x-1 active:translate-y-1 transition-all duration-150"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{collabs.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-zinc-400 font-mono">
                Official Account: <strong className="text-brand-lime font-bold">{socials.xHandle}</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
