import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Mint', path: '/mint' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b-2 border-zinc-800 shadow-lg py-2.5'
          : 'bg-black/80 backdrop-blur-sm border-b border-zinc-800/60 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand: Using official logo image */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-lime rounded-lg"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 border-brand-lime bg-black p-0.5 shadow-comic-lime-sm transition-transform duration-200 group-hover:scale-105">
              <img
                src={siteConfig.assets.logo}
                alt={`${siteConfig.brandName} official logo`}
                className="w-full h-full object-contain"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base sm:text-lg tracking-tight text-white group-hover:text-brand-lime transition-colors">
                THE APE DEN
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-brand-lime leading-none">
                Robinhood Chain
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Separate Pages, Highlight Active Link) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-md transition-all duration-150 border ${
                    isActive
                      ? 'bg-brand-lime text-black border-black shadow-comic-lime-sm font-extrabold'
                      : 'text-zinc-300 border-transparent hover:text-brand-lime hover:border-zinc-800 hover:bg-zinc-900/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Follow on X & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href={siteConfig.socials.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-brand-lime text-black font-display font-extrabold text-xs px-3.5 py-2 rounded-md border-2 border-black shadow-comic-white hover:bg-white hover:shadow-comic-lime active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Follow on X</span>
              <ArrowUpRight className="w-3 h-3 hidden sm:inline" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-300 hover:text-brand-lime bg-zinc-900 border-2 border-zinc-700 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-zinc-950 border-2 border-brand-lime rounded-xl p-4 shadow-comic-lime animate-fadeIn">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`text-sm font-bold px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-lime text-black font-extrabold'
                        : 'text-zinc-200 hover:text-brand-lime hover:bg-zinc-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-[10px] uppercase font-mono">Active</span>}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
                <a
                  href={siteConfig.socials.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-lime text-black font-display font-extrabold text-xs py-2.5 rounded-md border-2 border-black"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Follow @ApeonInk on X</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
