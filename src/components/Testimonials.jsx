import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { LuBadgeCheck } from 'react-icons/lu';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "CEO at TechFlow",
      text: "We were spending $2k/month on tools we barely used. This guide helped us cut our stack by 40% while increasing output. Absolute game changer.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Founder, Bloom Creative",
      text: "The 'Top Business Software' section is my go-to every time we scale. The comparisons are honest and saved us weeks of research.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Marcus Thorne",
      role: "Operations at ScaleUp",
      text: "Finally, a site that doesn't just push the most expensive software. The free tools recommendations alone have been worth thousands to us.",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Matching your 'Latest Guides' style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-4">
            <LuBadgeCheck size={14} /> 100% Verified Founders
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">
            Trusted by <span className="text-[#EF4444]">50,000+</span> Founders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="relative p-10 rounded-[2.5rem] bg-[#FDF8F1] border border-orange-100/50 hover:shadow-2xl hover:shadow-orange-200/20 transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-10 text-orange-200 group-hover:text-[#EF4444] transition-colors duration-500">
                <FaQuoteLeft size={30} />
              </div>

              {/* Star Rating */}
              <div className="flex text-yellow-400 gap-1 mb-6">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 font-medium leading-relaxed mb-8 italic">
                "{rev.text}"
              </p>

              {/* Founder Profile */}
              <div className="flex items-center gap-4 border-t border-orange-100 pt-8">
                <img 
                  src={rev.image} 
                  alt={rev.name} 
                  className="w-14 h-14 rounded-full border-4 border-white shadow-md shadow-orange-900/10" 
                />
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{rev.name}</h4>
                  <p className="text-[11px] font-bold text-[#EF4444] uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-20 py-8 border-y border-slate-100 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 grayscale contrast-125">
           <span className="text-xl font-serif font-bold italic">Forbes</span>
           <span className="text-lg font-bold">CoSchedule</span>
           <span className="text-xl font-black">HUFFPOST</span>
           <span className="text-lg font-bold italic underline">HubSpot</span>
           <span className="text-lg font-bold uppercase tracking-tighter">Entrepreneur</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;