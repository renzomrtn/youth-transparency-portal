import svgPaths from "./svg-8pc3jk090x";
import imgImageLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import imgIkaAkoKitaNagaScaledE1758561213777297X3001 from "figma:asset/19f71eda94bef48a96a699fa2aee00d610441dcc.png";
import imgNagaCityOfficialSeal11 from "figma:asset/54453c4f43125634a29b3eeea73ee1c9839fc20a.png";

function ImageLogo() {
  return (
    <div className="relative rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Image (Logo)">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.35544e+07px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-50%-50% object-cover rounded-[3.35544e+07px] size-full" src={imgImageLogo} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#0f172b] text-[16px] text-nowrap top-0">Youth Transparency Portal</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">Sangguniang Kabataan of Naga City</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[44px] relative shrink-0 w-[270px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <ImageLogo />
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[97px] items-start left-0 pb-px pl-[16px] pr-[336.5px] pt-[16px] top-0 w-[440px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] text-nowrap text-white top-0">Get in Touch</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#cad5e2] text-[14px] top-0 w-[385px]">Have questions or need assistance? Reach out to the Sangguniang Kabataan Federation of Naga City.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2f8e7e80} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17070980} id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function App1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[24px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function App2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152.313px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e2e8f0] text-[14px] text-nowrap top-0">skfednaga@gmail.com</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Link">
      <App1 />
      <App2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pdc00a80} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function App3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[24px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function App4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[237.891px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e2e8f0] text-[14px] text-nowrap top-0">Sangguniang Kabataan of Naga City</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="Link">
      <App3 />
      <App4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[65px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[149px] items-start left-0 top-[12px] w-[403px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[149px] left-[18px] top-[7px] w-[403px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function ImageSkLogo() {
  return (
    <div className="absolute left-[1454px] rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[105px] top-[80px]" data-name="Image (SK Logo)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[3.35544e+07px]">
        <div className="absolute bg-white inset-0 rounded-[3.35544e+07px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[3.35544e+07px] size-full" src={imgImageLogo} />
      </div>
    </div>
  );
}

function ImageSkLogo1() {
  return (
    <div className="absolute left-[79px] rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[52px] top-[188px]" data-name="Image (SK Logo)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[3.35544e+07px]">
        <div className="absolute bg-white inset-0 rounded-[3.35544e+07px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[3.35544e+07px] size-full" src={imgImageLogo} />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute bg-[#0f172b] h-[302px] left-0 top-[1819px] w-[440px]" data-name="Paragraph">
      <Container5 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[1500.5px] text-[#90a1b9] text-[16px] text-center text-nowrap top-[203px] translate-x-[-50%]">© 2026 Youth Transparency Portal. All rights reserved.</p>
      <ImageSkLogo />
      <div className="absolute h-[109px] left-[1569px] top-[78px] w-[108px]" data-name="ika-ako-kita-naga-scaled-e1758561213777-297x300 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIkaAkoKitaNagaScaledE1758561213777297X3001} />
      </div>
      <div className="absolute left-[1339px] size-[105px] top-[78px]" data-name="Naga_City_Official_Seal-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNagaCityOfficialSeal11} />
      </div>
      <ImageSkLogo1 />
      <div className="absolute h-[53px] left-[140px] top-[188px] w-[52px]" data-name="ika-ako-kita-naga-scaled-e1758561213777-297x300 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIkaAkoKitaNagaScaledE1758561213777297X3001} />
      </div>
      <div className="absolute left-[18px] size-[52px] top-[188px]" data-name="Naga_City_Official_Seal-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNagaCityOfficialSeal11} />
      </div>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[178px] text-[#90a1b9] text-[14px] text-center text-nowrap top-[257px] translate-x-[-50%]">© 2026 Youth Transparency Portal. All rights reserved.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2d995e80} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ca2380} id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20px] text-[#314158] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-0 px-[16px] py-0 rounded-[10px] top-[102px] w-[84px]" data-name="Button">
      <Icon2 />
      <App5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p17be4200} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8b8cbc0} id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M7 6.41667H9.33333" id="Vector_3" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M7 9.33333H9.33333" id="Vector_4" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 6.41667H4.67333" id="Vector_5" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 9.33333H4.67333" id="Vector_6" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[111px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[calc(50%-0.27px)] text-[#314158] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">Verified Expenses</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[84px] px-[16px] py-0 rounded-[10px] top-[102px] w-[149px]" data-name="Button">
      <Icon3 />
      <App6 />
    </div>
  );
}

function CardChecklist() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="card-checklist 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="card-checklist 1">
          <path d={svgPaths.p20f9aa80} fill="var(--fill-0, #314158)" id="Vector" />
          <path d={svgPaths.p3fec6380} fill="var(--fill-0, #314158)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function App7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[81px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.19px)] text-[#314158] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">Line Items</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[231px] px-[16px] py-0 rounded-[10px] top-[101px] w-[119px]" data-name="Button">
      <CardChecklist />
      <App7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p12799800} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App8() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[#314158] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">Archives</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[350px] px-[16px] py-0 rounded-[10px] top-[102px] w-[124.688px]" data-name="Button">
      <Icon4 />
      <App8 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[15px] top-[93px] w-[140px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[0px] text-[10px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[15px] top-[109px] w-[140px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[0px] text-[10px] top-0 w-[176px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function ArrowRightCircleFill() {
  return <div className="absolute left-[348px] size-[16px] top-[18px]" data-name="arrow-right-circle-fill 1" />;
}

function Container6() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%+0.5px)] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[197px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[15px] text-[#0f172b] text-[20px] text-nowrap top-[23px]">HIV/AIDS Awareness Seminar</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[15px] text-[#62748e] text-[12px] text-nowrap top-[64px]">Line Item Information</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[148px] text-[#62748e] text-[12px] text-nowrap top-[64px]">Total Amount Spent</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[271px] text-[#62748e] text-[12px] text-nowrap top-[63px]">Expenditure Period</p>
      <Paragraph3 />
      <Paragraph4 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[15px] text-[#0f172b] text-[0px] text-[10px] top-[128px] w-[84px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱55,555.56`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[148px] text-[#0f172b] text-[10px] top-[92px] w-[101px]">{` ₱55,555.56`}</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[271px] text-[#0f172b] text-[0px] text-[10px] top-[92px] w-[110px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">From:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[271px] text-[#0f172b] text-[0px] text-[10px] top-[109px] w-[108px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">To:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <ArrowRightCircleFill />
    </div>
  );
}

function ArrowRightCircleFill1() {
  return <div className="absolute left-[348px] size-[16px] top-[18px]" data-name="arrow-right-circle-fill 1" />;
}

function Images() {
  return (
    <div className="absolute left-[268px] size-[16px] top-[145px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_2779)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_18_2779">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%+0.5px)] rounded-[14px] top-[451px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium','Noto_Sans:Medium',sans-serif] font-medium leading-[24px] left-[18px] text-[#0f172b] text-[20px] text-nowrap top-[42px]">{`Venue Rental (1-day seminar) `}</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[92px] w-[108px]">₱12,000.00</p>
      <ArrowRightCircleFill1 />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[18px]">Particulars:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[72px]">Amount:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[138px] w-[127px]">September 1, 2025</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Date of Expense:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[268px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Attachment:</p>
      <Images />
    </div>
  );
}

function ArrowRightCircleFill2() {
  return <div className="absolute left-[348px] size-[16px] top-[18px]" data-name="arrow-right-circle-fill 1" />;
}

function Images1() {
  return (
    <div className="absolute left-[268px] size-[16px] top-[145px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_2779)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_18_2779">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%-4.5px)] rounded-[14px] top-[661px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[18px] text-[#0f172b] text-[20px] text-nowrap top-[42px]">Meals and Snacks for Participants (80 pax)</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[92px] w-[108px]">₱15,000.00</p>
      <ArrowRightCircleFill2 />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[18px]">Particulars:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[72px]">Amount:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[138px] w-[127px]">September 1, 2025</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Date of Expense:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[268px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Attachment:</p>
      <Images1 />
    </div>
  );
}

function ArrowRightCircleFill3() {
  return <div className="absolute left-[348px] size-[16px] top-[18px]" data-name="arrow-right-circle-fill 1" />;
}

function Images2() {
  return (
    <div className="absolute left-[268px] size-[16px] top-[145px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_2779)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_18_2779">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%-4.5px)] rounded-[14px] top-[871px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[18px] text-[#0f172b] text-[20px] text-nowrap top-[42px]">Honorarium for Speaker / Resource Person</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[92px] w-[108px]">₱8,000.00</p>
      <ArrowRightCircleFill3 />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[18px]">Particulars:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[72px]">Amount:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[138px] w-[127px]">September 1, 2025</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Date of Expense:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[268px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Attachment:</p>
      <Images2 />
    </div>
  );
}

function ArrowRightCircleFill4() {
  return <div className="absolute left-[348px] size-[16px] top-[18px]" data-name="arrow-right-circle-fill 1" />;
}

function Images3() {
  return (
    <div className="absolute left-[268px] size-[16px] top-[145px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_2779)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_18_2779">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%-4.5px)] rounded-[14px] top-[1080px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[18px] text-[#0f172b] text-[20px] text-nowrap top-[42px]">Seminar Kits (IDs, pens, notebooks, folders)</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[92px] w-[108px]">₱11,000.00</p>
      <ArrowRightCircleFill4 />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[18px]">Particulars:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[72px]">Amount:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[138px] w-[127px]">September 1, 2025</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Date of Expense:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[268px] text-[#62748e] text-[12px] text-nowrap top-[118px]">Attachment:</p>
      <Images3 />
    </div>
  );
}

function ArrowRightCircleFill5() {
  return <div className="absolute left-[348px] size-[16px] top-[18px]" data-name="arrow-right-circle-fill 1" />;
}

function Images4() {
  return (
    <div className="absolute left-[268px] size-[16px] top-[168px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_2779)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_18_2779">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[207px] left-[calc(50%-4.5px)] rounded-[14px] top-[1290px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[18px] text-[#0f172b] text-[20px] top-[42px] w-[367px]">IEC Materials Printing (Tarpaulin, flyers, posters)</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[115px] w-[108px]">₱9,555.56</p>
      <ArrowRightCircleFill5 />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[18px]">Particulars:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[95px]">Amount:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#101828] text-[16px] top-[161px] w-[127px]">September 1, 2025</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[18px] text-[#62748e] text-[12px] text-nowrap top-[141px]">Date of Expense:</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[268px] text-[#62748e] text-[12px] text-nowrap top-[141px]">Attachment:</p>
      <Images4 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[54px] px-[3px] py-px top-[160px]" data-name="Button">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Back</p>
    </div>
  );
}

function ArrowLeftCircleFill() {
  return (
    <div className="absolute left-[28px] size-[16px] top-[165px]" data-name="arrow-left-circle-fill 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_443)" id="arrow-left-circle-fill 1">
          <path d={svgPaths.p26acc600} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6_443">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fefeff] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[46px] leading-[normal] overflow-clip relative rounded-[5px] shrink-0 text-[16px] text-black text-nowrap w-full">
      <p className="absolute left-0 top-[11px]">Budget:</p>
      <p className="absolute left-[274px] top-[11px]">₱55,555.56</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99px] items-start left-[16px] pb-px pt-[25px] px-[25px] rounded-[14px] top-[1537px] w-[399px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fefeff] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[46px] leading-[normal] overflow-clip relative rounded-[5px] shrink-0 text-[16px] text-black text-nowrap w-full">
      <p className="absolute left-0 top-[11px]">Total Amount Spent:</p>
      <p className="absolute left-[274px] top-[11px]">₱55,555.56</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99px] items-start left-[16px] pb-px pt-[25px] px-[25px] rounded-[14px] top-[1659px] w-[399px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame1 />
    </div>
  );
}

export default function VerifiedExpensesDetailedViewMobile() {
  return (
    <div className="bg-white relative size-full" data-name="Verified Expenses Detailed View (Mobile)">
      <App />
      <Paragraph2 />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[31px] rounded-[5px] top-[146px] w-[274px]" />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Button4 />
      <ArrowLeftCircleFill />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[21px] text-[#0f172b] text-[24px] text-nowrap top-[413px]">EXPENSE BREAKDOWN</p>
      <Container12 />
      <Container13 />
    </div>
  );
}