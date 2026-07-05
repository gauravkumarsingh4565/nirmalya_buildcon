import React from 'react';
import { MapPinned, Home, Building2, Compass, FileText, TrendingUp, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: "plot-buying-selling",
    icon: MapPinned,
    title: "Plot Buying & Selling",
    description: "Explore verified plots in prime locations with clear titles and high growth potential."
  },
  {
    id: "resale-properties",
    icon: Home,
    title: "Resale Properties",
    description: "Get the best deals on ready-to-move resale homes with verified ownership and pricing."
  },
  {
    id: "flat-apartment-sales",
    icon: Building2,
    title: "Flat & Apartment Sales",
    description: "Modern apartments designed for comfort, lifestyle and long-term investment value."
  },
  {
    id: "site-visit-assistance",
    icon: Compass,
    title: "Site Visit Assistance",
    description: "Schedule guided site visits to explore properties with expert support and clarity."
  },
  {
    id: "legal-documentation",
    icon: FileText,
    title: "Legal & Documentation",
    description: "Complete assistance with paperwork, verification and smooth registration process."
  },
  {
    id: "investment-guidance",
    icon: TrendingUp,
    title: "Investment Guidance",
    description: "Smart property investment advice based on market trends and location growth."
  }
];

export default function Services() {
  const handleServiceClick = (serviceTitle) => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If contact section is not on this page, open the inquiry modal
      window.dispatchEvent(new CustomEvent('open-site-visit-modal', { 
        detail: { project: `Service Inquiry: ${serviceTitle}` } 
      }));
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-obsidian border-t border-white/5">
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-gold-500/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-gold-500/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">
            Our Services
          </span>
          <h2 className="font-primary font-bold text-4xl sm:text-5xl text-white mb-5 relative inline-block">
            Expert Solutions for Your Real Estate Journey
            <span className="block w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-slate-400 text-base max-w-xl mx-auto">
            Nirmalya Buildcon provides comprehensive real estate services in Bhubaneswar, ensuring transparency, verification, and end-to-end guidance.
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                onClick={() => handleServiceClick(svc.title)}
                className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center group relative overflow-hidden cursor-pointer hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/55 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Subtle gradient hover animation background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Gold/Orange styled Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 text-obsidian flex items-center justify-center mb-6 shadow-lg shadow-gold-500/10 group-hover:scale-110 group-hover:shadow-gold-500/25 transition-all duration-500">
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="font-primary text-xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300 mb-3">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="font-secondary text-sm text-slate-400 leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* CTA Link */}
                <div className="mt-auto inline-flex items-center gap-1.5 text-gold-500 font-primary text-xs font-bold uppercase tracking-wider hover:text-gold-light transition-all group-hover:text-gold-light">
                  <span>Inquire Now</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
