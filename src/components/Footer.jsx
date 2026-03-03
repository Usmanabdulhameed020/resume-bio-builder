import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiInstagram, FiMail, FiCheck, FiLoader } from 'react-icons/fi';

const Footer = () => {
  const navigate = useNavigate();
  
  // Newsletter States
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  // Handle Newsletter Submission
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate an API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // Reset to idle after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  // Helper for External Links
  const openSocial = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#FDF8F1] pt-24 pb-12 border-t border-orange-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div 
              onClick={() => navigate('/')} 
              className="text-2xl font-black tracking-tighter uppercase italic cursor-pointer"
            >
              UN<span className="text-[#EF4444]">KNOWN</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Helping modern founders build the perfect business stack through data-driven audits and honest software reviews.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => openSocial('https://twitter.com')}
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#EF4444] hover:shadow-md cursor-pointer transition-all border border-transparent hover:border-orange-50"
              >
                <FiTwitter />
              </button>
              <button 
                onClick={() => openSocial('https://linkedin.com')}
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#EF4444] hover:shadow-md cursor-pointer transition-all border border-transparent hover:border-orange-50"
              >
                <FiLinkedin />
              </button>
              <button 
                onClick={() => openSocial('https://instagram.com')}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#EF4444] hover:shadow-md cursor-pointer transition-all border border-transparent hover:border-orange-50"
              >
                <FiInstagram />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (Using React Router) */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Software Guides</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/project-management">Project Management</Link></li>
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/guides/crm">CRM Software</Link></li>
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/guides/email-marketing">Email Marketing</Link></li>
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/guides/ai-automation">AI Automation</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/about-us">About Us</Link></li>
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/contact-support">Contact Support</Link></li>
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="hover:text-[#EF4444] transition-colors"><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Functional Newsletter */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-orange-900/5 border border-orange-50">
            <h4 className="text-sm font-black text-slate-900 mb-2">Join the Club</h4>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-6">Weekly Stack Updates</p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={status === "success" ? "Subscribed!" : "Email address"}
                disabled={status === "loading" || status === "success"}
                className={`w-full bg-slate-50 border-none rounded-xl py-4 pl-4 pr-12 text-sm outline-none transition-all focus:ring-2 ${
                  status === "success" ? "focus:ring-emerald-100 italic" : "focus:ring-red-100"
                }`}
              />
              <button 
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`absolute right-2 top-2 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  status === "success" ? "bg-emerald-500" : "bg-[#EF4444] hover:bg-black"
                } text-white`}
              >
                {status === "loading" ? <FiLoader className="animate-spin" /> : 
                 status === "success" ? <FiCheck /> : <FiMail />}
              </button>
            </form>
            {status === "success" && (
              <p className="text-[10px] text-emerald-600 font-black uppercase tracking-tighter mt-3 animate-pulse">
                Check your inbox soon.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-12 border-t border-orange-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Unknown Media. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/sitemap" className="hover:text-[#EF4444] transition-colors">Sitemap</Link>
            <Link to="/cookies" className="hover:text-[#EF4444] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;