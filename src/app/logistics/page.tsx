"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Truck, 
  Users, 
  Map as MapIcon, 
  BarChart3, 
  Search, 
  Bell, 
  Settings, 
  HelpCircle, 
  Plus, 
  Minus, 
  Clock, 
  Compass, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2 
} from "lucide-react";

export default function LogisticsDashboard() {
  const [activeTab, setActiveTab] = useState("all");

  const drivers = [
    {
      id: "#DRV-8901",
      name: "Jameson Miller",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
      vehicle: "Volvo FH16",
      plate: "44-BB-92",
      status: "Active",
      progress: 72,
      efficiency: "98.4%"
    },
    {
      id: "#DRV-7723",
      name: "Leila Vance",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      vehicle: "Isuzu NPR",
      plate: "12-XZ-01",
      status: "At Rest",
      progress: 100,
      efficiency: "94.1%"
    },
    {
      id: "#DRV-6651",
      name: "Marcus Reid",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
      vehicle: "Scania R500",
      plate: "09-RR-45",
      status: "Delayed",
      progress: 34,
      efficiency: "82.0%"
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#fbf9f8] text-[#1b1c1c] font-sans">
      
      {/* Side Navigation Bar */}
      <aside className="w-64 bg-[#001b44] text-white flex flex-col shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg bg-[#002f6c] flex items-center justify-center">
              <Truck className="w-5 h-5 text-[#aec6ff]" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">Logistics Pro</h1>
          </div>
          <p className="text-xs text-[#7999dc] font-medium opacity-80">National Fleet Admin</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#002f6c] text-white" href="#">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium text-sm">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#7999dc] hover:bg-white/5 transition-colors" href="#">
            <Truck className="w-5 h-5" />
            <span className="font-medium text-sm">Fleet Status</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#7999dc] hover:bg-white/5 transition-colors" href="#">
            <Users className="w-5 h-5" />
            <span className="font-medium text-sm">Driver Management</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#7999dc] hover:bg-white/5 transition-colors" href="#">
            <MapIcon className="w-5 h-5" />
            <span className="font-medium text-sm">Routes</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#7999dc] hover:bg-white/5 transition-colors" href="#">
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium text-sm">Analytics</span>
          </a>
        </nav>
        
        <div className="p-6 border-t border-white/10 flex items-center gap-3">
          <img 
            alt="Admin User" 
            className="w-10 h-10 rounded-full border-2 border-[#002f6c] object-cover" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
          />
          <div>
            <p className="text-sm font-bold">Admin User</p>
            <p className="text-[10px] text-[#7999dc] uppercase tracking-wider">Super Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white flex items-center justify-between px-8 border-b border-[#e4e2e2] shrink-0">
          <div className="flex items-center flex-1">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#434750] w-4 h-4" />
              <input 
                className="w-full pl-10 pr-4 py-2 bg-[#f5f3f3] border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#001b44]/10" 
                placeholder="Search shipments, drivers or routes..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <h2 className="text-sm font-bold text-[#001b44] mr-4">Delivery Dashboard</h2>
            <div className="flex items-center gap-4 border-l border-[#e4e2e2] pl-6">
              <button className="relative p-1 text-[#434750] hover:text-[#001b44] transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
              </button>
              <button className="p-1 text-[#434750] hover:text-[#001b44] transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-1 text-[#434750] hover:text-[#001b44] transition-colors">
                <HelpCircle className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden ml-2 bg-[#efeded]">
                <img 
                  alt="User Profile" 
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Canvas */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fbf9f8]">
          
          {/* Hero Grid: Map & Stats */}
          <div className="grid grid-cols-12 gap-6 h-[500px]">
            
            {/* Map Section */}
            <div className="col-span-8 bg-white rounded-2xl overflow-hidden relative shadow-sm border border-[#e4e2e2]">
              <div className="absolute inset-0 z-0 bg-[#dbd9d9]">
                <img 
                  className="w-full h-full object-cover opacity-90" 
                  alt="City Map" 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
                />
              </div>
              
              {/* Map Overlays */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#006d43] rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-[#001b44]">LIVE: 142 Active Units</span>
                </div>
              </div>

              {/* Map Pins */}
              <div className="absolute top-[30%] left-[45%] z-10">
                <div className="w-8 h-8 bg-[#001b44] border-2 border-white rounded-full flex items-center justify-center shadow-lg text-white">
                  <Truck className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute top-[60%] left-[25%] z-10">
                <div className="w-8 h-8 bg-[#006d43] border-2 border-white rounded-full flex items-center justify-center shadow-lg text-white">
                  <Truck className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute top-[45%] left-[70%] z-10">
                <div className="w-8 h-8 bg-[#ba1a1a] border-2 border-white rounded-full flex items-center justify-center shadow-lg text-white">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>

              {/* Map Legend Overlay */}
              <div className="absolute bottom-4 left-4 z-10 bg-[#001b44]/95 backdrop-blur-md shadow-2xl p-4 rounded-xl border border-white/10 w-64 text-white">
                <h3 className="text-xs font-extrabold uppercase tracking-widest mb-3 text-[#7999dc]">Network Pulse</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-semibold uppercase text-zinc-300">On Schedule</span>
                    <span className="text-xs font-bold text-[#78fbb6]">88%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#006d43] h-full rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-semibold uppercase text-zinc-300">Idle Capacity</span>
                    <span className="text-xs font-bold text-[#ffdfa0]">12%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#fbbc00] h-full rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sparkline Stats Column */}
            <div className="col-span-4 flex flex-col gap-6">
              
              {/* Stat Card 1 */}
              <div className="flex-1 bg-gradient-to-br from-[#001b44] to-[#002f6c] p-6 rounded-2xl flex flex-col justify-between text-white relative overflow-hidden shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Avg. Delivery Time</p>
                    <h4 className="text-4xl font-extrabold mt-1">24.5<span className="text-sm font-medium ml-1">min</span></h4>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <div className="h-16 flex items-end gap-1">
                  <div className="flex-1 bg-[#75f8b3]/30 rounded-t h-[60%]"></div>
                  <div className="flex-1 bg-[#75f8b3]/30 rounded-t h-[80%]"></div>
                  <div className="flex-1 bg-[#75f8b3]/50 rounded-t h-[40%]"></div>
                  <div className="flex-1 bg-[#75f8b3]/30 rounded-t h-[70%]"></div>
                  <div className="flex-1 bg-[#75f8b3]/70 rounded-t h-[90%]"></div>
                  <div className="flex-1 bg-[#75f8b3] rounded-t h-[50%]"></div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="flex-1 bg-white border border-[#e4e2e2] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#434750]">Fuel Efficiency</p>
                    <h4 className="text-4xl font-extrabold mt-1 text-[#001b44]">9.2<span className="text-sm font-medium ml-1">km/l</span></h4>
                  </div>
                  <div className="p-2 bg-[#75f8b3]/20 rounded-lg">
                    <Compass className="w-5 h-5 text-[#006d43]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#006d43] font-bold text-xs">
                  <TrendingUp className="w-4 h-4" />
                  <span>+4.2% from last week</span>
                </div>
                <div className="h-12 w-full mt-2">
                  <svg className="w-full h-full" viewBox="0 0 100 30">
                    <path d="M0 25 Q 10 20, 20 22 T 40 10 T 60 18 T 80 5 T 100 15" fill="none" stroke="#006d43" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* Driver Table Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-[#e4e2e2] overflow-hidden">
            <div className="p-6 border-b border-[#e4e2e2] flex justify-between items-center">
              <div>
                <h3 className="text-lg font-extrabold text-[#001b44]">Fleet Driver Manifest</h3>
                <p className="text-sm text-[#434750]">Real-time shift tracking and performance metrics</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#001b44] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#002f6c] transition-colors">
                  <Plus className="w-4 h-4" /> Add Driver
                </button>
                <button className="bg-[#f5f3f3] text-[#434750] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#eae8e7] transition-colors">
                  Export CSV
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#f5f3f3]/50 text-[#434750]">
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest">Driver ID</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest">Operator Name</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest">Vehicle</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest">Route Progress</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-right">Efficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4e2e2]">
                  {drivers.map((drv) => (
                    <tr key={drv.id} className="hover:bg-[#f5f3f3]/40 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm font-bold text-[#001b44]">{drv.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img alt={drv.name} className="w-8 h-8 rounded-full object-cover" src={drv.avatar} />
                          <span className="text-sm font-semibold text-[#1b1c1c]">{drv.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-[#1b1c1c]">
                        {drv.vehicle} • <span className="text-[#434750]">{drv.plate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-tight ${
                          drv.status === "Active" ? "bg-[#75f8b3]/20 text-[#007147]" :
                          drv.status === "At Rest" ? "bg-[#ffdfa0]/20 text-[#5c4300]" :
                          "bg-[#ffdad6] text-[#ba1a1a]"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            drv.status === "Active" ? "bg-[#006d43]" :
                            drv.status === "At Rest" ? "bg-[#fbbc00]" :
                            "bg-[#ba1a1a] animate-pulse"
                          }`}></span>
                          {drv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-[#efeded] h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${drv.status === "Delayed" ? "bg-[#ba1a1a]" : "bg-[#001b44]"}`} 
                              style={{ width: `${drv.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-bold text-[#001b44]">{drv.progress === 100 ? "Done" : `${drv.progress}%`}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-[#001b44]">{drv.efficiency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}
