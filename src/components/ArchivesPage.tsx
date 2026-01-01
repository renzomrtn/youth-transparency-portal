import svgPaths from "../imports/svg-zdvfjykmz9";
import PageLayout from "./shared/PageLayout";

interface ArchivesPageProps {
  onNavigate: (page: "home" | "verified-expenses" | "line-items" | "archives") => void;
}

interface Archive {
  id: string;
  author: string;
  title: string;
  origin: string;
  publishDate: string;
}

const archives: Archive[] = [
  {
    id: "1",
    author: "Luis Gomez",
    title: "Resolution on Educational Aid for Disaster Victims",
    origin: "SK Federation",
    publishDate: "Sep 13, 2025"
  },
  {
    id: "2",
    author: "John Dela Cruz",
    title: "Resolution opposing House Bill 10747 and Senate Bill 2707",
    origin: "DINAGA",
    publishDate: "Sep 12, 2025"
  },
  {
    id: "3",
    author: "Pedro Reyes",
    title: "Resolution on Youth-Focused Drug Prevention",
    origin: "SAN FELIPE",
    publishDate: "Sep 11, 2025"
  },
  {
    id: "4",
    author: "Carlos Mendoza",
    title: "Resolution on Free HIV/AIDS Medication",
    origin: "BALATAS",
    publishDate: "Sep 10, 2025"
  }
];

export default function ArchivesPage({ onNavigate }: ArchivesPageProps) {
  return (
    <PageLayout currentPage="archives" onNavigate={onNavigate}>
      <div className="max-w-[900px]">
        <h1 className="font-['Source_Sans_3:Bold',sans-serif] leading-[48px] text-[#0f172b] text-[36px] mb-[32px]">
          ARCHIVES
        </h1>
        
        <div className="flex flex-col gap-[24px]">
          {archives.map((archive) => (
            <div key={archive.id} className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border border-[#e2e8f0] p-[32px]">
              <div className="mb-[8px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#62748e] text-[14px]">
                  <span className="font-['Source_Sans_3:Bold',sans-serif]">Author:</span> {archive.author}
                </p>
              </div>
              
              <h3 className="font-['Source_Sans_3:Bold',sans-serif] leading-[24px] text-[#0f172b] text-[24px] mb-[4px]">
                {archive.title}
              </h3>
              
              <div className="flex gap-[12px] items-center mb-[24px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">
                  Origin: {archive.origin}
                </p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">•</p>
                <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#45556c] text-[14px]">
                  Published: {archive.publishDate}
                </p>
              </div>

              <div>
                <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[20px] text-[#62748e] text-[14px] mb-[12px]">
                  Actions
                </p>
                <div className="flex gap-[16px]">
                  <button className="flex items-center gap-[8px] px-[16px] py-[8px] border border-[#e2e8f0] rounded-[8px] hover:bg-[#f8fafc] transition-colors cursor-pointer">
                    <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d="M0.666667 8C0.666667 8 3.33333 2.66667 8 2.66667C12.6667 2.66667 15.3333 8 15.3333 8C15.3333 8 12.6667 13.3333 8 13.3333C3.33333 13.3333 0.666667 8 0.666667 8Z" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#4A5565] text-[14px]">View</p>
                  </button>
                  <button className="flex items-center gap-[8px] px-[16px] py-[8px] border border-[#e2e8f0] rounded-[8px] hover:bg-[#f8fafc] transition-colors cursor-pointer">
                    <svg className="block size-[14px]" fill="none" viewBox="0 0 14 18">
                      <path d={svgPaths.p2481f531} fill="#4A5565" />
                    </svg>
                    <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[20px] text-[#4A5565] text-[14px]">Download</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}