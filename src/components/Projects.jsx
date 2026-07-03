import React, { useState, useEffect } from 'react';
import { MapPin, ArrowUpRight, ShieldCheck, AlertCircle, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import bannerApartment from '../assets/banner_apartment.png';
import bannerCommercial from '../assets/banner_commercial.png';
import bannerVilla from '../assets/banner_villa.png';
import bannerWaterfront from '../assets/banner_waterfront.png';

const projectsData = [
  {
    image: bannerApartment,
    title: "Nirmalya Heights",
    category: "Residential",
    location: "Patia, Bhubaneswar, Odisha",
    status: "Completed",
    stats: "3 & 4 BHK Luxury Apartments",
    rera: "RERA ID: P52100029384",
    price: "₹1.2 Cr onwards",
    description: "Located in Patia, Bhubaneswar, Nirmalya Heights is a landmark premium development offering wide open spaces, signature high-end finishes, and state-of-the-art structural foundations.",
    amenities: ["24/7 Power Backup", "Infinity Edge Pool", "Modern Clubhouse", "Advanced Multi-Tier Security", "Solar Powered Common Areas"]
  },
  {
    image: bannerCommercial,
    title: "Nirmalya Tech Hub",
    category: "Commercial",
    location: "Jayadev Vihar, Bhubaneswar, Odisha",
    status: "Ongoing",
    stats: "A-Grade Corporate Office Spaces",
    rera: "RERA ID: P12800048293",
    price: "Leasing Now",
    description: "A grade-A corporate landmark located near Jayadev Vihar, Bhubaneswar, providing high-efficiency flexible floor plates, premium glass-facade exterior, and high-speed elevator systems.",
    amenities: ["Ample Covered Parking", "LEED Certified Energy Grid", "High-Speed Fire Elevators", "Conference Center", "Fiber Optic Connectivity"]
  },
  {
    image: bannerVilla,
    title: "Golden Crest Estates",
    category: "Residential",
    location: "Khandagiri, Bhubaneswar, Odisha",
    status: "Completed",
    stats: "Ultra-luxury Smart Villas",
    rera: "RERA ID: P51800039485",
    price: "₹3.5 Cr onwards",
    description: "Super-luxury smart villas in Khandagiri, Bhubaneswar, offering independent private lawns, automated security control systems, modular Italian interiors, and rich marble flooring options.",
    amenities: ["Private Swimming Pool", "Smart Home Automation", "Private Landscaped Lawn", "Imported Marble Flooring", "Exclusive EV Charging Port"]
  },
  {
    image: bannerWaterfront,
    title: "Waterfront Boulevard",
    category: "Commercial",
    location: "Cuttack Road, Bhubaneswar, Odisha",
    status: "Upcoming",
    stats: "Premium Retail & Shopping Hub",
    rera: "RERA ID: P13200050293",
    price: "Booking Open",
    description: "An upcoming high-traffic premium retail plaza on Cuttack Road, Bhubaneswar, featuring ultra-modern double-height storefront spaces, food court zones, and escalator accessibility.",
    amenities: ["High Visibility Storefronts", "Centralized HVAC System", "Dedicated Food Court Zone", "Premium Guest Lobby", "24/7 CCTV Monitoring"]
  }
];

export default function Projects({ externalFilter, isPage = false }) {
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const categories = ['All', 'Residential', 'Commercial'];

  // Sync internal tab filter with external search filter changes
  useEffect(() => {
    if (externalFilter?.category) {
      setFilter(externalFilter.category);
    }
  }, [externalFilter]);

  const filteredProjects = projectsData.filter(proj => {
    // 1. Category check
    const matchesCategory = filter === 'All' || proj.category === filter;
    
    // 2. Location check
    const matchesLocation = !externalFilter || externalFilter.location === 'All' || 
      proj.location.toLowerCase().includes(externalFilter.location.toLowerCase());
      
    // 3. Status check
    const matchesStatus = !externalFilter || externalFilter.status === 'All' || 
      proj.status === externalFilter.status;

    return matchesCategory && matchesLocation && matchesStatus;
  });

  // Reset active index to 0 when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter, externalFilter]);

  // Autoplay functionality (only for Carousel/Home view)
  useEffect(() => {
    if (isPage || isPaused || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex, filteredProjects.length, isPage]);

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleBookVisit = (projectTitle) => {
    window.dispatchEvent(new CustomEvent('open-site-visit-modal', { detail: { project: projectTitle } }));
  };

  const getOffset = (idx) => {
    const len = filteredProjects.length;
    let diff = idx - activeIndex;
    while (diff < -len / 2) diff += len;
    while (diff > len / 2) diff -= len;
    return diff;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-obsidian">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">Our Projects</span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            {isPage ? "All Developments" : "Featured Projects"}
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Explore our signature developments. Glide through our premium luxury villas, upscale apartments, and grade-A commercial complexes.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-primary font-semibold text-sm transition-all duration-300 cursor-pointer ${
                filter === cat 
                  ? 'bg-gold-500 text-slate-950 shadow-lg shadow-gold-500/25 font-bold' 
                  : 'border border-white/10 bg-slate-900/40 hover:border-gold-500 text-slate-300 hover:text-gold-500 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Display Type */}
        {filteredProjects.length > 0 ? (
          isPage ? (
            /* Standalone Route view: List all projects separately in a beautiful layout */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredProjects.map((proj, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/30 rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col group hover:border-gold-500/20 transition-all duration-500 shadow-2xl hover:shadow-black/50"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    
                    {/* Floating Badges */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      <span className="bg-slate-950/80 backdrop-blur-md text-gold-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md border border-white/5">
                        {proj.category}
                      </span>
                      <span className={`text-[10px] font-primary font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-sm text-white ${
                        proj.status === 'Completed' 
                          ? 'bg-emerald-500/80 border border-emerald-500/20' 
                          : proj.status === 'Ongoing' 
                            ? 'bg-amber-500/80 border border-amber-500/20' 
                            : 'bg-indigo-500/80 border border-indigo-500/20'
                      }`}>
                        {proj.status}
                      </span>
                    </div>

                    {/* RERA Badge */}
                    <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/5 text-white/90 font-mono text-[9px] tracking-wide px-3 py-1 rounded-md">
                      {proj.rera}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 flex-grow flex flex-col justify-between text-left">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-primary text-2xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                          {proj.title}
                        </h3>
                        <span className="font-primary font-extrabold text-gold-500 text-base whitespace-nowrap">
                          {proj.price}
                        </span>
                      </div>

                      <span className="text-slate-400 font-primary text-xs font-semibold uppercase tracking-wider block mb-4">
                        {proj.stats}
                      </span>

                      {/* Location details */}
                      <div className="flex items-center gap-2 text-slate-300 text-sm font-secondary mb-4">
                        <MapPin size={16} className="text-gold-500 flex-shrink-0" />
                        {proj.location}
                      </div>

                      {/* Description */}
                      <p className="font-secondary text-slate-300 text-sm leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      {/* Amenities Block */}
                      <div className="mb-8">
                        <h4 className="font-primary text-white text-xs font-bold uppercase tracking-wider mb-3">Project Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {proj.amenities.map((item, i) => (
                            <span 
                              key={i} 
                              className="text-[10px] font-secondary font-semibold bg-white/5 border border-white/10 text-slate-200 px-2.5 py-1 rounded-md"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                      <button
                        onClick={() => handleBookVisit(proj.title)}
                        className="flex-grow inline-flex items-center justify-center gap-2 bg-gold-500 text-slate-950 hover:bg-gold-light py-3 rounded-xl font-primary font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border-none"
                      >
                        <Calendar size={14} />
                        Book Site Visit
                      </button>
                      <a
                        href="/contact"
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/contact');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }}
                        className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 px-5 py-3 rounded-xl font-primary font-bold text-xs uppercase tracking-wider transition-all duration-300"
                      >
                        Inquire
                        <ArrowUpRight size={14} className="text-gold-500" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Carousel View for Landing Page: Stage-peeking slider */
            <div 
              className="relative w-full py-6 overflow-visible group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative max-w-5xl mx-auto aspect-[21/9] min-h-[480px] md:min-h-[550px] lg:min-h-[600px] overflow-visible">
                {/* Slides */}
                {filteredProjects.map((proj, idx) => {
                  const offset = getOffset(idx);
                  const isActive = offset === 0;
                  
                  let transformClass = "translate-x-0 scale-75 opacity-0 z-0 pointer-events-none";
                  if (offset === 0) {
                    transformClass = "translate-x-0 scale-100 opacity-100 z-20 pointer-events-auto shadow-2xl shadow-black/70";
                  } else if (offset === 1 || (filteredProjects.length === 2 && offset === -1 && activeIndex === 0)) {
                    transformClass = "translate-x-[70%] lg:translate-x-[75%] scale-[0.82] opacity-35 hover:opacity-60 z-10 pointer-events-auto cursor-pointer grayscale blur-[1px] hover:blur-none";
                  } else if (offset === -1 || (filteredProjects.length === 2 && offset === 1 && activeIndex === 1)) {
                    transformClass = "-translate-x-[70%] lg:-translate-x-[75%] scale-[0.82] opacity-35 hover:opacity-60 z-10 pointer-events-auto cursor-pointer grayscale blur-[1px] hover:blur-none";
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (!isActive) {
                          setActiveIndex(idx);
                        }
                      }}
                      className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] bg-slate-950 ${transformClass}`}
                    >
                      {/* Image Frame */}
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                          isActive ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent max-md:bg-gradient-to-t max-md:from-slate-950/95 max-md:via-slate-950/75 max-md:to-transparent z-10"></div>

                      {/* Content Overlay - only interactive/visible on active slide */}
                      <div className={`absolute inset-0 flex flex-col justify-end md:justify-center p-8 sm:p-12 md:p-16 lg:p-24 max-w-4xl z-20 text-left transition-all duration-500 ${
                        isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`}>
                        <span className="text-gold-500 font-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-3 block">
                          {proj.category}
                        </span>

                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-primary font-extrabold text-white mb-4 leading-tight">
                          {proj.title}
                        </h3>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white/90 font-mono text-[10px] tracking-wide px-3.5 py-1.5 rounded-full shadow-sm">
                            <ShieldCheck size={12} className="text-gold-500" />
                            {proj.rera}
                          </span>
                          <span className={`inline-flex items-center font-primary font-bold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm text-white ${
                            proj.status === 'Completed' 
                              ? 'bg-emerald-500/80 border border-emerald-500/20' 
                              : proj.status === 'Ongoing' 
                                ? 'bg-amber-500/80 border border-amber-500/20' 
                                : 'bg-indigo-500/80 border border-indigo-500/20'
                          }`}>
                            {proj.status}
                          </span>
                        </div>

                        <p className="font-secondary text-slate-300 text-sm sm:text-base md:text-lg mb-6 leading-relaxed max-w-xl">
                          {proj.stats}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-secondary mb-8">
                          <MapPin size={16} className="text-gold-500" />
                          {proj.location}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBookVisit(proj.title);
                            }}
                            className="inline-flex items-center gap-2 bg-gold-500 text-slate-950 hover:bg-gold-light px-6 py-3 rounded-xl font-primary font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 transition-all duration-300 cursor-pointer"
                          >
                            <Calendar size={14} />
                            Book Site Visit
                          </button>
                          <a
                            href="/contact"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.history.pushState({}, '', '/contact');
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-primary font-bold text-xs uppercase tracking-wider transition-all duration-300"
                          >
                            Inquire Details
                            <ArrowUpRight size={14} className="text-gold-500" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Controls */}
              {filteredProjects.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-35 w-12 h-12 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-gold-500 hover:text-slate-950 hover:border-transparent transition-all duration-300 cursor-pointer shadow-xl opacity-0 group-hover:opacity-100"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {filteredProjects.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-35 w-12 h-12 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-gold-500 hover:text-slate-950 hover:border-transparent transition-all duration-300 cursor-pointer shadow-xl opacity-0 group-hover:opacity-100"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={24} />
                </button>
              )}

              {filteredProjects.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-35 flex gap-2.5">
                  {filteredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeIndex
                          ? 'w-8 bg-gold-500 shadow-md shadow-gold-500/20'
                          : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        ) : (
          /* Empty Search State */
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed border-white/10 rounded-2xl bg-slate-900/35 backdrop-blur-sm shadow-xl max-w-lg mx-auto animate-fade-in">
            <AlertCircle size={48} className="text-gold-500 mb-4" />
            <h4 className="font-primary text-lg font-bold text-white mb-2">No Matching Properties</h4>
            <p className="font-secondary text-sm text-slate-400">
              We couldn't find any listings matching your search options. Try broadening your category, location, or project status selections.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
