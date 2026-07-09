import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, MapPin } from 'lucide-react';
import SEO from './SEO';

import imgEnclave from '../assets/Kartikeswar_Nirmalya_Enclave.jpeg';
import imgAashray from '../assets/Nirmalya_Aashray.jpeg';
import imgAstoria from '../assets/Nirmalya_Astoria.jpeg';
import imgAvenue from '../assets/Nirmalya_Avenue.jpeg';
import imgRoyal from '../assets/Royal_Paradise.jpeg';
import imgComm from '../assets/project_commercial.png';
import imgResi from '../assets/project_residential.png';
import imgVilla from '../assets/project_villa.png';
import imgWater from '../assets/project_waterfront.png';
import imgPalace from '../assets/nirmalya_Palace1.jpeg';
import imgSignature from '../assets/Nirmalya_Signature.jpeg';

const galleryItems = [
  { id: 1, title: "Kartikeswar Nirmalya Enclave", category: "Residential", status: "Ongoing", location: "Jayadev Vihar", image: imgEnclave },
  { id: 2, title: "Nirmalya Astoria", category: "Residential", status: "Completed", location: "Patia, Bhubaneswar", image: imgAstoria },
  { id: 3, title: "Nirmalya Avenue", category: "Commercial", status: "Ongoing", location: "Tamando, Bhubaneswar", image: imgAvenue },
  { id: 4, title: "Royal Paradise Villas", category: "Residential", status: "Completed", location: "Hanspal, Bhubaneswar", image: imgRoyal },
  { id: 5, title: "Nirmalya Heritage", category: "Residential", status: "Completed", location: "Pahal, Bhubaneswar", image: imgAashray },
  { id: 6, title: "Nirmalya Palace", category: "Residential", status: "Ongoing", location: "Gadakana, Patia, Bhubaneswar", image: imgPalace },
  { id: 7, title: "Nirmalya Signature", category: "Residential", status: "Completed", location: "Jayadev Vihar Square, Bhubaneswar", image: imgSignature },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter Categories
  const categories = ['All', 'Residential', 'Commercial', 'Ongoing', 'Completed'];

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Residential' || filter === 'Commercial') return item.category === filter;
    if (filter === 'Ongoing' || filter === 'Completed') return item.status === filter;
    return true;
  });

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      <SEO 
        title="Gallery | Nirmalya Buildcon Pvt Ltd" 
        description="Take a visual tour of our residential enclave layouts, architectural landmarks, and ongoing structural engineering developments in Bhubaneswar."
        url="/gallery"
      />
      <section className="bg-obsidian min-h-screen pt-28 pb-20 relative overflow-hidden">
        {/* Background Lighting */}
      <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3 animate-fade-in-up">
            Visual Portfolios
          </span>
          <h1 className="font-primary font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Project <span className="text-gold-500">Photo Gallery</span>
          </h1>
          <p className="font-secondary text-slate-400 text-base max-w-xl mx-auto">
            Take a visual tour of our residential enclave layouts, architectural landmarks, and ongoing structural engineering developments.
          </p>
        </div>

        {/* Filters Tabs Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-primary font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${filter === cat
                ? 'bg-gold-500 text-slate-950 shadow-lg shadow-gold-500/20 font-bold'
                : 'border border-white/10 bg-slate-900/40 hover:border-gold-500 text-slate-300 hover:text-gold-500'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/60 aspect-[4/3] cursor-pointer shadow-md hover:border-gold-500/35 hover:shadow-2xl hover:shadow-black/60 transition-all duration-500"
              onClick={() => handleOpenLightbox(idx)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
              />

              {/* Overlay Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Meta Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gold-500 text-obsidian text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border text-white ${item.status === 'Completed' ? 'bg-emerald-500/85 border-emerald-500/10' : 'bg-amber-500/85 border-amber-500/10'
                    }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="font-primary text-lg font-bold text-white mb-1 group-hover:text-gold-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-secondary">
                  <MapPin size={13} className="text-gold-500" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Magnifying Float Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-gold-500 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                <Maximize2 size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-slate-900/20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-slate-400 font-secondary">No items found matching the selected filter.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:text-gold-500 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg z-50"
          >
            <X size={24} />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:text-gold-500 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg z-50"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-5xl w-full h-full max-h-[80vh] flex flex-col justify-center items-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5 animate-scale-in"
            />

            {/* Overlay Info Block */}
            <div className="mt-4 text-center max-w-xl">
              <h3 className="font-primary text-xl font-bold text-white mb-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="font-secondary text-xs text-gold-500 flex items-center justify-center gap-1.5 uppercase font-semibold tracking-wider">
                <Tag size={12} />
                <span>{filteredItems[lightboxIndex].category} Project ({filteredItems[lightboxIndex].status})</span>
                <span className="text-white/20">•</span>
                <MapPin size={12} className="text-gold-500" />
                <span className="text-slate-300 capitalize">{filteredItems[lightboxIndex].location}</span>
              </p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:text-gold-500 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg z-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
      </section>
    </>
  );
}
