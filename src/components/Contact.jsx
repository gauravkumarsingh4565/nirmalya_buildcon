import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Residential Project',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Residential Project',
        message: ''
      });
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-obsidian">
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            Contact <span className="text-gold-500">Us</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Have questions or ready to launch your next project? Get in touch with our expert engineering team for a customized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 bg-slate-900/40 p-8 sm:p-10 rounded-3xl border border-white/5 shadow-xl shadow-black/10 flex flex-col text-left justify-between">
            <div>
              <h3 className="font-primary text-2xl font-bold text-white mb-4">
                Get In Touch
              </h3>
              
              <p className="font-secondary text-muted text-sm leading-relaxed mb-8">
                Visit our corporate office or reach out via phone/email. Our representatives will get back to you within 24 business hours.
              </p>

              <div className="flex flex-col gap-6">
                {/* Office */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-semibold font-primary mb-1">Office Address</h4>
                    <p className="text-muted text-sm font-secondary font-medium">
                      3rd Floor, Nirmalya Signature chowk, Plot No -2298, near HCG panda care, Jayadev Vihar, Bhubaneswar, Odisha 751013
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-semibold font-primary mb-1">Phone Number</h4>
                    <p className="text-muted text-sm font-secondary font-medium">
                      +91 89176 20801
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-semibold font-primary mb-1">Email Address</h4>
                    <p className="text-muted text-sm font-secondary font-medium">
                      nirmalyabuildcon@gmail.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-gold-500/10 text-gold-500 border border-gold-500/15 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-semibold font-primary mb-1">Business Hours</h4>
                    <p className="text-muted text-sm font-secondary">
                      Mon - Sat: 9:00 AM - 6:00 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7 bg-slate-900/40 p-8 sm:p-10 rounded-3xl border border-white/5 shadow-xl shadow-black/10 text-left">
            <h3 className="font-primary text-2xl font-bold text-white mb-6">
              Send Inquiry
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-emerald-500/10 border border-emerald-500/25 rounded-2xl animate-fade-in">
                <CheckCircle2 size={64} className="text-emerald-500 mb-5" />
                <h4 className="text-white text-xl font-bold font-primary mb-2">Inquiry Submitted!</h4>
                <p className="text-muted text-sm font-secondary max-w-sm">
                  Thank you for contacting Nirmalya Buildcon. One of our property managers will connect with you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 border border-white/10 hover:border-gold-500 text-slate-300 hover:text-gold-500 px-6 py-2 rounded-lg font-primary font-semibold text-sm transition-all duration-300 cursor-pointer bg-slate-950/40"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="block mb-2 font-primary font-medium text-sm text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 focus:border-gold-500 focus:bg-slate-950 rounded-lg text-white font-secondary text-[15px] transition-all duration-300 outline-none" 
                      placeholder="John Doe" 
                    />
                  </div>
                  
                  <div className="flex flex-col text-left">
                    <label className="block mb-2 font-primary font-medium text-sm text-slate-300">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 focus:border-gold-500 focus:bg-slate-950 rounded-lg text-white font-secondary text-[15px] transition-all duration-300 outline-none" 
                      placeholder="+91 89176 20801" 
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="block mb-2 font-primary font-medium text-sm text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 focus:border-gold-500 focus:bg-slate-950 rounded-lg text-white font-secondary text-[15px] transition-all duration-300 outline-none" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="block mb-2 font-primary font-medium text-sm text-slate-300">Project Interest</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 focus:border-gold-500 rounded-lg text-white font-secondary text-[15px] transition-all duration-300 outline-none cursor-pointer"
                  >
                    <option value="Residential Project" className="bg-slate-900">Residential Project</option>
                    <option value="Commercial Complex" className="bg-slate-900">Commercial Complex</option>
                    <option value="Joint Venture Partnership" className="bg-slate-900">Joint Venture Partnership</option>
                    <option value="Other Consulting" className="bg-slate-900">Other Consulting</option>
                  </select>
                </div>

                <div className="flex flex-col text-left">
                  <label className="block mb-2 font-primary font-medium text-sm text-slate-300">Message Details</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 focus:border-gold-500 focus:bg-slate-950 rounded-lg text-white font-secondary text-[15px] transition-all duration-300 outline-none resize-none" 
                    placeholder="Provide details about your project specifications, area requirements or design scope..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gold-500 text-slate-950 hover:bg-gold-light font-primary font-bold text-base py-3.5 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 cursor-pointer border-none"
                >
                  Submit Inquiry 
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
