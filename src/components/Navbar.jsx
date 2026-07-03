import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logoimage.jpeg';

export default function Navbar({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/25'
          : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
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
          <img src={logoImage} alt="Nirmalya Buildcon Logo" className="h-12 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => {
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
                className={`font-primary font-medium text-[15px] transition-all duration-300 relative group py-1 ${
                  isActive ? 'text-gold-500' : 'text-white/80 hover:text-gold-500'
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
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
            className="bg-gold-500 text-obsidian hover:text-obsidian font-primary font-semibold text-sm px-5 py-2.5 rounded shadow-lg shadow-gold-500/10 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold-500/25 transition-all duration-300"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none cursor-pointer transition-colors duration-300 text-white"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-white/5 py-6 px-6 flex flex-col items-center gap-5 z-49 md:hidden shadow-2xl animate-fade-in text-white">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => {
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
                className={`font-primary font-medium text-lg transition-all duration-200 ${
                  isActive ? 'text-gold-500 font-semibold' : 'text-slate-300 hover:text-gold-500'
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
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}
