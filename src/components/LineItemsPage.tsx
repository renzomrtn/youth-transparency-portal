import PageLayout from "./shared/PageLayout";

interface LineItemsPageProps {
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

interface LineItem {
  id: string;
  title: string;
  origin: string;
  publishDate: string;
  category: string;
  lineItemId: string;
  areaOfParticipation: string;
  budget: string;
  implementationDate: string;
}

const lineItems: LineItem[] = [
  {
    id: "1",
    title: "HIV/AIDS Awareness Seminar",
    origin: "SK Federation",
    publishDate: "Sep 13, 2025",
    category: "PPA",
    lineItemId: "L1-20250910-762Q",
    areaOfParticipation: "Health",
    budget: "₱55,555.56",
    implementationDate: "September 2025"
  },
  {
    id: "2",
    title: "Anti-Illegal Drugs Seminar",
    origin: "DINAGA",
    publishDate: "Sep 12, 2025",
    category: "PPA",
    lineItemId: "LI-20250909-W5CY",
    areaOfParticipation: "Public Safety",
    budget: "₱55,555.56",
    implementationDate: "January 2025"
  },
  {
    id: "3",
    title: "Leadership Training Camp",
    origin: "SAN FELIPE",
    publishDate: "Sep 11, 2025",
    category: "PPA",
    lineItemId: "LI-20250908-L7TC",
    areaOfParticipation: "Active Citizenship",
    budget: "₱55,555.56",
    implementationDate: "March 2025"
  },
  {
    id: "4",
    title: "Inter-Barangay Sports League",
    origin: "BALATAS",
    publishDate: "Sep 10, 2025",
    category: "PPA",
    lineItemId: "LI-20250906-P4RT",
    areaOfParticipation: "Sports",
    budget: "₱55,555.56",
    implementationDate: "April 2025"
  }
];

export default function LineItemsPage({ onNavigate }: LineItemsPageProps) {
  return (
    <PageLayout currentPage="line-items" onNavigate={onNavigate}>
      <div className="max-w-[900px]">
        <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-[48px] text-[#0f172b] text-[36px] mb-[32px]">
          LINE ITEMS
        </h1>
        
        <div className="flex flex-col gap-[24px]">
          {lineItems.map((item) => (
            <div key={item.id} className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border border-[#e2e8f0] p-[25px]">
              {/* Header */}
              <div className="flex items-start justify-between mb-[16px]">
                <div className="flex-1">
                  <h3 className="font-['Source_Sans_3:Bold',sans-serif] leading-[32px] text-[#0f172b] text-[24px] mb-[4px]">
                    {item.title}
                  </h3>
                  <div className="flex gap-[12px] items-center flex-wrap">
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">
                      Origin: {item.origin}
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">•</p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">
                      Published: {item.publishDate}
                    </p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">•</p>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">
                      Category: {item.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-3 gap-[24px]">
                <div>
                  <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px]">
                    Line Item Information
                  </p>
                  <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px] mb-[8px]">
                    <span className="font-['Source_Sans_3:Bold',sans-serif]">ID:</span> {item.lineItemId}
                  </p>
                  <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">
                    <span className="font-['Source_Sans_3:Bold',sans-serif]">Area of Participation:</span> {item.areaOfParticipation}
                  </p>
                </div>

                <div>
                  <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px]">
                    Budget
                  </p>
                  <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#101828] text-[14px]">
                    {item.budget}
                  </p>
                </div>

                <div>
                  <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[8px]">
                    Implementation Date
                  </p>
                  <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#0f172b] text-[14px]">
                    {item.implementationDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
