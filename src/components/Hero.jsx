import React, { useState, useEffect } from 'react';
import { 
  FiSend, FiLayout, FiMail, FiSearch, FiCode, 
  FiX, FiLock, FiUser, FiCalendar, FiChevronDown, FiArrowRight, FiCommand, FiCpu, FiZap 
} from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Firebase Imports
import { auth } from '../firebase'; 
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile 
} from "firebase/auth";

const Hero = ({ isModalOpen, setIsModalOpen, isLoginTab, setIsLoginTab }) => {
  const navigate = useNavigate();
  
  // --- UPDATED SEARCH DATA (Includes AI & Automation) ---
  const auditData = {
    monday: { name: "Monday.com", category: "Project Management", color: "#EF4444", tagline: "Work OS" },
    clickup: { name: "ClickUp", category: "Project Management", color: "#EF4444", tagline: "The Everything App" },
    hubspot: { name: "HubSpot", category: "CRM", color: "#2563EB", tagline: "Inbound Powerhouse" },
    attio: { name: "Attio", category: "CRM", color: "#2563EB", tagline: "Data-first CRM" },
    klaviyo: { name: "Klaviyo", category: "Email", color: "#4F46E5", tagline: "E-com Intelligence" },
    mailchimp: { name: "Mailchimp", category: "Email", color: "#4F46E5", tagline: "Creative Suite" },
    activecampaign: { name: "ActiveCampaign", category: "Email", color: "#4F46E5", tagline: "Automation King" },
    beehiiv: { name: "Beehiiv", category: "Email", color: "#4F46E5", tagline: "Newsletter Tech" },
    // AI & Automation Tools
    openai: { name: "OpenAI", category: "AI & Automation", color: "#10B981", tagline: "Enterprise LLM" },
    anthropic: { name: "Claude", category: "AI & Automation", color: "#10B981", tagline: "Nuanced Reasoning" },
    make: { name: "Make.com", category: "AI & Automation", color: "#10B981", tagline: "Visual Workflow King" },
    zapier: { name: "Zapier", category: "AI & Automation", color: "#10B981", tagline: "Gold Standard Sync" }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showForgotPw, setShowForgotPw] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", fullName: "", dob: "" });
  const [heroEmail, setHeroEmail] = useState(""); 
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) navigate('/dashboard'); 
      setLoading(false);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      unsubscribe();
    };
  }, [navigate]);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleHeroAccess = (e) => {
    e.preventDefault();
    if (heroEmail) {
      setFormData({ ...formData, email: heroEmail });
      setIsLoginTab(false);
      setIsModalOpen(true);
    }
  };

  const filteredSearch = Object.entries(auditData).filter(([key, tool]) =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const loadToast = toast.loading(isLoginTab ? "Verifying..." : "Creating account...");
    try {
      if (isLoginTab) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        toast.success("Welcome back!", { id: loadToast });
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(userCredential.user, { displayName: formData.fullName });
        toast.success(`Welcome, ${formData.fullName}!`, { id: loadToast });
      }
      navigate('/dashboard');
    } catch (err) { toast.error(err.message, { id: loadToast }); }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!formData.email) return toast.error("Please enter your email.");
    const resetToast = toast.loading("Sending link...");
    try {
      await sendPasswordResetEmail(auth, formData.email);
      toast.success("Reset link sent!", { id: resetToast });
      setShowForgotPw(false);
    } catch (err) { toast.error(err.message, { id: resetToast }); }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed in with Google!");
      navigate('/dashboard');
    } catch (err) { toast.error(err.message); }
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-black italic text-[#EF4444] animate-pulse uppercase tracking-widest">Stacked...</div>;

  return (
    <div className="min-h-screen bg-[#FDF8F1] font-sans text-slate-900">
      <Toaster position="top-center" />
      
      {/* --- COMMAND-K SEARCH MODAL --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[300] flex items-start justify-center pt-24 px-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsSearchOpen(false)}></div>
          <div className="relative bg-white w-full max-w-xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in duration-200">
            <div className="flex items-center px-6 py-5 border-b border-slate-100">
              <FiSearch className="text-slate-400 mr-4" size={20} />
              <input autoFocus className="flex-1 bg-transparent border-none outline-none text-lg font-bold text-slate-800 placeholder:text-slate-300 italic" placeholder="Search systems..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-[9px] font-black text-slate-400 uppercase">ESC</div>
            </div>
            <div className="max-h-[400px] overflow-y-auto p-4">
              {filteredSearch.length > 0 ? filteredSearch.map(([key, tool]) => (
                <button key={key} onClick={() => { navigate(`/scorecard/${key}`); setIsSearchOpen(false); }} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 group transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black italic" style={{ backgroundColor: tool.color }}>{tool.name[0]}</div>
                    <div className="text-left">
                      <div className="font-black uppercase italic tracking-tighter text-slate-800">{tool.name}</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{tool.category}</div>
                    </div>
                  </div>
                  <FiArrowRight className="text-slate-200 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </button>
              )) : <div className="py-12 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">No systems found.</div>}
            </div>
          </div>
        </div>
      )}

      {/* --- AUTH MODAL (REVERTED TO YOUR ORIGINAL STYLE) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-10 animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-black transition-colors"><FiX size={24} /></button>
            <div className="text-center mb-8">
              <div className="text-2xl font-black tracking-tighter uppercase italic mb-2">ST<span className="text-[#EF4444]">ACKED</span></div>
              <p className="text-slate-500 text-sm font-medium">{showForgotPw ? "Recover account" : isLoginTab ? "Welcome back, Founder." : "Create your profile"}</p>
            </div>

            {showForgotPw ? (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <input type="email" name="email" value={formData.email} placeholder="Email" required className="w-full bg-slate-50 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-red-100" onChange={handleInputChange} />
                <button className="w-full bg-black text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Send Reset Link</button>
                <button type="button" onClick={() => setShowForgotPw(false)} className="w-full text-[10px] font-black uppercase text-slate-400 text-center tracking-widest">Back to Login</button>
              </form>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {!isLoginTab && (
                  <>
                    <input type="text" name="fullName" placeholder="Full Name" required className="w-full bg-slate-50 rounded-2xl py-4 px-6 text-sm outline-none" onChange={handleInputChange} />
                    <input type="date" name="dob" required className="w-full bg-slate-50 rounded-2xl py-4 px-6 text-sm outline-none text-slate-400" onChange={handleInputChange} />
                  </>
                )}
                <input type="email" name="email" value={formData.email} placeholder="Business Email" required className="w-full bg-slate-50 rounded-2xl py-4 px-6 text-sm outline-none" onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" required className="w-full bg-slate-50 rounded-2xl py-4 px-6 text-sm outline-none" onChange={handleInputChange} />
                
                {isLoginTab && (
                  <div className="text-right">
                    <button type="button" onClick={() => setShowForgotPw(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-[#EF4444]">Forgot Password?</button>
                  </div>
                )}
                
                <button className="w-full bg-[#EF4444] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-red-100">
                  {isLoginTab ? "Sign In" : "Get Started Now"}
                </button>
                <button type="button" onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 py-3 border rounded-xl hover:bg-slate-50 transition-colors font-bold text-xs uppercase tracking-widest">
                  <FcGoogle size={20} /> Google
                </button>
              </form>
            )}

            {!showForgotPw && (
              <p className="text-center mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                {isLoginTab ? "New here?" : "Already a member?"} 
                <button onClick={() => setIsLoginTab(!isLoginTab)} className="text-[#EF4444] hover:underline ml-1">{isLoginTab ? "Join" : "Login"}</button>
              </p>
            )}
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter uppercase italic cursor-pointer">ST<span className="text-[#EF4444]">ACKED</span></div>
          <div className="flex items-center gap-6">
            <div onClick={() => setIsSearchOpen(true)} className="hidden md:flex items-center gap-3 bg-slate-100/50 px-4 py-2 rounded-xl cursor-pointer hover:bg-slate-200 transition-all border border-slate-200/50 group">
              <FiSearch className="text-slate-400 group-hover:text-black" size={16} />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-black">Search</span>
              <span className="text-[9px] font-black px-1.5 py-0.5 bg-white rounded border border-slate-200 text-slate-400 italic">⌘K</span>
            </div>
            <FiSearch className="md:hidden text-slate-400" size={20} onClick={() => setIsSearchOpen(true)} />
            <button onClick={() => { setIsLoginTab(true); setIsModalOpen(true); }} className="bg-black text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#EF4444] transition-all flex items-center gap-2 shadow-xl"><FiSend /> Join Free</button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 pt-40 pb-32 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="flex items-center gap-2 mb-8 bg-white/50 border border-slate-200 w-fit px-4 py-1 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF4444]"></span></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live for Jan 2026</span>
          </div>
          <h1 className="text-6xl xl:text-8xl font-black leading-[0.85] mb-8 text-[#1A2B3B] tracking-tighter italic uppercase">Build Your<br /><span className="text-[#EF4444]">Power</span> Stack.</h1>
          <p className="text-slate-400 max-w-md text-xl leading-relaxed mb-12 font-medium">Join 50k+ founders using <span className="text-slate-900 font-bold underline decoration-[#EF4444] decoration-4">Stacked</span> to find tools that actually drive revenue.</p>
          
          <form onSubmit={handleHeroAccess} className="flex flex-col sm:flex-row max-w-lg shadow-2xl rounded-2xl overflow-hidden bg-white border-4 border-white">
            <input type="email" placeholder="Your business email..." className="flex-1 px-8 py-6 outline-none text-slate-700 text-lg font-medium" value={heroEmail} onChange={(e) => setHeroEmail(e.target.value)} />
            <button type="submit" className="bg-[#EF4444] text-white px-10 py-6 font-black text-sm uppercase tracking-widest hover:bg-black transition-all">Access</button>
          </form>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EF4444]/10 rounded-full blur-[120px]"></div>
          <div className="relative w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-white shadow-2xl z-10 p-6 border-[16px] border-white">
            <div className="w-full h-full rounded-full relative overflow-hidden grid grid-cols-2 grid-rows-2">
              <div className="bg-rose-50/40 flex flex-col items-center justify-center border-r border-b border-white"><FiLayout className="text-[#EF4444] mb-2 text-3xl" /><span className="text-[9px] font-black uppercase text-slate-300">Sales Hub</span></div>
              <div className="bg-blue-50/40 flex flex-col items-center justify-center border-b border-white"><FiCode className="text-blue-500 mb-2 text-3xl" /><span className="text-[9px] font-black uppercase text-slate-300">Dev Stack</span></div>
              <div className="bg-emerald-50/40 flex flex-col items-center justify-center border-r border-white"><FiMail className="text-emerald-500 mb-2 text-3xl" /><span className="text-[9px] font-black uppercase text-slate-300">Email HQ</span></div>
              <div className="bg-amber-50/40 flex flex-col items-center justify-center"><FaCalculator className="text-amber-500 mb-2 text-3xl" /><span className="text-[9px] font-black uppercase text-slate-300">Finances</span></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#0A1118] rounded-full flex flex-col items-center justify-center text-white text-center shadow-3xl border-[10px] border-white">
                <span className="text-5xl sm:text-7xl font-black tracking-tighter italic">+1.7K</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-3">Verified Tools</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic text-center">Latest <span className="text-[#EF4444]">Intelligence</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={() => setIsModalOpen(true)} className="p-8 rounded-[2rem] border border-slate-50 hover:shadow-xl transition-all cursor-pointer group">
              <h3 className="text-lg font-black text-slate-900 mb-4 group-hover:text-[#EF4444] transition-colors uppercase italic">6 Best AI Email Tools</h3>
              <p className="text-slate-400 text-sm">AI email marketing tools are quickly becoming a game-changer for businesses.</p>
            </div>
            <div onClick={() => setIsModalOpen(true)} className="p-8 rounded-[2rem] border border-slate-50 hover:shadow-xl transition-all cursor-pointer group">
              <h3 className="text-lg font-black text-slate-900 mb-4 group-hover:text-[#EF4444] transition-colors uppercase italic">Google Workspace Review</h3>
              <p className="text-slate-400 text-sm">A comprehensive review of the collaboration suite for 2026 teams.</p>
            </div>
            <div onClick={() => setIsModalOpen(true)} className="p-8 rounded-[2rem] border border-slate-50 hover:shadow-xl transition-all cursor-pointer group">
              <h3 className="text-lg font-black text-slate-900 mb-4 group-hover:text-[#EF4444] transition-colors uppercase italic">TikTok Ad Strategy</h3>
              <p className="text-slate-400 text-sm">How to attract high-paying customers using short-form video ads.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;