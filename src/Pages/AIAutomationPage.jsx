import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiCpu, FiZap, FiShield, FiArrowLeft, FiPlus, FiMinus,
  FiCheckCircle, FiLayers, FiActivity, FiX, FiLoader, FiSend, FiDownload, FiTerminal, FiDatabase, FiGlobe 
} from 'react-icons/fi';

const AIAutomationPage = () => {
  const navigate = useNavigate();
  
  // --- STATE MANAGEMENT ---
  const [hours, setHours] = useState(20); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadData, setLeadData] = useState({ problem: '', name: '', email: '' });
  const [terminalLines, setTerminalLines] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  
  const hourlyRate = 75;
  const annualSavings = hours * hourlyRate * 52;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- TERMINAL SIMULATION LOGIC ---
  const runTerminal = () => {
    const logs = [
      "> Initializing neural handshake...",
      "> Accessing cognitive layer...",
      "> Scanning legacy infrastructure...", 
      "> Mapping workflow logic: " + (leadData.problem ? leadData.problem.substring(0, 15) : "Unknown") + "...",
      "> Optimizing token efficiency...",
      "> Encrypting roadmap package...",
      "> Secure link established."
    ];
    
    logs.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, i * 450);
    });
  };

  // --- FAQ DATA ---
  const faqs = [
    { q: "Will this replace my team?", a: "No. It replaces the 'robot work' your team hates, allowing them to focus on high-level strategy and client relationships." },
    { q: "Is my proprietary data safe?", a: "Absolutely. We build private instances where your data stays within your firewall and is never used for training public models." },
    { q: "What is the typical ROI?", a: "Most clients see a full return on investment within the first 60 days of the agents going live." }
  ];

  // --- INSTANT ROADMAP GENERATOR ---
  const downloadRoadmap = () => {
    const timestamp = new Date().toLocaleString();
    const roadmapText = `
--------------------------------------------------
   NEURAL EFFICIENCY ROADMAP - CONFIDENTIAL
--------------------------------------------------
ID: AI-${Math.floor(1000 + Math.random() * 9000)}
DATE: ${timestamp}
CLIENT: ${leadData.name || 'Enterprise Partner'}

ANALYSIS SUMMARY:
Target Bottleneck: "${leadData.problem}"
Weekly Human Hours: ${hours}h
Projected Recovery: $${annualSavings.toLocaleString()} USD / Year

AUTONOMY ARCHITECTURE:
[Phase 1] Webhook connection to source data.
[Phase 2] GPT-4o-Mini Logic Reasoning Engine.
[Phase 3] Structured Output to Client CRM.

Status: READY FOR DEPLOYMENT
--------------------------------------------------
    `;
    
    const element = document.createElement("a");
    const file = new Blob([roadmapText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `AI_Roadmap_${leadData.name.replace(/\s/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTerminalLines([]);
    runTerminal();
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 3200);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setModalStep(1);
      setLeadData({ problem: '', name: '', email: '' });
      setTerminalLines([]);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden relative">
      
      {/* --- TOP SYSTEM TICKER --- */}
      <div className="w-full bg-emerald-500/5 border-b border-white/5 py-2 overflow-hidden whitespace-nowrap hidden md:block relative z-20">
        <div className="inline-block animate-marquee font-mono text-[9px] text-emerald-500/50 uppercase tracking-[0.2em]">
          SYSTEM STATUS: OPTIMAL • LATENCY: 14MS • AGENTS ACTIVE: 1,422 • DATABASE SYNC: 100% • ENCRYPTION: AES-256 • 
          SYSTEM STATUS: OPTIMAL • LATENCY: 14MS • AGENTS ACTIVE: 1,422 • DATABASE SYNC: 100% • ENCRYPTION: AES-256
        </div>
      </div>

      {/* --- AMBIENT NEURAL OVERLAY --- */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px]"></div>
      </div>

      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto border-b border-white/5 relative z-10">
        <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 hover:text-white transition-all">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Core
        </button>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Neural Link: Online</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* --- HERO --- */}
        <section className="mb-48">
          <div className="flex items-center gap-3 mb-8">
            <FiTerminal className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/60">Operational Standard 2026</span>
          </div>
          <h1 className="text-7xl md:text-[11rem] font-black italic uppercase tracking-tighter leading-[0.7] mb-14">
            Legacy is<br />
            <span className="text-emerald-500 text-shadow-glow">Liability.</span>
          </h1>
          <p className="text-slate-400 text-2xl max-w-3xl leading-relaxed font-medium border-l-2 border-emerald-500/20 pl-8">
            Don't hire to scale. Architect <span className="text-white italic underline decoration-emerald-500/30 underline-offset-8">Cognitive Workforces</span> that process logic at the speed of light.
          </p>
        </section>

        {/* --- ROI CALCULATOR --- */}
        <section className="mb-48 bg-[#0A0A0B] p-1 md:p-12 rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden group relative">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
            <FiZap size={200} className="text-emerald-500" />
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center p-8">
            <div>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">The Efficiency Gap</h2>
              <p className="text-slate-500 mb-12 text-lg">Calculate the annual capital currently lost to manual operations.</p>
              <div className="space-y-10">
                <label className="block">
                  <div className="flex justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Weekly Labor (Hours)</span>
                    <span className="text-xl font-black italic text-white">{hours}h</span>
                  </div>
                  <input 
                    type="range" min="5" max="100" value={hours} 
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </label>
              </div>
            </div>
            <div className="bg-emerald-500 text-black p-16 rounded-[3rem] text-center shadow-[0_0_60px_rgba(16,185,129,0.25)] relative group transition-transform hover:scale-[1.02]">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60 italic">Annual Recovery Potential</p>
               <h3 className="text-8xl md:text-9xl font-black italic tracking-tighter mb-4 leading-none">
                 ${annualSavings.toLocaleString()}
               </h3>
               <p className="text-xs font-black uppercase tracking-widest border-t border-black/10 pt-6 mt-6">Automate to Reclaim Capital</p>
            </div>
          </div>
        </section>

        {/* --- ARCHITECTURE DIAGRAM --- */}
        <section className="mb-48">
            <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-emerald-500 mb-20 text-center opacity-40">The Agentic Ecosystem</h2>
            
            
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto mt-20">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10 hidden md:block"></div>

              {[
                { icon: <FiActivity />, label: "Data Triggers", tech: "Webhook/API" },
                { icon: <FiCpu />, label: "Reasoning Core", tech: "LLM Orchestrator", highlight: true },
                { icon: <FiDatabase />, label: "Verified Action", tech: "CRM/Database" }
              ].map((step, i) => (
                <div key={i} className={`relative z-10 p-10 rounded-[3rem] border transition-all hover:border-emerald-500/50 ${step.highlight ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 bg-[#0A0A0B]'} w-full md:w-64 text-center`}>
                  <div className="text-emerald-500 text-3xl mb-4 flex justify-center">{step.icon}</div>
                  <h4 className="font-black italic uppercase text-sm mb-1 tracking-widest">{step.label}</h4>
                  <p className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">{step.tech}</p>
                </div>
              ))}
            </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="mb-48 max-w-4xl mx-auto">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-16 text-center">Protocol <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">Insight.</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 bg-[#0A0A0B] rounded-[2rem] overflow-hidden transition-all duration-500">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left"
                >
                  <span className="font-bold uppercase tracking-widest text-sm pr-4">{faq.q}</span>
                  {openFaq === i ? <FiMinus className="text-emerald-500" /> : <FiPlus className="text-emerald-500" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="p-8 pt-0 text-slate-400 text-lg leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="bg-emerald-500 rounded-[5rem] p-16 md:p-32 text-black flex flex-col items-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
          <div className="relative z-10">
            <h3 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-10">
              Delete Manual<br />Workflow.
            </h3>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white px-20 py-10 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:scale-110 transition-all active:scale-95 shadow-2xl flex items-center gap-4 mx-auto"
            >
              Start Custom Audit <FiZap className="text-emerald-500" />
            </button>
          </div>
        </section>
      </main>

      {/* --- INTEGRATED AUDIT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl transition-all">
          <div className="bg-[#080809] border border-white/10 w-full max-w-2xl rounded-[4rem] relative overflow-hidden shadow-2xl">
            <button onClick={closeModal} className="absolute top-10 right-10 text-slate-600 hover:text-white transition-colors z-20">
              <FiX size={32} />
            </button>

            <div className="p-12 md:p-20">
              {!isSuccess ? (
                <form onSubmit={handleAuditSubmit}>
                  {isSubmitting ? (
                    <div className="py-20 animate-pulse">
                      <div className="flex items-center gap-4 mb-8">
                        <FiLoader className="animate-spin text-emerald-500" size={24} />
                        <span className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500">Compiling Intelligence...</span>
                      </div>
                      <div className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-[11px] text-emerald-500/70 h-40 overflow-hidden space-y-2">
                        {terminalLines.map((line, i) => <div key={i}>{line}</div>)}
                      </div>
                    </div>
                  ) : modalStep === 1 ? (
                    <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
                      <div className="text-emerald-500 mb-8 font-black uppercase tracking-[0.5em] text-[10px]">Step_01: Analysis</div>
                      <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-10 text-white">
                        Define Your <span className="text-emerald-500">Bottleneck.</span>
                      </h3>
                      <textarea 
                        required
                        value={leadData.problem}
                        onChange={(e) => setLeadData({...leadData, problem: e.target.value})}
                        placeholder="Describe the repetitive task you want to automate..."
                        className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 text-white placeholder:text-slate-800 focus:border-emerald-500/50 min-h-[200px] outline-none transition-all text-xl font-medium"
                      />
                      <button type="button" onClick={() => setModalStep(2)} className="w-full mt-10 bg-white text-black py-7 rounded-3xl font-black uppercase tracking-[0.4em] text-xs hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                        Analyze System Scope
                      </button>
                    </div>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-right-12 duration-700">
                      <div className="text-emerald-500 mb-8 font-black uppercase tracking-[0.5em] text-[10px]">Step_02: Delivery</div>
                      <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-10 text-white">
                        Contact <span className="text-emerald-500">Node.</span>
                      </h3>
                      <div className="space-y-6">
                        <input required type="text" placeholder="Full Name" value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl p-7 text-white outline-none focus:border-emerald-500/50 text-lg" />
                        <input required type="email" placeholder="Business Email" value={leadData.email} onChange={(e) => setLeadData({...leadData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl p-7 text-white outline-none focus:border-emerald-500/50 text-lg" />
                      </div>
                      <button className="w-full mt-10 bg-emerald-500 text-black py-7 rounded-3xl font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all">
                        <FiSend /> Generate Custom Audit
                      </button>
                    </div>
                  )}
                </form>
              ) : (
                <div className="text-center py-10 animate-in zoom-in-95 duration-700">
                  <div className="w-32 h-32 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                    <FiCheckCircle className="text-emerald-500" size={60} />
                  </div>
                  <h3 className="text-6xl font-black italic uppercase tracking-tighter mb-6 text-white leading-none">Map Generated.</h3>
                  <p className="text-slate-500 font-medium text-xl leading-relaxed mb-12 max-w-md mx-auto">
                    Your preliminary efficiency roadmap is ready for download.
                  </p>
                  
                  <div className="flex flex-col gap-5">
                    <button onClick={downloadRoadmap} className="bg-white text-black py-7 rounded-3xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-emerald-500 hover:text-white transition-all text-xs group">
                      <FiDownload className="group-hover:translate-y-1 transition-transform" /> Get Strategy PDF (.txt)
                    </button>
                    <button onClick={closeModal} className="text-slate-600 hover:text-white font-black uppercase text-[10px] tracking-[0.6em] mt-6 transition-all">Close Terminal</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="p-16 text-center opacity-20 text-[9px] font-black uppercase tracking-[1.5em] relative z-10">
        AI Automation Suite © 2026 // Vector-ID: {Math.random().toString(36).substring(7).toUpperCase()}
      </footer>

      {/* --- INLINE STYLES FOR ANIMATIONS --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AIAutomationPage;