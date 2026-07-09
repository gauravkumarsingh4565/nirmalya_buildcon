import React, { useState, useEffect } from 'react';
import { Quote, Award, Target, Eye, ShieldCheck, Handshake, MapPin, FileCheck, Key, IndianRupee, HandCoins } from 'lucide-react';
import founderImage from '../assets/founder_image.png';
import founder2Image from '../assets/founder2.png';
import villaImage from '../assets/project_villa.png';
import SEO from './SEO';

export default function FoundersMessage({ isPage = false }) {
  const [experienceCount, setExperienceCount] = useState(1);

  useEffect(() => {
    if (!isPage) return;
    let start = 1;
    const end = 15;
    const duration = 1200;
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
    return (
      <>
        <SEO 
          title="About Us | Nirmalya Buildcon Pvt Ltd" 
          description="Nirmalya Buildcon Pvt. Ltd. is a trusted real estate developer committed to creating quality residential and commercial projects with 15+ years of experience."
          url="/about"
        />
        <section className="pt-32 pb-20 relative overflow-hidden bg-obsidian border-t border-white/5">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* ── Header ── */}
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">About Us</span>
            <h1 className="font-primary font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Building Trust, <span className="text-gold-500">Delivering Excellence</span>
            </h1>
            <p className="font-secondary text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Nirmalya Buildcon Pvt. Ltd. is a trusted real estate developer committed to creating quality
              residential and commercial projects with <strong className="text-gold-500">15+ years of experience</strong>. With a strong focus on
              innovation, transparency, and customer satisfaction, the company delivers thoughtfully designed
              spaces that combine modern living with lasting value.
            </p>
          </div>

          {/* ── Section 1: Who We Are + Image ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 border-b border-white/5 pb-16">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-gold-500/10 border border-white/10 z-10">
                <img
                  src={villaImage}
                  alt="Nirmalya Buildcon Projects"
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
                Who We <span className="text-gold-500">Are</span>
              </h2>
              <p className="text-base leading-relaxed">
                Every project reflects our commitment to <strong className="text-white">quality construction</strong>, timely delivery,
                and building long-term relationships based on trust and excellence.
              </p>
              <p className="text-base leading-relaxed">
                Our objective is to build not just properties, but <strong className="text-white">vibrant communities</strong> where
                people can live, work, and grow.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 border-t border-white/10 pt-6">
                {[
                  "Quality Construction Standards",
                  "Transparent Business Practices",
                  "Timely Project Delivery",
                  "Exceptional Customer Service",
                  "Sustainable Developments",
                  "Trusted & Ethical Dealings"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 flex-shrink-0 font-bold text-xs">✓</span>
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Section 2: Vision & Mission ── */}
          <div className="mb-20 border-b border-white/5 pb-16">
            <div className="text-center mb-14">
              <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">What Drives Us</span>
              <h2 className="font-primary text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Our Vision & <span className="text-gold-500">Mission</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Vision Card */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 sm:p-10 flex flex-col group hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold-500/5">
                  <Eye size={26} />
                </div>
                <h3 className="font-primary text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">Our Vision</h3>
                <p className="font-secondary text-sm sm:text-base text-slate-400 leading-relaxed">
                  To be one of the most trusted and respected real estate developers, delivering innovative,
                  sustainable, and high-quality developments that enhance lifestyles and create enduring value
                  for our customers and stakeholders.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 sm:p-10 flex flex-col group hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold-500/5">
                  <Target size={26} />
                </div>
                <h3 className="font-primary text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">Our Mission</h3>
                <ul className="font-secondary text-sm sm:text-base text-slate-400 leading-relaxed space-y-3">
                  {[
                    "Deliver quality projects with uncompromising construction standards.",
                    "Ensure transparency and ethical business practices.",
                    "Complete projects within committed timelines.",
                    "Provide exceptional customer service before and after possession.",
                    "Build sustainable developments that contribute to better communities."
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-500 flex-shrink-0 font-bold text-[10px] mt-0.5">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Section 3: Core Values ── */}
          <div className="mb-20 border-b border-white/5 pb-16">
            <div className="text-center mb-14">
              <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">What We Stand For</span>
              <h2 className="font-primary text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Our Core <span className="text-gold-500">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: ShieldCheck, title: "Integrity", desc: "Honest and transparent dealings in every transaction." },
                { icon: Award, title: "Quality", desc: "Excellence in design, materials, and workmanship." },
                { icon: Handshake, title: "Customer First", desc: "Building long-term relationships through trust and satisfaction." },
                { icon: Target, title: "Innovation", desc: "Adopting modern technologies and construction practices." },
                { icon: FileCheck, title: "Commitment", desc: "Delivering on our promises with professionalism and accountability." },
                { icon: Eye, title: "Transparency", desc: "Open and clear communication at every stage of your journey." }
              ].map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-7 flex flex-col group hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 text-obsidian flex items-center justify-center mb-5 shadow-lg shadow-gold-500/10 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="font-primary text-lg font-bold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">{val.title}</h3>
                    <p className="font-secondary text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Section 4: Our Journey ── */}
          <div className="mb-20 border-b border-white/5 pb-16">
            <div className="text-center mb-14">
              <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">From Inception to Excellence</span>
              <h2 className="font-primary text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Our <span className="text-gold-500">Journey</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 sm:p-12 hover:border-gold-500/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/[0.03] pointer-events-none"></div>
              <Quote size={60} className="absolute bottom-6 right-8 text-white/[0.03] pointer-events-none" />
              <p className="font-secondary text-slate-300 text-base sm:text-lg leading-relaxed relative z-10">
                Since its inception, <strong className="text-white">Nirmalya Buildcon Pvt. Ltd.</strong> has been dedicated to shaping modern
                living through thoughtfully planned real estate developments. Every project reflects our passion
                for quality, attention to detail, and commitment to customer satisfaction.
              </p>
              <p className="font-secondary text-slate-300 text-base sm:text-lg leading-relaxed mt-5 relative z-10">
                As we continue to grow, we remain focused on creating landmarks that stand the test of time
                while contributing to the development of <strong className="text-gold-500">thriving communities</strong>.
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-8 relative z-10">
                {[
                  { label: "15+", sub: "Years of Experience" },
                  { label: "7+", sub: "Projects Delivered" },
                  { label: "500+", sub: "Happy Families" },
                  { label: "100%", sub: "Transparency Guaranteed" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-primary text-2xl font-extrabold text-gold-500">{stat.label}</span>
                    <span className="font-secondary text-xs text-slate-400 mt-0.5">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Section 5: Meet Our Founders ── */}
          <div className="mb-10">
            <div className="text-center mb-14">
              <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">Leadership</span>
              <h2 className="font-primary text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Meet Our <span className="text-gold-500">Founders</span>
              </h2>
            </div>

            {/* Alternating Founder Layout */}
            <div className="flex flex-col gap-20 xl:gap-28">

              {/* ── Founder 1: Mr. Suvasis Das Pattnaik (Image Left, Text Right) ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group">
                
                {/* Image Frame (Left) */}
                <div className="lg:col-span-5 relative w-full max-w-[480px] mx-auto lg:mx-0">
                  <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
                  <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
                  
                  <div className="relative w-full aspect-[4/3] sm:aspect-[1.385] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/80 border border-white/10 z-10">
                    <img
                      src={founderImage}
                      alt="Mr. Suvasis Das Pattnaik"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-500 absolute"></span>
                      <span className="text-[10px] font-primary font-bold text-white uppercase tracking-wider">Founder</span>
                    </div>
                  </div>
                </div>

                {/* Content side (Right) */}
                <div className="lg:col-span-7 flex flex-col relative">
                  <div className="mb-6 border-b border-white/5 pb-4">
                    <h3 className="font-primary text-2xl sm:text-3xl font-bold text-white mb-1">Mr. Suvasis Das Pattnaik</h3>
                    <p className="font-secondary text-gold-500 text-sm font-semibold tracking-widest uppercase">Founder & Managing Director</p>
                  </div>
                  
                  <div className="relative w-full bg-[#111625] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:border-gold-500/20 hover:shadow-black/45 transition-all duration-500">
                    <Quote size={80} className="absolute bottom-6 right-8 text-white/[0.03] pointer-events-none" />
                    <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10 mb-4">
                      "At Nirmalya Buildcon Pvt. Ltd., we believe that every project is more than just a building—it is a promise of trust, quality, and a better future. Our vision is to create spaces that enrich lives, inspire communities, and deliver lasting value."
                    </p>
                    <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10 mb-4">
                      "Since our inception, we have remained committed to excellence in design, quality construction, transparency, and timely delivery. We understand that purchasing a home is one of the most important decisions in a person's life, and we strive to make that journey seamless and rewarding."
                    </p>
                    <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10">
                      "Our success is built on the confidence of our customers, the dedication of our team, and the support of our partners. As we continue to grow, we remain focused on innovation, sustainability, and customer satisfaction while setting new benchmarks in the real estate industry."
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Founder 2: CA. Prahallad Karan (Text Left, Image Right) ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group">
                
                {/* Content side (Left on desktop) */}
                <div className="lg:col-span-7 flex flex-col relative order-last lg:order-first text-left lg:text-right">
                  <div className="mb-6 border-b border-white/5 pb-4">
                    <h3 className="font-primary text-2xl sm:text-3xl font-bold text-white mb-1">CA. Prahallad Karan</h3>
                    <p className="font-secondary text-gold-500 text-sm font-semibold tracking-widest uppercase">Co-Founder & Director</p>
                  </div>
                  
                  <div className="relative w-full bg-[#111625] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:border-gold-500/20 hover:shadow-black/45 transition-all duration-500 text-left">
                    <Quote size={80} className="absolute bottom-6 right-8 text-white/[0.03] pointer-events-none" />
                    <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10 mb-4">
                      "At Nirmalya Buildcon Pvt. Ltd., we are committed to building more than just homes—we build trust, quality, and lasting relationships. Every project reflects our dedication to excellence, transparency, and customer satisfaction. We sincerely thank our customers and partners for their continued confidence and look forward to creating spaces that inspire better living for generations to come."
                    </p>
                    <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10">
                      "We sincerely thank our customers, stakeholders, and well-wishers for their continued trust and support. We look forward to building not just homes, but enduring relationships and vibrant communities for generations to come."
                    </p>
                  </div>
                </div>

                {/* Image Frame (Right on desktop) */}
                <div className="lg:col-span-5 relative w-full max-w-[480px] mx-auto lg:mx-0 order-first lg:order-last">
                  <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
                  <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
                  
                  <div className="relative w-full aspect-[4/3] sm:aspect-[1.385] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/80 border border-white/10 z-10">
                    <img
                      src={founder2Image}
                      alt="CA. Prahallad Karan"
                      className="w-full h-full object-cover object-top transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-500 absolute"></span>
                      <span className="text-[10px] font-primary font-bold text-white uppercase tracking-wider">Co-Founder</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
      </>
    );
  }

  // HOME PAGE DESIGN
  return (
    <section id="founders-message" className="py-24 relative overflow-hidden bg-obsidian">
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">Leadership</span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            Meet Our <span className="text-gold-500">Founders</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-slate-400 text-base max-w-xl mx-auto mt-4">
            Visionary leaders who built Nirmalya Buildcon on a foundation of trust, excellence, and community.
          </p>
        </div>

        {/* Alternating Founder Layout */}
        <div className="flex flex-col gap-20 xl:gap-28">

          {/* ── Founder 1: Mr. Suvasis Das Pattnaik (Image Left, Text Right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group">
            
            {/* Image Frame (Left) */}
            <div className="lg:col-span-5 relative w-full max-w-[480px] mx-auto lg:mx-0">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative w-full aspect-[4/3] sm:aspect-[1.385] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/80 border border-white/10 z-10">
                <img
                  src={founderImage}
                  alt="Mr. Suvasis Das Pattnaik"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 absolute"></span>
                  <span className="text-[10px] font-primary font-bold text-white uppercase tracking-wider">Founder</span>
                </div>
              </div>
            </div>

            {/* Content side (Right) */}
            <div className="lg:col-span-7 flex flex-col relative">
              <div className="mb-6 border-b border-white/5 pb-4">
                <h3 className="font-primary text-2xl sm:text-3xl font-bold text-white mb-1">Mr. Suvasis Das Pattnaik</h3>
                <p className="font-secondary text-gold-500 text-sm font-semibold tracking-widest uppercase">Founder & Managing Director</p>
              </div>
              
              <div className="relative w-full bg-[#111625] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:border-gold-500/20 hover:shadow-black/45 transition-all duration-500">
                <Quote size={80} className="absolute bottom-6 right-8 text-white/[0.03] pointer-events-none" />
                <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10 mb-4">
                  "At Nirmalya Buildcon Pvt. Ltd., we believe that every project is more than just a building—it is a promise of trust, quality, and a better future. Our vision is to create spaces that enrich lives, inspire communities, and deliver lasting value."
                </p>
                <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10 mb-4">
                  "Since our inception, we have remained committed to excellence in design, quality construction, transparency, and timely delivery. We understand that purchasing a home is one of the most important decisions in a person's life, and we strive to make that journey seamless and rewarding."
                </p>
                <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10">
                  "Our success is built on the confidence of our customers, the dedication of our team, and the support of our partners. As we continue to grow, we remain focused on innovation, sustainability, and customer satisfaction while setting new benchmarks in the real estate industry."
                </p>
              </div>
            </div>
          </div>

          {/* ── Founder 2: CA. Prahallad Karan (Text Left, Image Right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group">
            
            {/* Content side (Left on desktop) */}
            <div className="lg:col-span-7 flex flex-col relative order-last lg:order-first text-left lg:text-right">
              <div className="mb-6 border-b border-white/5 pb-4">
                <h3 className="font-primary text-2xl sm:text-3xl font-bold text-white mb-1">CA. Prahallad Karan</h3>
                <p className="font-secondary text-gold-500 text-sm font-semibold tracking-widest uppercase">Co-Founder & Director</p>
              </div>
              
              <div className="relative w-full bg-[#111625] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:border-gold-500/20 hover:shadow-black/45 transition-all duration-500 text-left">
                <Quote size={80} className="absolute bottom-6 right-8 text-white/[0.03] pointer-events-none" />
                <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10 mb-4">
                  "At Nirmalya Buildcon Pvt. Ltd., we are committed to building more than just homes—we build trust, quality, and lasting relationships. Every project reflects our dedication to excellence, transparency, and customer satisfaction. We sincerely thank our customers and partners for their continued confidence and look forward to creating spaces that inspire better living for generations to come."
                </p>
                <p className="font-secondary text-slate-300 text-base md:text-lg leading-relaxed italic relative z-10">
                  "We sincerely thank our customers, stakeholders, and well-wishers for their continued trust and support. We look forward to building not just homes, but enduring relationships and vibrant communities for generations to come."
                </p>
              </div>
            </div>

            {/* Image Frame (Right on desktop) */}
            <div className="lg:col-span-5 relative w-full max-w-[480px] mx-auto lg:mx-0 order-first lg:order-last">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[2.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative w-full aspect-[4/3] sm:aspect-[1.385] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/80 border border-white/10 z-10">
                <img
                  src={founder2Image}
                  alt="CA. Prahallad Karan"
                  className="w-full h-full object-cover object-top transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 absolute"></span>
                  <span className="text-[10px] font-primary font-bold text-white uppercase tracking-wider">Co-Founder</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

