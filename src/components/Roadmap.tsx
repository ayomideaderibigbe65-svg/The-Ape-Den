import React from 'react';
import { siteConfig } from '../config/siteData';
import { MapPin, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <section className="relative py-8 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-28 md:ml-32 space-y-8">
          {siteConfig.roadmap.map((phase) => {
            const isCurrent = phase.status === 'in_progress';

            return (
              <div key={phase.phase} className="relative pl-5 sm:pl-8 group">
                
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isCurrent
                      ? 'bg-brand-lime text-black border-black shadow-comic-lime-sm'
                      : 'bg-zinc-900 text-zinc-500 border-zinc-700'
                  }`}
                >
                  {isCurrent ? (
                    <Clock className="w-2.5 h-2.5" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  )}
                </div>

                {/* Left Floating Badge (Desktop) */}
                <div className="hidden sm:block absolute -left-32 top-1 text-right w-24">
                  <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase block">
                    {phase.phase}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border inline-block mt-0.5 ${
                    isCurrent
                      ? 'bg-brand-lime/10 text-brand-lime border-brand-lime/40'
                      : 'bg-zinc-900 text-zinc-500 border-zinc-800'
                  }`}>
                    {phase.timeframe}
                  </span>
                </div>

                {/* Main Phase Card (Compact) */}
                <div
                  className={`bg-zinc-950 border-2 rounded-xl p-4 sm:p-5 shadow-comic-dark transition-all duration-150 ${
                    isCurrent
                      ? 'border-brand-lime shadow-comic-lime-sm'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {/* Mobile Phase Pill */}
                  <div className="sm:hidden flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-brand-lime uppercase">
                      {phase.phase}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                      {phase.timeframe}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-brand-lime transition-colors">
                      {phase.title}
                    </h3>
                    {isCurrent && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-brand-lime text-black px-2 py-0.5 rounded border border-black">
                        <Sparkles className="w-3 h-3" />
                        Active Phase
                      </span>
                    )}
                  </div>

                  {/* Phase Items */}
                  <ul className="space-y-1.5">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isCurrent ? 'text-brand-lime' : 'text-zinc-600'
                          }`}
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
