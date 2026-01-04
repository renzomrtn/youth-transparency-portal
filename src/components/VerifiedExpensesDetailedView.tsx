import { useEffect } from "react";
import PageHeader from "./shared/PageHeader";
import Footer from "./shared/Footer";
import Pagination from "./shared/Pagination";
import { ExpenseItem } from "../contexts/ExpenseVerificationContext";

// ADD THIS: Line Item Lookup
const LINE_ITEM_LOOKUP: Record<string, string> = {
  "LI-2025/810-2K2Q": "HIV/AIDS Awareness Seminar",
  "LI-2025/909-9KCY": "Anti-Illegal Drugs Seminar",
  "LI-2025/908-LTTC": "Leadership Training Camp",
  "LI-2025/907-K98N": "Environmental Cleanup Drive",
  "LI-2025/906-P48T": "Youth Sports Festival"
};

// ADD THIS: Helper function to get display name
const getLineItemName = (id: string) => LINE_ITEM_LOOKUP[id] || id;

interface VerifiedExpensesDetailedViewProps {
  expense: ExpenseItem;
  onClose: () => void;
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

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

  // Format currency
  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const particulars = expense.particulars || [];

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
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-6 lg:py-[40px]">
          {/* Back Button */}
          <button onClick={onClose} className="flex items-center gap-[8px] mb-6 lg:mb-[32px] cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" fill="#0f172b" />
              <path d="M12 14l-4-4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px]">Back</p>
          </button>

          <h1 className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[24px] lg:text-[36px] mb-6 lg:mb-[40px] uppercase">Expense Breakdown</h1>

          {/* Expense Summary Card */}
          <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] p-4 lg:p-[32px] mb-6 lg:mb-[32px]">
            {/* UPDATED: Show both the display name and the ID */}
            <h2 className="font-['Source_Sans_3:Medium',sans-serif] text-[#0f172b] text-[18px] lg:text-[24px] mb-[4px]">
              {getLineItemName(expense.lineItem)}
            </h2>
            <div className="flex flex-col lg:flex-row lg:gap-[12px] lg:items-center gap-1 mb-4 lg:mb-[24px]">
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[12px] lg:text-[14px]">Submitted by: {expense.submittedBy || "N/A"}</p>
              <p className="text-[#45556c] hidden lg:block">•</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[12px] lg:text-[14px]">Updated: {formatDate(expense.updatedAt || expense.createdAt || '')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[24px]">
              <div>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#62748e] text-[12px] lg:text-[14px] mb-[8px] tracking-wide">
                  Line Item Information
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[12px] lg:text-[14px] mb-1">
                  ID: {expense.lineItem}
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[12px] lg:text-[14px] mb-1">
                  Area of Participation: {expense.areaOfParticipation || "N/A"}
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[12px] lg:text-[14px]">
                  Budget: {formatCurrency(expense.budget)}
                </p>
              </div>
              <div>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#62748e] text-[12px] lg:text-[14px] mb-[8px] tracking-wide">
                  Total Amount Spent
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[12px] lg:text-[14px]">
                  {formatCurrency(expense.totalAmountSpent)}
                </p>
              </div>
              <div>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#62748e] text-[12px] lg:text-[14px] mb-[8px] tracking-wide">
                  Expenditure Period
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[12px] lg:text-[14px] mb-1">
                  From: {formatDate(expense.expenditurePeriod?.from || '')}
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[12px] lg:text-[14px]">
                  To: {formatDate(expense.expenditurePeriod?.to || '')}
                </p>
              </div>
            </div>
          </div>

          {/* Table Container - Desktop */}
          {particulars.length > 0 ? (
            <>
              <div className="hidden lg:block bg-white rounded-[14px] border border-[#e2e8f0] overflow-hidden mb-[32px]">
                <div className="grid grid-cols-[2fr_1fr_1fr_100px] gap-[24px] px-[32px] py-[16px] border-b border-[#e2e8f0] bg-[#f8fafc]">
                  <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px]">Particulars</p>
                  <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px]">Amount</p>
                  <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px]">Date of Expense</p>
                  <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px] text-center">Attachment</p>
                </div>

                {particulars.map((item) => (
                  <div key={item.id} className="grid grid-cols-[2fr_1fr_1fr_100px] gap-[24px] px-[32px] py-[20px] border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{item.description}</p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{formatCurrency(item.amount)}</p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{formatDate(item.dateOfExpense)}</p>
                    <div className="flex justify-center">
                      {item.hasAttachment ? (
                        <button className="flex items-center justify-center size-[32px] cursor-pointer hover:bg-[#e2e8f0] rounded transition-colors">
                          <svg className="size-[18px]" fill="none" viewBox="0 0 16 16">
                            <path d="M14 10V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V10" stroke="#4A5565" strokeWidth="1.33333" />
                            <path d="M5.33333 6.66667L8 4L10.6667 6.66667" stroke="#4A5565" strokeWidth="1.33333" />
                          </svg>
                        </button>
                      ) : (
                        <span className="font-['Source_Sans_3:Regular',sans-serif] text-[12px] text-[#94a3b8]">N/A</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Card List - Mobile */}
              <div className="lg:hidden flex flex-col gap-4 mb-6">
                {particulars.map((item) => (
                  <div key={item.id} className="bg-white rounded-[14px] border border-[#e2e8f0] p-4">
                    <p className="font-['Source_Sans_3:Bold',sans-serif] text-[12px] text-[#62748e] mb-2">Particulars</p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b] mb-3">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="font-['Source_Sans_3:Bold',sans-serif] text-[12px] text-[#62748e] mb-1">Amount</p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{formatCurrency(item.amount)}</p>
                      </div>
                      <div>
                        <p className="font-['Source_Sans_3:Bold',sans-serif] text-[12px] text-[#62748e] mb-1">Date</p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#0f172b]">{formatDate(item.dateOfExpense)}</p>
                      </div>
                    </div>

                    {item.hasAttachment ? (
                      <button className="w-full flex items-center justify-center gap-2 py-2 border border-[#e2e8f0] rounded-[8px] hover:bg-[#f8fafc] transition-colors">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 16 16">
                          <path d="M14 10V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V10" stroke="#4A5565" strokeWidth="1.33333" />
                          <path d="M5.33333 6.66667L8 4L10.6667 6.66667" stroke="#4A5565" strokeWidth="1.33333" />
                        </svg>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#4A5565]">View Attachment</p>
                      </button>
                    ) : (
                      <div className="w-full flex items-center justify-center py-2 border border-[#e2e8f0] rounded-[8px] bg-[#f8fafc]">
                        <p className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#94a3b8]">No Attachment</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-[14px] border border-[#e2e8f0] p-8 text-center mb-[32px]">
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[14px]">
                No particulars available for this expense.
              </p>
            </div>
          )}

          {/* Totals Section */}
          <div className="flex flex-col gap-4 lg:gap-[16px] max-w-full lg:max-w-[400px] lg:ml-auto mb-10 lg:mb-[60px]">
            <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] px-4 lg:px-[24px] py-3 lg:py-[16px] flex items-center justify-between">
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px]">Budget:</p>
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[16px] lg:text-[20px]">{formatCurrency(expense.budget)}</p>
            </div>
            <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] px-4 lg:px-[24px] py-3 lg:py-[16px] flex items-center justify-between">
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px]">Total Spent:</p>
              <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[16px] lg:text-[20px]">{formatCurrency(expense.totalAmountSpent)}</p>
            </div>
          </div>
        </div>

        <Pagination />
        <Footer />
      </div>
    </div>
  );
}