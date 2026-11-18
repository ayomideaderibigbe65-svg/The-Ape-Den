import React from 'react';
import { siteConfig } from '../config/siteData';
import { ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="relative bg-black border-t-2 border-zinc-800 pt-10 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="flex items-center gap-2.5 mb-3 group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-brand-lime bg-black p-0.5 shadow-comic-lime-sm">
                <img
                  src={siteConfig.assets.logo}
                  alt="The Ape Den Official Logo"
                  className="w-full h-full object-contain"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight block">
                  THE APE DEN
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-lime">
                  Robinhood Chain
                </span>
              </div>
            </a>

            <p className="text-xs text-zinc-400 max-w-sm mb-3 leading-relaxed">
              2,222 hand-drawn Apes launching on Robinhood Chain. Mint hosted directly on OpenSea.
            </p>

            {/* Mint on OpenSea, date TBA line as requested */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-bold text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
              <span>Mint on OpenSea, date TBA</span>
            </div>
          </div>

          {/* Quick Nav Links (Real routes) */}
          <div className="md:col-span-3">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-white mb-3">
              Pages
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/collection"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  The Collection
                </a>
              </li>
              <li>
                <a
                  href="/mint"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  Mint Details & Perks
                </a>
              </li>
              <li>
                <a
                  href="/roadmap"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Community Links (X, Discord, Telegram placeholders) */}
          <div className="md:col-span-4">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-white mb-3">
              Community Links
            </h4>
            <div className="flex flex-col gap-2">
              {/* X Link */}
              <a
                href={siteConfig.socials.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-brand-lime text-zinc-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 fill-current text-brand-lime" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-xs font-bold">X: {siteConfig.socials.xHandle}</span>
                </div>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-brand-lime" />
              </a>

              {/* Discord Placeholder */}
              <a
                href={siteConfig.socials.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <span className="text-xs font-semibold">Discord Community</span>
                <span className="text-[9px] uppercase font-bold text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded">
                  Community Link
                </span>
              </a>

              {/* Telegram Placeholder */}
              <a
                href={siteConfig.socials.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <span className="text-xs font-semibold">Telegram Announcements</span>
                <span className="text-[9px] uppercase font-bold text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded">
                  Announcements
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-brand-lime">
              {siteConfig.domain}
            </span>
            <span>•</span>
            <span>The Ape Den © 2026. Hand-drawn Apes on Robinhood Chain.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-brand-lime transition-colors"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
