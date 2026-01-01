import svgPaths from "../imports/svg-6mr85zt7dg";
import imgImageSkLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import imgIkaAkoKitaNagaScaledE1758561213777297X3001 from "figma:asset/19f71eda94bef48a96a699fa2aee00d610441dcc.png";
import imgNagaCityOfficialSeal11 from "figma:asset/54453c4f43125634a29b3eeea73ee1c9839fc20a.png";
import { useState, useEffect, useRef } from "react";
import { originStats, origins } from "../data/originStats";
import Footer from "./shared/Footer";

interface HomePageProps {
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

function Heading1() {
  return (
    <div className="absolute h-[48px] left-0 top-[48px] w-[896px]" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] leading-[48px] left-[447.86px] text-[48px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Welcome to the Youth Transparency Portal</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[97.5px] left-0 top-[120px] w-[896px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] leading-[32.5px] left-[448.39px] text-[#dbeafe] text-[20px] text-center top-0 translate-x-[-50%] w-[860px]">A platform dedicated to transparency and public accountability, providing direct access to the official records, documents, and financial reports of the Sangguniang Kabataan Federation and across all 27 SK barangay councils of Naga City.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[217.5px] left-[505px] top-[57px] w-[896px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[105.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1904.9 105.828">
        <path d={svgPaths.p160b6c80} fill="var(--fill-0, #F8FAFC)" id="Vector" />
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[105.828px] items-start left-0 top-[303.67px] w-[1905px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Section() {
  return (
    /* FIXED: Removed overflow-clip to allow dropdown to exit the blue section */
    <div className="absolute h-[409.5px] left-0 top-[97px] w-[1905px] z-0" data-name="Section" style={{ backgroundImage: "linear-gradient(167.868deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 50%, rgb(55, 42, 172) 100%)" }}>
      <Container />
      <Container1 />
    </div>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const stats = originStats[selectedOrigin] || originStats[''];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  return (
    <div className="bg-white h-screen w-full relative overflow-x-hidden">
      {/* Main Content - Scrollable */}
      <div className="h-full w-full overflow-y-auto overflow-x-hidden">
        <Section />
        
        {/* Stats Cards */}
        <div className="absolute gap-[24px] grid grid-cols-[repeat(5,_minmax(0px,_1fr))] h-[178px] left-[calc(50%+0.5px)] top-[407px] translate-x-[-50%] w-[1546px] z-10">
          
          {/* FIXED: Dynamic z-index. z-[100] when open ensures it sits on top of other cards and activity list */}
          <div className={`relative bg-white h-[178px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[#f1f5f9] ${isDropdownOpen ? 'z-[100]' : 'z-10'}`}>
            <div className="flex flex-col gap-[16px] items-start p-[25px]">
              <div className="flex h-[48px] items-center justify-between w-full">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="relative rounded-[14px] size-[48px] cursor-pointer hover:opacity-90 transition-opacity" 
                  style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)" }}
                >
                  <div className="flex items-center justify-center size-full">
                    <svg className={`block size-[24px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M6 9L12 15L18 9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </button>
                <div className="bg-[#faf5ff] h-[24px] px-[12px] py-[3px] rounded-full">
                  <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[16px] text-[#8200db] text-[12px]">Active</p>
                </div>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[28px] text-[#0f172b] text-[20px] truncate w-full">{stats.name.toUpperCase()}</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#62748e] text-[16px]">Origin</p>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-[186px] left-0 w-full bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.2),0px_10px_10px_-6px_rgba(0,0,0,0.2)] border border-[#f1f5f9] z-[110] max-h-[320px] overflow-y-auto" ref={dropdownRef}>
                {origins.map((origin) => (
                  <button
                    key={origin.value}
                    onClick={() => {
                      setSelectedOrigin(origin.value);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-[20px] py-[12px] text-left hover:bg-[#f8f9fa] transition-colors border-b border-[#f1f5f9] last:border-b-0 first:rounded-t-[16px] last:rounded-b-[16px] ${
                      selectedOrigin === origin.value ? 'bg-[#faf5ff]' : ''
                    }`}
                  >
                    <p className={`font-['Source_Sans_3:Regular',sans-serif] text-[14px] ${
                      selectedOrigin === origin.value ? 'text-[#8200db]' : 'text-[#0f172b]'
                    }`}>
                      {origin.label}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Annual Budget Card */}
          <div className="bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[#f1f5f9] z-0">
            <div className="flex flex-col gap-[16px] items-start p-[25px]">
              <div className="flex h-[48px] items-center justify-between w-full">
                <div className="relative rounded-[14px] size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 166, 62) 100%)" }}>
                  <div className="flex items-center justify-center size-full">
                    <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p35b02000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M16 10H16.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p127dad40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#f0fdf4] h-[24px] px-[12px] py-[3px] rounded-full">
                  <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[16px] text-[#008236] text-[12px]">2025</p>
                </div>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[36px] text-[#0f172b] text-[30px]">{stats.annualBudget}</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#62748e] text-[16px]">Annual Budget</p>
            </div>
          </div>

          {/* Line Items Card */}
          <div className="bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[#f1f5f9] z-0">
            <div className="flex flex-col gap-[16px] items-start p-[25px]">
              <div className="flex h-[48px] items-center w-full">
                <div className="bg-[#cc2bbb] flex items-center justify-center rounded-[14px] size-[48px]">
                  <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p5214180} fill="white" />
                    <path d={svgPaths.p324bca80} fill="white" />
                  </svg>
                </div>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[36px] text-[#0f172b] text-[30px]">{stats.lineItems}</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#62748e] text-[16px]">Line Items</p>
            </div>
          </div>

          {/* Verified Expenses Card */}
          <div className="bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[#f1f5f9] z-0">
            <div className="flex flex-col gap-[16px] items-start p-[25px]">
              <div className="flex h-[48px] items-center w-full">
                <div className="relative rounded-[14px] size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
                  <div className="flex items-center justify-center size-full">
                    <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p22caafc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p33d8b700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[36px] text-[#0f172b] text-[30px]">{stats.verifiedExpenses}</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#62748e] text-[16px]">Verified Expenses</p>
            </div>
          </div>

          {/* Documents Card */}
          <div className="bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[#f1f5f9] z-0">
            <div className="flex flex-col gap-[16px] items-start p-[25px]">
              <div className="flex h-[48px] items-center w-full">
                <div className="relative rounded-[14px] size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 100%)" }}>
                  <div className="flex items-center justify-center size-full">
                    <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.pb007f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p1b58ab00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M10 9H8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M16 13H8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M16 17H8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[36px] text-[#0f172b] text-[30px]">{stats.documents}</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#62748e] text-[16px]">Documents</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="absolute bg-white left-[180px] p-px rounded-[10px] top-[636px] w-[1546px] border border-[#e5e7eb] z-0 max-h-[440px] overflow-hidden flex flex-col">
          <div className="h-[79px] w-full border-b border-[#e5e7eb] flex-shrink-0">
            <div className="flex items-center justify-center p-[24px] h-full">
              <p className="font-['Source_Sans_3:Medium',sans-serif] leading-[30px] text-[#101828] text-[24px]">Recent Activity</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {[
              { title: "HIV/AIDS Awareness Seminar", org: "SK Federation", type: "Verified Expenses", date: "Sep 13, 2025" },
              { title: "Anti-Illegal Drugs Seminar", org: "SK Federation", type: "Verified Expenses", date: "Sep 12, 2025" },
              { title: "Leadership Training Camp", org: "SK Federation", type: "Verified Expenses", date: "Sep 11, 2025" },
              { title: "Inter-Barangay Sports League", org: "SK Federation", type: "Verified Expenses", date: "Sep 10, 2025" }
            ].map((item, index) => (
              <div key={index} className="h-[97px] w-full border-b border-[#e5e7eb] last:border-b-0">
                <div className="flex items-center justify-center p-[24px] h-full">
                  <div className="flex h-[48px] items-center justify-between w-full">
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#101828] text-[16px]">{item.title}</p>
                      <div className="flex gap-[12px] items-center">
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">{item.org}</p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">•</p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#4a5565] text-[14px]">{item.type}</p>
                      </div>
                    </div>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#6a7282] text-[14px]">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute left-0 top-[1092px] w-full">
          <Footer />
        </div>

        {/* Header Navigation */}
        <div className="absolute bg-[rgba(255,255,255,0.8)] flex flex-col h-[97px] items-start left-0 pb-px pt-[16px] px-[336.5px] top-0 w-full border-b border-[#e2e8f0] z-[200]">
          <div className="flex h-[64px] items-center justify-between w-full">
            <div className="h-[64px] w-[288.156px]">
              <div className="flex gap-[16px] items-center h-full">
                <div className="rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] bg-white">
                  <img alt="" className="rounded-full object-cover size-full" src={imgImageSkLogo} />
                </div>
                <div className="flex flex-col">
                  <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[24px] text-[#0f172b] text-[16px]">Youth Transparency Portal</p>
                  <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">Sangguniang Kabataan of Naga City</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[8px] items-center">
              <button 
                onClick={() => onNavigate("home")}
                className="bg-[#174499] h-[40px] rounded-[10px] px-[16px] py-0 flex gap-[8px] items-center cursor-pointer hover:bg-[#0f3a8a] transition-colors"
              >
                <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3a151200} stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p18af2500} stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <p className="font-['Source_Sans_3:SemiBold',sans-serif] leading-[24px] text-[#fdfdfd] text-[16px]">Home</p>
              </button>
              <button 
                onClick={() => onNavigate("verified-expenses")}
                className="h-[40px] rounded-[10px] px-[16px] py-0 flex gap-[8px] items-center cursor-pointer hover:bg-[#f1f5f9] transition-colors"
              >
                <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p368df400} stroke="#314158" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p3a53aa80} stroke="#314158" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 7.33333H10.6667" stroke="#314158" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 10.6667H10.6667" stroke="#314158" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M5.33333 7.33333H5.34" stroke="#314158" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M5.33333 10.6667H5.34" stroke="#314158" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#314158] text-[16px]">Verified Expenses</p>
              </button>
              <button 
                onClick={() => onNavigate("line-items")}
                className="h-[40px] rounded-[10px] px-[16px] py-0 flex gap-[8px] items-center cursor-pointer hover:bg-[#f1f5f9] transition-colors"
              >
                <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3cb26100} fill="#314158" />
                  <path d={svgPaths.p530d400} fill="#314158" />
                </svg>
                <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#314158] text-[16px]">Line Items</p>
              </button>
              <button 
                onClick={() => onNavigate("archives")}
                className="h-[40px] rounded-[10px] px-[16px] py-0 flex gap-[8px] items-center cursor-pointer hover:bg-[#f1f5f9] transition-colors"
              >
                <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.pd752880} stroke="#314158" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#314158] text-[16px]">Archives</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}