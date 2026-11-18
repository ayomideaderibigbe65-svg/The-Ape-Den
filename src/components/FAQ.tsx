import React, { useState } from 'react';
import { siteConfig } from '../config/siteData';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="relative py-8 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accordion List */}
        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={index}
                className={`bg-zinc-950 border-2 rounded-xl transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'border-brand-lime shadow-comic-lime-sm'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none focus:ring-1 focus:ring-brand-lime"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white pr-4">
                    {item.question}
                  </span>
                  
                  <span
                    className={`p-1 rounded-md border shrink-0 transition-transform duration-150 ${
                      isOpen
                        ? 'bg-brand-lime text-black border-black rotate-180'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-700'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-900 pt-3 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
