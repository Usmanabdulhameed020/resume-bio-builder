import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { 
  FiGrid, FiLayers, FiTrendingUp, FiLogOut, FiSearch, FiUser, FiZap, 
  FiBell, FiPlus, FiX, FiActivity, FiShoppingCart, FiCpu, 
  FiExternalLink, FiPlusSquare, FiPieChart, FiShield, FiClock, FiSettings, FiMaximize2 
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // --- EXTENDED DATA STATE ---
  const [myStack, setMyStack] = useState([
    { id: 1, name: "HubSpot", category: "CRM & Sales", status: "Verified", color: "bg-orange-500", spend: "$49/mo", load: 24 },
    { id: 2, name: "Stripe", category: "Payments", status: "Verified", color: "bg-indigo-600", spend: "$0/mo", load: 88 },
    { id: 3, name: "OpenAI", category: "Intelligence", status: "Active", color: "bg-emerald-600", spend: "$124/mo", load: 42 },
  ]);

  const marketplaceTools = [
    { id: 101, name: "Anthropic", category: "Intelligence", desc: "Claude 3.5 Sonnet for advanced reasoning.", color: "bg-stone-800", price: "Pay-as-you-go" },
    { id: 102, name: "Airtable", category: "Operations", desc: "Enterprise-grade relational database.", color: "bg-blue-400", price: "$24/user" },
    { id: 103, name: "Zapier", category: "Automation", desc: "Legacy connector for 5000+ apps.", color: "bg-orange-600", price: "$49/mo" },
    { id: 104, name: "Pinecone", category: "Vector DB", desc: "Vector storage for AI long-term memory.", color: "bg-blue-800", price: "$70/mo" },
    { id: 105, name: "Make.com", category: "Logic", desc: "Visual automation for complex workflows.", color: "bg-purple-600", price: "$10/mo" },
    { id: 106, name: "Vercel", category: "Hosting", desc: "Deployment platform for modern web apps.", color: "bg-black", price: "Custom" }
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) { setUser(currentUser); setLoading(false); } 
      else { navigate('/'); }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try { 
      await signOut(auth); 
      toast.success("Secure Session Terminated"); 
      navigate('/'); 
    } 
    catch (err) { 
      toast.error("Logout failed"); 
    }
  };

  const installFromMarketplace = (tool) => {
    if (myStack.find(item => item.id === tool.id)) {
      toast.error("Protocol already exists in stack"); return;
    }
    setMyStack([...myStack, { ...tool, status: "Initializing", spend: "$0/mo", load: 0 }]);
    toast.success(`${tool.name} Deployment Started`);
    setTimeout(() => {
        setMyStack(curr => curr.map(i => i.id === tool.id ? {...i, status: "Verified"} : i));
    }, 2500);
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
      <FiCpu className="text-emerald-500 animate-spin mb-4" size={40} />
      <div className="text-[10px] font-black uppercase tracking-[0.5em]">System_Initializing...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F1F3F6] flex font-sans selection:bg-black selection:text-white">
      
      {/* --- ENTERPRISE SIDEBAR --- */}
      <aside className="w-80 bg-white border-r border-slate-200 hidden lg:flex flex-col p-10 fixed h-full z-20">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-2xl">
            <FiLayers className="text-white" />
          </div>
          <div className="text-2xl font-black tracking-tighter uppercase italic">
            ST<span className="text-[#EF4444]">ACKED</span>
          </div>
        </div>
        
        <nav className="space-y-2 flex-1">
          <SectionLabel label="Core Operations" />
          <SidebarLink icon={<FiGrid />} label="Command Center" active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <SidebarLink icon={<FiLayers />} label="Stack Architecture" active={activeTab === 'My Stacks'} onClick={() => setActiveTab('My Stacks')} />
          <SidebarLink icon={<FiTrendingUp />} label="Market Intelligence" active={activeTab === 'Marketplace'} onClick={() => setActiveTab('Marketplace')} />
          <SidebarLink icon={<FiZap />} label="Neural Automations" active={activeTab === 'Automations'} onClick={() => setActiveTab('Automations')} />
          
          <div className="pt-10">
            <SectionLabel label="Governance" />
            <SidebarLink icon={<FiShield />} label="Security & IAM" />
            <SidebarLink icon={<FiSettings />} label="Workspace Config" />
          </div>
        </nav>

        <div className="mt-auto pt-10 border-t border-slate-100">
            <div className="bg-slate-50 p-6 rounded-[2rem] mb-6">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Cloud Usage</p>
                <div className="h-1 w-full bg-slate-200 rounded-full mb-2">
                    <div className="h-full w-[65%] bg-black rounded-full"></div>
                </div>
                <p className="text-[9px] font-black uppercase text-slate-900">65% of Tier Limits</p>
            </div>
            {/* Sidebar Logout Button */}
            <button onClick={handleLogout} className="flex items-center gap-3 px-5 py-4 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-[#EF4444] transition-all w-full">
                <FiLogOut /> Terminate Session
            </button>
        </div>
      </aside>

      {/* --- MAIN STAGE --- */}
      <main className="flex-1 lg:ml-80 min-h-screen">
        
        <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-10 px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="relative w-96">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Query resources..." className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-12 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-black transition-all" />
            </div>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-black uppercase tracking-widest">Global Ops: Stable</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold italic overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="team" />
                </div>)}
            </div>
            <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-black hover:text-white transition-all"><FiBell /></button>
            
            {/* Header Logout Quick-Action */}
            <button 
              onClick={handleLogout} 
              className="group flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
              title="Sign Out"
            >
              <FiLogOut className="text-slate-400 group-hover:text-red-500" />
              <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-red-500">Exit</span>
            </button>

            <div className="w-10 h-10 bg-black text-white rounded-2xl flex items-center justify-center font-black text-xs shadow-2xl">
              {user?.displayName?.charAt(0) || user?.email?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] mx-auto">
          
          {/* --- VIEW: OVERVIEW (Expanded) --- */}
          {activeTab === 'Overview' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none mb-2">Command Center</h1>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Neural Workforce Management // v4.2.0</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2"><FiPieChart /> Export Analytics</button>
                    <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#EF4444] transition-all flex items-center gap-2 shadow-2xl shadow-slate-300"><FiPlus /> Deploy Protocol</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                <StatCard label="Live Agents" value={myStack.length} growth="+12%" icon={<FiCpu />} />
                <StatCard label="Monthly Efficiency" value="98.4%" growth="+2.1%" icon={<FiActivity />} />
                <StatCard label="Capital Burn" value="$2,490" growth="-4%" icon={<FiTrendingUp />} />
                <StatCard label="Uptime Hours" value="720h" growth="100%" icon={<FiClock />} />
              </div>

              {/* Advanced Analytics Section */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                <div className="xl:col-span-2 space-y-10">
                  <div className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm">
                    <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center">
                        <h2 className="font-black uppercase italic text-sm tracking-widest">Active Stack Hierarchy</h2>
                        <FiMaximize2 className="text-slate-300 cursor-pointer hover:text-black" />
                    </div>
                    <div className="divide-y divide-slate-100">
                      {myStack.map(tool => <ToolRow key={tool.id} {...tool} />)}
                    </div>
                  </div>

                  <div className="bg-white rounded-[3rem] border border-slate-200 p-10">
                     <h3 className="font-black uppercase italic text-sm mb-10 tracking-widest">Data Throughput / 24h</h3>
                     <div className="grid grid-cols-3 gap-6 mt-10">
                        <div className="p-6 bg-slate-50 rounded-2xl"><p className="text-[9px] font-black uppercase text-slate-400 mb-1">Inbound</p><p className="font-black italic text-xl">42.8 GB</p></div>
                        <div className="p-6 bg-slate-50 rounded-2xl"><p className="text-[9px] font-black uppercase text-slate-400 mb-1">Outbound</p><p className="font-black italic text-xl">12.1 GB</p></div>
                        <div className="p-6 bg-slate-50 rounded-2xl"><p className="text-[9px] font-black uppercase text-slate-400 mb-1">Latency</p><p className="font-black italic text-xl">14ms</p></div>
                     </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="bg-black text-white p-12 rounded-[4rem] shadow-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#EF4444]/10 blur-[80px]"></div>
                    <FiZap className="text-[#EF4444] mb-8" size={32} />
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Neural Pulse</h3>
                    <p className="text-slate-500 text-xs font-bold leading-relaxed mb-10 italic">Real-time status of autonomous decision-making nodes.</p>
                    <div className="space-y-6">
                      <PulseItem label="Gateway Protocol" status="Optimal" />
                      <PulseItem label="CRM Handshake" status="Operational" />
                      <PulseItem label="Financial Logic" status="Active" />
                      <PulseItem label="Vector Search" status="Syncing" />
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
                    <h3 className="font-black uppercase italic text-xs mb-8 tracking-widest">Team Activity</h3>
                    <div className="space-y-6">
                        {[1,2].map(i => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-lg bg-slate-200"></div>
                                <div>
                                    <p className="text-[10px] font-black uppercase">Marcus V. deployed <span className="text-[#EF4444]">PostHog Node</span></p>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">2 mins ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- VIEW: MARKETPLACE --- */}
          {activeTab === 'Marketplace' && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="mb-16">
                <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 mb-2 leading-none">Market Intelligence</h1>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Acquire Advanced Capabilities</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {marketplaceTools.map((tool) => (
                  <div key={tool.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group flex flex-col">
                    <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-8 shadow-xl`}>
                      {tool.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">{tool.name}</h3>
                        <p className="text-emerald-500 text-[10px] font-black uppercase mb-6 tracking-widest">{tool.category}</p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-10">{tool.desc}</p>
                    </div>
                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">{tool.price}</span>
                        <button 
                            onClick={() => installFromMarketplace(tool)}
                            className="px-8 py-4 bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#EF4444] transition-all flex items-center gap-2"
                        >
                            <FiPlusSquare /> Provision
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- VIEW: AUTOMATIONS --- */}
          {activeTab === 'Automations' && (
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
               <div className="mb-16">
                <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 mb-2 leading-none">Neural Links</h1>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Architecting Logic Chains</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-[4rem] p-24 text-center shadow-sm">
                 <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-slate-100">
                    <FiZap className="text-emerald-500" size={40} />
                 </div>
                 <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6 text-slate-900">Zero Active Linkage</h2>
                 <p className="text-slate-400 max-w-lg mx-auto mb-12 text-lg font-medium leading-relaxed">Connect multiple provisioned protocols to generate autonomous business logic. Your current architecture is isolated.</p>
                 <div className="flex justify-center gap-6">
                    <button onClick={() => setActiveTab('Marketplace')} className="px-10 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#EF4444] transition-all">Acquire Protocols</button>
                    <button className="px-10 py-5 bg-white border border-slate-200 text-black rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-50 transition-all">Documentation</button>
                 </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* --- PROTOCOL DEPLOYMENT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white w-full max-w-xl rounded-[4rem] relative z-10 p-16 shadow-3xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-12 right-12 text-slate-400 hover:text-black"><FiX size={32} /></button>
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 text-slate-900">Provision <span className="text-[#EF4444]">Resource</span></h3>
            <p className="text-slate-400 text-xs font-bold uppercase mb-12 tracking-widest">Define the technical parameters for the new node.</p>
            <form className="space-y-8">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Node Identifier</label>
                <input required type="text" placeholder="e.g. MARKETING_ENGINE_01" className="w-full bg-slate-100 border-none rounded-2xl p-6 text-xs font-bold outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Intelligence Tier</label>
                <select className="w-full bg-slate-100 border-none rounded-2xl p-6 text-xs font-bold outline-none appearance-none">
                  <option>Tier 1: Basic Logic (GPT-4o Mini)</option>
                  <option>Tier 2: Reasoning (Claude 3.5)</option>
                  <option>Tier 3: Executive (GPT-4o)</option>
                </select>
              </div>
              <button className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#EF4444] transition-all shadow-2xl">Initialize Deployment</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- ENTERPRISE HELPER COMPONENTS ---

const SectionLabel = ({ label }) => (
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-4 mt-8">{label}</p>
);

const SidebarLink = ({ icon, label, active = false, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-6 py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
    active ? 'bg-black text-white shadow-2xl shadow-slate-300' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
  }`}>
    <span className="text-xl">{icon}</span>
    {label}
  </button>
);

const StatCard = ({ label, value, growth, icon }) => (
  <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative group">
    <div className="text-slate-100 absolute top-8 right-8 text-4xl group-hover:text-slate-200 transition-colors">{icon}</div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{label}</p>
    <div className="flex items-end gap-3">
      <span className="text-5xl font-black italic tracking-tighter text-slate-900">{value}</span>
      <span className={`text-[10px] font-black mb-2 px-2 py-1 rounded-lg ${growth.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-[#EF4444]'}`}>{growth}</span>
    </div>
  </div>
);

const ToolRow = ({ name, category, status, color, spend, load }) => (
  <div className="px-10 py-8 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group">
    <div className="flex items-center gap-6">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-white font-black text-sm italic shadow-inner`}>{name.charAt(0)}</div>
      <div>
        <h4 className="text-lg font-black uppercase italic text-slate-900 mb-1">{name}</h4>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{category}</p>
      </div>
    </div>
    <div className="hidden xl:block w-48">
        <div className="flex justify-between mb-2">
            <span className="text-[9px] font-black uppercase text-slate-400">Node Load</span>
            <span className="text-[9px] font-black uppercase text-slate-900">{load}%</span>
        </div>
        <div className="h-1 w-full bg-slate-100 rounded-full">
            <div className={`h-full rounded-full ${load > 80 ? 'bg-[#EF4444]' : 'bg-black'}`} style={{width: `${load}%`}}></div>
        </div>
    </div>
    <div className="flex items-center gap-10">
      <div className="text-right">
        <p className="text-[10px] font-black uppercase text-slate-900">{spend}</p>
        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest italic">Current Burn</p>
      </div>
      <span className={`text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border ${status === 'Verified' || status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100 animate-pulse'}`}>{status}</span>
      <button className="bg-slate-100 text-slate-900 group-hover:bg-black group-hover:text-white px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">Manage</button>
    </div>
  </div>
);

const PulseItem = ({ label, status }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
    <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">{label}</span>
    <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${status === 'Optimal' || status === 'Active' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-amber-500 animate-pulse'}`}></div>
        <span className="text-[11px] font-black uppercase tracking-widest italic">{status}</span>
    </div>
  </div>
);

export default Dashboard;