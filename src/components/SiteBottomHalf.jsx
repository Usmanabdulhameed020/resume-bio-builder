import React from 'react';
import { FiCheck, FiX, FiArrowRight, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SiteBottomHalf = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white font-sans text-slate-900">
      
      {/* 1. THE STATS BAR - High-contrast bridge between sections */}
      <div className="bg-[#0A1118] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Founders", val: "50K+" },
            { label: "Tools Audited", val: "1.7K" },
            { label: "Daily Reviews", val: "120+" },
            { label: "Success Rate", val: "99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-slate-800 last:border-0">
              <p className="text-4xl font-black text-white mb-2 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-black text-[#EF4444] uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. THE SOFTWARE SCORECARD - Deep dive comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-[#EF4444] uppercase tracking-[0.3em] mb-4">Deep Analysis</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
              Project Management <span className="text-[#EF4444]">Scorecard</span>
            </h3>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-400 border-b border-slate-100">
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest">Platform</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Automation</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Free Tier</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Final Score</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="p-8 font-black text-slate-900 text-lg italic">Monday.com</td>
                  <td className="p-8 text-center text-emerald-500"><FiCheck className="mx-auto" size={24} /></td>
                  <td className="p-8 text-center text-slate-200"><FiX className="mx-auto" size={24} /></td>
                  <td className="p-8 text-center font-black text-[#EF4444] text-xl">9.8</td>
                </tr>
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="p-8 font-black text-slate-900 text-lg italic">ClickUp</td>
                  <td className="p-8 text-center text-emerald-500"><FiCheck className="mx-auto" size={24} /></td>
                  <td className="p-8 text-center text-emerald-500"><FiCheck className="mx-auto" size={24} /></td>
                  <td className="p-8 text-center font-black text-[#EF4444] text-xl">9.5</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-8 font-black text-slate-900 text-lg italic">Asana</td>
                  <td className="p-8 text-center text-slate-200"><FiX className="mx-auto" size={24} /></td>
                  <td className="p-8 text-center text-emerald-500"><FiCheck className="mx-auto" size={24} /></td>
                  <td className="p-8 text-center font-black text-[#EF4444] text-xl">8.9</td>
                </tr>
              </tbody>
            </table>
            <div className="p-8 bg-slate-50 text-center border-t border-slate-100">
              <button 
                onClick={() => navigate('/scorecard-detail')}
                className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2 mx-auto hover:text-[#EF4444] transition-all group"
              >
                View Full Comparison Report <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteBottomHalf;