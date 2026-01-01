import svgPaths from "../../imports/svg-vp385dee1m";
import imgImageLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";

interface PageHeaderProps {
  currentPage: "home" | "verified-expenses" | "line-items" | "archives";
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

export default function PageHeader({ currentPage, onNavigate }: PageHeaderProps) {
  const navItems = [
    { id: "home" as const, label: "Home", icon: "home" },
    { id: "verified-expenses" as const, label: "Verified Expenses", icon: "expenses" },
    { id: "line-items" as const, label: "Line Items", icon: "list" },
    { id: "archives" as const, label: "Archives", icon: "archive" }
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
    <div className="fixed bg-[rgba(255,255,255,0.95)] flex flex-col h-[97px] items-start left-0 pb-px pt-[16px] px-[336.5px] top-0 w-full border-b border-[#e2e8f0] z-50 backdrop-blur-sm">
      <div className="flex h-[64px] items-center justify-between w-full">
        <div className="h-[64px] w-[288.156px]">
          <div className="flex gap-[16px] items-center h-full">
            <div className="rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] bg-white">
              <img alt="" className="rounded-full object-cover size-full" src={imgImageLogo} />
            </div>
            <div className="flex flex-col">
              <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[24px] text-[#0f172b] text-[16px]">Youth Transparency Portal</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">Sangguniang Kabataan of Naga City</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          {navItems.map(({ id, label, icon }) => {
            const isActive = currentPage === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`h-[40px] rounded-[10px] px-[16px] flex gap-[8px] items-center cursor-pointer transition-colors ${
                  isActive ? "bg-[#174499] hover:bg-[#0f3a8a]" : "hover:bg-[#f1f5f9]"
                }`}
              >
                <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
                  {renderIcon(icon, isActive)}
                </svg>
                <p className={`font-['Source_Sans_3:${isActive ? 'SemiBold' : 'Regular'}',sans-serif] leading-[24px] text-[16px] ${
                  isActive ? "text-[#fdfdfd]" : "text-[#314158]"
                }`}>
                  {label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
