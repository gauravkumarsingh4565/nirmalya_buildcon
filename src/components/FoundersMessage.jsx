import React from 'react';
import { Quote } from 'lucide-react';
import founderImage from '../assets/founder.png';

export default function FoundersMessage() {
  return (
    <section id="founders-message" className="py-2 relative overflow-hidden bg-obsidian">
      {/* Background Decorative Lighting */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Founder Image Frame (Left Column) */}
          <div className="lg:col-span-4 flex justify-center relative group">
            {/* Elegant luxury geometric background framework */}
            <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
            <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>

            {/* Founder Image Container */}
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/80 border border-white/10 z-10">
              <img
                src={founderImage}
                alt="Er. Nirmalya K. Mohapatra"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Active Badge */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 absolute"></span>
                <span className="text-[10px] font-primary font-bold text-white uppercase tracking-wider">Founder's Message</span>
              </div>
            </div>
          </div>

          {/* Speech Bubble / Message content (Right Column) */}
          <div className="lg:col-span-8 flex flex-col items-start relative text-left">
            {/* Section Tag */}
            <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] mb-4 block">Leadership Statement</span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-8 relative">
              Engineering <span className="text-gold-500">Trust & Legacy</span>
              <span className="block w-16 h-1 bg-gold-500 mt-4 rounded-full"></span>
            </h2>

            {/* Speech Bubble Container */}
            <div className="relative w-full bg-[#111625] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:shadow-black/45 transition-all duration-500 group
              /* Left arrow tail for Desktop */
              lg:before:content-[''] lg:before:absolute lg:before:top-24 lg:before:-left-[10px] lg:before:w-5 lg:before:h-5 lg:before:bg-[#111625] lg:before:border-l lg:before:border-b lg:before:border-white/5 lg:before:rotate-45 lg:before:transition-colors lg:before:duration-500 hover:border-gold-500/10 hover:lg:before:border-gold-500/10
              /* Top arrow tail for Mobile */
              max-lg:before:content-[''] max-lg:before:absolute max-lg:before:-top-[10px] max-lg:before:left-1/2 max-lg:before:-translate-x-1/2 max-lg:before:w-5 max-lg:before:h-5 max-lg:before:bg-[#111625] max-lg:before:border-t max-lg:before:border-l max-lg:before:border-white/5 max-lg:before:rotate-45 max-lg:before:transition-colors max-lg:before:duration-500"
            >
              {/* Quote Mark floating */}
              <Quote size={80} className="absolute bottom-6 right-8 text-white/2 pointer-events-none" />

              <div className="relative z-10">
                {/* Message Body */}
                <p className="font-secondary text-slate-200 text-base md:text-lg leading-relaxed italic mb-8">
                  "At Nirmalya Buildcon, we don't just assemble concrete structures; we model future landmarks of safety, architectural excellence, and engineering trust in Bhubaneswar. Every project we launch carries our absolute commitment to structural integrity, transparent transactions, and luxury aesthetics. We build not for today, but to house generations of happiness and success."
                </p>

                {/* Signature Panel */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="font-primary text-lg font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                      Er. Nirmalya K. Mohapatra
                    </h4>
                    <span className="font-secondary text-slate-500 text-sm block mt-0.5">
                      Founder & Managing Director, Nirmalya Buildcon
                    </span>
                  </div>

                  {/* Decorative stamp seal / gold symbol placeholder */}
                  <div className="font-primary font-bold text-xs uppercase tracking-widest text-gold-500 border border-gold-500/30 px-4 py-2 rounded-lg bg-gold-500/5 select-none text-center self-start sm:self-center">
                    Engineering Excellence
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
