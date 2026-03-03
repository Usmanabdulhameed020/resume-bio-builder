import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, FiActivity, FiShield, FiGlobe, 
  FiLayers, FiCpu, FiTrendingUp, FiDownload, FiLoader, FiLock 
} from 'react-icons/fi';

const CRMPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  // FUNCTIONAL: Handle the Audit PDF Download
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate complex data aggregation and PDF generation
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setDownloadSuccess(false), 5000);
      
      // In a real app, you would trigger the file download here:
      // window.location.href = '/path-to-your-audit-report.pdf';
    }, 2400);
  };

  const platforms = [
    { id: 'hubspot', name: "HubSpot", tag: "Best Overall", score: 9.7, desc: "The gold standard for inbound marketing and integrated sales scaling.", category: "Startup", users: "200k+", speed: "102ms", security: "SOC2 Type II" },
    { id: 'salesforce', name: "Salesforce", tag: "Enterprise Titan", score: 9.4, desc: "The most powerful cloud infrastructure for global sales organizations.", category: "Enterprise", users: "150k+", speed: "155ms", security: "Military Grade" },
    { id: 'attio', name: "Attio", tag: "Next-Gen Data", score: 9.2, desc: "A data-first CRM designed for the modern, high-velocity tech stack.", category: "Startup", users: "10k+", speed: "45ms", security: "Tier 1" },
    { id: 'pipedrive', name: "Pipedrive", tag: "Best for Sales", score: 8.8, desc: "Pure focus on the visual sales pipeline and closing deals with zero friction.", category: "Sales-Focused", users: "100k+", speed: "90ms", security: "ISO 27001" },
  ];

  const filteredPlatforms = filter === 'All' 
    ? platforms 
    : platforms.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. ARCHITECTURAL HERO */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Data Architecture Audit 2026</span>
            </div>
            <h1 className="text-7xl md:text-[11rem] font-black italic uppercase tracking-tighter leading-[0.75] mb-12">
              CRM <br /> <span className="text-blue-600">Engineered.</span>
            </h1>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p className="text-slate-500 text-2xl font-medium leading-tight max-w-xl italic">
                Beyond contact management. We benchmark the synchronization engines and relational database structures of the world's leading sales stacks.
              </p>
              <div className="flex gap-12 pb-2">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Managed Data</p>
                  <p className="text-4xl font-black italic">4.8PB</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Global Nodes</p>
                  <p className="text-4xl font-black italic">142</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE TRENDS TICKER */}
      <div className="bg-slate-900 py-4 overflow-hidden flex whitespace-nowrap border-y border-white/10">
        <div className="animate-marquee flex gap-20 items-center">
          {[1,2,3].map((i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <FiTrendingUp className="text-emerald-400" /> HubSpot API v3 Latency: 102ms
              </span>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <FiActivity className="text-blue-400" /> Salesforce Uptime: 99.99%
              </span>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <FiShield className="text-emerald-400" /> Attio SOC2 Compliance: Verified
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CORE INFRASTRUCTURE CARDS */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter">Verified <span className="text-blue-600">Protocols</span></h2>
              <p className="text-slate-400 font-bold mt-2 uppercase text-xs tracking-widest">Active Audits: 04</p>
            </div>
            <div className="flex gap-2">
              {['All', 'Enterprise', 'Startup', 'Sales-Focused'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] transition-all ${
                    filter === cat ? 'bg-blue-600 text-white shadow-xl' : 'bg-white text-slate-400 border border-slate-100 hover:border-blue-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredPlatforms.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => navigate(`/scorecard/${item.id}`)}
                className="group bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 hover:border-blue-500 transition-all duration-500 cursor-pointer overflow-hidden relative"
              >
                <div className="grid lg:grid-cols-[1.5fr_2fr_1fr] gap-8 items-center relative z-10">
                  <div className="flex items-center gap-8">
                    <span className="text-4xl font-black italic text-slate-100 group-hover:text-blue-50 transition-colors">0{index + 1}</span>
                    <div>
                      <h3 className="text-4xl font-black uppercase italic tracking-tighter group-hover:text-blue-600 transition-colors">{item.name}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600/60 bg-blue-50 px-3 py-1 rounded-full">{item.tag}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 font-bold text-lg leading-snug">{item.desc}</p>

                  <div className="flex justify-between items-center lg:justify-end lg:gap-12">
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Score</p>
                      <p className="text-5xl font-black italic">{item.score}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL COMPARISON MATRIX */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">Benchmark Analysis</h3>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none">Relational <br /> <span className="text-slate-300">Integrity.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-12 border border-slate-100 rounded-[3rem] hover:bg-slate-50 transition-colors group">
                <FiCpu className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-black uppercase italic mb-4">Compute Speed</h4>
                <p className="text-slate-500 font-bold leading-tight">Average record retrieval time across global data centers measured in milliseconds.</p>
             </div>
             <div className="p-12 border border-slate-100 rounded-[3rem] hover:bg-slate-50 transition-colors group">
                <FiLayers className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-black uppercase italic mb-4">API Maturity</h4>
                <p className="text-slate-500 font-bold leading-tight">REST and GraphQL endpoint flexibility and documentation depth for custom middleware.</p>
             </div>
             <div className="p-12 border border-slate-100 rounded-[3rem] hover:bg-slate-50 transition-colors group">
                <FiGlobe className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-black uppercase italic mb-4">Sync Engine</h4>
                <p className="text-slate-500 font-bold leading-tight">Real-time bidirectional synchronization reliability between CRM and external ERPs.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FUNCTIONAL CTA SECTION */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden text-center">
           <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                   <FiLock className="text-blue-200" size={24} />
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Deploy with <br /> Certainty.
              </h2>
              <p className="text-blue-100 text-xl font-bold max-w-xl mx-auto mb-12">
                Download the full 2026 CRM Implementation Guide. Includes deep-dive security audits and enterprise pricing tiers.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`min-w-[300px] flex items-center justify-center gap-4 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 ${
                    isDownloading 
                    ? 'bg-slate-900 text-white cursor-wait' 
                    : 'bg-white text-blue-600 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <FiLoader className="animate-spin" size={18} /> Compiling Audit...
                    </>
                  ) : (
                    <>
                      <FiDownload size={18} /> {downloadSuccess ? 'Download Ready' : 'Get the Full Audit PDF'}
                    </>
                  )}
                </button>
                
                {downloadSuccess && (
                  <p className="text-emerald-300 font-black text-[10px] uppercase tracking-widest animate-bounce">
                    ✓ Encryption Complete. Audit Report Generated.
                  </p>
                )}
              </div>
           </div>

           {/* Animated Design Elements */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full"></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CRMPage;