import React from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import logoImage from '../assets/logoimage.png';

const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
    <footer className="bg-obsidian relative overflow-hidden z-10 border-t border-white/5 pt-24 pb-8">
      {/* Background Glows */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Social (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-8 items-start">
            <a href="/" className="inline-block group" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-gold-500/30 transition-colors duration-300 backdrop-blur-sm">
                <img
                  src={logoImage}
                  alt="Nirmalya Buildcon Logo"
                  className="h-20 md:h-28 w-auto max-w-[250px] md:max-w-[350px] object-contain bg-white px-3 py-2 rounded-xl shadow-md"
                />
              </div>
            </a>
            
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1D1aBJhYG7/" },
                { icon: Instagram, href: "https://www.instagram.com/nirmalya__buildcon?igsh=MWQ4MXF1N2FmODU4NQ==" },
                { icon: Youtube, href: "https://www.youtube.com/@nirmalyabuildconprivatelim8489" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="w-11 h-11 rounded-full bg-slate-900/80 border border-white/5 flex items-center justify-center text-slate-400 hover:border-gold-500 hover:text-gold-500 hover:bg-gold-500/10 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Middle) */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-white text-lg font-bold font-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gold-500"></span>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 font-secondary text-[15px]">
              {[
                { name: 'Home', path: '/' },
                { name: 'Projects', path: '/projects' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', link.path);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo(0, 0);
                    }}
                    className="text-slate-400 hover:text-gold-500 hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Right) */}
          <div className="lg:col-span-5 lg:pl-8">
            <h4 className="text-white text-lg font-bold font-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gold-500"></span>
              Get in Touch
            </h4>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-obsidian transition-colors duration-300 shrink-0">
                  <MapPin size={18} />
                </div>
                <p className="text-slate-300 text-[15px] leading-relaxed font-secondary pt-2 group-hover:text-white transition-colors">
                  3rd Floor, Nirmalya Signature chowk, Plot No -2298, near HCG panda care, Jayadev Vihar, Bhubaneswar, Odisha 751013
                </p>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-obsidian transition-colors duration-300 shrink-0">
                  <Phone size={18} />
                </div>
                <a href="tel:+918917620801" className="text-slate-300 text-[15px] font-secondary group-hover:text-white transition-colors">
                  +91 8917620801
                </a>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-obsidian transition-colors duration-300 shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:nirmalyabuildcon@gmail.com" className="text-slate-300 text-[15px] font-secondary group-hover:text-white transition-colors">
                  nirmalyabuildcon@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-secondary text-sm text-slate-500">
            &copy; {new Date().getFullYear()} <span className="text-gold-500 font-medium">Nirmalya Buildcon</span>. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-secondary font-medium text-slate-400 hover:text-gold-500 transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-gold-500/50 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
