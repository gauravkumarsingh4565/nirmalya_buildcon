import React from 'react';
import { Star } from 'lucide-react';
import SEO from './SEO';

export default function Hero() {
  return (
    <>
      <SEO 
        title="Home | Nirmalya Buildcon Pvt Ltd" 
        description="Nirmalya Buildcon Private Limited is a trusted real estate developer in Bhubaneswar. We create premium villas and apartments that blend quality construction, transparency, and lasting value."
        url="/"
      />
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
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105"
      >
        Your browser does not support the video tag.
      </video>

      {/* Lightened Dark Overlay Mask with Subtle Blur */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-obsidian via-black/20 to-black/60 z-1 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center mt-10">

        {/* Kicker / Trust Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-lg">
          <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
          <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
            15+ Years of Excellence
          </span>
        </div>

        {/* Big Tagline with Gradient Highlight */}
        <h1 className="font-primary font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-5xl tracking-tight drop-shadow-2xl">
          Built with Integrity. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            Delivered with Excellence.
          </span>
        </h1>

        {/* Description */}
        <p className="font-secondary text-gray-200 text-base sm:text-lg md:text-xl mb-12 max-w-2xl leading-relaxed drop-shadow-md font-light">
          Nirmalya Buildcon Private Limited is a trusted real estate developer in Bhubaneswar. We create premium villas and apartments that blend quality construction, transparency, and lasting value.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a 
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/projects');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-gold-500/25 text-center inline-block"
          >
            Explore Projects
          </a>
          <a 
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-medium backdrop-blur-md transition-all text-center inline-block"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
    </>
  );
}