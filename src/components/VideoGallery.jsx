import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Luxury Villa Tour - Golden Crest Estates",
    embedId: "nHyPbLhrQQs",
    thumbnail: "https://img.youtube.com/vi/nHyPbLhrQQs/maxresdefault.jpg",
    duration: "4:15",
    tag: "Walkthrough"
  },
  {
    id: 2,
    title: "Nirmalya Heights - Project Overview",
    embedId: "CkPtikwUuCg",
    thumbnail: "https://img.youtube.com/vi/CkPtikwUuCg/maxresdefault.jpg",
    duration: "3:42",
    tag: "Overview"
  },
  {
    id: 3,
    title: "Commercial Space Walkthrough",
    embedId: "3Ct97UhW6zY",
    thumbnail: "https://img.youtube.com/vi/3Ct97UhW6zY/maxresdefault.jpg",
    duration: "5:20",
    tag: "Commercial"
  },
  {
    id: 4,
    title: "Customer Testimonials",
    embedId: "i0QdGNFEE0g",
    thumbnail: "https://img.youtube.com/vi/i0QdGNFEE0g/maxresdefault.jpg",
    duration: "2:50",
    tag: "Testimonial"
  }
];

export default function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Autoplay carousel
  useEffect(() => {
    if (playingVideoId) return; // Don't slide if playing
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, playingVideoId]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
    setPlayingVideoId(null);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setPlayingVideoId(null);
  };

  const getOffset = (idx) => {
    const len = videos.length;
    let diff = idx - activeIndex;
    while (diff < -len / 2) diff += len;
    while (diff > len / 2) diff -= len;
    return diff;
  };

  return (
    <section id="videos" className="py-4 relative overflow-hidden bg-obsidian border-t border-white/5">
      {/* Background glow elements */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">
            Featured Videos
          </span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            Project Highlights & Tours
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-slate-400 text-base max-w-xl mx-auto mt-4">
            Experience our premium properties through immersive video tours, architectural walkthroughs, and client stories.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full max-w-6xl mx-auto h-[350px] sm:h-[450px] md:h-[550px] overflow-visible perspective-1000"
        >
          {videos.map((video, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;

            // Positioning Logic for 3D Carousel
            let transformClass = "translate-x-0 scale-75 opacity-0 z-0 pointer-events-none";
            if (isActive) {
              transformClass = "translate-x-0 scale-100 opacity-100 z-30 pointer-events-auto shadow-2xl shadow-gold-500/10";
            } else if (offset === 1 || (videos.length === 2 && offset === -1 && activeIndex === 0)) {
              transformClass = "translate-x-[18%] sm:translate-x-[35%] lg:translate-x-[55%] scale-[0.80] opacity-50 hover:opacity-80 z-20 cursor-pointer blur-[2px] hover:blur-none";
            } else if (offset === -1 || (videos.length === 2 && offset === 1 && activeIndex === 1)) {
              transformClass = "-translate-x-[18%] sm:-translate-x-[35%] lg:-translate-x-[55%] scale-[0.80] opacity-50 hover:opacity-80 z-20 cursor-pointer blur-[2px] hover:blur-none";
            } else {
              // Far away items
              transformClass = offset > 1
                ? "translate-x-[80%] scale-75 opacity-0 z-10"
                : "-translate-x-[80%] scale-75 opacity-0 z-10";
            }

            return (
              <div
                key={video.id}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(idx);
                    setPlayingVideoId(null);
                  }
                }}
                className={`absolute inset-0 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] bg-slate-900 border border-white/10 ${transformClass}`}
              >
                {isActive && playingVideoId === video.id ? (
                  // Video Player
                  <div className="w-full h-full bg-black relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideoId(null);
                      }}
                      className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-gold-500 text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/10"
                    >
                      <X size={20} />
                    </button>
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&mute=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  // Thumbnail View
                  <div className="w-full h-full relative group">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={`w-full h-full object-cover transition-transform duration-[5000ms] ${isActive ? 'group-hover:scale-105' : ''}`}
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-slate-950/30 transition-colors duration-500 group-hover:bg-slate-950/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                    {/* Play Button Wrapper - Attractive Pulse */}
                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideoId(video.id);
                          }}
                          className="pointer-events-auto relative group/btn flex items-center justify-center"
                        >
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 bg-gold-500/30 rounded-full animate-ping scale-150 opacity-70"></div>
                          <div className="absolute inset-0 bg-gold-500/20 rounded-full pulsing-cta scale-125"></div>

                          {/* Main Button */}
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-500 backdrop-blur-md flex items-center justify-center text-slate-950 transform group-hover/btn:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(197,168,92,0.4)] border-4 border-white/20">
                            <Play size={38} className="ml-2 sm:ml-3 w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" />
                          </div>
                        </button>
                      </div>
                    )}

                    {/* Info Text */}
                    <div className={`absolute bottom-0 left-0 w-full p-6 sm:p-10 flex justify-between items-end transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                      <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 bg-gold-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-sm">
                          {video.tag}
                        </span>
                        <h3 className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                          {video.title}
                        </h3>
                        <p className="font-secondary text-sm sm:text-base text-slate-200 drop-shadow-md">
                          Click play to watch full tour
                        </p>
                      </div>
                      <div className="hidden sm:flex bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-white font-mono text-sm font-bold tracking-wider border border-white/10 shadow-lg items-center gap-2">
                        <Play size={14} className="text-gold-500" />
                        {video.duration}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-gold-500 hover:text-slate-950 hover:border-transparent transition-all duration-300 cursor-pointer shadow-xl hidden sm:flex"
            aria-label="Previous Video"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-gold-500 hover:text-slate-950 hover:border-transparent transition-all duration-300 cursor-pointer shadow-xl hidden sm:flex"
            aria-label="Next Video"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-3 mt-12 sm:mt-16">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setPlayingVideoId(null);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                ? 'w-10 bg-gold-500 shadow-[0_0_12px_rgba(197,168,92,0.6)]'
                : 'w-2.5 bg-white/20 hover:bg-white/50'
                }`}
              aria-label={`Go to video ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
