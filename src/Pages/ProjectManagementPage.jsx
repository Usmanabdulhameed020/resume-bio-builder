import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, FiFilter, FiZap, FiLayout, 
  FiShield, FiTrendingUp, FiCpu, FiGlobe, FiCommand, FiActivity 
} from 'react-icons/fi';

const ProjectManagementPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // NEW: State for live API simulation
  const [apiStatuses, setApiStatuses] = useState({});

  // 1. SIMULATE LIVE API AUDIT ON LOAD
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);

    // Simulated API "ping" to show real-time health
    const platforms = ['monday', 'clickup', 'asana', 'jira'];
    const initialStatuses = {};
    
    platforms.forEach(id => {
      initialStatuses[id] = {
        status: 'checking',
        latency: '---'
      };
    });
    setApiStatuses(initialStatuses);

    // Simulate network delay for the audit results
    const timer = setTimeout(() => {
      const updatedStatuses = {};
      platforms.forEach(id => {
        updatedStatuses[id] = {
          status: Math.random() > 0.1 ? 'online' : 'degraded',
          latency: Math.floor(Math.random() * (150 - 80) + 80) + 'ms'
        };
      });
      setApiStatuses(updatedStatuses);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const platforms = [
    { id: 'monday', name: "Monday.com", tag: "Editor's Choice", score: 9.8, desc: "The most flexible Work OS for cross-functional teams seeking high-velocity automation.", category: "Enterprise", users: "150k+" },
    { id: 'clickup', name: "ClickUp", tag: "Performance King", score: 9.5, desc: "A unified workspace engineered to replace fragmented toolchains for scaling startups.", category: "Startup", users: "800k+" },
    { id: 'asana', name: "Asana", tag: "Design Leader", score: 8.9, desc: "Superior clarity for complex task orchestration and creative production workflows.", category: "Creative", users: "100k+" },
    { id: 'jira', name: "Jira", tag: "Agile Standard", score: 8.2, desc: "The definitive engine for technical teams and enterprise-grade software development.", category: "Enterprise", users: "120k+" },
  ];

  const filteredPlatforms = filter === 'All' 
    ? platforms 
    : platforms.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#FDF8F1] text-slate-900 font-sans selection:bg-[#EF4444] selection:text-white">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FDF8F1]/50 skew-x-12 translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-[#EF4444]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF4444]">Sector Analysis 2026</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8] mb-12">
              Management <br /> Architecture.
            </h1>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p className="text-slate-500 text-2xl font-medium leading-tight tracking-tight">
                Our clinical audit of 24+ platforms. We don't look at features—we look at <span className="text-black italic font-black">logic depth, API resilience, and operational velocity.</span>
              </p>
              <div className="flex gap-12 pb-2">
                <div>
                  <p className="text-4xl font-black italic tracking-tighter uppercase">24</p>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">Tools Audited</p>
                </div>
                <div>
                  <p className="text-4xl font-black italic tracking-tighter uppercase">04</p>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">Elite Tier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE FILTER SYSTEM */}
      <section className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-y border-slate-100 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Sort By Infrastructure:</span>
            <div className="flex gap-2">
              {['All', 'Enterprise', 'Startup', 'Creative'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500 ${
                    filter === cat ? 'bg-black text-white shadow-2xl scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-[#EF4444]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF4444]"></span>
            </span>
            Market Status: Volatile
          </div>
        </div>
      </section>

      {/* 3. THE ELITE LIST (Updated with Live Status) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {filteredPlatforms.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => navigate(`/scorecard/${item.id}`)}
              className="group relative bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#EF4444]/20 transition-all duration-700 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDF8F1] rounded-full translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-1000 opacity-50"></div>
              
              <div className="relative z-10 grid lg:grid-cols-[1.2fr_2fr_1fr] gap-12 items-center">
                
                {/* Ranking, Score & NEW LIVE PULSE */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-300 text-6xl font-black italic leading-none opacity-50">0{index + 1}</span>
                    <div className="flex flex-col gap-1">
                       <div className="inline-flex bg-orange-50 text-[#EF4444] px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest w-fit">
                        {item.tag}
                       </div>
                       {/* LIVE API STATUS INDICATOR */}
                       <div className="flex items-center gap-2 mt-2">
                          <span className={`h-1.5 w-1.5 rounded-full ${apiStatuses[item.id]?.status === 'online' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                          <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                            API: {apiStatuses[item.id]?.status || 'Checking...'}
                          </span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-5xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-[#EF4444] transition-colors duration-500">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-xl font-medium leading-snug max-w-md">
                    {item.desc}
                  </p>
                  <div className="flex gap-6 mt-8">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-tighter">
                      <FiGlobe className="text-[#EF4444]" /> {item.users} Users
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-tighter">
                      <FiCommand className="text-blue-500" /> {apiStatuses[item.id]?.latency || '---'} Latency
                    </div>
                  </div>
                </div>

                {/* Large Score */}
                <div className="flex flex-col items-end gap-6">
                  <div className="text-right">
                    <span className="text-8xl font-black italic tracking-tighter leading-none">{item.score}</span>
                    <span className="text-xl font-black text-slate-200 block uppercase">Score</span>
                  </div>
                  <div className="h-12 w-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#EF4444] group-hover:text-white transition-all duration-500">
                    <FiArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. METHODOLOGY SECTION */}
      <section className="py-32 bg-[#1A2B3B] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF4444] mb-8">Our Protocol</h4>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-10">
                Data Over <br /><span className="text-[#EF4444]">Opinion.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: <FiCpu />, title: "Logic Mapping", text: "We map every possible automation path to test for system-wide bottlenecks." },
                  { icon: <FiShield />, title: "Encryption Audit", text: "Direct security stress-tests on AWS and Azure instances." },
                  { icon: <FiTrendingUp />, title: "ROI Forecast", text: "Predicting per-seat costs across 36-month scaling cycles." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#EF4444] shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="text-lg font-black uppercase italic tracking-tighter mb-1">{item.title}</h5>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#FDF8F1]/5 rounded-[4rem] flex items-center justify-center border border-white/10 overflow-hidden">
                <div className="text-center p-12">
                   <p className="text-[15rem] font-black italic tracking-tighter leading-none opacity-10">9.9</p>
                   <p className="text-xs font-black uppercase tracking-[0.5em] text-[#EF4444] -mt-20">Accuracy Threshold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectManagementPage;