import svgPaths from "../imports/svg-6mr85zt7dg";
import imgImageSkLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import { useState, useEffect, useRef } from "react";
import { originStats, origins } from "../data/originStats";
import Footer from "./shared/Footer";
import PageHeader from "./shared/PageHeader";

interface HomePageProps {
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const stats = originStats[selectedOrigin] || originStats[''];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const recentActivities = [
    { title: "HIV/AIDS Awareness Seminar", org: "SK Federation", type: "Verified Expenses", date: "Sep 13, 2025" },
    { title: "Anti-Illegal Drugs Seminar", org: "SK Federation", type: "Verified Expenses", date: "Sep 12, 2025" },
    { title: "Leadership Training Camp", org: "SK Federation", type: "Verified Expenses", date: "Sep 11, 2025" },
    { title: "Inter-Barangay Sports League", org: "SK Federation", type: "Verified Expenses", date: "Sep 10, 2025" }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen w-full flex flex-col">
      <PageHeader currentPage="home" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col pt-[97px]">
        {/* Hero Section */}
        {/* Removed overflow-hidden to ensure cards can overlap without being cut off */}
        <div 
          className="relative px-4 lg:px-[180px] pt-12 pb-24 lg:pt-[70px] lg:pb-[140px] text-center"
          style={{ backgroundImage: "linear-gradient(167.868deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 50%, rgb(55, 42, 172) 100%)" }}
        >
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] text-white text-[28px] lg:text-[48px] mb-4 lg:mb-6 leading-tight max-w-[900px] mx-auto">
            Welcome to the Youth Transparency Portal
          </h1>
          <p className="font-['Source_Sans_3:Medium',sans-serif] text-[#dbeafe] text-[15px] lg:text-[18px] max-w-[800px] mx-auto leading-relaxed px-4">
            A platform dedicated to transparency and public accountability, providing direct access to the official records, documents, and financial reports of the SK Federation and across all 27 SK barangay councils of Naga City.
          </p>
        </div>

        {/* Stats Cards Section */}
        {/* Added relative and z-10 to ensure cards stay on top of the hero background */}
        <div className="relative z-10 px-4 lg:px-[180px]">
          <div className="w-full max-w-[1546px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 -mt-12 lg:-mt-20">
            
            {/* Origin Card with Dropdown */}
            <div ref={dropdownRef} className="relative bg-white rounded-[16px] shadow-xl border border-[#f1f5f9]">
              <div className="flex flex-col gap-4 p-5 lg:p-6">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    aria-label="Toggle origin selection menu" 
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="listbox"
                    className="rounded-[14px] size-12 flex items-center justify-center hover:opacity-90 transition-all shadow-sm" 
                    style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)" }}
                  >
                    <svg className={`size-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
                      <path d="M6 9L12 15L18 9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                  <span className="bg-[#faf5ff] px-3 py-1 rounded-full text-[#8200db] text-[12px] font-bold">Active</span>
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-[#0f172b] text-[16px] lg:text-[18px] truncate" title={stats.name}>
                    {stats.name.toUpperCase()}
                  </p>
                  <p className="text-[#45556c] text-[14px]">Origin</p>
                </div>
              </div>

              {isDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-[16px] shadow-2xl border border-[#f1f5f9] z-[120] max-h-[300px] overflow-y-auto">
                  {origins.map((origin) => (
                    <button
                      key={origin.value}
                      onClick={() => { setSelectedOrigin(origin.value); setIsDropdownOpen(false); }}
                      className="w-full px-5 py-3 text-left hover:bg-gray-50 border-b border-gray-50 last:border-0 text-[14px] transition-colors"
                    >
                      {origin.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Annual Budget Card */}
            <StatCard 
              label="Annual Budget" 
              value={stats.annualBudget} 
              badge="2025" 
              iconPath={svgPaths.p35b02000} 
              gradient="linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 166, 62) 100%)"
              extraIcons={[svgPaths.p127dad40]}
            />

            {/* Line Items Card */}
            <StatCard 
              label="Line Items" 
              value={stats.lineItems} 
              iconPath={svgPaths.p5214180} 
              iconPath2={svgPaths.p324bca80}
              bgColor="#cc2bbb" 
              isFillIcon
            />

            {/* Verified Expenses Card */}
            <StatCard 
              label="Verified Expenses" 
              value={stats.verifiedExpenses} 
              iconPath={svgPaths.p22caafc0} 
              iconPath2={svgPaths.p33d8b700}
              gradient="linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)"
            />

            {/* Documents Card */}
            <StatCard 
              label="Documents" 
              value={stats.documents} 
              iconPath={svgPaths.pb007f00} 
              gradient="linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 100%)"
              docIcons
            />
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="px-4 lg:px-[180px] py-12">
          <div className="bg-white rounded-[16px] border border-[#e5e7eb] max-w-[1546px] mx-auto overflow-hidden shadow-sm">
            <div className="border-b border-[#e5e7eb] p-6 bg-gray-50/50">
              <h2 className="font-bold text-[#101828] text-[22px] text-center">Recent Activity</h2>
            </div>
            <div className="divide-y divide-[#e5e7eb]">
              {recentActivities.map((item, index) => (
                <div key={index} className="p-5 hover:bg-gray-50 transition-colors cursor-default">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-[#101828] text-[15px] lg:text-[16px]">{item.title}</p>
                      <div className="flex gap-2 items-center text-[13px] lg:text-[14px] text-[#45556c]">
                        <span>{item.org}</span>
                        <span className="text-gray-300">•</span>
                        <span>{item.type}</span>
                      </div>
                    </div>
                    <p className="text-[13px] lg:text-[14px] text-[#45556c] font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Reusable StatCard Sub-component
function StatCard({ label, value, badge, iconPath, iconPath2, gradient, bgColor, isFillIcon, extraIcons, docIcons }: any) {
  return (
    <div className="bg-white rounded-[16px] shadow-xl border border-[#f1f5f9] p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-center justify-between">
        <div 
          className="size-12 rounded-[14px] flex items-center justify-center shadow-inner" 
          style={{ backgroundImage: gradient, backgroundColor: bgColor }}
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24">
            {isFillIcon ? (
              <>
                <path d={iconPath} fill="white" />
                <path d={iconPath2} fill="white" />
              </>
            ) : (
              <>
                <path d={iconPath} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                {iconPath2 && <path d={iconPath2} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />}
                {extraIcons?.map((p:string, i:number) => <path key={i} d={p} stroke="white" strokeWidth="2" strokeLinecap="round"/>)}
                {docIcons && (
                   <>
                    <path d="M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                   </>
                )}
              </>
            )}
          </svg>
        </div>
        {badge && <span className="bg-[#f0fdf4] px-3 py-1 rounded-full text-[#008236] text-[12px] font-bold border border-green-100">{badge}</span>}
      </div>
      <div>
        <p className="font-bold text-[#0f172b] text-[24px] lg:text-[28px] leading-tight mb-1">{value}</p>
        <p className="text-[#45556c] text-[14px] lg:text-[15px] font-medium">{label}</p>
      </div>
    </div>
  );
}