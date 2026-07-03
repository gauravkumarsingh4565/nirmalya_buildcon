import React, { useState } from 'react';
import { Calendar, BarChart3, TrendingUp, Hammer } from 'lucide-react';

const ongoingProjects = [
  {
    id: "kartikeswar",
    name: "Kartikeswar Nirmalya Enclave",
    overall: 85,
    completionDate: "Dec 2026",
    rera: "Registration Ongoing",
    stages: [
      { name: "Foundation & Excavation", progress: 100 },
      { name: "RCC Structure (Superstructure)", progress: 100 },
      { name: "Brickwork & Internal Plaster", progress: 95 },
      { name: "Plumbing, Electrical & HVAC", progress: 80 },
      { name: "Finishing, Flooring & Paint", progress: 50 }
    ]
  },
  {
    id: "avenue",
    name: "Nirmalya Avenue",
    overall: 15,
    completionDate: "June 2028",
    rera: "Registration Ongoing",
    stages: [
      { name: "Foundation & Excavation", progress: 75 },
      { name: "RCC Structure (Superstructure)", progress: 0 },
      { name: "Brickwork & Internal Plaster", progress: 0 },
      { name: "Plumbing, Electrical & HVAC", progress: 0 },
      { name: "Finishing, Flooring & Paint", progress: 0 }
    ]
  }
];

export default function ProgressDashboard() {
  const [activeProject, setActiveProject] = useState(ongoingProjects[0]);

  return (
    <section id="progress" className="py-24 relative overflow-hidden bg-obsidian">
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            Construction <span className="text-gold-500">Updates</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Real estate transparency is our core value. View real-time site milestones and verified construction stage progress updates below.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Project Selector */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 shadow-xl shadow-black/10">
              <h3 className="font-primary text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Hammer size={18} className="text-gold-500" />
                Select Project
              </h3>
              
              <div className="flex flex-col gap-3">
                {ongoingProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj)}
                    className={`w-full p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                      activeProject.id === proj.id
                        ? 'bg-gold-500/10 border-gold-500/40 text-white'
                        : 'bg-slate-900/20 border-white/5 text-slate-400 hover:border-white/10 hover:bg-slate-900/35'
                    }`}
                  >
                    <h4 className={`font-primary font-bold text-base transition-colors ${
                      activeProject.id === proj.id ? 'text-gold-500' : 'text-slate-300'
                    }`}>
                      {proj.name}
                    </h4>
                    <div className="flex items-center justify-between mt-3 font-secondary text-xs">
                      <span>Overall Progress</span>
                      <span className="font-bold text-slate-200">{proj.overall}%</span>
                    </div>
                    {/* Tiny Progress Bar */}
                    <div className="w-full bg-slate-950 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="bg-gold-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${proj.overall}%` }}
                      ></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Overall Quick Stats Card */}
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 shadow-xl shadow-black/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-gold-500/10 p-2.5 rounded-lg border border-gold-500/15 text-gold-500">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold font-primary">RERA Registered</h4>
                  <p className="text-muted text-xs font-mono">Reg ID: {activeProject.rera}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gold-500/10 p-2.5 rounded-lg border border-gold-500/15 text-gold-500">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold font-primary">Target Delivery</h4>
                  <p className="text-muted text-xs font-secondary">{activeProject.completionDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Timeline & Progress Bar Details */}
          <div className="lg:col-span-8 bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl shadow-black/10 text-left h-full">
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
              <div>
                <h3 className="font-primary text-xl font-bold text-white">
                  {activeProject.name} Milestones
                </h3>
                <p className="text-muted text-xs mt-1 font-secondary">Status of structural and architectural phases</p>
              </div>
              <div className="bg-gold-500/10 text-gold-500 border border-gold-500/35 px-4 py-1.5 rounded-full font-primary text-sm font-bold flex items-center gap-2">
                <BarChart3 size={16} />
                {activeProject.overall}% Completed
              </div>
            </div>

            {/* Stages Stack */}
            <div className="space-y-6">
              {activeProject.stages.map((stage, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex justify-between items-center mb-2 font-secondary text-sm">
                    <span className="text-slate-300 font-medium">{stage.name}</span>
                    <span className="text-gold-500 font-bold">{stage.progress}%</span>
                  </div>
                  {/* Progress Line container */}
                  <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-white/5 relative">
                    <div 
                      className="bg-gradient-to-r from-gold-500 to-gold-light h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${stage.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
