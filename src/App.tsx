import { useState } from "react";
import HomePage from "./components/HomePage";
import VerifiedExpensesPage from "./components/VerifiedExpensesPage";
import LineItemsPage from "./components/LineItemsPage";
import ArchivesPage from "./components/ArchivesPage";

type Page = "home" | "verified-expenses" | "line-items" | "archives";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Render the appropriate page based on current state
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
    <div className="min-h-screen w-full">
      {renderPage()}
    </div>
  );
}