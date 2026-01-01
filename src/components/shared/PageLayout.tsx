import { ReactNode } from "react";
import PageHeader from "./PageHeader";
import PageSidebar from "./PageSidebar";
import PageFooter from "./PageFooter";

interface PageLayoutProps {
  currentPage: "home" | "verified-expenses" | "line-items" | "archives";
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
  children: ReactNode;
}

export default function PageLayout({ currentPage, onNavigate, children }: PageLayoutProps) {
  return (
    <div className="bg-white relative min-h-screen w-full">
      <PageHeader currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="pt-[97px] min-h-screen flex justify-center">
        <div className="flex max-w-[1440px] w-full">
          <PageSidebar />
          <div className="flex-1 p-[40px] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      
      <PageFooter />
    </div>
  );
}
