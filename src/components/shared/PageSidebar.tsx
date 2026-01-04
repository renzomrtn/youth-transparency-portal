import { useState } from "react";
import svgPaths from "../../imports/svg-vp385dee1m";

export default function PageSidebar() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="w-full lg:w-[324px] lg:sticky lg:top-[97px] lg:h-[calc(100vh-97px)] bg-white p-4 lg:p-[24px] overflow-y-auto flex-shrink-0">
      {/* Search */}
      <div className="relative mb-4 lg:mb-[24px]">
        <label htmlFor="search-input" className="sr-only">Search expenses</label>
        <input
          id="search-input"
          type="text"
          placeholder="Search..."
          aria-label="Search expenses"
          className="w-full h-[40px] px-[16px] border border-[#e2e8f0] rounded-[10px] font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b] placeholder:text-[#94a3b8]"
        />
        <svg className="absolute right-[16px] top-[12px] size-[16px]" fill="none" viewBox="0 0 16 16" aria-hidden="true">
          <path d={svgPaths.p107a080} stroke="#94a3b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11 11" stroke="#94a3b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </svg>
      </div>

      {/* Filters - Collapsible on Mobile */}
      <div className="mb-4 lg:mb-0">
        <button 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          aria-label={isFiltersOpen ? "Hide filters and sorting options" : "Show filters and sorting options"}
          aria-expanded={isFiltersOpen}
          className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] mb-3"
        >
          <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">Filters & Sort</p>
          <svg 
            className={`size-[20px] transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={`${isFiltersOpen ? 'block' : 'hidden'} lg:block`}>
          <p className="hidden lg:block font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#0f172b] text-[16px] mb-[16px]">Filters</p>
          
          <div className="mb-[16px]">
            <label htmlFor="year-filter" className="font-['Source_Sans_3:SemiBold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px] block">Year</label>
            <select 
              id="year-filter"
              aria-label="Filter by year"
              className="w-full h-[40px] px-[16px] border border-[#e2e8f0] rounded-[10px] font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b] bg-white"
            >
              <option value="">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <div className="mb-[16px]">
            <label htmlFor="month-filter" className="font-['Source_Sans_3:SemiBold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px] block">Month</label>
            <select 
              id="month-filter"
              aria-label="Filter by month"
              className="w-full h-[40px] px-[16px] border border-[#e2e8f0] rounded-[10px] font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b] bg-white"
            >
              <option value="">All Months</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>

          <div className="mb-[16px]">
            <label htmlFor="origin-filter" className="font-['Source_Sans_3:SemiBold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px] block">Origin</label>
            <select 
              id="origin-filter"
              aria-label="Filter by origin"
              className="w-full h-[40px] px-[16px] border border-[#e2e8f0] rounded-[10px] font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b] bg-white cursor-pointer"
            >
              <option value="">All Origins</option>
              <option value="sk-federation">SK Federation</option>
              <option value="abella">Abella</option>
              <option value="bagumbayan-norte">Bagumbayan Norte</option>
              <option value="bagumbayan-sur">Bagumbayan Sur</option>
              <option value="balatas">Balatas</option>
              <option value="calauag">Calauag</option>
              <option value="cararayan">Cararayan</option>
              <option value="carolina">Carolina</option>
              <option value="concepcion-grande">Concepcion Grande</option>
              <option value="concepcion-pequena">Concepcion Pequeña</option>
              <option value="dayangdang">Dayangdang</option>
              <option value="del-rosario">Del Rosario</option>
              <option value="dinaga">Dinaga</option>
              <option value="igualdad">Igualdad</option>
              <option value="lerma">Lerma</option>
              <option value="liboton">Liboton</option>
              <option value="mabolo">Mabolo</option>
              <option value="pacol">Pacol</option>
              <option value="panicuason">Panicuason</option>
              <option value="penafrancia">Peñafrancia</option>
              <option value="sabang">Sabang</option>
              <option value="san-felipe">San Felipe</option>
              <option value="san-francisco">San Francisco</option>
              <option value="san-isidro">San Isidro</option>
              <option value="santa-cruz">Santa Cruz</option>
              <option value="tabuco">Tabuco</option>
              <option value="tinago">Tinago</option>
              <option value="triangulo">Triangulo</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="mt-[32px]">
            <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#0f172b] text-[16px] mb-[16px]">Sort By</p>
            <label htmlFor="sort-by" className="sr-only">Sort expenses by</label>
            <select 
              id="sort-by"
              aria-label="Sort expenses by"
              className="w-full h-[40px] px-[16px] border border-[#e2e8f0] rounded-[10px] font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b] bg-white"
            >
              <option value="date-desc">Date (Newest)</option>
              <option value="date-asc">Date (Oldest)</option>
              <option value="alphabetical-desc">Alphabetical (A to Z)</option>
              <option value="alphabetical-asc">Alphabetical (Z to A)</option>
              <option value="amount-desc">Budget (High to Low)</option>
              <option value="amount-asc">Budget (Low to High)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pagination - Desktop Only */}
      <nav aria-label="Pagination" className="hidden lg:flex items-center justify-center gap-[8px] mt-[32px] mb-4 lg:mb-0">
        <button 
          aria-label="Page 1, current page" 
          aria-current="page"
          className="bg-[#174499] h-[32px] w-[32px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#0f3a8a] transition-colors"
        >
          <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-white text-[14px]">1</p>
        </button>
        {[2, 3, 4].map(num => (
          <button 
            key={num} 
            aria-label={`Go to page ${num}`}
            className="bg-white h-[32px] w-[32px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#f1f5f9] transition-colors border border-[#e2e8f0]"
          >
            <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">{num}</p>
          </button>
        ))}
        <span className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#62748e] text-[14px] px-[4px]" aria-hidden="true">...</span>
        {[11, 14].map(num => (
          <button 
            key={num} 
            aria-label={`Go to page ${num}`}
            className="bg-white h-[32px] w-[32px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#f1f5f9] transition-colors border border-[#e2e8f0]"
          >
            <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">{num}</p>
          </button>
        ))}
        <button 
          aria-label="Go to next page"
          className="bg-white h-[32px] px-[12px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#f1f5f9] transition-colors border border-[#e2e8f0]"
        >
          <svg className="block size-[12px]" fill="none" viewBox="0 0 5.333 9.333" aria-hidden="true">
            <path d="M0.666667 8.66667L4.66667 4.66667L0.666667 0.666667" stroke="#0f172b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </button>
      </nav>
    </div>
  );
}