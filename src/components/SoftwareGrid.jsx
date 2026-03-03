import React, { useState } from 'react';
import { 
  Star, 
  ArrowRight, 
  Layout, 
  CheckCircle2, 
  Zap, 
  Target, 
  Layers, 
  Users, 
  BarChart3, 
  ShieldCheck 
} from 'lucide-react';

// Added onAction prop to receive the trigger from App.jsx
const SoftwareGrid = ({ onAction }) => {
  const [activeCategory, setActiveCategory] = useState('Project Management');

  const categories = [
    'Project Management', 'CRM', 'Website Builders', 'Ecommerce Platforms', 
    'Web Hosting', 'Marketing Automation', 'ERP', 'Accounting', 
    'Webinar Software', 'All Categories'
  ];

  const softwareData = [
    { name: 'Monday', icon: <Layout className="text-rose-500" />, rating: 5, desc: 'Best project management software for beginners.', linkText: 'Free Plan' },
    { name: 'ClickUp', icon: <Zap className="text-violet-500" />, rating: 5, desc: 'Best free project management software.', linkText: 'Free Plan' },
    { name: 'Wrike', icon: <CheckCircle2 className="text-emerald-500" />, rating: 4.5, desc: 'Best task management platform.', linkText: 'Free Plan' },
    { name: 'Asana', icon: <Target className="text-orange-500" />, rating: 4, desc: 'Great project management software for developers.', linkText: 'Free Plan' },
    { name: 'Smartsheet', icon: <Layers className="text-blue-500" />, rating: 4, desc: 'Best spreadsheet-like PM tool.', linkText: 'Free Trial' },
    { name: 'Teamwork', icon: <Users className="text-cyan-500" />, rating: 4, desc: 'Best PM software for client interaction.', linkText: 'Free Trial' },
    { name: 'Zoho Projects', icon: <BarChart3 className="text-red-500" />, rating: 4, desc: 'Good cheap project management software.', linkText: 'Free Trial' },
    { name: 'Hive', icon: <ShieldCheck className="text-amber-500" />, rating: 4, desc: 'Great project management platform.', linkText: 'Free Trial' },
  ];

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic">
            Top Business <span className="text-[#EF4444]">Stack</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.25em]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-all duration-300 pb-2 border-b-2 ${
                  activeCategory === cat ? 'text-[#EF4444] border-[#EF4444]' : 'border-transparent hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {softwareData.map((item, index) => (
            <div 
              key={index} 
              // Trigger the modal on click
              onClick={onAction}
              className="group bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 relative cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-md">
                {React.cloneElement(item.icon, { size: 32, strokeWidth: 2.5 })}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{item.name}</h3>

              {/* Rating Badges */}
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-1">
                  {item.rating} <Star size={8} fill="currentColor" />
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      fill={i < Math.floor(item.rating) ? "currentColor" : "none"} 
                      className={i < Math.floor(item.rating) ? "" : "text-slate-200"}
                    />
                  ))}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium italic">
                "{item.desc}"
              </p>

              {/* Link CTA */}
              <button className="mt-auto text-[#EF4444] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                {item.linkText} <ArrowRight size={14} strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Footer Link */}
        <div className="mt-20 text-center">
          <button 
            onClick={onAction}
            className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#EF4444] hover:scale-105 transition-all shadow-xl"
          >
            Explore All {activeCategory} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareGrid;