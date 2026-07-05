import React, { useState, useEffect } from 'react';
import { Quote, Award, Target, Eye, ShieldCheck, Handshake, MapPin, FileCheck, Key, IndianRupee, HandCoins } from 'lucide-react';
import founderImage from '../assets/founder_image.png';
import villaImage from '../assets/project_villa.png';

export default function FoundersMessage({ isPage = false }) {
  const [experienceCount, setExperienceCount] = useState(1);

  useEffect(() => {
    if (!isPage) return;
    let start = 1;
    const end = 15;
    const duration = 1200; // 1.2 seconds total duration
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(timer);
      } else {
        setExperienceCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isPage]);
  if (isPage) {
    // ABOUT US PAGE FULL DESIGN
    return (
      <section className="pt-32 pb-20 relative overflow-hidden bg-obsidian border-t border-white/5">
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

          {/* Section 1: Elevating Real Estate Experiences (New Section) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 border-b border-white/5 pb-16">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-gold-500/10 border border-white/10 z-10">
                <img
                  src={villaImage}
                  alt="Modern Residential Villa"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>

              {/* Experience Box Overlay */}
              <div className="absolute bottom-6 right-6 z-20 bg-gold-500 text-obsidian px-6 py-4 rounded-2xl shadow-xl flex flex-col items-center justify-center font-primary border border-gold-400/20 transform group-hover:scale-105 transition-transform duration-500">
                <span className="text-4xl font-extrabold tracking-tight">{experienceCount}+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-center mt-1">Years Of<br />Excellence</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="text-left flex flex-col gap-6 font-secondary text-slate-300">
              <h2 className="font-primary text-3xl sm:text-4xl font-extrabold text-white leading-tight uppercase tracking-tight">
                Elevating Real Estate <span className="text-gold-500">Experiences</span>
              </h2>
              <p className="text-base leading-relaxed">
                At <strong className="text-white">Nirmalya Buildcon</strong>, we turn your property goals into reality. We deal in plot sales, resale properties, flats, and residential projects, offering a wide range of options to suit every lifestyle and budget.
              </p>
              <p className="text-base leading-relaxed">
                Our approach is simple—understand your needs, provide the best options, and support you at every step. With a focus on customer satisfaction and honest dealings, we make property buying and selling easy, fast, and stress-free.
              </p>

              {/* Bullet Points */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border-t border-white/10 pt-6">
                {[
                  "Verified plots and properties",
                  "Transparent deals with clear documents",
                  "Expert guidance for buyers and investors",
                  "Trusted local service in Bhubaneswar"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 flex-shrink-0 font-bold text-xs">
                      ✓
                    </span>
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2: Our Story (New Section) */}
          <div className="mb-20 border-b border-white/5 pb-16 text-center">
            <span className="text-gold-500 font-primary text-xs font-semibold tracking-[0.25em] block mb-3 uppercase">
              Driven by trust, guided by transparency, focused on your future
            </span>
            <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 uppercase tracking-tight">
              Our <span className="text-gold-500">Story</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Mission Card */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 sm:p-10 flex flex-col items-center text-center group hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold-500/5">
                  <Target size={28} />
                </div>
                <h3 className="font-primary text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="font-secondary text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                  To help individuals and families find the right property with complete transparency, ensuring a smooth and confident real estate journey from start to finish.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 sm:p-10 flex flex-col items-center text-center group hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold-500/5">
                  <Eye size={28} />
                </div>
                <h3 className="font-primary text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="font-secondary text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                  To become one of the most trusted and preferred real estate brands in Odisha, known for integrity, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Why Choose Us (New Section) */}
          <div className="mb-20 border-b border-white/5 pb-16 relative">
            <span className="text-gold-500 font-primary text-xs font-semibold tracking-[0.25em] block text-center mb-3 uppercase animate-pulse">
              Why Choose Us
            </span>
            <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center mb-20 uppercase tracking-tight">
              Why <span className="text-gold-500">Nirmalya Buildcon</span> Stands Apart
            </h2>

            {/* Timeline wrapper */}
            <div className="relative max-w-5xl mx-auto px-6">
              {/* Central vertical line */}
              <div className="absolute md:left-1/2 left-8 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold-500/30 via-gold-500 to-gold-500/30 pointer-events-none"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    title: "Verified Properties",
                    description: "Every property is legally verified, ensuring safe and secure investments.",
                    icon: ShieldCheck,
                    align: "left"
                  },
                  {
                    title: "Transparent Deals",
                    description: "Clear pricing, honest communication, and no hidden charges.",
                    icon: Handshake,
                    align: "right"
                  },
                  {
                    title: "Prime Locations",
                    description: "Carefully selected properties in high-growth areas of Bhubaneswar.",
                    icon: MapPin,
                    align: "left"
                  },
                  {
                    title: "Expert Guidance",
                    description: "From site visit to registration, we guide you at every step.",
                    icon: Award,
                    align: "right"
                  },
                  {
                    title: "Easy Documentation",
                    description: "Hassle-free paperwork with full support for a smooth process.",
                    icon: FileCheck,
                    align: "left"
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const isLeft = item.align === "left";
                  return (
                    <div key={idx} className="relative flex flex-col md:flex-row items-center md:justify-between group">

                      {/* Timeline Central Node */}
                      <div className="absolute md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-obsidian bg-gold-500 z-20 group-hover:scale-125 group-hover:bg-gold-light transition-all duration-300 shadow-md shadow-gold-500/50"></div>

                      {/* Card Content */}
                      <div className={`w-full md:w-[calc(50%-2.5rem)] bg-slate-900/40 backdrop-blur-sm border border-white/5 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/55 p-6 sm:p-8 rounded-[2rem] transition-all duration-500 relative flex flex-col items-start ${isLeft ? 'md:text-right md:items-end md:mr-auto ml-16 md:ml-0' : 'text-left md:ml-auto ml-16'
                        }`}>

                        {/* Icon Container */}
                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-md shadow-gold-500/5">
                          <Icon size={22} />
                        </div>

                        {/* Card Title */}
                        <h3 className="font-primary text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                          {item.title}
                        </h3>

                        {/* Card Description */}
                        <p className="font-secondary text-sm text-slate-400 leading-relaxed max-w-md">
                          {item.description}
                        </p>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 4: Our Work Process (New Section) */}
          <div className="mb-20 border-b border-white/5 pb-16 text-center">
            <span className="text-gold-500 font-primary text-xs font-semibold tracking-[0.25em] block mb-3 uppercase animate-pulse">
              Our Work Process
            </span>
            <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 uppercase tracking-tight">
              A Simple, Transparent Path <span className="text-gold-500">To Your Perfect Property</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Property Consultation",
                  description: "We understand your needs, budget, and preferred locations through dedicated personalized interactions."
                },
                {
                  number: "02",
                  title: "Property Selection",
                  description: "Handpicked plots, flats, and resale properties tailored to match your specific lifestyle and investment goals."
                },
                {
                  number: "03",
                  title: "Site Visit",
                  description: "We arrange convenient, guided site visits to explore your shortlisted properties with structural planners."
                },
                {
                  number: "04",
                  title: "Documentation",
                  description: "Complete legal support with verified documents, RERA numbers, and full registration transparency."
                },
                {
                  number: "05",
                  title: "Deal Closure",
                  description: "Secure and smooth finalization with complete documentation, registration, and handholding till property handover."
                },
                {
                  number: "06",
                  title: "After-Sales Support",
                  description: "We stay connected to assist you with mutation, site queries, or future sales advice even after your purchase."
                }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 sm:p-10 text-left flex flex-col group relative overflow-hidden hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/55 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Glowing step number */}
                  <div className="text-5xl sm:text-6xl font-primary font-black text-transparent bg-clip-text bg-gradient-to-br from-gold-500/10 to-gold-500/20 group-hover:from-gold-500/35 group-hover:to-gold-500/55 transition-all duration-500 mb-4 select-none">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-primary text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-secondary text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Property Highlights (New Section) */}
          <div className="mb-20 border-b border-white/5 pb-16 text-center">
            <span className="text-gold-500 font-primary text-xs font-semibold tracking-[0.25em] block mb-3 uppercase animate-pulse">
              Property Features
            </span>
            <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 uppercase tracking-tight">
              Key Highlights Of <span className="text-gold-500">Our Properties</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Verified Properties", icon: ShieldCheck },
                { title: "Prime Locations", icon: MapPin },
                { title: "Clear Documentation", icon: FileCheck },
                { title: "Ready To Move", icon: Key },
                { title: "Best Price Deals", icon: IndianRupee },
                { title: "Loan Assistance", icon: HandCoins }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-gold-500/30 hover:shadow-xl hover:shadow-black/45 hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-md shadow-gold-500/5">
                      <Icon size={22} />
                    </div>
                    <h4 className="font-primary text-xs sm:text-sm font-bold text-slate-200 group-hover:text-gold-500 transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 6: Founder's Message (Original Section, Simplified) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative w-full aspect-[1.385] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-gold-500/10 border border-white/10 z-10">
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
            </div>
          </div>
        </div>
      </section>
    );
  }

  // HOME PAGE DESIGN (ORIGINAL BUT WITH SLIGHTLY LARGER IMAGE)
  return (
    <section id="founders-message" className="py-24 relative overflow-hidden bg-obsidian">
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

            {/* Founder Image Container - Made landscape to fit the wide image and text */}
            <div className="relative w-full max-w-[480px] aspect-[1.385] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/80 border border-white/10 z-10">
              <img
                src={founderImage}
                alt=" Mr. Suvasis Das Pattnaik"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Active Badge - Moved to top-4 left-4 to avoid overlapping text on the image */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
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
