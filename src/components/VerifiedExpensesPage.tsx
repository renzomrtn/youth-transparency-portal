import { useState } from "react";
import svgPaths from "../imports/svg-vp385dee1m";
import PageLayout from "./shared/PageLayout";
import VerifiedExpensesDetailedView from "./VerifiedExpensesDetailedView";
import { useExpenseVerification } from "../contexts/ExpenseVerificationContext";

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

interface VerifiedExpensesPageProps {
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

export default function VerifiedExpensesPage({ onNavigate }: VerifiedExpensesPageProps) {
  const { expenseItems, isLoading, error } = useExpenseVerification();
  const [selectedExpenseId, setSelectedExpenseId] = useState<string | null>(null);

  // Filter only verified expenses
  const verifiedExpenses = expenseItems.filter(item => item.status === "Verified");

  // Find the selected expense
  const selectedExpense = verifiedExpenses.find(exp => exp.id === selectedExpenseId);

  // Format currency
  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Format date with validation to prevent "Invalid Date"
  const formatDate = (dateString: string | undefined | null) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "N/A";
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (isLoading) {
    return (
      <PageLayout currentPage="verified-expenses" onNavigate={onNavigate}>
        <div className="max-w-[900px]">
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[24px] lg:text-[36px] mb-6 lg:mb-[32px]">
            VERIFIED EXPENSES
          </h1>
          <div className="flex items-center justify-center py-12">
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[14px]">Loading verified expenses...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout currentPage="verified-expenses" onNavigate={onNavigate}>
        <div className="max-w-[900px]">
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[24px] lg:text-[36px] mb-6 lg:mb-[32px]">
            VERIFIED EXPENSES
          </h1>
          <div className="bg-red-50 border border-red-200 rounded-[14px] p-4">
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-red-800 text-[14px]">Error: {error}</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <>
      <PageLayout currentPage="verified-expenses" onNavigate={onNavigate}>
        <div className="max-w-[900px]">
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[24px] lg:text-[36px] mb-6 lg:mb-[32px]">
            VERIFIED EXPENSES
          </h1>
          
          {verifiedExpenses.length === 0 ? (
            <div className="bg-white rounded-[14px] shadow-sm border border-[#e2e8f0] p-8 text-center">
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#45556c] text-[14px]">
                No verified expenses found.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 lg:gap-[24px]">
              {verifiedExpenses.map((expense) => (
                <div key={expense.id} className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border border-[#e2e8f0] p-4 lg:p-[25px]">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 lg:mb-[16px] gap-2">
                    <div className="flex-1 min-w-0">
                      {/* UPDATED: Use getLineItemName to display the full name */}
                      <h3 className="font-['Source_Sans_3:Bold',sans-serif] leading-tight text-[#0f172b] text-[18px] lg:text-[24px] mb-[4px]">
                        {getLineItemName(expense.lineItem)}
                      </h3>
                      <div className="flex flex-col lg:flex-row lg:gap-[12px] lg:items-center gap-1">
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[12px] lg:text-[14px]">
                          Submitted by: {expense.submittedBy || "N/A"}
                        </p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px] hidden lg:block">•</p>
                        <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[12px] lg:text-[14px]">
                          Updated: {formatDate(expense.updatedAt || expense.createdAt)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedExpenseId(expense.id)}
                      className="flex items-center justify-center size-[24px] cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
                    >
                      <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.pbe2c300} fill="#155DFC" />
                      </svg>
                    </button>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[24px]">
                    <div>
                      <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[12px] lg:text-[14px] mb-[8px]">
                        Line Item Information
                      </p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[12px] lg:text-[14px] mb-[8px]">
                        <span className="font-['Source_Sans_3:Bold',sans-serif]">ID:</span> {expense.lineItem}
                      </p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[12px] lg:text-[14px]">
                        <span className="font-['Source_Sans_3:Bold',sans-serif]">Area of Participation:</span> {expense.areaOfParticipation || "N/A"}
                      </p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[12px] lg:text-[14px]">
                        <span className="font-['Source_Sans_3:Bold',sans-serif]">Budget:</span> {formatCurrency(expense.budget)}
                      </p>
                    </div>

                    <div>
                      <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[12px] lg:text-[14px] mb-[8px]">
                        Total Amount Spent
                      </p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[12px] lg:text-[14px]">
                        {formatCurrency(expense.totalAmountSpent)}
                      </p>
                    </div>

                    <div>
                      <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[12px] lg:text-[14px] mb-[8px]">
                        Expenditure Period
                      </p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[12px] lg:text-[14px]">
                        <span className="font-['Source_Sans_3:Bold',sans-serif]">From:</span> {formatDate(expense.expenditurePeriod?.from)}
                      </p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[12px] lg:text-[14px]">
                        <span className="font-['Source_Sans_3:Bold',sans-serif]">To:</span> {formatDate(expense.expenditurePeriod?.to)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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