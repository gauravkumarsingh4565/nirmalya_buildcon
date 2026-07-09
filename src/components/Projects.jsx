import React, { useState, useEffect } from 'react';
import { MapPin, ArrowUpRight, ShieldCheck, AlertCircle, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import bannerApartment from '../assets/banner_apartment.png';
import bannerCommercial from '../assets/banner_commercial.png';
import bannerVilla from '../assets/banner_villa.png';
import bannerWaterfront from '../assets/banner_waterfront.png';
import projectVilla from '../assets/project_villa.png';
import projectResidential from '../assets/project_residential.png';
import heroBuilding from '../assets/hero_building.png';
import SEO from './SEO';

// Newly added project images
import imgKartikeswarEnclave from '../assets/Kartikeswar_Nirmalya_Enclave.jpeg';
import imgAashray from '../assets/Nirmalya_Aashray.jpeg';
import imgAstoria from '../assets/Nirmalya_Astoria.jpeg';
import imgAvenue from '../assets/Nirmalya_Avenue.jpeg';
import imgRoyalParadise from '../assets/Royal_Paradise.jpeg';
import imgPalace from '../assets/nirmalya_Palace1.jpeg';
import imgSignature from '../assets/Nirmalya_Signature.jpeg';

const projectsData = [
  {
    id: "kartikeswar-enclave",
    image: imgKartikeswarEnclave,
    title: "Kartikeswar Nirmalya Enclave",
    category: "Apartment",
    location: "Jharpada Main Road, Bhubaneswar",
    status: "Ongoing",
    progress: 85,
    stats: "3 BHK Premium Flats",
    price: "₹95 Lakh",
    description: "Situated directly on Jharpada Main Road, Kartikeswar Nirmalya Enclave offers high-end 3 BHK flats under active construction, featuring earthquake-resistant frameworks and modern floor planning.",
    amenities: ["Rooftop Sky Lounge", "Modular Kitchen Layouts", "24/7 Power Backup", "High-speed Passenger Lift", "Solar Common Lighting"]
  },
  {
    id: "nirmalya-avenue",
    image: imgAvenue,
    title: "Nirmalya Avenue",
    category: "Apartment",
    location: "Patia Station Road, Bhubaneswar",
    status: "Ongoing",
    progress: 15,
    badge: "Pre-Booking Open",
    stats: "3 BHK Luxury Flats",
    price: "₹1.2 Cr",
    description: "Nirmalya Avenue is a premium high-rise development on Patia Station Road. Features advanced blueprint architecture and modern amenity portals. Pre-bookings are now officially open.",
    amenities: ["Gym & Yoga Studio", "Smart Security Portal", "Premium Sanitary Ware", "Visitor Parking Zone", "Internal Intercom System"]
  },
  {
    id: "db-astoria",
    image: imgAstoria,
    title: "Nirmalya's DB Astoria",
    category: "Villa / Triplex",
    location: "GGP Colony, Rasulgarh, Bhubaneswar",
    status: "Sold",
    stats: "5 BHK Luxury Triplex Project",
    price: "₹2.20 Cr",
    description: "Nirmalya's DB Astoria is a premium residential triplex project located in GGP Colony, Rasulgarh, featuring state-of-the-art RCC construction, spacious living layouts, and luxury fitting profiles.",
    amenities: ["Private Terrace Deck", "24/7 Security Patrol", "Premium Bathroom Fittings", "Heavy-Duty Power Backup", "Dedicated Dual Car Port"]
  },
  {
    id: "royal-paradise",
    image: imgRoyalParadise,
    title: "Nirmalya's Royal Paradise",
    category: "Apartment",
    location: "Near ITER College, Jagamara, Bhubaneswar",
    status: "Sold",
    stats: "Premium 4 BHK Luxury Flats",
    price: "₹1.55 Cr",
    description: "Nirmalya's Royal Paradise offers super-luxury 4 BHK apartments located near ITER College. Engineered with high durability standards, Vastu principles, and elegant imported modular spaces.",
    amenities: ["Vastu-Friendly Layouts", "Fully Equipped Gym", "Multi-Tier Smart Security", "Covered Stilt Parking", "Water Softener System"]
  },
  {
    id: "nirmalya-aashray",
    image: imgAashray,
    title: "Nirmalya Heritage",
    category: "Apartment",
    location: "Near Ekamra College, Bhubaneswar",
    status: "Upcoming",
    stats: "3 BHK Elegant Flats",
    price: "Upcoming Project",
    description: "An upcoming premium residential development located near Ekamra College, Bhubaneswar, focusing on smart space optimization, modern features, and strong community layouts.",
    amenities: ["Children's Play Zone", "Modern Passenger Lift", "Spacious Community Hall", "Fire Hydrant Systems", "Full Backup Generator"]
  },
  {
    id: "nirmalya-palace",
    image: imgPalace,
    title: "Nirmalya Palace",
    category: "Apartment",
    location: "Gadakana, Patia, Bhubaneswar",
    status: "Completed",
    stats: "Premium Apartment Project",
    price: "On Request",
    description: "Nirmalya Palace is a premium apartment development located in Gadakana, Patia, Bhubaneswar. Designed for modern living with quality construction and thoughtfully planned spaces.",
    amenities: ["Modern Passenger Lift", "24/7 Power Backup", "Covered Parking", "Security System", "Common Area Lighting"]
  },
  {
    id: "nirmalya-signature",
    image: imgSignature,
    title: "Nirmalya Signature",
    category: "Apartment",
    location: "Jayadev Vihar Square, Bhubaneswar",
    status: "Completed",
    stats: "Premium Residential Apartments",
    price: "On Request",
    description: "Nirmalya Signature is a landmark residential project at Jayadev Vihar Square, Bhubaneswar — a completed development that set the standard for premium quality construction and elegant living spaces.",
    amenities: ["Prime Location", "High-Quality Finishes", "24/7 Security", "Power Backup", "Covered Parking"]
  },
];

export default function Projects({ externalFilter, isPage = false }) {
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const categories = ['All', 'Ongoing', 'Completed'];

  // Sync internal tab filter with external search filter changes
  useEffect(() => {
    if (externalFilter?.category) {
      setFilter(externalFilter.category);
    }
  }, [externalFilter]);

  const filteredProjects = projectsData.filter(proj => {
    // Status-based filter:
    // Ongoing tab → status is "Ongoing" or "Upcoming"
    // Completed tab → status is "Completed" or "Sold"
    const isOngoing = proj.status === 'Ongoing' || proj.status === 'Upcoming';
    const isCompleted = proj.status === 'Completed' || proj.status === 'Sold';
    let matchesFilter = true;
    if (filter === 'Ongoing') matchesFilter = isOngoing;
    if (filter === 'Completed') matchesFilter = isCompleted;

    // 2. Location check (for external search)
    const matchesLocation = !externalFilter || externalFilter.location === 'All' ||
      proj.location.toLowerCase().includes(externalFilter.location.toLowerCase());

    // 3. Status check (for external search)
    const matchesStatus = !externalFilter || externalFilter.status === 'All' ||
      proj.status === externalFilter.status;

    return matchesFilter && matchesLocation && matchesStatus;
  });

  // Reset active index to 0 when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter, externalFilter]);

  // Autoplay functionality (only for Carousel/Home view)
  useEffect(() => {
    if (isPage || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, filteredProjects.length, isPage]);

  // Handle scrolling to specific project ID when navigated via hash URL
  useEffect(() => {
    if (isPage && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetProject = projectsData.find(p => p.id === targetId);
      if (targetProject) {
        setFilter('All');
      }
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Gold pulse highlight animation
          element.classList.add('ring-2', 'ring-gold-500/50', 'scale-[1.01]', 'transition-all', 'duration-500');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-gold-500/50', 'scale-[1.01]');
          }, 2500);
        }
      }, 300);
    }
  }, [isPage]);

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Touch Swipe Gesture Handlers for Mobile Interaction
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
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
    <>
      {isPage && (
        <SEO 
          title="Our Projects | Nirmalya Buildcon Pvt Ltd" 
          description="Explore the ongoing and completed real estate projects by Nirmalya Buildcon in Bhubaneswar. We deliver quality apartments, premium villas, and commercial spaces."
          url="/projects"
        />
      )}
      <section id="projects" className="py-26 relative overflow-hidden bg-obsidian">
        {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">Our Projects</span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            {isPage
              ? (filter === 'All' ? 'All Projects' : filter === 'Ongoing' ? 'Ongoing Developments' : 'Completed Projects')
              : 'Featured Projects'}
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>

          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            {filter === 'All'
              ? 'Explore our complete portfolio of ongoing developments and successfully delivered projects.'
              : filter === 'Ongoing'
                ? 'Projects currently under active construction — live milestones, real-time progress.'
                : 'Successfully delivered projects that reflect our commitment to quality and excellence.'}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-primary font-semibold text-sm transition-all duration-300 cursor-pointer ${filter === cat
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
                  id={proj.id}
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
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 items-center">
                      <span className="bg-slate-950/80 backdrop-blur-md text-gold-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md border border-white/5">
                        {proj.category}
                      </span>
                      <span className={`text-[10px] font-primary font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-sm text-white ${proj.status === 'Sold'
                        ? 'bg-rose-600/85 border border-rose-500/20'
                        : proj.status === 'Completed'
                          ? 'bg-emerald-500/80 border border-emerald-500/20'
                          : proj.status === 'Ongoing'
                            ? 'bg-amber-500/80 border border-amber-500/20'
                            : 'bg-indigo-500/80 border border-indigo-500/20'
                        }`}>
                        {proj.status}
                      </span>
                      {proj.badge && (
                        <span className="bg-gold-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-md animate-pulse">
                          {proj.badge}
                        </span>
                      )}
                    </div>

                    {/* RERA Badge removed */}
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

                      {/* Construction Progress Bar for Ongoing Projects */}
                      {proj.status === 'Ongoing' && proj.progress && (
                        <div className="mb-5 bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 font-primary text-[11px] font-bold uppercase tracking-wider">Construction Progress</span>
                            <span className="text-gold-500 font-primary text-xs font-bold">{proj.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-white/5">
                            <div
                              className="bg-gradient-to-r from-gold-500 to-gold-light h-full rounded-full transition-all duration-1000"
                              style={{ width: `${proj.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

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
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative max-w-5xl mx-auto aspect-[21/9] min-h-[480px] md:min-h-[550px] lg:min-h-[600px] overflow-visible">
                {/* Slides */}
                {filteredProjects.map((proj, idx) => {
                  const offset = getOffset(idx);
                  const isActive = offset === 0;

                  let transformClass = "translate-x-0 scale-75 opacity-0 z-0 pointer-events-none";
                  if (offset === 0) {
                    transformClass = "translate-x-0 scale-100 opacity-100 z-20 pointer-events-auto shadow-2xl shadow-black/70 cursor-pointer";
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
                        } else {
                          // Redirect to projects page with hash when clicking an active slide
                          window.history.pushState({}, '', `/projects#${proj.id}`);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }
                      }}
                      className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] bg-slate-950 ${transformClass}`}
                    >
                      {/* Image Frame */}
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'
                          }`}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent max-md:bg-gradient-to-t max-md:from-slate-950/95 max-md:via-slate-950/75 max-md:to-transparent z-10"></div>

                      {/* Content Overlay - only interactive/visible on active slide */}
                      <div className={`absolute inset-0 flex flex-col justify-end md:justify-center p-8 sm:p-12 md:p-16 lg:p-24 max-w-4xl z-20 text-left transition-all duration-500 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}>
                        <span className="text-gold-500 font-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-3 block">
                          {proj.category}
                        </span>

                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-primary font-extrabold text-white mb-4 leading-tight">
                          {proj.title}
                        </h3>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          {/* RERA badge removed */}
                          <span className={`inline-flex items-center font-primary font-bold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm text-white ${proj.status === 'Sold'
                            ? 'bg-rose-600/85 border border-rose-500/20'
                            : proj.status === 'Completed'
                              ? 'bg-emerald-500/80 border border-emerald-500/20'
                              : proj.status === 'Ongoing'
                                ? 'bg-amber-500/80 border border-amber-500/20'
                                : 'bg-indigo-500/80 border border-indigo-500/20'
                            }`}>
                            {proj.status}
                          </span>
                          {proj.badge && (
                            <span className="inline-flex items-center bg-gold-500 text-slate-950 font-primary font-extrabold text-[9px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg animate-pulse">
                              {proj.badge}
                            </span>
                          )}
                        </div>

                        <p className="font-secondary text-slate-300 text-sm sm:text-base md:text-lg mb-6 leading-relaxed max-w-xl">
                          {proj.stats}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-secondary mb-8">
                          <MapPin size={16} className="text-gold-500" />
                          {proj.location}
                        </div>

                        {/* Construction Progress Bar for Ongoing Projects */}
                        {proj.status === 'Ongoing' && proj.progress && (
                          <div className="mb-6 max-w-sm bg-slate-950/40 p-4 rounded-xl border border-white/5 text-left">
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-slate-400 font-primary text-[10px] font-bold uppercase tracking-wider">Construction Progress</span>
                              <span className="text-gold-500 font-primary text-xs font-bold">{proj.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-gold-500 to-gold-light h-full rounded-full"
                                style={{ width: `${proj.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

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
                            href="/projects"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.history.pushState({}, '', `/projects#${proj.id}`);
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-primary font-bold text-xs uppercase tracking-wider transition-all duration-300"
                          >
                            View Details
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
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                        ? 'w-8 bg-gold-500 shadow-md shadow-gold-500/20'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Explore All Developments CTA for Home View */}
              <div className="mt-14 text-center">
                <button
                  onClick={() => {
                    window.history.pushState({}, '', '/projects');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="inline-flex items-center gap-2 border border-gold-500/85 text-gold-500 hover:bg-gold-500 hover:text-slate-950 px-8 py-3.5 rounded-xl font-primary font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold-500/10"
                >
                  Explore All Projects
                  <ArrowUpRight size={15} />
                </button>
              </div>
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
    </>
  );
}
