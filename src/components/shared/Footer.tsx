import svgPaths from "../../imports/svg-6mr85zt7dg";
import imgImageSkLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import imgIkaAkoKitaNagaScaledE1758561213777297X3001 from "figma:asset/19f71eda94bef48a96a699fa2aee00d610441dcc.png";
import imgNagaCityOfficialSeal11 from "figma:asset/54453c4f43125634a29b3eeea73ee1c9839fc20a.png";

export default function Footer() {
  return (
    <div className="bg-[#0f172b] h-[276px] w-full relative">
      <div className="absolute left-[159px] top-[40px] w-[696px]">
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Source_Sans_3:Bold',sans-serif] leading-[36px] text-[30px] text-white">Get in Touch</p>
          <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#cad5e2] text-[16px] w-[696px]">Have questions or need assistance? Reach out to the Sangguniang Kabataan Federation of Naga City.</p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <div className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center rounded-[10px] size-[40px]">
                <svg className="block size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p24d83580} stroke="#E2E8F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.pd919a80} stroke="#E2E8F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#e2e8f0] text-[16px]">skfednaga@gmail.com</p>
            </div>
            <div className="flex gap-[12px] items-center">
              <div className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center rounded-[10px] size-[40px]">
                <svg className="block size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p30c8d680} stroke="#E2E8F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
              <p className="font-['Source_Sans_3:Regular',sans-serif] leading-[24px] text-[#e2e8f0] text-[16px]">Sangguniang Kabataan of Naga City</p>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] leading-[24px] left-[1500.5px] text-[#90a1b9] text-[16px] text-center top-[203px] translate-x-[-50%]">© 2026 Youth Transparency Portal. All rights reserved.</p>
      <div className="absolute left-[1454px] rounded-full shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[105px] top-[80px] bg-white">
        <img alt="" className="rounded-full object-cover size-full" src={imgImageSkLogo} />
      </div>
      <div className="absolute h-[109px] left-[1569px] top-[78px] w-[108px]">
        <img alt="" className="object-cover pointer-events-none size-full" src={imgIkaAkoKitaNagaScaledE1758561213777297X3001} />
      </div>
      <div className="absolute left-[1339px] size-[105px] top-[78px]">
        <img alt="" className="object-cover pointer-events-none size-full" src={imgNagaCityOfficialSeal11} />
      </div>
    </div>
  );
}
