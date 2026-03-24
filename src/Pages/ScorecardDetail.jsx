import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, FiPieChart, FiActivity, FiShield, FiTrendingUp, FiCheck, FiX 
} from 'react-icons/fi';

const ScoreCardDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  
  // Refs for functional scrolling
  const overviewRef = useRef(null);
  const analysisRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (section, ref) => {
    setActiveTab(section);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const data = [
    { name: "Monday.com", type: "Work OS", automation: 98, freeTier: false, ease: 95, total: 9.8, color: "bg-indigo-500" },
    { name: "ClickUp", type: "All-in-One", automation: 95, freeTier: true, ease: 88, total: 9.5, color: "bg-purple-500" },
    { name: "Asana", type: "Task Management", automation: 85, freeTier: true, ease: 98, total: 8.9, color: "bg-rose-500" },
    { name: "Notion", type: "Docs & Wiki", automation: 80, freeTier: true, ease: 90, total: 8.5, color: "bg-slate-900" },
    { name: "Jira", type: "Software Dev", automation: 99, freeTier: false, ease: 65, total: 8.2, color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F1] text-slate-900 font-sans selection:bg-[#EF4444] selection:text-white pb-32">
      
      {/* 1. FUNCTIONAL TOP NAV */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-slate-100 px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-black transition-all"
          >
            <FiArrowLeft size={14}/> Back
          </button>
          
          {/* Working Section Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button 
              onClick={() => scrollToSection('Overview', overviewRef)}
              className={`px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'Overview' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('Analysis', analysisRef)}
              className={`px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'Analysis' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}
            >
              Analysis
            </button>
          </div>

          <div className="text-[10px] font-black italic uppercase tracking-tighter">
            ST<span className="text-[#EF4444]">ACKED</span>
          </div>
        </div>
      </nav>

      {/* 2. MAIN CONTENT */}
      <main className="pt-40 max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <header ref={overviewRef} className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8 text-[#1A2B3B]">
            The 2026 <br /><span className="text-[#EF4444]">Scorecard.</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl">
            Raw data from 400+ hours of software testing. No fluff, just the rankings.
          </p>
        </header>

        {/* 3. THE DATA MATRIX */}
        <section className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden mb-20">
          <div className="p-8 border-b border-slate-50 flex items-center gap-3 bg-slate-50/30">
             <FiPieChart className="text-[#EF4444]" size={18} /> 
             <h3 className="text-xs font-black uppercase tracking-[0.3em]">Performance Matrix</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 border-b border-slate-50">
                  <th className="p-10">Platform</th>
                  <th className="p-10">Automation</th>
                  <th className="p-10 text-center">Free Tier</th>
                  <th className="p-10 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {data.map((item, i) => (
                  <tr key={i} className="hover:bg-[#FDF8F1] transition-all">
                    <td className="p-10">
                      <div className="flex items-center gap-6">
                        <div className={`w-1 h-10 ${item.color} rounded-full`}></div>
                        <div>
                          <p className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-1">{item.name}</p>
                          <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-10">
                      <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.automation}%` }}></div>
                      </div>
                    </td>
                    <td className="p-10">
                      <div className="flex justify-center">
                        {item.freeTier ? <FiCheck className="text-emerald-500" size={20} /> : <FiX className="text-slate-200" size={20} />}
                      </div>
                    </td>
                    <td className="p-10 text-right font-black italic text-4xl tracking-tighter text-[#1A2B3B]">
                      {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. ANALYSIS SECTION */}
        <div ref={analysisRef} className="grid md:grid-cols-2 gap-8 scroll-mt-32">
          <div className="p-10 bg-[#1A2B3B] rounded-[2.5rem] text-white shadow-xl">
             <FiShield className="text-[#EF4444] mb-6" size={32} />
             <h4 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">Security Grade</h4>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Jira and Monday.com lead the industry in 2026 with verified SOC2 Type II compliance and enterprise-grade data encryption.
             </p>
             <div className="h-px w-full bg-slate-800 mb-6"></div>
             <span className="text-[10px] font-black uppercase tracking-widest text-[#EF4444]">Integrity: 9.9/10</span>
          </div>

          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
             <FiTrendingUp className="text-blue-500 mb-6" size={32} />
             <h4 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">Scalability</h4>
             <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
               ClickUp remains the most cost-effective choice for scaling teams, offering the best feature-to-price ratio in the current market.
             </p>
             <div className="flex gap-2">
                <span className="px-4 py-1.5 bg-slate-50 rounded-full text-[8px] font-black uppercase tracking-widest text-slate-400 border border-slate-100">Top Growth Pick</span>
             </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ScoreCardDetail;