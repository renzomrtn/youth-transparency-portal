import svgPaths from "../../imports/svg-vp385dee1m";
import imgImageLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import { useState } from "react";

interface PageHeaderProps {
  currentPage: "home" | "verified-expenses" | "line-items" | "archives";
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

export default function PageHeader({ currentPage, onNavigate }: PageHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home" as const, label: "Home", icon: "home" },
    { id: "verified-expenses" as const, label: "Verified Expenses", icon: "expenses" },
    { id: "line-items" as const, label: "Line Items", icon: "list" },
    { id: "archives" as const, label: "Archives", icon: "archive" },
  ];

  const renderIcon = (icon: string, isActive: boolean) => {
    const color = isActive ? "#fff" : "#314158";
    switch (icon) {
      case "home":
        return (
          <>
            <path d={svgPaths.p3a151200} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p18af2500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </>
        );
      case "expenses":
        return (
          <>
            <path d={svgPaths.p368df400} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3a53aa80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 7.33333H10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 10.6667H10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 7.33333H5.34" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 10.6667H5.34" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </>
        );
      case "list":
        return (
          <>
            <path d={svgPaths.p3cb26100} fill={color} />
            <path d={svgPaths.p530d400} fill={color} />
          </>
        );
      case "archive":
        return <path d={svgPaths.pd752880} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex flex-col items-start bg-[rgba(255,255,255,0.95)] backdrop-blur-sm border-b border-[#e2e8f0] px-4 lg:px-[336.5px] lg:h-[97px] transition-all">
      {/* Container for Logo + Nav */}
      <div className="flex h-16 lg:h-full items-center justify-between w-full">
        
        {/* Logo and Title Section - Now Clickable */}
        <button 
          onClick={() => onNavigate("home")}
          className="flex gap-3 lg:gap-4 items-center cursor-pointer hover:opacity-80 transition-opacity focus:outline-none group"
          aria-label="Go to Home"
        >
          <div className="rounded-full shadow-md size-10 lg:size-16 bg-white shrink-0 overflow-hidden group-hover:shadow-lg transition-shadow">
            <img
              alt="Logo"
              className="object-cover size-full"
              src={imgImageLogo}
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <p className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[15px] lg:text-[16px] whitespace-nowrap">
              Youth Transparency Portal
            </p>
            <p className="font-['Source_Sans_3:Regular',sans-serif] leading-5 text-[#45556c] text-[14px] hidden lg:block">
              Sangguniang Kabataan of Naga City
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2 items-center">
          {navItems.map(({ id, label, icon }) => {
            const isActive = currentPage === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                aria-label={`Navigate to ${label}`}
                aria-current={isActive ? "page" : undefined}
                className={`h-10 rounded-[10px] px-4 flex gap-2 items-center cursor-pointer transition-colors ${
                  isActive ? "bg-[#174499] hover:bg-[#0f3a8a]" : "hover:bg-[#f1f5f9]"
                }`}
              >
                <svg className="block size-4" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                  {renderIcon(icon, isActive)}
                </svg>
                <p className={`font-['Source_Sans_3:${isActive ? "SemiBold" : "Regular"}',sans-serif] leading-6 text-[16px] ${isActive ? "text-[#fdfdfd]" : "text-[#314158]"}`}>
                  {label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          className="lg:hidden flex items-center justify-center size-10 rounded-[10px] hover:bg-[#f1f5f9] transition-colors"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="#314158" strokeWidth="2" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full pb-4 flex flex-col gap-1 border-t border-[#e2e8f0] pt-2">
          {navItems.map(({ id, label, icon }) => {
            const isActive = currentPage === id;
            return (
              <button
                key={id}
                onClick={() => {
                  onNavigate(id);
                  setIsMobileMenuOpen(false);
                }}
                className={`h-12 rounded-[10px] px-4 flex gap-3 items-center transition-colors ${
                  isActive ? "bg-[#174499] text-white" : "text-[#314158] hover:bg-[#f1f5f9]"
                }`}
              >
                <svg className="size-5" fill="none" viewBox="0 0 16 16">
                  {renderIcon(icon, isActive)}
                </svg>
                <span className="font-['Source_Sans_3:SemiBold',sans-serif] text-[15px]">{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}