import React from 'react';
import { Quote, Award, Target, Eye } from 'lucide-react';
import founderImage from '../assets/founder_image.jpeg';

export default function FoundersMessage({ isPage = false }) {
  if (isPage) {
    // ABOUT US PAGE FULL DESIGN
    return (
      <section className="py-24 relative overflow-hidden bg-obsidian border-t border-white/5">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">About Us</span>
            <h1 className="font-primary font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Our Vision, <span className="text-gold-500">Our Legacy</span>
            </h1>
            <p className="font-secondary text-slate-400 text-lg max-w-2xl mx-auto">
              Building a foundation of trust, quality, and architectural excellence in the heart of Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-gold-500/10 border border-white/10 z-10">
                <img
                  src={founderImage}
                  alt=" Mr. Suvasis Das Pattnaik"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-primary text-2xl font-bold text-white shadow-sm"> Mr. Suvasis Das Pattnaik</h3>
                  <p className="font-secondary text-gold-500 text-sm font-semibold tracking-wider">Founder & Managing Director</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="text-left flex flex-col gap-8">
              <div>
                <Quote size={40} className="text-gold-500/50 mb-6" />
                <h3 className="font-primary text-3xl font-bold text-white mb-4 leading-tight">
                  "We don't just build homes; we craft enduring legacies of trust and excellence."
                </h3>
                <p className="font-secondary text-slate-300 text-base leading-relaxed mb-6">
                  At Nirmalya Buildcon Private Limited, our journey began with a simple yet profound vision: to redefine the real estate landscape of Bhubaneswar by delivering uncompromising quality and absolute transparency. With over 15 years of industry experience, we have consistently aimed to exceed expectations.
                </p>
                <p className="font-secondary text-slate-300 text-base leading-relaxed">
                  Our team of expert architects, engineers, and planners work tirelessly to ensure that every brick laid is a testament to our dedication. From ultra-luxury villas to premium commercial hubs, our projects are designed to offer state-of-the-art living and business environments that stand the test of time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-500 border border-gold-500/20">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-primary text-white font-bold mb-1">Our Mission</h4>
                    <p className="font-secondary text-sm text-slate-400">To deliver premium spaces with timely execution and transparent processes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-500 border border-gold-500/20">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4 className="font-primary text-white font-bold mb-1">Our Vision</h4>
                    <p className="font-secondary text-sm text-slate-400">To be the most trusted and innovative real estate brand in Odisha.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // HOME PAGE DESIGN (ORIGINAL BUT WITH SLIGHTLY LARGER IMAGE)
  return (
    <section id="founders-message" className="py-2 relative overflow-hidden bg-obsidian">
      {/* Background Decorative Lighting */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Founder Image Frame (Left Column) - Increased max-w to 380px and changed col-span */}
          <div className="lg:col-span-5 flex justify-center relative group">
            {/* Elegant luxury geometric background framework */}
            <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
            <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>

            {/* Founder Image Container - Made slightly larger */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/80 border border-white/10 z-10">
              <img
                src={founderImage}
                alt=" Mr. Suvasis Das Pattnaik"
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
          <div className="lg:col-span-7 flex flex-col items-start relative text-left">
            {/* Section Tag */}
            <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] mb-4 block">Leadership Statement</span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-8 relative">
              Engineering <span className="text-gold-500">Trust & Legacy</span>
              <span className="block w-16 h-1 bg-gold-500 mt-4 rounded-full"></span>
            </h2>

            {/* Speech Bubble Container */}
            <div className="relative w-full bg-[#111625] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:shadow-black/45 transition-all duration-500 group
              /* Bubble Arrow: Mobile Top, Desktop Left */
              before:content-[''] before:absolute before:w-5 before:h-5 before:bg-[#111625] before:rotate-45 before:transition-colors before:duration-500
              before:-top-[10px] before:left-1/2 before:-translate-x-1/2 before:border-t before:border-l before:border-white/5
              lg:before:top-24 lg:before:-left-[10px] lg:before:left-auto lg:before:translate-x-0 lg:before:border-t-0 lg:before:border-b lg:before:border-white/5
              hover:border-gold-500/10 hover:lg:before:border-gold-500/10"
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
                      Mr. Suvasis Das Pattnaik
                    </h4>
                    <span className="font-secondary text-slate-500 text-sm block mt-0.5">
                      Founder & Managing Director, Nirmalya Buildcon
                    </span>
                  </div>

                  {/* Decorative stamp seal / gold symbol placeholder */}
                  <div className="font-primary font-bold text-xs uppercase tracking-widest text-gold-500 border border-gold-500/30 px-4 py-2 rounded-lg bg-gold-500/5 select-none text-center self-start sm:self-center flex items-center gap-2">
                    <Award size={16} />
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
