import { useEffect } from "react";
import PageHeader from "./shared/PageHeader";
import Footer from "./shared/Footer";
import Pagination from "./shared/Pagination";
import { ExpenseItem } from "../contexts/ExpenseVerificationContext";

const LINE_ITEM_LOOKUP: Record<string, string> = {
  "LI-2025/810-2K2Q": "HIV/AIDS Awareness Seminar",
  "LI-2025/909-9KCY": "Anti-Illegal Drugs Seminar",
  "LI-2025/908-LTTC": "Leadership Training Camp",
  "LI-2025/907-K98N": "Environmental Cleanup Drive",
  "LI-2025/906-P48T": "Youth Sports Festival"
};

const getLineItemName = (id: string) => LINE_ITEM_LOOKUP[id] || id;

interface VerifiedExpensesDetailedViewProps {
  expense: ExpenseItem;
  onClose: () => void;
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

export default function VerifiedExpensesDetailedView({ expense, onClose, onNavigate }: VerifiedExpensesDetailedViewProps) {
  
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

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const particulars = expense.particulars || [];
  
  // Logic for exceeding budget
  const isOverBudget = Number(expense.totalAmount) > Number(expense.budget);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-[100]">
      <div className="bg-white h-full w-full overflow-y-auto overflow-x-hidden pt-[97px]">
        
        <PageHeader 
          currentPage="verified-expenses" 
          onNavigate={handleNavigate} 
        />

        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-6 lg:py-[40px]">
          <button 
            onClick={onClose} 
            className="flex items-center gap-[8px] mb-6 lg:mb-[32px] cursor-pointer hover:opacity-70 transition-opacity"
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" fill="#0f172b" />
              <path d="M12 14l-4-4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="font-['Source_Sans_3:SemiBold',sans-serif] text-[#0f172b] text-[16px]">Back</p>
          </button>

          <h1 className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[28px] lg:text-[42px] mb-6 lg:mb-[40px] uppercase">Expense Breakdown</h1>

          {/* Expense Summary Card */}
          <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] p-4 lg:p-[32px] mb-6 lg:mb-[32px]">
            <h2 className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[20px] lg:text-[28px] mb-[8px]">
              {getLineItemName(expense.lineItem)}
            </h2>
            <div className="flex flex-col lg:flex-row lg:gap-[12px] lg:items-center gap-1 mb-4 lg:mb-[24px]">
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[14px] lg:text-[16px]">Origin: SK Federation</p>
              <p className="text-[#45556c] hidden lg:block">•</p>
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[14px] lg:text-[16px]">Published: {formatDate(expense.updatedAt || expense.createdAt || '')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[24px]">
              <div>
                <h3 className="font-['Source_Sans_3:Bold',sans-serif] text-[#45556c] text-[14px] lg:text-[16px] mb-[8px] tracking-wide">
                  Line Item Information
                </h3>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px] mb-1">ID: {expense.lineItem}</p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px] mb-1">Area of Participation: {expense.areaOfParticipation || "N/A"}</p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px]">Budget: {formatCurrency(expense.budget)}</p>
              </div>
              <div>
                <h3 className="font-['Source_Sans_3:Bold',sans-serif] text-[#45556c] text-[14px] lg:text-[16px] mb-[8px] tracking-wide">
                  Total Amount Spent
                </h3>
                <p 
                  className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] lg:text-[16px]"
                  style={{ color: isOverBudget ? '#dc2626' : '#0f172b', fontWeight: isOverBudget ? '700' : '400' }}
                >
                  {formatCurrency(expense.totalAmount)}
                </p>
                {isOverBudget && (
                  <p className="text-[#dc2626] text-[14px] font-bold mt-1 tracking-tight">
                    Exceeds Budget
                  </p>
                )}
              </div>
              <div>
                <h3 className="font-['Source_Sans_3:Bold',sans-serif] text-[#45556c] text-[14px] lg:text-[16px] mb-[8px] tracking-wide">
                  Expenditure Period
                </h3>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px] mb-1">From: {formatDate(expense.expenditurePeriod?.from || '')}</p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px]">To: {formatDate(expense.expenditurePeriod?.to || '')}</p>
              </div>
            </div>
          </div>

          {/* Table Container - Desktop */}
          {particulars.length > 0 ? (
            <>
              <div className="hidden lg:block bg-white rounded-[14px] border border-[#e2e8f0] overflow-hidden mb-[32px]">
                <div className="grid grid-cols-[2fr_1fr_1fr_100px] gap-[24px] px-[32px] py-[16px] border-b border-[#e2e8f0] bg-[#f8fafc]">
                  <h3 className="font-['Source_Sans_3:Bold',sans-serif] text-[16px]">Particulars</h3>
                  <h3 className="font-['Source_Sans_3:Bold',sans-serif] text-[16px]">Amount</h3>
                  <h3 className="font-['Source_Sans_3:Bold',sans-serif] text-[16px]">Date of Expense</h3>
                  <h3 className="font-['Source_Sans_3:Bold',sans-serif] text-[16px] text-center">Attachment</h3>
                </div>

                {particulars.map((item) => (
                  <div key={item.id} className="grid grid-cols-[2fr_1fr_1fr_100px] gap-[24px] px-[32px] py-[20px] border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#0f172b]">{item.description}</p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#0f172b]">{formatCurrency(item.amount)}</p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#0f172b]">{formatDate(item.dateOfExpense)}</p>
                    <div className="flex justify-center">
                      {item.hasAttachment ? (
                        <button 
                          aria-label={`View Attachment for ${item.description}`}
                          className="flex items-center justify-center size-[36px] cursor-pointer hover:bg-[#e2e8f0] rounded transition-colors"
                        >
                          <svg className="size-[20px]" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </button>
                      ) : (
                        <span className="font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#94a3b8]">N/A</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Card List */}
              <div className="lg:hidden flex flex-col gap-4 mb-6">
                {particulars.map((item) => (
                  <div key={item.id} className="bg-white rounded-[14px] border border-[#e2e8f0] p-4">
                    <h4 className="font-['Source_Sans_3:Bold',sans-serif] text-[14px] text-[#45556c] mb-2">Particulars</h4>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#0f172b] mb-3">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px] text-[#45556c] mb-1">Amount</p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#0f172b]">{formatCurrency(item.amount)}</p>
                      </div>
                      <div>
                        <p className="font-['Source_Sans_3:Bold',sans-serif] text-[14px] text-[#45556c] mb-1">Date</p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#0f172b]">{formatDate(item.dateOfExpense)}</p>
                      </div>
                    </div>

                    {item.hasAttachment ? (
                      <button 
                        aria-label={`View Attachment for ${item.description}`}
                        className="w-full flex items-center justify-center gap-2 py-3 border border-[#e2e8f0] rounded-[8px] hover:bg-[#f8fafc] transition-colors"
                      >
                        <svg className="size-[20px]" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <p className="font-['Source_Sans_3:SemiBold',sans-serif] text-[16px] text-[#4A5565]">View Attachment</p>
                      </button>
                    ) : (
                      <div className="w-full flex items-center justify-center py-3 border border-[#e2e8f0] rounded-[8px] bg-[#f8fafc]">
                        <p className="font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#94a3b8]">No Gallery</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-[14px] border border-[#e2e8f0] p-8 text-center mb-[32px]">
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[16px]">
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
            
            <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] px-4 lg:px-[24px] py-3 lg:py-[16px] flex flex-col items-end">
              <div className="flex items-center justify-between w-full">
                <p className="font-['Source_Sans_3:Bold',sans-serif] text-[#0f172b] text-[14px] lg:text-[16px]">Total Spent:</p>
                <p 
                  className="font-['Source_Sans_3:Bold',sans-serif] text-[16px] lg:text-[20px]"
                  style={{ color: isOverBudget ? '#dc2626' : '#0f172b' }}
                >
                  {formatCurrency(expense.totalAmount)}
                </p>
              </div>
              
              {isOverBudget && (
                <p className="text-[#dc2626] text-[14px] font-bold mt-1">
                  Exceeds Budget by {formatCurrency(Number(expense.totalAmount) - Number(expense.budget))}
                </p>
              )}
            </div>
          </div></div>

        <Pagination />
        <Footer />
      </div>
    </div>
  );
}