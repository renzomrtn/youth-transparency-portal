import { useState, useEffect } from "react";
import PageHeader from "./shared/PageHeader";
import Footer from "./shared/Footer";

interface Expense {
  id: string;
  title: string;
  origin: string;
  publishDate: string;
  lineItemId: string;
  areaOfParticipation: string;
  budget: string;
  totalAmountSpent: string;
  fromDate: string;
  toDate: string;
}

interface VerifiedExpensesDetailedViewProps {
  expense: Expense;
  onClose: () => void;
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

const expenseBreakdown = [
  { particulars: "Venue Rental (1-day seminar)", amount: "₱12,000.00", date: "September 1, 2025" },
  { particulars: "Meals and Snacks for Participants (80 pax)", amount: "₱15,000.00", date: "September 1, 2025" },
  { particulars: "Honorarium for Speaker / Resource Person", amount: "₱8,000.00", date: "September 1, 2025" },
  { particulars: "Seminar Kits (IDs, pens, notebooks, folders)", amount: "₱11,000.00", date: "September 1, 2025" },
  { particulars: "IEC Materials Printing (Tarpaulin, flyers, posters)", amount: "₱9,555.56", date: "September 1, 2025" }
];

export default function VerifiedExpensesDetailedView({ expense, onClose, onNavigate }: VerifiedExpensesDetailedViewProps) {
  
  // Prevent the background page from scrolling while the modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleNavigate = (page: "home" | "verified-expenses" | "line-items" | "archives") => {
    onClose();
    onNavigate(page);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-[100]">
      {/* Scrollable Container */}
      <div className="bg-white h-full w-full overflow-y-auto overflow-x-hidden pt-[97px]">
        
        {/* Integrated Shared Page Header */}
        <PageHeader 
          currentPage="verified-expenses" 
          onNavigate={handleNavigate} 
        />

        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto px-6 py-[40px]">
          {/* Back Button */}
          <button onClick={onClose} className="flex items-center gap-[8px] mb-[32px] cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" fill="#0f172b" />
              <path d="M12 14l-4-4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px]">Back</p>
          </button>

          <h1 className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[36px] mb-[40px] uppercase">Expense Breakdown</h1>

          {/* Expense Summary Card */}
          <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] p-[32px] mb-[32px]">
            <h2 className="font-['Source_Sans_3:Medium',sans-serif] text-[#0f172b] text-[24px] mb-[4px]">{expense.title}</h2>
            <div className="flex gap-[12px] items-center mb-[24px]">
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[14px]">Origin: {expense.origin}</p>
              <p className="text-[#45556c]">•</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[14px]">Published: {expense.publishDate}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#62748e] text-[14px] mb-[8px] tracking-wide">
                  Line Item Information
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] mb-1">
                  ID: {expense.lineItemId}
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] mb-1">
                  Area of Participation: {expense.areaOfParticipation}
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px]">
                  Budget: {expense.budget}
                </p>
              </div>
              <div>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#62748e] text-[14px] mb-[8px]  tracking-wide">
                  Total Amount Spent
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px]">
                  {expense.totalAmountSpent}
                </p>
              </div>
              <div>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#62748e] text-[14px] mb-[8px] tracking-wide">
                  Expenditure Period
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] mb-1">
                  From: {expense.fromDate}
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px]">
                  To: {expense.toDate}
                </p>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-[14px] border border-[#e2e8f0] overflow-hidden mb-[32px]">
            <div className="grid grid-cols-[2fr_1fr_1fr_100px] gap-[24px] px-[32px] py-[16px] border-b border-[#e2e8f0] bg-[#f8fafc]">
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px]">Particulars</p>
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px]">Amount</p>
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px]">Date of Expense</p>
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px] text-center">Attachment</p>
            </div>

            {expenseBreakdown.map((item, index) => (
              <div key={index} className="grid grid-cols-[2fr_1fr_1fr_100px] gap-[24px] px-[32px] py-[20px] border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{item.particulars}</p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{item.amount}</p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{item.date}</p>
                <div className="flex justify-center">
                  <button className="flex items-center justify-center size-[32px] cursor-pointer hover:bg-[#e2e8f0] rounded transition-colors">
                    <svg className="size-[18px]" fill="none" viewBox="0 0 16 16">
                      <path d="M14 10V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V10" stroke="#4A5565" strokeWidth="1.33333" />
                      <path d="M5.33333 6.66667L8 4L10.6667 6.66667" stroke="#4A5565" strokeWidth="1.33333" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Totals Section */}
          <div className="flex flex-col gap-[16px] max-w-[400px] ml-auto mb-[60px]">
            <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] px-[24px] py-[16px] flex items-center justify-between">
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b]">Budget:</p>
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[20px]">{expense.budget}</p>
            </div>
            <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] px-[24px] py-[16px] flex items-center justify-between">
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b]">Total Spent:</p>
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[20px]">{expense.totalAmountSpent}</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}