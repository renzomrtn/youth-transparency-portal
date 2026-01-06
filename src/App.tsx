import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import VerifiedExpensesPage from "./components/VerifiedExpensesPage";
import LineItemsPage from "./components/LineItemsPage";
import ArchivesPage from "./components/ArchivesPage";

import { ExpenseVerificationProvider } from "./contexts/ExpenseVerificationContext";

type Page = "home" | "verified-expenses" | "line-items" | "archives";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    return (localStorage.getItem("currentPage") as Page) || "home";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "verified-expenses":
        return <VerifiedExpensesPage onNavigate={setCurrentPage} />;
      case "line-items":
        return <LineItemsPage onNavigate={setCurrentPage} />;
      case "archives":
        return <ArchivesPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ExpenseVerificationProvider>
      <div className="min-h-screen w-full">
        {renderPage()}
      </div>
    </ExpenseVerificationProvider>
  );
}
