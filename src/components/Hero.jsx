import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

export default function Hero({ onSearch }) {


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Background Video (Slow-motion Drone Loop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/hero_video.mp4?v=2"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        Your browser does not support the video tag.
      </video>

      {/* Lightened Dark Overlay Mask (Fades into the light gray obsidian variable) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/35 bg-gradient-to-t from-obsidian via-transparent to-black/55 z-1"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center flex flex-col items-center">
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/35 px-5 py-2 rounded-full mb-6 backdrop-blur-md animate-pulse">
          <Star size={14} className="text-gold-500 fill-gold-500" />
          <span className="font-primary text-[11px] sm:text-xs font-bold text-gold-500 tracking-widest uppercase">
            verified RERA properties
          </span>
        </div>

        {/* Big Tagline */}
        <h1 className="font-primary font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight mb-4 max-w-4xl tracking-tight uppercase drop-shadow-md">
          Find Your <span className="text-gold-500">Dream Home</span>
        </h1>

        {/* Description */}
        <p className="font-secondary text-white/95 text-sm sm:text-lg mb-10 max-w-xl leading-relaxed drop-shadow-sm">
          We help you find the best property in the most desirable areas.
        </p>


      </div>
    </section>
  );
}
