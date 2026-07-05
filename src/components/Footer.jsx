import React from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import logoImage from '../assets/logoimage.jpeg';

const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left mb-16">

          {/* Col 1: About/Logo */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="#" className="flex items-center group self-start">
              <img
                src={logoImage}
                alt="Nirmalya Buildcon Logo"
                className="h-14 w-auto object-contain bg-white p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-md"
              />
            </a>

            <p className="font-secondary text-sm text-slate-400 leading-relaxed">
              Nirmalya Buildcon Private Limited is a premium real estate development company based in Bhubaneswar, Odisha, committed to creating well-planned residential plotting projects that combine quality, transparency, and long-term value.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1D1aBJhYG7/" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/nirmalya__buildcon?igsh=MWQ4MXF1N2FmODU4NQ==" },
                { icon: Youtube, href: "https://www.youtube.com/@nirmalyabuildconprivatelim8489" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full bg-slate-900/60 border border-white/5 flex items-center justify-center text-slate-400 hover:border-gold-500 hover:text-gold-500 hover:bg-slate-900 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-white text-lg font-bold font-primary mb-6">
              Useful Links
            </h4>
            <ul className="flex flex-col gap-4 font-secondary text-sm">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-gold-500 font-semibold hover:text-gold-light transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/projects');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-slate-300 hover:text-gold-500 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/about');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-slate-300 hover:text-gold-500 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/gallery" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/gallery');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-slate-300 hover:text-gold-500 transition-colors duration-200"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/blog');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-slate-300 hover:text-gold-500 transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/contact');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-slate-300 hover:text-gold-500 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us details */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <h4 className="text-white text-lg font-bold font-primary mb-2">
              Contact Us
            </h4>

            <div className="flex flex-col gap-5 mt-2">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed font-secondary">
                  3rd Floor, Nirmalya Signature chowk, Plot No -2298, near HCG panda care, Jayadev Vihar, Bhubaneswar, Odisha 751013
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                <p className="text-slate-300 text-sm font-secondary">
                  8917620801
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-gold-500 flex-shrink-0" />
                <a
                  href="mailto:nirmalyabuildcon@gmail.com"
                  className="text-slate-300 hover:text-gold-500 text-sm font-secondary transition-colors font-medium"
                >
                  nirmalyabuildcon@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/5 pt-8 flex justify-between items-center flex-wrap gap-5">
          <p className="font-secondary text-xs sm:text-sm text-slate-400">
            &copy; 2026, Nirmalyabuildcon. All Right Reserved
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/15 text-gold-500 hover:bg-gold-500 hover:text-slate-950 hover:border-transparent hover:-translate-y-0.5 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
