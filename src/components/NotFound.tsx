import React from 'react';
import { siteConfig } from '../config/siteData';
import { Home } from 'lucide-react';
import { HeadMeta } from './HeadMeta';

interface NotFoundProps {
  onNavigate?: (path: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 text-center comic-grid relative overflow-hidden">
      <HeadMeta
        title="Page Not Found | The Ape Den"
        description="Error 404: The requested Ape Den page does not exist on Robinhood Chain."
        canonicalPath="/404"
      />

      <div className="relative z-10 max-w-md bg-zinc-950 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-comic-lime">
        
        {/* Official Logo */}
        <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-brand-lime bg-black p-1 mx-auto mb-4 shadow-comic-lime-sm">
          <img
            src={siteConfig.assets.logo}
            alt="The Ape Den Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <span className="font-mono text-[10px] font-bold text-brand-lime uppercase tracking-widest bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800 inline-block mb-3">
          Error 404 • Not Found
        </span>

        <h1 className="font-display font-black text-3xl sm:text-4xl text-white mb-2">
          PAGE NOT FOUND
        </h1>

        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
          The Ape Den coordinates you are looking for do not exist or have moved on Robinhood Chain.
        </p>

        <a
          href="/"
          onClick={handleHomeClick}
          className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-white text-black font-display font-black text-xs px-5 py-2.5 rounded-lg border-2 border-black shadow-comic-white hover:shadow-comic-lime active:translate-x-0.5 active:translate-y-0.5 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>BACK TO THE DEN</span>
        </a>
      </div>
    </div>
  );
};
