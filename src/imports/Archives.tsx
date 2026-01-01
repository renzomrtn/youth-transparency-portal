import svgPaths from "./svg-zdvfjykmz9";
import imgImageLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import imgIkaAkoKitaNagaScaledE1758561213777297X3001 from "figma:asset/19f71eda94bef48a96a699fa2aee00d610441dcc.png";
import imgNagaCityOfficialSeal11 from "figma:asset/54453c4f43125634a29b3eeea73ee1c9839fc20a.png";

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#62748e] text-[14px] top-0 w-[125px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Author:</span>
        <span>{` Luis Gomez`}</span>
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-['Source_Sans_3:Medium',sans-serif] font-medium h-[32px] relative shrink-0 text-[#0f172b] text-[24px] w-full" data-name="Heading 2">
      <p className="absolute leading-[32px] left-0 text-nowrap top-[-1px]"> </p>
      <p className="absolute leading-[24px] left-0 top-0 w-[516px]">Resolution on Educational Aid for Disaster Victims</p>
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

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph />
        <Heading1 />
        <Container />
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="ProjectsPage">
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#62748e] text-[14px]">Actions</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-0 pt-[8px] px-[8px] rounded-[10px] size-[32px] top-[36px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[68px] left-0 top-0 w-[866px]" data-name="Container">
      <Paragraph1 />
      <Button />
    </div>
  );
}

function ProjectsPage1() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="ProjectsPage">
      <Container2 />
      <div className="absolute inset-[48.86%_92.73%_31.82%_5.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <path d={svgPaths.p2481f531} fill="var(--fill-0, #696969)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage />
          <ProjectsPage1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#62748e] text-[14px] top-0 w-[142px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Author:</span>
        <span>{` John Dela Cruz`}</span>
      </p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">Resolution opposing House Bill 10747 and Senate Bill 2707</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[88px]">Origin: DINAGA</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">•</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">Published: Sep 12, 2025</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph2 />
        <Heading3 />
        <Container4 />
      </div>
    </div>
  );
}

function ProjectsPage2() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="ProjectsPage">
      <Container5 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#62748e] text-[14px]">Actions</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-0 pt-[8px] px-[8px] rounded-[10px] size-[32px] top-[36px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[68px] left-0 top-0 w-[866px]" data-name="Container">
      <Paragraph3 />
      <Button1 />
    </div>
  );
}

function ProjectsPage3() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="ProjectsPage">
      <Container6 />
      <div className="absolute inset-[48.86%_92.73%_31.82%_5.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <path d={svgPaths.p2481f531} fill="var(--fill-0, #696969)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage2 />
          <ProjectsPage3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#62748e] text-[14px] top-0 w-[160px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Author:</span>
        <span>{` Pedro Reyes`}</span>
      </p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">Resolution on Youth-Focused Drug Prevention</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[110px]">Origin: SAN FELIPE</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">•</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">Published: Sep 11, 2025</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph4 />
        <Heading4 />
        <Container8 />
      </div>
    </div>
  );
}

function ProjectsPage4() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="ProjectsPage">
      <Container9 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#62748e] text-[14px]">Actions</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-0 pt-[8px] px-[8px] rounded-[10px] size-[32px] top-[36px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[68px] left-0 top-0 w-[866px]" data-name="Container">
      <Paragraph5 />
      <Button2 />
    </div>
  );
}

function ProjectsPage5() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="ProjectsPage">
      <Container10 />
      <div className="absolute inset-[48.86%_92.73%_31.82%_5.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <path d={svgPaths.p2481f531} fill="var(--fill-0, #696969)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage4 />
          <ProjectsPage5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#62748e] text-[14px] top-0 w-[157px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Author:</span>
        <span>{` Carlos Mendoza`}</span>
      </p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">Resolution on Free HIV/AIDS Medication</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[94px]">Origin: BALATAS</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">•</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">Published: Sep 10, 2025</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph6 />
        <Heading5 />
        <Container12 />
      </div>
    </div>
  );
}

function ProjectsPage6() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="ProjectsPage">
      <Container13 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#62748e] text-[14px]">Actions</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6673 10.6658">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-0 pt-[8px] px-[8px] rounded-[10px] size-[32px] top-[36px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[68px] left-0 top-0 w-[866px]" data-name="Container">
      <Paragraph7 />
      <Button3 />
    </div>
  );
}

function ProjectsPage7() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="ProjectsPage">
      <Container14 />
      <div className="absolute inset-[48.86%_92.73%_31.82%_5.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <path d={svgPaths.p2481f531} fill="var(--fill-0, #696969)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage6 />
          <ProjectsPage7 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[1254px] items-start left-[637px] top-[197px] w-[916px]" data-name="Container">
      <Container3 />
      <Container7 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[42px] left-0 rounded-[10px] top-0 w-[234px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[16px] pr-[40px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap">Search...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[206px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[234px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0f172b] text-[16px] text-nowrap top-0">Filters</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">Year</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-362.5px] size-0 top-[-285px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]" data-name="Dropdown">
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[206px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Icon5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[66px] items-start left-0 top-[40px] w-[234px]" data-name="Container">
      <Label />
      <Container18 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">Month</p>
    </div>
  );
}

function Option1() {
  return <div className="absolute left-[-362.5px] size-0 top-[-363px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]" data-name="Dropdown">
      {[...Array(13).keys()].map((_, i) => (
        <Option1 key={i} />
      ))}
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[206px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Dropdown1 />
      <Icon6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[66px] items-start left-0 top-[118px] w-[234px]" data-name="Container">
      <Label1 />
      <Container20 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">Origin</p>
    </div>
  );
}

function Option2() {
  return <div className="absolute left-[-362.5px] size-0 top-[-441px]" data-name="Option" />;
}

function Dropdown2() {
  return (
    <div className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]" data-name="Dropdown">
      {[...Array(5).keys()].map((_, i) => (
        <Option2 key={i} />
      ))}
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[206px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Dropdown2 />
      <Icon7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[66px] items-start left-0 top-[196px] w-[234px]" data-name="Container">
      <Label2 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[340px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0f172b] text-[16px] text-nowrap top-0">Sort By</p>
    </div>
  );
}

function Option3() {
  return <div className="absolute left-[-362.5px] size-0 top-[-625px]" data-name="Option" />;
}

function Dropdown3() {
  return (
    <div className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]" data-name="Dropdown">
      {[...Array(4).keys()].map((_, i) => (
        <Option3 key={i} />
      ))}
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[206px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Dropdown3 />
      <Icon8 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[82px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container25 />
    </div>
  );
}

function ProjectsPage8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[582px] items-start left-[320px] pb-px pt-[25px] px-[25px] rounded-[14px] top-[130px] w-[284px]" data-name="ProjectsPage">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container17 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function Icon9() {
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
        <Icon9 />
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

function Text12() {
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

function Icon10() {
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
        <Icon10 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[28px] items-center justify-center left-[345px] pl-[0.016px] pr-0 py-0 top-[734px] w-[234px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Text12 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[40px] left-[643px] top-[139px] w-[916px]" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#0f172b] text-[36px] text-nowrap top-0">ARCHIVES</p>
    </div>
  );
}

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

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">Sangguniang Kabataan of Naga City</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[64px] relative shrink-0 w-[288.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <ImageLogo />
        <Container28 />
      </div>
    </div>
  );
}

function Icon11() {
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

function Button12() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[96.313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon11 />
        <App />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p368df400} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3a53aa80} id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 7.33333H10.6667" id="Vector_3" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H10.6667" id="Vector_4" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 7.33333H5.34" id="Vector_5" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H5.34" id="Vector_6" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-0.77px)] text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">Verified Expenses</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[170px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon12 />
        <App1 />
      </div>
    </div>
  );
}

function CardChecklist() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="card-checklist 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_446)" id="card-checklist 1">
          <path d={svgPaths.p3cb26100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p530d400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_446">
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

function Button14() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <CardChecklist />
        <App2 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pd752880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function App3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[24px] left-[28.5px] text-[16px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Archives</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="basis-0 bg-[#174499] grow h-[40px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
          <Icon13 />
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
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Navigation />
    </div>
  );
}

function App4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[97px] items-start left-0 pb-px pt-[16px] px-[336.5px] top-0 w-[1905px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-nowrap text-white top-0">Get in Touch</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#cad5e2] text-[16px] top-0 w-[696px]">Have questions or need assistance? Reach out to the Sangguniang Kabataan Federation of Naga City.</p>
    </div>
  );
}

function Icon14() {
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
        <Icon14 />
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

function Icon15() {
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
        <Icon15 />
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

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[220px] items-start left-0 top-0 w-[696px]" data-name="Container">
      <Heading8 />
      <Paragraph9 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[188px] left-[159px] top-[40px] w-[696px]" data-name="Container">
      <Container32 />
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

function Paragraph10() {
  return (
    <div className="absolute bg-[#0f172b] h-[276px] left-0 top-[1305px] w-[1905px]" data-name="Paragraph">
      <Container33 />
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

export default function Archives() {
  return (
    <div className="bg-white relative size-full" data-name="Archives">
      <Container16 />
      <ProjectsPage8 />
      <Container27 />
      <Heading7 />
      <App4 />
      <Paragraph10 />
    </div>
  );
}