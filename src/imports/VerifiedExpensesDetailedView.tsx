import svgPaths from "./svg-76i4whuqzz";
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
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[288.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <ImageLogo />
        <Container />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18af2500} id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.5px] text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[96.313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon />
        <App />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p368df400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3a53aa80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 7.33333H10.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H10.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 7.33333H5.34" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H5.34" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[24px] left-[calc(50%-1.27px)] text-[16px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Verified Expenses</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#174499] h-[40px] relative rounded-[10px] shrink-0 w-[170px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon1 />
        <App1 />
      </div>
    </div>
  );
}

function CardChecklist() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="card-checklist 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_2878)" id="card-checklist 1">
          <path d={svgPaths.p3cb26100} fill="var(--fill-0, #314158)" id="Vector" />
          <path d={svgPaths.p530d400} fill="var(--fill-0, #314158)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_5_2878">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function App2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[81px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.19px)] text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">Line Items</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <CardChecklist />
        <App2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pd752880} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[28.5px] text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">Archives</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
          <Icon2 />
          <App3 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[40px] relative shrink-0 w-[548px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Navigation />
    </div>
  );
}

function App4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[97px] items-start left-0 pb-px pt-[16px] px-[336.5px] top-0 w-[1905px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-nowrap text-white top-0">Get in Touch</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#cad5e2] text-[16px] top-0 w-[696px]">Have questions or need assistance? Reach out to the Sangguniang Kabataan Federation of Naga City.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function App5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function App6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152.313px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e2e8f0] text-[16px] text-nowrap top-0">skfednaga@gmail.com</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Link">
      <App5 />
      <App6 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function App7() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function App8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[237.891px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e2e8f0] text-[16px] text-nowrap top-0">Sangguniang Kabataan of Naga City</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Link">
      <App7 />
      <App8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[220px] items-start left-0 top-0 w-[696px]" data-name="Container">
      <Heading2 />
      <Paragraph1 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[188px] left-[159px] top-[40px] w-[696px]" data-name="Container">
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

function Paragraph2() {
  return (
    <div className="absolute bg-[#0f172b] h-[276px] left-0 top-[1398px] w-[1905px]" data-name="Paragraph">
      <Container5 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[1500.5px] text-[#90a1b9] text-[16px] text-center text-nowrap top-[203px] translate-x-[-50%]">© 2026 Youth Transparency Portal. All rights reserved.</p>
      <ImageSkLogo />
      <div className="absolute h-[109px] left-[1569px] top-[78px] w-[108px]" data-name="ika-ako-kita-naga-scaled-e1758561213777-297x300 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIkaAkoKitaNagaScaledE1758561213777297X3001} />
      </div>
      <div className="absolute left-[1339px] size-[105px] top-[78px]" data-name="Naga_City_Official_Seal-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNagaCityOfficialSeal11} />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[233px] px-[3px] py-px top-[138px]" data-name="Button">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Back</p>
    </div>
  );
}

function ArrowLeftCircleFill() {
  return (
    <div className="absolute left-[207px] size-[16px] top-[143px]" data-name="arrow-left-circle-fill 1">
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

function ProjTit() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[16px] relative shrink-0 w-[755px]" data-name="proj tit">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Particulars</p>
    </div>
  );
}

function LiInfo() {
  return (
    <div className="content-stretch flex h-[52px] items-start px-[24px] py-[16px] relative shrink-0 w-[157px]" data-name="li info">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Amount</p>
    </div>
  );
}

function ProjTit1() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[16px] relative shrink-0 w-[212px]" data-name="proj tit">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Date of Expense</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex h-[53px] items-start px-[24px] py-[16px] relative shrink-0 w-[225px]" data-name="4">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Attachment</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <ProjTit />
      <LiInfo />
      <ProjTit1 />
      <Component />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[755px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Venue Rental (1-day seminar)</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱12,000.00</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">September 1, 2025</p>
    </div>
  );
}

function Container6() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Images() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_439)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_439">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container6 />
      <Images />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[755px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[334px]">Meals and Snacks for Participants (80 pax)</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱15,000.00</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[334px]">September 1, 2025</p>
    </div>
  );
}

function Container7() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Images1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_439)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_439">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container7 />
      <Images1 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[755px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[352px]">Honorarium for Speaker / Resource Person</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱8,000.00</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[352px]">September 1, 2025</p>
    </div>
  );
}

function Images2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_439)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_439">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Images2 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[755px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[304px]">Seminar Kits (IDs, pens, notebooks, folders)</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱11,000.00</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[304px]">September 1, 2025</p>
    </div>
  );
}

function Images3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_439)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_439">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Images3 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[755px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[415px]">IEC Materials Printing (Tarpaulin, flyers, posters)</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱9,555.56</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[415px]">September 1, 2025</p>
    </div>
  );
}

function Images4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_439)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_439">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Images4 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px h-[532px] items-start left-0 overflow-clip top-0 w-[1264px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white h-[532px] left-[calc(50%+0.5px)] overflow-clip rounded-[10px] top-[490px] translate-x-[-50%] w-[1280px]">
      <Table />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[40px] left-[347px] top-[133px] w-[360px]" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#0f172b] text-[36px] text-nowrap top-0">EXPENSE BREAKDOWN</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fefeff] h-[46px] leading-[normal] overflow-clip relative rounded-[5px] shrink-0 text-black text-nowrap w-[702px]">
      <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold left-[23px] text-[20px] top-[13px]">Budget:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal left-[546px] text-[32px] top-0">₱55,555.56</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99px] items-start left-[855px] pb-px pt-[25px] px-[25px] rounded-[14px] top-[1085px] w-[739px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fefeff] h-[46px] leading-[normal] overflow-clip relative rounded-[5px] shrink-0 text-black text-nowrap w-[702px]">
      <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold left-[23px] text-[20px] top-[13px]">Total Amount Spent:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal left-[546px] text-[32px] top-0">₱55,555.56</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99px] items-start left-[855px] pb-0 pt-[25px] px-[25px] rounded-[14px] top-[1203px] w-[739px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">HIV/AIDS Awareness Seminar</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[124px]">Origin: SK Federation</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">•</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">Published: Sep 13, 2025</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Container10 />
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="content-stretch flex h-[69px] items-start justify-between relative shrink-0 w-full" data-name="ProjectsPage">
      <Container11 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">Line Item Information</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[176px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[164px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱55,555.56`}</span>
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-0 w-[272.656px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">Total Amount Spent</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[101px]">{` ₱55,555.56`}</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[296.66px] top-0 w-[272.672px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">Expenditure Period</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[272.656px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[149px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">From:</span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20px] left-0 top-[48px] w-[272.656px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[146px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">To:</span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph12() {
  return <div className="absolute h-[20px] left-0 top-[68px] w-[272.656px]" data-name="Paragraph" />;
}

function Container14() {
  return (
    <div className="absolute h-[88px] left-[593.33px] top-0 w-[272.656px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function ProjectsPage1() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="ProjectsPage">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[238px] items-start left-[calc(50%+0.5px)] pb-px pt-[25px] px-[25px] rounded-[14px] top-[209px] translate-x-[-50%] w-[916px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <ProjectsPage />
      <ProjectsPage1 />
    </div>
  );
}

export default function VerifiedExpensesDetailedView() {
  return (
    <div className="bg-white relative size-full" data-name="Verified Expenses - Detailed View">
      <App4 />
      <Paragraph2 />
      <Button4 />
      <ArrowLeftCircleFill />
      <Frame2 />
      <Heading1 />
      <Container8 />
      <Container9 />
      <Container15 />
    </div>
  );
}