import React, { useState } from 'react';
import { Home, Building2, Paintbrush, Shield, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import serviceResidential from '../assets/service_residential.png';
import serviceCommercial from '../assets/service_commercial.png';
import serviceArchitecture from '../assets/service_architecture.png';
import serviceInterior from '../assets/service_interior.png';
import serviceGreen from '../assets/service_green.png';

const servicesData = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    description: "Building luxury villas, smart-apartments, and premium custom homes tailored to your lifestyle. We combine flawless engineering with high-end architecture.",
    image: serviceResidential,
    highlights: ["Custom Luxury Villas", "High-End Apartments", "RCC Structurally Certified", "Bespoke Architecture"],
    stats: "150+ Villas Delivered"
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Development",
    description: "Designing and developing state-of-the-art office spaces, corporate headquarters, retail malls, and high-traffic commercial landmarks.",
    image: serviceCommercial,
    highlights: ["Grade-A Tech Hubs", "Premium Corporate Offices", "Integrated Retail Plazas", "High-ROI Commercial Zoning"],
    stats: "1.2M+ Sq.Ft. Developed"
  },
  {
    id: "architecture",
    icon: Compass,
    title: "Architectural Planning",
    description: "Developing modern floor layouts, photorealistic 3D renderings, site modeling, and optimized space-utilization plans prior to civil works.",
    image: serviceArchitecture,
    highlights: ["Precision 2D/3D Drafting", "BIM Integration", "RERA Code Compliance", "Landscape Design"],
    stats: "100% Custom Floorplans"
  },
  {
    id: "interiors",
    icon: Paintbrush,
    title: "Premium Interior Design",
    description: "Creating luxurious bespoke interiors, automated smart-lighting design, modular Italian kitchens, and rich wooden/marble finish selections.",
    image: serviceInterior,
    highlights: ["Luxury Living Spaces", "Bespoke Millwork & Fitting", "Italian Kitchen Modules", "Smart Automation Sync"],
    stats: "50+ Bespoke Homes Styled"
  },
  {
    id: "green",
    icon: Shield,
    title: "Green Infrastructure",
    description: "Integrating solar roof systems, sustainable energy-efficient frames, smart rainwater harvesting, and LEED certified eco-friendly materials.",
    image: serviceGreen,
    highlights: ["LEED Compliant Materials", "Solar Power Grid Setup", "Smart Water Recycling", "Sustainable Building Insulation"],
    stats: "35% Energy Bill Savings"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-obsidian">
      {/* Background Glows */}
      <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">Our Expertise</span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            High-Level Real Estate <span className="text-gold-500">Services</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Nirmalya Buildcon offers a full spectrum of real estate development and premium civil engineering services, delivering unmatched craftsmanship.
          </p>
        </div>

        {/* Premium Horizontal Hover Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[550px] w-full mt-12">
          {servicesData.map((svc) => {
            const IconComp = svc.icon;
            return (
              <div
                key={svc.id}
                onClick={() => {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group flex-1 lg:hover:flex-[2.8] h-[300px] lg:h-full border border-white/5 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-all duration-700"></div>
                </div>

                {/* Dark Mask Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20 group-hover:from-slate-950/95 transition-all duration-700 z-10"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-20">
                  
                  {/* Top Block: Icon & Stats badge */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/80 backdrop-blur border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-slate-950 group-hover:border-transparent transition-all duration-500 shadow-lg">
                      <IconComp size={22} className="group-hover:scale-110 transition-transform" />
                    </div>
                    
                    {/* Stats badge */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gold-500 text-slate-950 text-[10px] font-bold px-3 py-1.5 rounded-md font-primary uppercase tracking-widest shadow-md">
                      {svc.stats}
                    </div>
                  </div>

                  {/* Bottom Block: Info stack */}
                  <div className="text-left">
                    <h3 className="font-primary text-xl sm:text-2xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300 leading-tight">
                      {svc.title}
                    </h3>
                    
                    {/* Desktop-only expanded description */}
                    <p className="hidden lg:block font-secondary text-sm text-slate-300 mt-3 leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                      {svc.description}
                    </p>

                    {/* Mobile/Tablet Description (always shows first part) */}
                    <p className="block lg:hidden font-secondary text-xs text-slate-300 mt-2 leading-relaxed opacity-90">
                      {svc.description.slice(0, 100)}...
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-4 flex flex-wrap gap-2 max-h-0 opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                      {svc.highlights.map((hl, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-secondary font-semibold bg-white/5 border border-white/10 text-slate-200 px-2.5 py-1 rounded-md"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>

                    {/* Arrow CTA */}
                    <div className="mt-6 flex items-center gap-2 text-gold-500 font-primary font-bold text-xs uppercase tracking-wider">
                      <span>Inquire Now</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
