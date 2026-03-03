import React from 'react';
import { FiSearch, FiLayers, FiBarChart } from 'react-icons/fi';
import { LuArrowRight } from 'react-icons/lu';

// 1. ADD "onAction" here to receive the trigger from App.jsx
const HowItWorks = ({ onAction }) => {
  const steps = [
    {
      id: "01",
      title: "We Research & Audit",
      desc: "Our team spends 100+ hours testing every software tool so you don't have to waste time on bad products.",
      icon: <FiSearch size={24} className="text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      id: "02",
      title: "Category Ranking",
      desc: "We rank tools based on pricing, ease of use, and scalability features specifically for growing businesses.",
      icon: <FiLayers size={24} className="text-[#EF4444]" />,
      color: "bg-red-50"
    },
    {
      id: "03",
      title: "Your Custom Stack",
      desc: "Get a curated list of tools that work perfectly together, ensuring your business data flows seamlessly.",
      icon: <FiBarChart size={24} className="text-emerald-500" />,
      color: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-24 bg-[#FDF8F1]/50 border-t border-orange-100/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EF4444] mb-4">The Process</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#1A2B3B] leading-tight tracking-tighter uppercase italic">
              HOW WE CHOOSE THE <br />RIGHT TOOLS FOR YOU
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
            We analyze thousands of data points to ensure your business stack is built on a foundation of reliability and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -top-6 -left-4 text-8xl font-black text-slate-900/5 select-none group-hover:text-[#EF4444]/10 transition-colors">
                {step.id}
              </div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
                <div className="w-10 h-1 bg-slate-200 group-hover:w-20 group-hover:bg-[#EF4444] transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. UPDATE THE BUTTON HERE */}
        <div className="mt-20 bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase italic">Ready to optimize your business?</h4>
            <p className="text-slate-400 text-sm font-medium">Join 50,000+ founders receiving our weekly stack audits.</p>
          </div>
          <button 
            onClick={onAction} // THIS TRIGGERS THE MODAL
            className="bg-[#EF4444] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-black transition-all shadow-lg hover:shadow-[#EF4444]/20 active:scale-95"
          >
            Start Your Audit <LuArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;