import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiAlertCircle, FiActivity, FiShield, FiExternalLink, FiCpu, FiMail, FiZap, FiBox, FiLayers } from 'react-icons/fi';

const ScorecardPage = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [toolId]);

  const auditData = {
    // --- PROJECT MANAGEMENT SECTOR (Red Theme) ---
    monday: {
      name: "Monday.com",
      fullScore: 9.8,
      tagline: "The Industrial Work OS",
      url: "https://monday.com",
      category: "pm",
      color: "#EF4444",
      pros: ["Exceptional Automation engine", "Best-in-class UI customization", "Ultra-fast GraphQL API"],
      cons: ["Enterprise pricing is steep", "Steep learning curve for 'Mirrored' columns"],
      verdict: "The gold standard for 2026. Perfect for teams that need to build complex custom workflows without writing code.",
      metrics: { reliability: "99.9%", latency: "98ms", security: "Tier 1" }
    },
    clickup: {
      name: "ClickUp",
      fullScore: 9.5,
      tagline: "The Everything App",
      url: "https://clickup.com",
      category: "pm",
      color: "#EF4444",
      pros: ["Highest feature-to-price ratio", "Native Docs and Whiteboards", "Granular permission control"],
      cons: ["Occasional UI lag on massive lists", "Notification system can be overwhelming"],
      verdict: "The ultimate value play. Best for fast-moving startups that want to consolidate Docs, Tasks, and Goals in one place.",
      metrics: { reliability: "99.7%", latency: "110ms", security: "Tier 1" }
    },

    // --- CRM SECTOR (Blue Theme) ---
    hubspot: {
      name: "HubSpot",
      fullScore: 9.7,
      tagline: "The Inbound Powerhouse",
      url: "https://hubspot.com",
      category: "crm",
      color: "#2563EB",
      pros: ["Seamless Marketing Hub sync", "Top-tier Automation", "Industry-leading CRM UI"],
      cons: ["Steep price jumps on Pro tiers", "Custom objects limited on Starter"],
      verdict: "The most cohesive ecosystem for businesses scaling from 10 to 500 employees.",
      metrics: { reliability: "99.99%", latency: "102ms", security: "ISO 27001" }
    },
    attio: {
      name: "Attio",
      fullScore: 9.2,
      tagline: "The Data-First CRM",
      url: "https://attio.com",
      category: "crm",
      color: "#2563EB",
      pros: ["Instant data enrichment", "Beautiful modern UX", "Super-fast sync engine"],
      cons: ["Newer ecosystem", "Fewer 3rd party integrations"],
      verdict: "The future of CRM. Perfect for tech-savvy teams who hate manual data entry.",
      metrics: { reliability: "99.95%", latency: "45ms", security: "Tier 1" }
    },

    // --- AI & AUTOMATION SECTOR (Emerald Theme) ---
    openai: {
      name: "OpenAI",
      fullScore: 9.9,
      tagline: "Enterprise Intelligence",
      url: "https://openai.com",
      category: "ai",
      color: "#10B981",
      pros: ["Dominant LLM performance (GPT-4o)", "Massive ecosystem adoption", "Advanced vision and voice capabilities"],
      cons: ["High token costs for massive scale", "Rate limits on lower tier API keys"],
      verdict: "The brain of the modern stack. Indispensable for businesses building custom AI agents or automated intelligence layers.",
      metrics: { reliability: "99.91%", latency: "1.2s", security: "SOC2 Type II" }
    },
    anthropic: {
      name: "Claude",
      fullScore: 9.6,
      tagline: "Constitutional Intelligence",
      url: "https://anthropic.com",
      category: "ai",
      color: "#10B981",
      pros: ["Superior long-context window", "More nuanced writing style", "Extreme focus on safety/ethics"],
      cons: ["Smaller integration marketplace", "Slightly slower inference speeds"],
      verdict: "The preferred choice for sensitive data handling and high-fidelity creative output.",
      metrics: { reliability: "99.85%", latency: "1.8s", security: "Tier 1" }
    },
    make: {
      name: "Make.com",
      fullScore: 9.8,
      tagline: "Visual Orchestration",
      url: "https://make.com",
      category: "ai",
      color: "#10B981",
      pros: ["Infinite multi-step branching", "Visual API debugging", "Superior complex logic handling"],
      cons: ["Steeper learning curve than Zapier", "Scenario complexity can get messy"],
      verdict: "The central nervous system for 2026 automations. If you can dream it, you can build it in Make.",
      metrics: { reliability: "99.99%", latency: "Instant", security: "Tier 1" }
    },

    // --- EMAIL MARKETING SECTOR (Indigo Theme) ---
    klaviyo: {
      name: "Klaviyo",
      fullScore: 9.8,
      tagline: "The Data-First ESP",
      url: "https://klaviyo.com",
      category: "email",
      color: "#4F46E5",
      pros: ["Predictive analytics for churn", "Superior Shopify integration", "Ultra-granular segmentation"],
      cons: ["Steep pricing for large lists", "Learning curve for logic builders"],
      verdict: "The absolute standard for E-commerce. If you sell products online, this is the engine you need.",
      metrics: { reliability: "99.99%", latency: "42ms", security: "Tier 1" }
    },
    beehiiv: {
      name: "Beehiiv",
      fullScore: 9.4,
      tagline: "Newsletter Tech",
      url: "https://beehiiv.com",
      category: "email",
      color: "#4F46E5",
      pros: ["Native referral program", "Best-in-class ad network", "Superior writing experience"],
      cons: ["Limited automation for non-newsletters", "Basic CRM capabilities"],
      verdict: "The best growth platform for newsletter-first businesses in 2026.",
      metrics: { reliability: "99.92%", latency: "88ms", security: "Tier 2" }
    }
  };

  const tool = auditData[toolId];
  if (!tool) return <div className="p-20 text-center font-black uppercase italic text-red-500">System Error: Audit ID Not Found</div>;

  const similarTools = Object.entries(auditData).filter(([_, data]) => data.category === tool.category);

  const getBackLink = () => {
    switch(tool.category) {
      case 'pm': return '/guides/project-management';
      case 'crm': return '/guides/crm';
      case 'ai': return '/guides/ai-automation';
      case 'email': return '/guides/email-marketing';
      default: return '/';
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(getBackLink())} 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:opacity-70"
            style={{ color: tool.color }}
          >
            <FiArrowLeft size={14}/> Back to Sector
          </button>
          <div className="text-xs font-black italic uppercase tracking-tighter">
            Audit ID: <span style={{ color: tool.color }}>{toolId.toUpperCase()}_2026_V1</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* 2. HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px]" style={{ backgroundColor: tool.color }}></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: tool.color }}>{tool.tagline}</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-8">
                {tool.name}
              </h1>
              <div className="absolute -top-20 -left-20 w-64 h-64 blur-[120px] opacity-10 pointer-events-none" style={{ backgroundColor: tool.color }}></div>
            </div>
            
            <div className="flex flex-col items-end">
               <div className="relative">
                 <span className="text-[14rem] md:text-[20rem] font-black italic leading-none tracking-tighter text-slate-50 select-none">
                    {tool.fullScore}
                 </span>
                 <div className="absolute inset-0 flex flex-col justify-center items-end pr-4">
                    <span className="text-xs font-black uppercase tracking-[0.5em]" style={{ color: tool.color }}>Performance Grade</span>
                    <span className="text-6xl font-black italic tracking-tighter">/10.0</span>
                 </div>
               </div>
            </div>
          </div>

          {/* 3. CORE TELEMETRY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Uptime Reliability', value: tool.metrics.reliability, icon: <FiActivity /> },
              { label: 'Response/Inference', value: tool.metrics.latency, icon: tool.category === 'ai' ? <FiZap /> : <FiCpu /> },
              { label: 'Security Protocols', value: tool.metrics.security, icon: <FiShield /> }
            ].map((m, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-slate-300 transition-colors">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{m.label}</p>
                  <p className="text-3xl font-black italic tracking-tight">{m.value}</p>
                </div>
                <div className="text-3xl transition-transform group-hover:scale-110 duration-300" style={{ color: tool.color }}>{m.icon}</div>
              </div>
            ))}
          </div>

          {/* 4. ANALYSIS: PROS & CONS */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 relative overflow-hidden">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8 flex items-center gap-2">
                <FiCheckCircle /> Technical Strengths
              </h3>
              <div className="space-y-6">
                {tool.pros.map(pro => (
                  <div key={pro} className="flex items-start gap-4">
                    <FiCheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                    <p className="text-xl font-bold text-slate-700 leading-tight">{pro}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 relative overflow-hidden">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-2" style={{ color: tool.color }}>
                <FiAlertCircle /> Strategic Constraints
              </h3>
              <div className="space-y-6">
                {tool.cons.map(con => (
                  <div key={con} className="flex items-start gap-4">
                    <FiAlertCircle style={{ color: tool.color }} className="mt-1 shrink-0" size={20} />
                    <p className="text-xl font-bold text-slate-700 leading-tight">{con}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. EXECUTIVE VERDICT */}
          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden mb-24 text-center">
             <div className="max-w-4xl mx-auto relative z-10">
               <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-50">Infrastructure Audit Summary</h4>
               <p className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-16">
                 "{tool.verdict}"
               </p>
               
               <button 
                 onClick={() => window.open(tool.url, '_blank')}
                 className="group inline-flex items-center gap-6 px-16 py-8 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-2xl"
                 style={{ backgroundColor: tool.color }}
               >
                 Initialize Deployment <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
             </div>
             <div className="absolute top-0 right-0 w-96 h-96 blur-[150px] opacity-20" style={{ backgroundColor: tool.color }}></div>
          </div>

          {/* 6. COMPETITIVE MATRIX */}
          <section className="py-20 border-t border-slate-100">
             <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
               <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                 Market Comparison: {tool.category === 'email' ? 'Email Marketing' : tool.category === 'ai' ? 'AI & Automation' : tool.category.toUpperCase()}
               </h3>
               <div className="px-4 py-1 rounded-full border border-slate-200 text-[10px] font-bold uppercase tracking-widest">
                 Live Benchmarks
               </div>
             </div>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[600px]">
                 <thead>
                   <tr className="border-b border-slate-100">
                     <th className="pb-8 text-[10px] font-black uppercase tracking-widest text-slate-300">Architecture</th>
                     <th className="pb-8 text-[10px] font-black uppercase tracking-widest text-slate-300">Category</th>
                     <th className="pb-8 text-[10px] font-black uppercase tracking-widest text-slate-300">Index Score</th>
                     <th className="pb-8"></th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                   {similarTools.map(([key, data]) => (
                     <tr key={key} className={`group transition-all hover:bg-slate-50/50 ${key === toolId ? 'bg-slate-50/30' : ''}`}>
                       <td className="py-10">
                          <p className="font-black uppercase italic tracking-tighter text-3xl leading-none mb-1">{data.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{data.tagline}</p>
                       </td>
                       <td className="py-10">
                          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-500">
                            {data.category === 'ai' ? 'Automation' : data.category}
                          </span>
                       </td>
                       <td className="py-10 font-black italic text-4xl" style={{ color: key === toolId ? tool.color : '#cbd5e1' }}>
                         {data.fullScore}
                       </td>
                       <td className="py-10 text-right">
                         <button 
                           onClick={() => navigate(`/scorecard/${key}`)}
                           className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all px-6 py-3 rounded-xl border ${key === toolId ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-slate-900 hover:text-white border-slate-200'}`}
                           disabled={key === toolId}
                         >
                           {key === toolId ? 'Currently Viewing' : 'View Audit'}
                         </button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default ScorecardPage;