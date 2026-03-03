import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Important for page switching

const Article = () => {
  const navigate = useNavigate(); // 2. Initialize the "teleporter"

  const guides = [
    {
      id: "ai-email-marketing", // Unique ID for the URL
      title: "6 Best AI Email Marketing Tools in 2026",
      description: "AI email marketing tools are quickly becoming a game-changer for businesses of all sizes, with 49% of marketers leveraging AI to craft personalized content and drive..."
    },
    {
      id: "google-workspace-review",
      title: "Google Workspace: An Honest Review for 2026",
      description: "Are you seeking a comprehensive software solution for your collaboration and communication needs? Google Workspace is a popular cloud productivity suite that..."
    },
    {
      id: "uscreen-review",
      title: "Uscreen Reviews 2026: Details, Pricing, & Features",
      description: "Are you looking to monetize your content beyond social media creator funds and enjoy more control over your output? Uscreen is an excellent all-in-one membership..."
    },
    {
      id: "instapage-review",
      title: "Instapage Review (2026) – Is It Worth Your Time & Money?",
      description: "Instapage is one of the best landing page platforms brands use to power campaigns and turn more ad clicks into customers. With many powerful landing page builders,..."
    },
    {
      id: "talkroute-review",
      title: "Talkroute Reviews 2026: Details, Pricing, & Features",
      description: "Talkroute is an excellent virtual phone system for businesses of all sizes. Apart from making and receiving calls from your browser, desktop, and smartphone, it als..."
    },
    {
      id: "tiktok-ads-strategy",
      title: "How to Attract Customers With TikTok Ads (Hint: Lowest CAC)",
      description: "TikTok Ads are increasingly becoming popular for brands, businesses, and individuals. The social media giant reached a whopping 1.92 billion users in 2023 and is..."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
            Latest in-Depth <span className="text-[#EF4444]">Guides</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm font-medium uppercase tracking-[0.2em]">
            Read these guides to acquire new skills and insights to 5x your profits.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {guides.map((guide, index) => (
            <div 
              key={index} 
              // 3. When clicked, it goes to the article page
              onClick={() => navigate(`/article/${guide.id}`)}
              className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer flex flex-col h-full border-b-4 hover:border-b-[#EF4444]"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-5 leading-tight group-hover:text-[#EF4444] transition-colors uppercase italic">
                {guide.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                {guide.description}
              </p>
              
              <div className="mt-auto flex items-center gap-3 text-[#EF4444] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                Read Full Guide <ArrowRight size={16} strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;