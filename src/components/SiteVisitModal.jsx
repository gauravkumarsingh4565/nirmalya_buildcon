import React, { useState, useEffect } from 'react';
import { Calendar, X, ArrowRight, ArrowLeft, CheckCircle2, User, Phone, Mail, Building } from 'lucide-react';

export default function SiteVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    project: 'Nirmalya Heights',
    date: '',
    time: '10:00 AM - 12:00 PM',
    name: '',
    phone: '',
    email: ''
  });
  
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      if (e.detail?.project) {
        setFormData(prev => ({ ...prev, project: e.detail.project }));
      }
    };
    window.addEventListener('open-site-visit-modal', handleOpen);
    return () => window.removeEventListener('open-site-visit-modal', handleOpen);
  }, []);

  const resetModal = () => {
    setIsOpen(false);
    setStep(1);
    setIsSuccess(false);
    setFormData({
      project: 'Nirmalya Heights',
      date: '',
      time: '10:00 AM - 12:00 PM',
      name: '',
      phone: '',
      email: ''
    });
  };

  const handleNext = () => {
    if (step === 2 && !formData.date) {
      alert("Please select a date.");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all contact details.");
      return;
    }
    setTimeout(() => {
      setIsSuccess(true);
    }, 400);
  };

  return (
    <>
      {/* Floating pulsing button bottom-right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gold-500 text-obsidian p-4 rounded-full shadow-2xl shadow-gold-500/25 hover:bg-gold-light hover:scale-105 duration-300 flex items-center justify-center cursor-pointer pulsing-cta border border-gold-500/20"
        title="Book Free Site Visit"
      >
        <Calendar size={28} />
      </button>

      {/* Booking Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-obsidian-card/95 backdrop-blur-xl border border-white/5 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl shadow-black relative text-left">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-white/3">
              <div>
                <h3 className="font-primary text-lg font-bold text-white">Book a Free Site Visit</h3>
                <p className="text-muted text-[11px] font-secondary mt-0.5">Explore your future home in person</p>
              </div>
              <button 
                onClick={resetModal} 
                className="text-muted hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Stepper progress indicator */}
            {!isSuccess && (
              <div className="flex justify-between items-center px-6 py-4 bg-white/2 border-b border-white/5 text-xs font-semibold">
                <span className={`flex items-center gap-1.5 ${step >= 1 ? 'text-gold-500' : 'text-muted'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-gold-500 text-obsidian' : 'bg-white/5 border border-white/10'}`}>1</span>
                  Project
                </span>
                <span className="w-8 h-[1px] bg-white/10"></span>
                <span className={`flex items-center gap-1.5 ${step >= 2 ? 'text-gold-500' : 'text-muted'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-gold-500 text-obsidian' : 'bg-white/5 border border-white/10'}`}>2</span>
                  Schedule
                </span>
                <span className="w-8 h-[1px] bg-white/10"></span>
                <span className={`flex items-center gap-1.5 ${step >= 3 ? 'text-gold-500' : 'text-muted'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-gold-500 text-obsidian' : 'bg-white/5 border border-white/10'}`}>3</span>
                  Details
                </span>
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6">
              {isSuccess ? (
                /* Success Screen */
                <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
                  <CheckCircle2 size={64} className="text-emerald-500 mb-4" />
                  <h4 className="font-primary text-xl font-bold text-white mb-2">Site Visit Requested!</h4>
                  <p className="font-secondary text-muted text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have received your booking request for a guided tour of <span className="text-gold-500 font-semibold">{formData.project}</span> on <span className="text-white font-semibold">{formData.date}</span> at <span className="text-white font-semibold">{formData.time}</span>.
                  </p>
                  <p className="font-secondary text-[12px] text-muted mb-6 bg-white/3 border border-white/5 p-3 rounded-lg w-full">
                    A sales executive will call you within 2 hours to confirm your free AC cab pick-up service details.
                  </p>
                  <button 
                    onClick={resetModal} 
                    className="bg-gold-500 text-obsidian font-primary font-semibold px-6 py-2.5 rounded hover:bg-gold-light transition-all duration-300 w-full cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Steps forms */
                <div>
                  {step === 1 && (
                    /* Step 1: Select Project */
                    <div className="space-y-4 animate-fade-in">
                      <label className="block font-primary font-semibold text-sm text-white mb-1">
                        Select Project of Interest
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { name: "Nirmalya Heights", desc: "Premium 3 & 4 BHK, Kharadi", rera: "P52100029384" },
                          { name: "Nirmalya Tech Hub", desc: "Corporate Commercial, Salt Lake", rera: "P12800048293" },
                          { name: "Golden Crest Estates", desc: "Ultra-luxury Smart Villas, Whitefield", rera: "P51800039485" },
                          { name: "Waterfront Boulevard", desc: "Premium Retail Hub, Kochi", rera: "P13200050293" }
                        ].map((proj) => (
                          <button
                            key={proj.name}
                            type="button"
                            onClick={() => setFormData({ ...formData, project: proj.name })}
                            className={`p-4 rounded-xl text-left border flex items-center justify-between transition-all duration-300 cursor-pointer ${
                              formData.project === proj.name
                                ? 'bg-gold-500/10 border-gold-500/50 text-white'
                                : 'bg-white/3 border-white/5 text-muted hover:border-white/20'
                            }`}
                          >
                            <div>
                              <h4 className={`font-primary font-bold text-base transition-colors ${
                                formData.project === proj.name ? 'text-gold-500' : 'text-white/95'
                              }`}>
                                {proj.name}
                              </h4>
                              <p className="text-xs text-muted mt-1 font-secondary">{proj.desc}</p>
                            </div>
                            <span className="text-[9px] font-mono text-muted border border-white/10 px-2 py-0.5 rounded">
                              RERA ID: {proj.rera}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    /* Step 2: Schedule Date & Time */
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex flex-col">
                        <label className="font-primary font-semibold text-sm text-white mb-2">
                          Select Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-white/3 border border-white/5 focus:border-gold-500 rounded text-white font-secondary text-[15px] transition-colors outline-none cursor-pointer"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-primary font-semibold text-sm text-white mb-2">
                          Preferred Time Slot
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            "10:00 AM - 12:00 PM",
                            "12:00 PM - 02:00 PM",
                            "02:00 PM - 04:00 PM",
                            "04:00 PM - 06:00 PM"
                          ].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, time: slot })}
                              className={`p-3 rounded-lg text-xs font-semibold font-secondary border transition-all duration-300 cursor-pointer ${
                                formData.time === slot
                                  ? 'bg-gold-500 text-obsidian border-transparent shadow'
                                  : 'bg-white/3 border-white/5 text-white/90 hover:border-white/20'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    /* Step 3: Contact Details */
                    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                      <div className="flex flex-col">
                        <label className="font-primary font-semibold text-sm text-white mb-2 flex items-center gap-1.5">
                          <User size={16} className="text-gold-500" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-white/3 border border-white/5 focus:border-gold-500 rounded text-white font-secondary text-[15px] transition-colors outline-none"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-primary font-semibold text-sm text-white mb-2 flex items-center gap-1.5">
                          <Phone size={16} className="text-gold-500" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 89176 20801"
                          className="w-full px-4 py-3 bg-white/3 border border-white/5 focus:border-gold-500 rounded text-white font-secondary text-[15px] transition-colors outline-none"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-primary font-semibold text-sm text-white mb-2 flex items-center gap-1.5">
                          <Mail size={16} className="text-gold-500" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-white/3 border border-white/5 focus:border-gold-500 rounded text-white font-secondary text-[15px] transition-colors outline-none"
                        />
                      </div>
                    </form>
                  )}

                  {/* Navigation Buttons footer */}
                  <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/5">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-1.5 text-muted hover:text-white transition-colors cursor-pointer text-sm font-semibold font-primary"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-1.5 bg-gold-500 text-obsidian px-5 py-2.5 rounded font-primary font-semibold text-sm hover:bg-gold-light transition-all cursor-pointer"
                      >
                        Next <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="inline-flex items-center gap-1.5 bg-gold-500 text-obsidian px-6 py-2.5 rounded font-primary font-semibold text-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold-500/15 transition-all cursor-pointer"
                      >
                        Book Visit
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
