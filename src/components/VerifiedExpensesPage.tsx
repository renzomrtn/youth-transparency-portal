import { useState } from "react";
import svgPaths from "../imports/svg-vp385dee1m";
import PageLayout from "./shared/PageLayout";
import VerifiedExpensesDetailedView from "./VerifiedExpensesDetailedView";
import { useExpenseVerification } from "../contexts/ExpenseVerificationContext";

// Line Item Lookup
const LINE_ITEM_LOOKUP: Record<string, string> = {
  "LI-2025/810-2K2Q": "HIV/AIDS Awareness Seminar",
  "LI-2025/909-9KCY": "Anti-Illegal Drugs Seminar",
  "LI-2025/908-LTTC": "Leadership Training Camp",
  "LI-2025/907-K98N": "Environmental Cleanup Drive",
  "LI-2025/906-P48T": "Youth Sports Festival",
};

// Helper function to get display name
const getLineItemName = (id: string) => LINE_ITEM_LOOKUP[id] || id;

interface VerifiedExpensesPageProps {
  onNavigate: (
    page: "home" | "verified-expenses" | "line-items" | "archives",
  ) => void;
}

export default function VerifiedExpensesPage({
  onNavigate,
}: VerifiedExpensesPageProps) {
  const { expenseItems, isLoading, error } = useExpenseVerification();
  const [selectedExpenseId, setSelectedExpenseId] = useState<string | null>(null);

  // Filter only verified expenses
  const verifiedExpenses = expenseItems.filter(
    (item) => item.status === "Verified",
  );

  // Find the selected expense
  const selectedExpense = verifiedExpenses.find(
    (exp) => exp.id === selectedExpenseId,
  );

  // Format currency
  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Format date with validation
  const formatDate = (dateString: string | undefined | null) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "N/A";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <PageLayout currentPage="verified-expenses" onNavigate={onNavigate}>
        <div className="max-w-[900px]">
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[28px] lg:text-[42px] mb-6 lg:mb-[32px]">
            VERIFIED EXPENSES
          </h1>
          <div className="flex items-center justify-center py-12">
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[16px]">
              Loading verified expenses...
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout currentPage="verified-expenses" onNavigate={onNavigate}>
        <div className="max-w-[900px]">
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[28px] lg:text-[42px] mb-6 lg:mb-[32px]">
            VERIFIED EXPENSES
          </h1>
          <div className="bg-red-50 border border-red-200 rounded-[14px] p-4">
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-red-800 text-[16px]">
              Error: {error}
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <>
      <PageLayout currentPage="verified-expenses" onNavigate={onNavigate}>
        <div className="max-w-[900px]">
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[28px] lg:text-[42px] mb-6 lg:mb-[32px]">
            VERIFIED EXPENSES
          </h1>

          {verifiedExpenses.length === 0 ? (
            <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] p-8 text-center">
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[16px]">
                No verified expenses found.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 lg:gap-[24px]">
              {verifiedExpenses.map((expense) => {
                const isOverBudget = Number(expense.totalAmount) > Number(expense.budget);
                
                return (
                  <div
                    key={expense.id}
                    className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border border-[#e2e8f0] p-4 lg:p-[25px]"
                  >
                   {/* Header */}
                    <div className="flex items-start justify-between mb-4 lg:mb-[16px] gap-2">
                      <div className="flex-1 min-w-0">
                        <h2 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[20px] lg:text-[28px] mb-[8px]">
                          {getLineItemName(expense.lineItem)}
                        </h2>
                        <div className="flex flex-col lg:flex-row lg:gap-[12px] lg:items-center gap-1">
                          <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px] lg:text-[16px]">
                            Origin: SK Federation
                          </p>
                          <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[16px] hidden lg:block">
                            •
                          </p>
                          <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px] lg:text-[16px]">
                            Published: {formatDate(expense.updatedAt || expense.createdAt)}
                          </p>
                        </div>
                      </div>

                      {/* UPDATED: Container for Arrow + "See more" Label */}
                      <div className="flex flex-col items-center gap-1">
                        <button
                          onClick={() => setSelectedExpenseId(expense.id)}
                          aria-label={`View details for ${getLineItemName(expense.lineItem)}`}
                          className="flex items-center justify-center size-[32px] lg:size-[36px] cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
                        >
                          <svg
                            className="block size-[24px] lg:size-[28px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d={svgPaths.pbe2c300} fill="#155DFC" />
                          </svg>
                        </button>
                        <span 
                        style={{ color: '#155DFC' }} 
                        className="font-bold text-[12px] lg:text-[16px] whitespace-nowrap"
                      >
                        Full Details
                      </span>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[24px]">
                      <div>
                        <h3 className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#45556c] text-[14px] lg:text-[16px] mb-[8px]">
                          Line Item Information
                        </h3>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px] lg:text-[16px] mb-[8px]">
                          <span className="font-['Source_Sans_3:Bold',sans-serif]">ID:</span> {expense.lineItem}
                        </p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px] lg:text-[16px] mb-[8px]">
                          <span className="font-['Source_Sans_3:Bold',sans-serif]">Area of Participation:</span> {expense.areaOfParticipation || "N/A"}
                        </p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px] lg:text-[16px]">
                          <span className="font-['Source_Sans_3:Bold',sans-serif]">Budget:</span> {formatCurrency(expense.budget)}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#45556c] text-[14px] lg:text-[16px] mb-[8px]">
                          Total Amount Spent
                        </h3>
                        <p 
                          className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[14px] lg:text-[16px]"
                          style={{ 
                            color: isOverBudget ? '#dc2626' : '#0f172b',
                            fontWeight: isOverBudget ? '700' : '400'
                          }}
                        >
                          {formatCurrency(expense.totalAmount)}
                        </p>
                        {/* UPDATED: Added "Exceeds Budget" message directly under the amount */}
                        {isOverBudget && (
                          <p className="text-[#dc2626] text-[14px] font-bold mt-1 tracking-tight">
                            Exceeds Budget
                          </p>
                        )}
                      </div>

                      <div>
                        <h3 className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#45556c] text-[14px] lg:text-[16px] mb-[8px]">
                          Expenditure Period
                        </h3>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px] lg:text-[16px]">
                          <span className="font-['Source_Sans_3:Bold',sans-serif]">From:</span> {formatDate(expense.expenditurePeriod?.from)}
                        </p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px] lg:text-[16px]">
                          <span className="font-['Source_Sans_3:Bold',sans-serif]">To:</span> {formatDate(expense.expenditurePeriod?.to)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </PageLayout>

      {selectedExpense && (
        <VerifiedExpensesDetailedView
          expense={selectedExpense}
          onClose={() => setSelectedExpenseId(null)}
          onNavigate={onNavigate}
        />
      )}
    </>
  );
}