import svgPaths from "./svg-vp385dee1m";
import imgImageLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import imgIkaAkoKitaNagaScaledE1758561213777297X3001 from "figma:asset/19f71eda94bef48a96a699fa2aee00d610441dcc.png";
import imgNagaCityOfficialSeal11 from "figma:asset/54453c4f43125634a29b3eeea73ee1c9839fc20a.png";

function Heading1() {
  return (
    <div
      className="h-[32px] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">
        HIV/AIDS Awareness Seminar
      </p>
    </div>
  );
}

function Text() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[123.672px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[124px]">
          Origin: SK Federation
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[4.266px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">
          •
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[137.828px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">
          Published: Sep 13, 2025
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Container />
      </div>
    </div>
  );
}

function ArrowRightCircleFill() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="arrow-right-circle-fill 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g
          clipPath="url(#clip0_5_2893)"
          id="arrow-right-circle-fill 1"
        >
          <path
            d={svgPaths.pbe2c300}
            fill="var(--fill-0, #155DFC)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2893">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div
      className="content-stretch flex h-[69px] items-start justify-between relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container1 />
      <ArrowRightCircleFill />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Line Item Information
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          ID:
        </span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[176px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          Area of Participation:
        </span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[164px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          Budget:
        </span>
        <span>{` ₱55,555.56`}</span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Total Amount Spent
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[101px]">{` ₱55,555.56`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[296.66px] top-0 w-[272.672px]"
      data-name="Container"
    >
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div
      className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Expenditure Period
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[28px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[149px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          From:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[48px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[146px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          To:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[68px] w-[272.656px]"
      data-name="Paragraph"
    />
  );
}

function Container4() {
  return (
    <div
      className="absolute h-[88px] left-[593.33px] top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function ProjectsPage1() {
  return (
    <div
      className="h-[104px] relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage />
          <ProjectsPage1 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="h-[32px] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">
        Anti-Illegal Drugs Seminar
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[87.094px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[88px]">
          Origin: DINAGA
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[4.266px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">
          •
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[137.828px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">
          Published: Sep 12, 2025
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Container6 />
      </div>
    </div>
  );
}

function ArrowRightCircleFill1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="arrow-right-circle-fill 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g
          clipPath="url(#clip0_5_2893)"
          id="arrow-right-circle-fill 1"
        >
          <path
            d={svgPaths.pbe2c300}
            fill="var(--fill-0, #155DFC)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2893">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ProjectsPage2() {
  return (
    <div
      className="content-stretch flex h-[69px] items-start justify-between relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container7 />
      <ArrowRightCircleFill1 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Line Item Information
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          ID:
        </span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[273px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          Area of Participation:
        </span>
        <span>{` Active Citizenship`}</span>
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[164px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          Budget:
        </span>
        <span>{` ₱55,555.56`}</span>
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph10 />
      <Paragraph11 />
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Total Amount Spent
      </p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[101px]">{` ₱55,555.56`}</p>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[296.66px] top-0 w-[272.672px]"
      data-name="Container"
    >
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div
      className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Expenditure Period
      </p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[28px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[149px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          From:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[48px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[146px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          To:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[68px] w-[272.656px]"
      data-name="Paragraph"
    />
  );
}

function Container10() {
  return (
    <div
      className="absolute h-[88px] left-[593.33px] top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph16 />
      <Paragraph17 />
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function ProjectsPage3() {
  return (
    <div
      className="h-[104px] relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage2 />
          <ProjectsPage3 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="h-[32px] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">
        Leadership Training Camp
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[109.109px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[110px]">
          Origin: SAN FELIPE
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[4.266px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">
          •
        </p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[137.828px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">
          Published: Sep 11, 2025
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Text6 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading4 />
        <Container12 />
      </div>
    </div>
  );
}

function ArrowRightCircleFill2() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="arrow-right-circle-fill 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g
          clipPath="url(#clip0_5_2893)"
          id="arrow-right-circle-fill 1"
        >
          <path
            d={svgPaths.pbe2c300}
            fill="var(--fill-0, #155DFC)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2893">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ProjectsPage4() {
  return (
    <div
      className="content-stretch flex h-[69px] items-start justify-between relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container13 />
      <ArrowRightCircleFill2 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Line Item Information
      </p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          ID:
        </span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[273px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          Area of Participation:
        </span>
        <span>{` Active Citizenship`}</span>
      </p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[164px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          Budget:
        </span>
        <span>{` ₱55,555.56`}</span>
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Total Amount Spent
      </p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[101px]">{` ₱55,555.56`}</p>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[296.66px] top-0 w-[272.672px]"
      data-name="Container"
    >
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div
      className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Expenditure Period
      </p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[28px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[149px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          From:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[48px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[146px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          To:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[68px] w-[272.656px]"
      data-name="Paragraph"
    />
  );
}

function Container16() {
  return (
    <div
      className="absolute h-[88px] left-[593.33px] top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph26 />
      <Paragraph27 />
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function ProjectsPage5() {
  return (
    <div
      className="h-[104px] relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage4 />
          <ProjectsPage5 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="h-[32px] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f172b] text-[24px] text-nowrap top-[-1px]">
        Inter-Barangay Sports League
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[93.625px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[94px]">
          Origin: BALATAS
        </p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[4.266px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">
          •
        </p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[137.828px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[138px]">
          Published: Sep 10, 2025
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="basis-0 grow h-[84px] min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading5 />
        <Container18 />
      </div>
    </div>
  );
}

function ArrowRightCircleFill3() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="arrow-right-circle-fill 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g
          clipPath="url(#clip0_5_2893)"
          id="arrow-right-circle-fill 1"
        >
          <path
            d={svgPaths.pbe2c300}
            fill="var(--fill-0, #155DFC)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2893">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ProjectsPage6() {
  return (
    <div
      className="content-stretch flex h-[69px] items-start justify-between relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container19 />
      <ArrowRightCircleFill3 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Line Item Information
      </p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          ID:
        </span>
        <span>{` L1-20250910-762Q`}</span>
      </p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[256px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          Area of Participation:
        </span>
        <span>{` Active Citizenship`}</span>
      </p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[164px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">{`Budget: `}</span>
        ₱55,555.56
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph30 />
      <Paragraph31 />
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Total Amount Spent
      </p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 w-[101px]">{` ₱55,555.56`}</p>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[296.66px] top-0 w-[272.672px]"
      data-name="Container"
    >
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div
      className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Expenditure Period
      </p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[28px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[149px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          From:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[48px] w-[272.656px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#0f172b] text-[14px] top-0 w-[146px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">
          To:
        </span>
        <span>{` September 1, 2025`}</span>
      </p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div
      className="absolute h-[20px] left-0 top-[68px] w-[272.656px]"
      data-name="Paragraph"
    />
  );
}

function Container22() {
  return (
    <div
      className="absolute h-[88px] left-[593.33px] top-0 w-[272.656px]"
      data-name="Container"
    >
      <Paragraph36 />
      <Paragraph37 />
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function ProjectsPage7() {
  return (
    <div
      className="h-[104px] relative shrink-0 w-full"
      data-name="ProjectsPage"
    >
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="bg-white h-[238px] relative rounded-[14px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <ProjectsPage6 />
          <ProjectsPage7 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[16px] h-[1108px] items-start left-[637px] top-[197px] w-[916px]"
      data-name="Container"
    >
      <Container5 />
      <Container11 />
      <Container17 />
      <Container23 />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="absolute h-[42px] left-0 rounded-[10px] top-0 w-[234px]"
      data-name="Text Input"
    >
      <div className="content-stretch flex items-center overflow-clip pl-[16px] pr-[40px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap">
          Search...
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute left-[206px] size-[16px] top-[13px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d="M14 14L11.1066 11.1067"
            id="Vector"
            stroke="var(--stroke-0, #90A1B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p107a080}
            id="Vector_2"
            stroke="var(--stroke-0, #90A1B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextInput />
      <Icon />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="absolute h-[24px] left-0 top-0 w-[234px]"
      data-name="Heading 3"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0f172b] text-[16px] text-nowrap top-0">
        Filters
      </p>
    </div>
  );
}

function Label() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Year
      </p>
    </div>
  );
}

function Option() {
  return (
    <div
      className="absolute left-[-362.5px] size-0 top-[-285px]"
      data-name="Option"
    />
  );
}

function Dropdown() {
  return (
    <div
      className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]"
      data-name="Dropdown"
    >
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute left-[206px] size-[16px] top-[13px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, #90A1B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Dropdown />
      <Icon1 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[4px] h-[66px] items-start left-0 top-[40px] w-[234px]"
      data-name="Container"
    >
      <Label />
      <Container26 />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Month
      </p>
    </div>
  );
}

function Option1() {
  return (
    <div
      className="absolute left-[-362.5px] size-0 top-[-363px]"
      data-name="Option"
    />
  );
}

function Dropdown1() {
  return (
    <div
      className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]"
      data-name="Dropdown"
    >
      {[...Array(13).keys()].map((_, i) => (
        <Option1 key={i} />
      ))}
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="absolute left-[206px] size-[16px] top-[13px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, #90A1B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Dropdown1 />
      <Icon2 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[4px] h-[66px] items-start left-0 top-[118px] w-[234px]"
      data-name="Container"
    >
      <Label1 />
      <Container28 />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#45556c] text-[14px]">
        Origin
      </p>
    </div>
  );
}

function Option2() {
  return (
    <div
      className="absolute left-[-362.5px] size-0 top-[-441px]"
      data-name="Option"
    />
  );
}

function Dropdown2() {
  return (
    <div
      className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]"
      data-name="Dropdown"
    >
      {[...Array(5).keys()].map((_, i) => (
        <Option2 key={i} />
      ))}
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="absolute left-[206px] size-[16px] top-[13px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, #90A1B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Dropdown2 />
      <Icon3 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[4px] h-[66px] items-start left-0 top-[196px] w-[234px]"
      data-name="Container"
    >
      <Label2 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="h-[340px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading2 />
      <Container27 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0f172b] text-[16px] text-nowrap top-0">
        Sort By
      </p>
    </div>
  );
}

function Option3() {
  return (
    <div
      className="absolute left-[-362.5px] size-0 top-[-625px]"
      data-name="Option"
    />
  );
}

function Dropdown3() {
  return (
    <div
      className="absolute bg-white border border-[#cad5e2] border-solid h-[42px] left-0 rounded-[10px] top-0 w-[234px]"
      data-name="Dropdown"
    >
      {[...Array(4).keys()].map((_, i) => (
        <Option3 key={i} />
      ))}
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="absolute left-[206px] size-[16px] top-[13px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, #90A1B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Dropdown3 />
      <Icon4 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] h-[82px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading6 />
      <Container33 />
    </div>
  );
}

function ProjectsPage8() {
  return (
    <div
      className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[582px] items-start left-[320px] pb-px pt-[25px] px-[25px] rounded-[14px] top-[130px] w-[284px]"
      data-name="ProjectsPage"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      />
      <Container25 />
      <Container32 />
      <Container34 />
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="h-[16px] overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"
        data-name="Vector"
      >
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 5.33333 9.33333"
          >
            <path
              d={svgPaths.p2ab2d800}
              id="Vector"
              stroke="var(--stroke-0, #45556c)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="h-[24px] opacity-50 relative rounded-[4px] shrink-0 w-[32px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#155dfc] h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white">
          1
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">
          2
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">
          3
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="h-[28px] relative rounded-[4px] shrink-0 w-[30.969px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">
          4
        </p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[27.953px]"
      data-name="Text"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[8px] text-[#90a1b9] text-[16px] text-nowrap top-0">
          ...
        </p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="h-[28px] relative rounded-[4px] shrink-0 w-[37.922px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">
          13
        </p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="h-[28px] relative rounded-[4px] shrink-0 w-[37.922px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-center text-nowrap">
          14
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="h-[16px] overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"
        data-name="Vector"
      >
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 5.33333 9.33333"
          >
            <path
              d={svgPaths.p3ec8f700}
              id="Vector"
              stroke="var(--stroke-0, #45556c)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="h-[24px] relative rounded-[4px] shrink-0 w-[32px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[8px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute content-stretch flex gap-[4px] h-[28px] items-center justify-center left-[345px] pl-[0.016px] pr-0 py-0 top-[734px] w-[234px]"
      data-name="Container"
    >
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Text12 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="absolute h-[40px] left-[643px] top-[139px] w-[916px]"
      data-name="Heading 2"
    >
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#0f172b] text-[36px] text-nowrap top-0">
        VERIFIED EXPENSES
      </p>
    </div>
  );
}

function ImageLogo() {
  return (
    <div
      className="relative rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px]"
      data-name="Image (Logo)"
    >
      <div
        aria-hidden="true"
        className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]"
      >
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.35544e+07px]" />
        <img
          alt=""
          className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-50%-50% object-cover rounded-[3.35544e+07px] size-full"
          src={imgImageLogo}
        />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#0f172b] text-[16px] text-nowrap top-0">
        Youth Transparency Portal
      </p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div
      className="content-stretch flex h-[20px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#45556c] text-[14px] text-nowrap">
        Sangguniang Kabataan of Naga City
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="h-[64px] relative shrink-0 w-[288.156px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <ImageLogo />
        <Container36 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3a151200}
            id="Vector"
            stroke="var(--stroke-0, #314158)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p18af2500}
            id="Vector_2"
            stroke="var(--stroke-0, #314158)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function App() {
  return (
    <div
      className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.5px] text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">
          Home
        </p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="h-[40px] relative rounded-[10px] shrink-0 w-[96.313px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon7 />
        <App />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p368df400}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p3a53aa80}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M8 7.33333H10.6667"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M8 10.6667H10.6667"
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M5.33333 7.33333H5.34"
            id="Vector_5"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M5.33333 10.6667H5.34"
            id="Vector_6"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function App1() {
  return (
    <div
      className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[24px] left-[calc(50%-1.27px)] text-[16px] text-center text-nowrap text-white top-0 translate-x-[-50%]">
          Verified Expenses
        </p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="bg-[#174499] h-[40px] relative rounded-[10px] shrink-0 w-[170px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon8 />
        <App1 />
      </div>
    </div>
  );
}

function CardChecklist() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="card-checklist 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_5_2878)" id="card-checklist 1">
          <path
            d={svgPaths.p3cb26100}
            fill="var(--fill-0, #314158)"
            id="Vector"
          />
          <path
            d={svgPaths.p530d400}
            fill="var(--fill-0, #314158)"
            id="Vector_2"
          />
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
    <div
      className="h-[24px] relative shrink-0 w-[81px]"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.19px)] text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">
          Line Items
        </p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="h-[40px] relative rounded-[10px] shrink-0 w-[133px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <CardChecklist />
        <App2 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.pd752880}
            id="Vector"
            stroke="var(--stroke-0, #314158)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function App3() {
  return (
    <div
      className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[28.5px] text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">
          Archives
        </p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div
      className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[10px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
          <Icon9 />
          <App3 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-[548px]"
      data-name="Navigation"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Container37 />
      <Navigation />
    </div>
  );
}

function App4() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[97px] items-start left-0 pb-px pt-[16px] px-[336.5px] top-0 w-[1905px]"
      data-name="App"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Container38 />
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-nowrap text-white top-0">
        Get in Touch
      </p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#cad5e2] text-[16px] top-0 w-[696px]">
        Have questions or need assistance? Reach out to the
        Sangguniang Kabataan Federation of Naga City.
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p24d83580}
            id="Vector"
            stroke="var(--stroke-0, #E2E8F0)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.pd919a80}
            id="Vector_2"
            stroke="var(--stroke-0, #E2E8F0)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function App5() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[40px]"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function App6() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[152.313px]"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e2e8f0] text-[16px] text-nowrap top-0">
          skfednaga@gmail.com
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full"
      data-name="Link"
    >
      <App5 />
      <App6 />
    </div>
  );
}

function Icon11() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p30c8d680}
            id="Vector"
            stroke="var(--stroke-0, #E2E8F0)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function App7() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shrink-0 size-[40px]"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function App8() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[237.891px]"
      data-name="App"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e2e8f0] text-[16px] text-nowrap top-0">
          Sangguniang Kabataan of Naga City
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full"
      data-name="Link"
    >
      <App7 />
      <App8 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] h-[96px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Link />
      <Link1 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[16px] h-[220px] items-start left-0 top-0 w-[696px]"
      data-name="Container"
    >
      <Heading8 />
      <Paragraph41 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="absolute h-[188px] left-[159px] top-[40px] w-[696px]"
      data-name="Container"
    >
      <Container40 />
    </div>
  );
}

function ImageSkLogo() {
  return (
    <div
      className="absolute left-[1454px] rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[105px] top-[80px]"
      data-name="Image (SK Logo)"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[3.35544e+07px]"
      >
        <div className="absolute bg-white inset-0 rounded-[3.35544e+07px]" />
        <img
          alt=""
          className="absolute max-w-none object-50%-50% object-cover rounded-[3.35544e+07px] size-full"
          src={imgImageLogo}
        />
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div
      className="absolute bg-[#0f172b] h-[276px] left-0 top-[1305px] w-[1905px]"
      data-name="Paragraph"
    >
      <Container41 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[1500.5px] text-[#90a1b9] text-[16px] text-center text-nowrap top-[203px] translate-x-[-50%]">
        © 2026 Youth Transparency Portal. All rights reserved.
      </p>
      <ImageSkLogo />
      <div
        className="absolute h-[109px] left-[1569px] top-[78px] w-[108px]"
        data-name="ika-ako-kita-naga-scaled-e1758561213777-297x300 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgIkaAkoKitaNagaScaledE1758561213777297X3001}
        />
      </div>
      <div
        className="absolute left-[1339px] size-[105px] top-[78px]"
        data-name="Naga_City_Official_Seal-1 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgNagaCityOfficialSeal11}
        />
      </div>
    </div>
  );
}

export default function VerifiedExpenses() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Verified Expenses"
    >
      <Container24 />
      <ProjectsPage8 />
      <Container35 />
      <Heading7 />
      <App4 />
      <Paragraph42 />
    </div>
  );
}