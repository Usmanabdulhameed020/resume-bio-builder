import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMail, FiSend, FiInbox, FiBarChart, FiShield, FiDownload, FiLoader, FiCheckCircle } from 'react-icons/fi';

const EmailMarketingPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("ESP Deliverability Report 2026 has been generated.");
    }, 2000);
  };

  const platforms = [
    { id: 'klaviyo', name: "Klaviyo", tag: "E-com Leader", score: 9.8, desc: "Specialized in high-volume lifecycle automation and predictive data modeling.", category: "Enterprise" },
    { id: 'mailchimp', name: "Mailchimp", tag: "Best for Creators", score: 8.5, desc: "The most user-friendly interface for newsletter design and simple marketing flows.", category: "Small Business" },
    { id: 'beehiiv', name: "Beehiiv", tag: "Newsletter Tech", score: 9.4, desc: "Built specifically for growth-minded newsletters with native referral programs.", category: "Startup" },
    { id: 'activecampaign', name: "ActiveCampaign", tag: "Automation King", score: 9.1, desc: "Combines email marketing with powerful CRM-style sales automation.", category: "Mid-Market" },
  ];

  const filtered = filter === 'All' ? platforms : platforms.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-indigo-600"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Deliverability Audit 2026</span>
            </div>
            <h1 className="text-7xl md:text-[11rem] font-black italic uppercase tracking-tighter leading-[0.75] mb-12">
              Inbox <br /> <span className="text-indigo-600">Authority.</span>
            </h1>
            <p className="text-slate-500 text-2xl font-medium leading-tight max-w-xl italic">
              We audit the SMTP infrastructure and IP reputation of the world's leading ESPs to ensure your message avoids the spam folder.
            </p>
          </div>
        </div>
      </section>

      {/* METRIC TICKER */}
      <div className="bg-indigo-900 py-6 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-20 items-center">
          {[1,2,3].map((i) => (
            <div key={i} className="flex gap-20 items-center text-indigo-200/50 text-[10px] font-black uppercase tracking-widest">
              <span className="flex items-center gap-2"><FiSend className="text-indigo-400" /> Global Send Rate: 42.1B/Day</span>
              <span className="flex items-center gap-2"><FiInbox className="text-emerald-400" /> Avg Inbox Placement: 98.2%</span>
              <span className="flex items-center gap-2"><FiShield className="text-indigo-400" /> DMARC Compliance: 100% Verified</span>
            </div>
          ))}
        </div>
      </div>

      {/* PLATFORM LISTING */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Top <span className="text-indigo-600">Performers</span></h2>
            <div className="flex gap-2">
              {['All', 'Enterprise', 'Startup', 'Small Business'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400 border border-slate-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {filtered.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => navigate(`/scorecard/${item.id}`)}
                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-indigo-500 transition-all cursor-pointer"
              >
                <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-black italic text-slate-100 group-hover:text-indigo-100 transition-colors">0{index + 1}</span>
                    <h3 className="text-4xl font-black uppercase italic tracking-tighter group-hover:text-indigo-600 transition-colors">{item.name}</h3>
                  </div>
                  <p className="text-slate-400 font-bold text-lg">{item.desc}</p>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-300 uppercase">Audit Score</p>
                    <p className="text-5xl font-black italic">{item.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL STANDARDS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <FiMail className="text-indigo-600" size={40} />
            <h4 className="text-2xl font-black uppercase italic italic">SMTP Warmup</h4>
            <p className="text-slate-500 font-bold">We evaluate how each platform handles dedicated IP warming to protect your sender reputation.</p>
          </div>
          <div className="space-y-6">
            <FiBarChart className="text-indigo-600" size={40} />
            <h4 className="text-2xl font-black uppercase italic">Segment Logic</h4>
            <p className="text-slate-500 font-bold">Audit of data-filtering speed when processing lists exceeding 1M+ active subscribers.</p>
          </div>
          <div className="space-y-6">
            <FiCheckCircle className="text-indigo-600" size={40} />
            <h4 className="text-2xl font-black uppercase italic">API Throughput</h4>
            <p className="text-slate-500 font-bold">Measuring the latency of transactional email triggers during high-traffic events like Black Friday.</p>
          </div>
        </div>
      </section>

      {/* FUNCTIONAL DOWNLOAD */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[4rem] p-24 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-7xl font-black uppercase italic tracking-tighter mb-8">Maximize <br /> Reach.</h2>
            <p className="text-indigo-100 text-xl font-bold mb-12 max-w-xl mx-auto">Get the 2026 Deliverability Blueprint. 45 pages of technical SMTP configurations.</p>
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-white text-indigo-600 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all inline-flex items-center gap-4"
            >
              {isDownloading ? <><FiLoader className="animate-spin" /> Analyzing...</> : <><FiDownload /> Download Audit Blueprint</>}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EmailMarketingPage;