export default function Pagination() {
  return (
    <nav aria-label="Pagination" className="flex lg:hidden items-center justify-center gap-[8px] py-6 bg-white border-t border-[#e2e8f0]">
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
  );
}