import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar, FiUser, FiChevronRight, FiShare2, FiCheck } from 'react-icons/fi';

const ArticleDetail = ({ onAction }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // 1. CONTENT DATABASE
  const articlesData = {
    "ai-email-marketing": {
      title: "6 Best AI Email Marketing Tools in 2026",
      date: "Jan 15, 2026",
      readTime: "8 min read",
      author: "James Wilson",
      category: "Marketing",
      content: `AI email marketing tools are no longer just an option; they are a necessity for staying competitive. In 2026, the landscape has shifted from basic automation to hyper-personalized generative AI. 
      
      These tools don't just send emails; they predict when your customer is most likely to open them and what specific words will trigger a click. We have tested the top 6 tools to see which ones actually deliver on the promise of 5x ROI.`
    },
    "google-workspace-review": {
      title: "Google Workspace: An Honest Review for 2026",
      date: "Jan 18, 2026",
      readTime: "12 min read",
      author: "Sarah Chen",
      category: "Software",
      content: `Google Workspace has undergone its most significant transformation since its inception. With Gemini AI integrated into every sheet, doc, and slide, the way teams collaborate has fundamentally shifted.
      
      Is it still the best choice for a 100+ person startup? We dive into the pricing tiers and the new 'AI-First' features that define the modern office.`
    },
    "uscreen-review": {
      title: "Uscreen Reviews 2026: Details, Pricing, & Features",
      date: "Jan 20, 2026",
      readTime: "10 min read",
      author: "Marcus Thorne",
      category: "Ecommerce",
      content: `Uscreen remains the leader for creators who want to own their audience. Unlike social platforms, Uscreen gives you total control over your branding and subscription data. 
      
      In this review, we look at the new 2026 mobile app builder and how it helps creators reduce churn by 30% through direct community engagement.`
    },
    "instapage-review": {
      title: "Instapage Review (2026) – Is It Worth Your Time & Money?",
      date: "Jan 22, 2026",
      readTime: "9 min read",
      author: "Elena Rodriguez",
      category: "Marketing",
      content: `Speed is the name of the game in 2026. Instapage’s new 'AdMap' feature allows you to visualize your entire customer journey from ad click to conversion. 
      
      While the price is higher than basic builders, the increase in conversion rates often pays for the software within the first month of a campaign.`
    },
    "talkroute-review": {
      title: "Talkroute Reviews 2026: Details, Pricing, & Features",
      date: "Jan 24, 2026",
      readTime: "7 min read",
      author: "David G.",
      category: "Business",
      content: `For remote teams, Talkroute is the bridge between professional phone systems and modern flexibility. Their virtual system is now fully integrated with AI transcription and sentiment analysis.
      
      We tested their new 'Smart Routing' feature that uses AI to send calls to the right team member based on caller history.`
    },
    "tiktok-ads-strategy": {
      title: "How to Attract Customers With TikTok Ads (Hint: Lowest CAC)",
      date: "Jan 26, 2026",
      readTime: "15 min read",
      author: "Sofia Lee",
      category: "Advertising",
      content: `TikTok Ads in 2026 are about 'Entertaining, not Selling.' The algorithm now prioritizes 'Search-Based' ads, meaning your products show up when users search for problems.
      
      We break down the 'Low CAC' strategy that involves using micro-influencer content combined with TikTok’s automated bidding tools.`
    }
  };

  const article = articlesData[id];

  // 2. SCROLL PROGRESS LOGIC
  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // 3. COPY TO CLIPBOARD LOGIC
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-3xl font-black uppercase italic mb-4 tracking-tighter">Article Not Found</h2>
        <button onClick={() => navigate('/')} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF8F1] selection:bg-[#EF4444] selection:text-white pb-20">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#EF4444] z-[60] transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Navigation */}
      <nav className="border-b border-slate-200 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-black transition-all"
          >
            <FiArrowLeft size={16} /> Back
          </button>
          
          <div className="font-black italic text-xl tracking-tighter uppercase">
            ST<span className="text-[#EF4444]">ACKED</span>
          </div>

          <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#EF4444] transition-all"
          >
            {copied ? <FiCheck className="text-emerald-500" /> : <FiShare2 />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* Header Metadata */}
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-[#EF4444] text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest italic rounded-sm">
            {article.category}
          </span>
          <div className="flex items-center gap-4 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
             <span className="flex items-center gap-1"><FiCalendar /> {article.date}</span>
             <span className="flex items-center gap-1"><FiClock /> {article.readTime}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tighter uppercase italic">
          {article.title}
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-4 mb-16 pb-8 border-b border-slate-200">
          <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-xs italic">
            {article.author.charAt(0)}
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">{article.author}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Expert Contributor</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-12 whitespace-pre-line italic opacity-90">
            {article.content}
          </p>
          
          <div className="my-16 p-10 bg-white rounded-[2.5rem] border-l-8 border-[#EF4444] shadow-xl italic text-slate-600 font-bold text-lg md:text-xl leading-snug">
            "The key to winning in 2026 isn't just using AI—it's using the right AI tools at the right stage of your funnel."
          </div>
          
          <h2 className="text-3xl font-black text-slate-900 uppercase italic mt-12 mb-6 tracking-tight">Strategy Overview</h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            Our deep-dive analysis shows that founders who implement these specific stacks reduce their manual workload by 40% within the first 60 days. This allows for rapid scaling without increasing headcount.
          </p>
        </div>

        {/* Professional Footer CTA */}
        <div className="mt-28 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[#EF4444] opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          <h3 className="text-4xl font-black uppercase italic mb-4 tracking-tighter">Ready to Scale?</h3>
          <p className="text-slate-400 text-sm mb-10 font-medium uppercase tracking-[0.2em] max-w-sm mx-auto leading-loose">
            Join 50k+ readers getting the edge on software intelligence.
          </p>
          <button 
            onClick={onAction}
            className="bg-[#EF4444] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black hover:scale-105 transition-all shadow-2xl active:scale-95"
          >
            Subscribe Free Now
          </button>
        </div>

        {/* Related Articles Grid */}
        <div className="mt-32 border-t border-slate-200 pt-16">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12 text-center">
            You Might Also Like
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(articlesData)
              .filter(key => key !== id)
              .slice(0, 2)
              .map(key => (
                <div 
                  key={key}
                  onClick={() => navigate(`/article/${key}`)}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all cursor-pointer group border-b-4 hover:border-b-[#EF4444]"
                >
                  <p className="text-[#EF4444] text-[9px] font-black uppercase tracking-widest mb-4">{articlesData[key].category}</p>
                  <h5 className="font-black uppercase italic text-lg leading-tight group-hover:text-[#EF4444] transition-colors">
                    {articlesData[key].title}
                  </h5>
                  <div className="mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-black transition-colors">
                    Read Article <FiChevronRight size={14} />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;