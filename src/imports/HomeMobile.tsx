import svgPaths from "./svg-0z0ud1x856";
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

function Heading2() {
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
      <Heading2 />
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
    <div className="absolute bg-[#0f172b] h-[302px] left-0 top-[1384px] w-[440px]" data-name="Paragraph">
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
        <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[20.5px] text-[#314158] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">Home</p>
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
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-0.77px)] text-[#314158] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">Verified Expenses</p>
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

function Heading3() {
  return (
    <div className="absolute h-[27px] left-[54px] overflow-clip top-[39px] w-[107px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">FEDERATION</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[54px] top-[19px] w-[36px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#62748e] text-[14px] text-nowrap top-0">Origin</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#faf5ff] h-[24px] left-[329px] rounded-[3.35544e+07px] top-[16px] w-[54.406px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[12px] text-[#8200db] text-[12px] text-nowrap top-[3px]">Active</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 10L12 13L15 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] rounded-[7px] size-[24px] top-[24px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)" }}>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[393px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading3 />
      <Paragraph3 />
      <Text />
      <Container6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[27px] left-[54px] overflow-clip top-[39px] w-[107px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">₱500,000</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[24px] left-[54px] top-[19px] w-[36px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#62748e] text-[14px] text-nowrap top-0">Annual Budget</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#f0fdf4] h-[24px] left-[331px] rounded-[3.35544e+07px] top-[15px] w-[47.859px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[12px] text-[#008236] text-[12px] text-nowrap top-[3px]">2025</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2e406d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 5H8.005" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d69b7a0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex items-center justify-center left-[6px] size-[12px] top-[6px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] rounded-[7px] size-[24px] top-[24px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 166, 62) 100%)" }}>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[504px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading4 />
      <Paragraph4 />
      <Text1 />
      <Container8 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[27px] left-[54px] overflow-clip top-[39px] w-[107px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">50</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24px] left-[54px] top-[19px] w-[36px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#62748e] text-[14px] text-nowrap top-0">Line Items</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#faf5ff] h-[24px] left-[329px] rounded-[3.35544e+07px] top-[16px] w-[54.406px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[12px] text-[#8200db] text-[12px] text-nowrap top-[3px]">Active</p>
    </div>
  );
}

function CardChecklist1() {
  return (
    <div className="relative size-[12px]" data-name="card-checklist 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="card-checklist 2">
          <path d={svgPaths.p2520fa70} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pfb7ee80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex items-center justify-center left-[6px] size-[12px] top-[6px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <CardChecklist1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#cc2bbb] content-stretch flex items-center justify-center left-[15px] rounded-[7px] size-[24px] top-[24px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[615px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading5 />
      <Paragraph5 />
      <Text2 />
      <Container10 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[27px] left-[54px] overflow-clip top-[39px] w-[107px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">43</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24px] left-[54px] top-[19px] w-[36px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#62748e] text-[14px] text-nowrap top-0">Verified Expenses</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#faf5ff] h-[24px] left-[329px] rounded-[3.35544e+07px] top-[16px] w-[54.406px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[12px] text-[#8200db] text-[12px] text-nowrap top-[3px]">Active</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2e0e03b4} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p39c8900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex items-center justify-center left-[6px] size-[12px] top-[6px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] rounded-[7px] size-[24px] top-[24px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[726px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading6 />
      <Paragraph6 />
      <Text3 />
      <Container12 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[27px] left-[54px] overflow-clip top-[39px] w-[107px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">156</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[24px] left-[54px] top-[19px] w-[36px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#62748e] text-[14px] text-nowrap top-0">Documents</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbd88400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p26672af0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 4.5H4" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6.5H4" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8.5H4" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex items-center justify-center left-[6px] size-[12px] top-[6px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] rounded-[7px] size-[24px] top-[24px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 100%)" }}>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[837px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading7 />
      <Paragraph7 />
      <Container14 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[27px] left-[20px] overflow-clip top-[20px] w-[246px]" data-name="Heading 3">
      <div className="absolute font-['Source_Sans_3:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">
        <p className="mb-0">{`HIV/AIDS Awareness Seminar `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[51px] w-[197px]" data-name="Paragraph">
      <div className="absolute font-['Source_Sans_3:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-0 text-[#62748e] text-[14px] top-0 w-[197px]">
        <p className="mb-0">{`SK Federation • Verified Expenses `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[1014px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading8 />
      <Paragraph8 />
      <div className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-[325px] text-[#155dfc] text-[12px] top-[51px] w-[65px]">
        <p className="mb-0">Sep 13, 2025</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[27px] left-[20px] overflow-clip top-[20px] w-[246px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">Anti-Illegal Drugs Seminar</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[51px] w-[197px]" data-name="Paragraph">
      <div className="absolute font-['Source_Sans_3:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-0 text-[#62748e] text-[14px] top-0 w-[197px]">
        <p className="mb-0">{`SK Federation • Verified Expenses `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[1125px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading9 />
      <Paragraph9 />
      <div className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-[325px] text-[#155dfc] text-[12px] top-[51px] w-[65px]">
        <p className="mb-0">Sep 12, 2025</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[27px] left-[20px] overflow-clip top-[20px] w-[246px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0f172b] text-[20px] text-nowrap top-[-1px]">Leadership Training Camp</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[51px] w-[197px]" data-name="Paragraph">
      <div className="absolute font-['Source_Sans_3:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-0 text-[#62748e] text-[14px] top-0 w-[197px]">
        <p className="mb-0">{`SK Federation • Verified Expenses `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white border border-[#f1f5f9] border-solid h-[93px] left-[calc(50%-2px)] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[1236px] translate-x-[-50%] w-[406px]" data-name="Container">
      <Heading10 />
      <Paragraph10 />
      <div className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-[325px] text-[#155dfc] text-[12px] top-[51px] w-[65px]">
        <p className="mb-0">Sep 11, 2025</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[68px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 443.978 68">
        <path d={svgPaths.p140f7500} fill="var(--fill-0, #F8FAFC)" id="Vector" />
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67px] items-start left-0 top-[167px] w-[444px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[48px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[388px]" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[48px] left-[187px] text-[20px] text-center text-white top-0 translate-x-[-50%] w-[374px]">Welcome to the Youth Transparency Portal</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[100px] left-1/2 top-[46px] translate-x-[-50%] w-[387px]" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[20px] left-[194px] text-[#dbeafe] text-[14px] text-center top-0 translate-x-[-50%] w-[388px]">A platform dedicated to transparency and public accountability, providing direct access to the official records, documents, and financial reports of the Sangguniang Kabataan Federation and across all 27 SK barangay councils of Naga City.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[126px] left-[calc(50%+0.5px)] top-[33px] translate-x-[-50%] w-[387px]" data-name="Container">
      <Heading1 />
      <Paragraph11 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[234px] left-0 overflow-clip top-[153px] w-[444px]" data-name="Section" style={{ backgroundImage: "linear-gradient(152.21deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 50%, rgb(55, 42, 172) 100%)" }}>
      <Container19 />
      <Container20 />
    </div>
  );
}

export default function HomeMobile() {
  return (
    <div className="bg-white relative size-full" data-name="Home - Mobile">
      <App />
      <Paragraph2 />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[16px] rounded-[5px] top-[146px] w-[274px]" />
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Section />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[32px] left-[21px] text-[20px] text-black text-nowrap top-[964px]">Recent Activity</p>
    </div>
  );
}