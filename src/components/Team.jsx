import React from 'react';
import teamFounder from '../assets/team_founder.png';
import teamCofounder from '../assets/team_cofounder.png';
import teamArchitect from '../assets/team_architect.png';
import teamEngineer from '../assets/team_engineer.png';

const teamMembers = [
  {
    image: teamFounder,
    name: "Alok Nirmal",
    role: "Founder & Managing Director",
    credentials: "B.Tech Civil (IIT Bombay), 20+ Yrs Exp"
  },
  {
    image: teamCofounder,
    name: "Sunita Nirmal",
    role: "Co-Founder & Director",
    credentials: "MBA Finance (Symbiosis Pune)"
  },
  {
    image: teamArchitect,
    name: "Ar. Rohan Mehta",
    role: "Principal Architect",
    credentials: "M.Arch (B.V.D.U. Pune), Council of Architecture"
  },
  {
    image: teamEngineer,
    name: "Er. Rajesh Kadam",
    role: "Chief Site Project Manager",
    credentials: "B.E. Structural Engineering (COEP Pune)"
  }
];

export default function Team() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-obsidian">
      {/* Background Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            Our Core <span className="text-gold-500">Team</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Meet the leaders and structural specialists driving Nirmalya Buildcon's commitment to quality engineering and timely deliveries.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 flex flex-col group transition-all duration-500 hover:border-gold-500/35 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Profile image with grayscale hover sweep */}
              <div className="h-80 overflow-hidden relative bg-slate-950">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 block"
                />
              </div>

              {/* Text specifications */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-primary text-lg sm:text-xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <span className="text-gold-500 font-primary text-xs font-semibold uppercase tracking-wider block mt-1">
                    {member.role}
                  </span>
                </div>
                <p className="font-secondary text-xs text-slate-400 leading-relaxed mt-4 border-t border-white/5 pt-4">
                  {member.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
