import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function OfficeMap() {
  const address = "3rd Floor, Nirmalya Signature chowk, Plot No -2298, near HCG panda care, Jayadev Vihar, Bhubaneswar, Odisha 751013";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // Targeted query that Google Maps resolves with a precise red pinpoint marker at the building location
  const mapEmbedUrl = `https://maps.google.com/maps?q=Nirmalya%20Signature,%20Jayadev%20Vihar,%20Bhubaneswar,%20Odisha%20751013&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="office-location" className="py-4 relative overflow-hidden bg-obsidian">
      {/* Soft Gold Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3 animate-fade-in-up">
            Find Us
          </span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            Our Corporate <span className="text-gold-500">Office</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Visit our corporate headquarters for consultations, investment discussions, and to view project models.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Office Details Card */}
          <div className="lg:col-span-5 dark-glass-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between hover:border-gold-500/20 transition-all duration-500 shadow-2xl shadow-black/50">
            <div>
              <h3 className="font-primary text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Nirmalya Buildcon <span className="text-xs bg-gold-500/10 text-gold-500 border border-gold-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">Head Office</span>
              </h3>

              <div className="space-y-6">

                {/* Address Item */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-[15px] font-semibold font-primary mb-1">Corporate Address</h4>
                    <p className="text-muted text-sm font-secondary leading-relaxed">
                      3rd Floor, Nirmalya Signature chowk, Plot No -2298, near HCG panda care, Jayadev Vihar, Bhubaneswar, Odisha 751013
                    </p>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-[15px] font-semibold font-primary mb-1">Call Us</h4>
                    <p className="text-muted text-sm font-secondary font-medium hover:text-gold-500 transition-colors duration-300">
                      <a href="tel:+918917620801">+91 89176 20801</a>
                    </p>
                  </div>
                </div>

                {/* Contact Email */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-[15px] font-semibold font-primary mb-1">Write To Us</h4>
                    <p className="text-muted text-sm font-secondary font-medium hover:text-gold-500 transition-colors duration-300">
                      <a href="mailto:nirmalyabuildcon@gmail.com">nirmalyabuildcon@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-[15px] font-semibold font-primary mb-1">Business Hours</h4>
                    <p className="text-muted text-sm font-secondary font-medium">
                      Monday – Saturday: 9:00 AM – 6:00 PM
                      <span className="block text-rose-500/80 mt-0.5 text-xs">Sunday: Closed</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Interactive Map Iframe Container */}
          <div className="lg:col-span-7 relative group h-[385px] sm:h-[450px]">
            {/* Elegant outer glow ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-500/25 to-gold-600/5 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative h-full w-full bg-[#111625] border border-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:border-gold-500/30 transition-all duration-500">
              <iframe
                title="Nirmalya Buildcon Office Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
