import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logoImage from '../assets/logoimage.png';

export default function Navbar({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTicker, setActiveTicker] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tickerItems = [
    {
      id: 'tagline',
      content: (
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse shadow-[0_0_8px_#c5a85c]"></span>
          <span className="font-medium text-slate-300">Bhubaneswar's Trusted Real Estate Brand</span>
        </div>
      )
    },
    {
      id: 'phone',
      content: (
        <a href="tel:+918917620801" className="flex items-center gap-2 text-slate-200 hover:text-gold-500 transition-colors duration-300">
          <Phone size={12} className="text-gold-500" />
          <span className="font-semibold">+91 8917620801</span>
        </a>
      )
    },
    {
      id: 'email',
      content: (
        <a href="mailto:nirmalyabuildcon@gmail.com" className="flex items-center gap-2 text-slate-200 hover:text-gold-500 transition-colors duration-300">
          <Mail size={12} className="text-gold-500" />
          <span className="font-semibold">nirmalyabuildcon@gmail.com</span>
        </a>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTicker((prev) => (prev + 1) % tickerItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/25'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      {/* Top Highlight Contact Bar */}
      <div
        className={`border-b border-white/[0.06] transition-all duration-500 ease-in-out overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 backdrop-blur-md ${scrolled ? 'h-8 opacity-100' : 'h-10 opacity-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full text-[11px] sm:text-xs text-slate-400 font-secondary">
          {/* Desktop & Tablet Layout (>= 768px) */}
          <div className="hidden md:flex w-full items-center justify-between h-full">
            {/* Left: Tagline with subtle glow indicator */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse shadow-[0_0_8px_#c5a85c]"></span>
              <span className="font-medium tracking-wide text-slate-350">
                Bhubaneswar's Trusted Real Estate Brand
              </span>
            </div>

            {/* Right: Contact & Hours with vertical dividers */}
            <div className="flex items-center gap-5 text-slate-350">
              <a
                href="tel:+918917620801"
                className="flex items-center gap-2 hover:text-gold-500 transition-all duration-300 group"
              >
                <Phone size={12.5} className="text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">+91 8917620801</span>
              </a>

              <span className="w-px h-3 bg-white/10"></span>

              <a
                href="mailto:nirmalyabuildcon@gmail.com"
                className="flex items-center gap-2 hover:text-gold-500 transition-all duration-300 group"
              >
                <Mail size={12.5} className="text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">nirmalyabuildcon@gmail.com</span>
              </a>

              <span className="w-px h-3 bg-white/10 hidden lg:inline"></span>
            </div>
          </div>

          {/* Mobile Ticker Layout (< 768px) */}
          <div className="flex md:hidden relative w-full h-full items-center justify-center overflow-hidden">
            {tickerItems.map((item, idx) => {
              const isActive = idx === activeTicker;
              const isPrev = idx === (activeTicker === 0 ? tickerItems.length - 1 : activeTicker - 1);

              let transformClass = 'translate-y-3 opacity-0 pointer-events-none scale-95';
              if (isActive) {
                transformClass = 'translate-y-0 opacity-100 pointer-events-auto scale-100';
              } else if (isPrev) {
                transformClass = '-translate-y-3 opacity-0 pointer-events-none scale-95';
              }

              return (
                <div
                  key={item.id}
                  className={`absolute flex items-center justify-center transition-all duration-500 ease-in-out ${transformClass}`}
                >
                  {item.content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-4' : 'py-5'
        }`}>
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="flex items-center group"
        >
          <img src={logoImage} alt="Nirmalya Buildcon Logo" className="h-10 md:h-15 w-auto max-w-[200px] md:max-w-[280px] object-contain bg-white px-3 py-1.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', /* 'Services', */ 'Projects', 'Gallery', /* 'Blog', */ 'Contact'].map((item) => {
            const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = currentPath === itemPath || (item === 'Home' && currentPath === '/home') || (item === 'Home' && currentPath === '/');
            return (
              <a
                key={item}
                href={itemPath}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', itemPath);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className={`font-primary font-medium text-[15px] transition-all duration-300 relative group py-1 ${isActive ? 'text-gold-500' : 'text-white/80 hover:text-gold-500'
                  }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </a>
            );
          })}
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="inline-flex items-center justify-center bg-gold-500 text-obsidian hover:text-obsidian font-primary font-semibold text-sm px-5 py-2.5 rounded shadow-lg shadow-gold-500/10 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold-500/25 transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none cursor-pointer transition-colors duration-300 text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-white/5 py-6 px-6 flex flex-col items-center gap-5 z-49 md:hidden shadow-2xl animate-slide-down text-white">
          {['Home', 'About', /* 'Services', */ 'Projects', 'Gallery', /* 'Blog', */ 'Contact'].map((item) => {
            const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = currentPath === itemPath || (item === 'Home' && currentPath === '/home') || (item === 'Home' && currentPath === '/');
            return (
              <a
                key={item}
                href={itemPath}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', itemPath);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  setIsOpen(false);
                }}
                className={`font-primary font-medium text-lg transition-all duration-200 ${isActive ? 'text-gold-500 font-semibold' : 'text-slate-300 hover:text-gold-500'
                  }`}
              >
                {item}
              </a>
            );
          })}
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new PopStateEvent('popstate'));
              setIsOpen(false);
            }}
            className="w-full text-center bg-gold-500 text-obsidian font-primary font-semibold py-3 rounded shadow-lg hover:bg-gold-light transition-all duration-200"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
}
