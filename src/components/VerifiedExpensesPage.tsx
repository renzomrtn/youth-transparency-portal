import { useState } from "react";
import svgPaths from "../imports/svg-vp385dee1m";
import PageLayout from "./shared/PageLayout";
import VerifiedExpensesDetailedView from "./VerifiedExpensesDetailedView";

interface VerifiedExpensesPageProps {
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

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

const expenses: Expense[] = [
  {
    id: "1",
    title: "HIV/AIDS Awareness Seminar",
    origin: "SK Federation",
    publishDate: "Sep 13, 2025",
    lineItemId: "L1-20250910-762Q",
    areaOfParticipation: "Health",
    budget: "₱55,555.56",
    totalAmountSpent: "₱55,555.56",
    fromDate: "September 1, 2025",
    toDate: "September 1, 2025"
  },
  {
    id: "2",
    title: "Anti-Illegal Drugs Seminar",
    origin: "DINAGA",
    publishDate: "Sep 12, 2025",
    lineItemId: "L1-20250910-762Q",
    areaOfParticipation: "Active Citizenship",
    budget: "₱55,555.56",
    totalAmountSpent: "₱55,555.56",
    fromDate: "September 1, 2025",
    toDate: "September 1, 2025"
  },
  {
    id: "3",
    title: "Leadership Training Camp",
    origin: "SAN FELIPE",
    publishDate: "Sep 11, 2025",
    lineItemId: "L1-20250910-762Q",
    areaOfParticipation: "Active Citizenship",
    budget: "₱55,555.56",
    totalAmountSpent: "₱55,555.56",
    fromDate: "September 1, 2025",
    toDate: "September 1, 2025"
  },
  {
    id: "4",
    title: "Inter-Barangay Sports League",
    origin: "BALATAS",
    publishDate: "Sep 10, 2025",
    lineItemId: "L1-20250910-762Q",
    areaOfParticipation: "Active Citizenship",
    budget: "₱55,555.56",
    totalAmountSpent: "₱55,555.56",
    fromDate: "September 1, 2025",
    toDate: "September 1, 2025"
  }
];

export default function VerifiedExpensesPage({ onNavigate }: VerifiedExpensesPageProps) {
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  return (
    <>
      <PageLayout currentPage="verified-expenses" onNavigate={onNavigate}>
        <div className="max-w-[900px]">
          <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-[48px] text-[#0f172b] text-[36px] mb-[32px]">
            VERIFIED EXPENSES
          </h1>
          
          <div className="flex flex-col gap-[24px]">
            {expenses.map((expense) => (
              <div key={expense.id} className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border border-[#e2e8f0] p-[25px]">
                {/* Header */}
                <div className="flex items-start justify-between mb-[16px]">
                  <div className="flex-1">
                    <h3 className="font-['Source_Sans_3:Bold',sans-serif] leading-[32px] text-[#0f172b] text-[24px] mb-[4px]">
                      {expense.title}
                    </h3>
                    <div className="flex gap-[12px] items-center">
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">
                        Origin: {expense.origin}
                      </p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">•</p>
                      <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">
                        Published: {expense.publishDate}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedExpense(expense)}
                    className="flex items-center justify-center size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.pbe2c300} fill="#155DFC" />
                    </svg>
                  </button>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-[24px]">
                  <div>
                    <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px]">
                      Line Item Information
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px] mb-[8px]">
                      <span className="font-['Source_Sans_3:Bold',sans-serif]">ID:</span> {expense.lineItemId}
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">
                      <span className="font-['Source_Sans_3:Bold',sans-serif]">Area of Participation:</span> {expense.areaOfParticipation}
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">
                      <span className="font-['Source_Sans_3:Bold',sans-serif]">Budget:</span> {expense.budget}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px]">
                      Total Amount Spent
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">
                      {expense.totalAmountSpent}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px]">
                      Expenditure Period
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">
                      <span className="font-['Source_Sans_3:Bold',sans-serif]">From:</span> {expense.fromDate}
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">
                      <span className="font-['Source_Sans_3:Bold',sans-serif]">To:</span> {expense.toDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {selectedExpense && (
        <VerifiedExpensesDetailedView
          expense={selectedExpense}
          onClose={() => setSelectedExpense(null)}
          onNavigate={onNavigate}
        />
      )}
    </>
  );
}
