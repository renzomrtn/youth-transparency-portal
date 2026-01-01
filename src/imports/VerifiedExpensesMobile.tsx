import svgPaths from "./svg-cgvtest3ax";
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
    <div className="absolute bg-[#0f172b] h-[302px] left-0 top-[1287px] w-[440px]" data-name="Paragraph">
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
    <div className="absolute content-stretch flex h-[20px] items-start left-[14px] top-[111px] w-[140px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[0px] text-[10px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[127px] w-[140px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[0px] text-[10px] top-0 w-[176px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function Paragraph5() {
  return <div className="absolute h-[20px] left-[15px] top-[134px] w-[272.656px]" data-name="Paragraph" />;
}

function ArrowRightCircleFill() {
  return <div className="absolute left-[348px] size-[16px] top-[18px]" data-name="arrow-right-circle-fill 1" />;
}

function Container6() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%-1.5px)] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[343px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[15px] text-[#0f172b] text-[20px] text-nowrap top-[23px]">HIV/AIDS Awareness Seminar</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[14px] text-[#62748e] text-[12px] text-nowrap top-[82px]">Line Item Information</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[147px] text-[#62748e] text-[12px] text-nowrap top-[82px]">Total Amount Spent</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[270px] text-[#62748e] text-[12px] text-nowrap top-[81px]">Expenditure Period</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[15px] text-[#606060] text-[12px] text-nowrap top-[47px]">Origin: SK Federation • Published: Sep 13, 2025</p>
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[14px] text-[#0f172b] text-[0px] text-[10px] top-[146px] w-[84px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱55,555.56`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[147px] text-[#0f172b] text-[10px] top-[110px] w-[101px]">{` ₱55,555.56`}</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[270px] text-[#0f172b] text-[0px] text-[10px] top-[110px] w-[110px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">From:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[270px] text-[#0f172b] text-[0px] text-[10px] top-[127px] w-[108px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">To:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <ArrowRightCircleFill />
      <div className="absolute inset-[calc(15.05%-1px)_calc(4.51%-1px)_calc(76.34%-1px)_calc(91.48%-1px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p4c96b00} fill="var(--fill-0, #155DFC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[108px] w-[140px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[0px] text-[10px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[124px] w-[140px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[0px] text-[10px] top-0 w-[176px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function Paragraph8() {
  return <div className="absolute h-[20px] left-[17px] top-[142px] w-[272.656px]" data-name="Paragraph" />;
}

function Container7() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%-1.5px)] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[557px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[17px] text-[#0f172b] text-[20px] text-nowrap top-[20px]">Anti-Illegal Drugs Seminar</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#62748e] text-[12px] text-nowrap top-[79px]">Line Item Information</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[149px] text-[#62748e] text-[12px] text-nowrap top-[79px]">Total Amount Spent</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[272px] text-[#62748e] text-[12px] text-nowrap top-[78px]">Expenditure Period</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[17px] text-[#606060] text-[12px] text-nowrap top-[44px]">Origin: DINAGA • Published: Sep 13, 2025</p>
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#0f172b] text-[0px] text-[10px] top-[143px] w-[84px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱55,555.56`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[149px] text-[#0f172b] text-[10px] top-[107px] w-[101px]">{` ₱55,555.56`}</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[272px] text-[#0f172b] text-[0px] text-[10px] top-[107px] w-[110px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">From:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[272px] text-[#0f172b] text-[0px] text-[10px] top-[124px] w-[108px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">To:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <div className="absolute inset-[calc(13.44%-1px)_calc(4.51%-1px)_calc(77.96%-1px)_calc(91.48%-1px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p4c96b00} fill="var(--fill-0, #155DFC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[15px] top-[108px] w-[140px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[0px] text-[10px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-[15px] top-[124px] w-[140px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[0px] text-[10px] top-0 w-[176px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function Paragraph11() {
  return <div className="absolute h-[20px] left-[15px] top-[134px] w-[272.656px]" data-name="Paragraph" />;
}

function Container8() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%+1.5px)] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[771px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[16px] text-[#0f172b] text-[20px] text-nowrap top-[20px]">Leadership Training Camp</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[15px] text-[#62748e] text-[12px] text-nowrap top-[79px]">Line Item Information</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[148px] text-[#62748e] text-[12px] text-nowrap top-[79px]">Total Amount Spent</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[271px] text-[#62748e] text-[12px] text-nowrap top-[78px]">Expenditure Period</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#606060] text-[12px] text-nowrap top-[44px]">Origin: SAN FELIPE • Published: Sep 13, 2025</p>
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[15px] text-[#0f172b] text-[0px] text-[10px] top-[143px] w-[84px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱55,555.56`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[148px] text-[#0f172b] text-[10px] top-[107px] w-[101px]">{` ₱55,555.56`}</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[271px] text-[#0f172b] text-[0px] text-[10px] top-[107px] w-[108px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">From:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[271px] text-[#0f172b] text-[0px] text-[10px] top-[124px] w-[108px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">To:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <div className="absolute inset-[calc(13.44%-1px)_calc(4.51%-1px)_calc(77.96%-1px)_calc(91.48%-1px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p4c96b00} fill="var(--fill-0, #155DFC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[108px] w-[140px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[0px] text-[10px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[124px] w-[140px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[0px] text-[10px] top-0 w-[176px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function Paragraph14() {
  return <div className="absolute h-[20px] left-[15px] top-[134px] w-[272.656px]" data-name="Paragraph" />;
}

function Container9() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[186px] left-[calc(50%+1.5px)] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[985px] translate-x-[-50%] w-[399px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] left-[17px] text-[#0f172b] text-[20px] text-nowrap top-[20px]">Inter-Barangay Sports League</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#62748e] text-[12px] text-nowrap top-[79px]">Line Item Information</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[149px] text-[#62748e] text-[12px] text-nowrap top-[79px]">Total Amount Spent</p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[272px] text-[#62748e] text-[12px] text-nowrap top-[78px]">Expenditure Period</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[17px] text-[#606060] text-[12px] text-nowrap top-[44px]">Origin: BALATAS • Published: Sep 13, 2025</p>
      <Paragraph12 />
      <Paragraph13 />
      <Paragraph14 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#0f172b] text-[0px] text-[10px] top-[143px] w-[84px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱55,555.56`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[149px] text-[#0f172b] text-[10px] top-[107px] w-[101px]">{` ₱55,555.56`}</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[272px] text-[#0f172b] text-[0px] text-[10px] top-[107px] w-[110px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">From:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[272px] text-[#0f172b] text-[0px] text-[10px] top-[124px] w-[108px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">To:</span>
        <span>{` September 1, 2025`}</span>
      </p>
      <div className="absolute inset-[calc(13.44%-1px)_calc(4.51%-1px)_calc(77.96%-1px)_calc(91.48%-1px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p4c96b00} fill="var(--fill-0, #155DFC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[42px] left-0 rounded-[10px] top-0 w-[393px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[16px] pr-[40px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] text-nowrap">Search...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[361px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[42px] left-[25px] top-[215px] w-[393px]" data-name="Container">
      <TextInput />
      <Icon5 />
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-362.5px] size-0 top-[-285px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[393px]" data-name="Dropdown">
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[364px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[42px] left-[25px] top-[278px] w-[393px]" data-name="Container">
      <Dropdown />
      <Icon6 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[16px] text-[14px] text-[rgba(10,10,10,0.5)] text-nowrap top-[11px]">Filters</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <path d={svgPaths.p2ab2d800} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24px] opacity-50 relative rounded-[4px] shrink-0 w-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#155dfc] h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white">1</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">2</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">3</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">4</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[8px] text-[#90a1b9] text-[16px] text-nowrap top-0">...</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-[37.922px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">13</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-[37.922px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">14</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <path d={svgPaths.p3ec8f700} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[28px] items-center justify-center left-[97px] pl-[0.016px] pr-0 py-0 top-[1215px] w-[234px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Text />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

export default function VerifiedExpensesMobile() {
  return (
    <div className="bg-white relative size-full" data-name="Verified Expenses - Mobile">
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
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[25px] text-[#0f172b] text-[24px] text-nowrap top-[173px]">VERIFIED EXPENSES</p>
      <Container12 />
    </div>
  );
}