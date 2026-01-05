import svgPaths from "../../imports/svg-6mr85zt7dg";
import imgImageSkLogo from "figma:asset/66332e95704be82a036d94352800d37a3a344cb8.png";
import imgIkaAkoKitaNagaScaledE1758561213777297X3001 from "figma:asset/19f71eda94bef48a96a699fa2aee00d610441dcc.png";
import imgNagaCityOfficialSeal11 from "figma:asset/54453c4f43125634a29b3eeea73ee1c9839fc20a.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f172b] w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10">
        {/* Main content wrapper */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
          {/* Left content */}
          <div className="flex-1 max-w-[700px] flex flex-col gap-3 lg:gap-4">
            <h3 className="text-white text-[18px] sm:text-[24px] lg:text-[30px]">Get in Touch</h3>

            <p className="text-[#cad5e2] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
              Have questions or need assistance? Reach out to the Sangguniang Kabataan Federation of Naga City.
            </p>

            <div className="flex flex-col gap-3 lg:gap-4 mt-1 lg:mt-2">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-white/10 rounded-lg size-8 sm:size-9 lg:size-10 flex items-center justify-center flex-shrink-0">
                  <svg className="size-4 sm:size-[18px] lg:size-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p24d83580} stroke="#E2E8F0" strokeWidth="1.6" />
                    <path d={svgPaths.pd919a80} stroke="#E2E8F0" strokeWidth="1.6" />
                  </svg>
                </div>
                <span className="text-[#e2e8f0] text-[14px] sm:text-[15px] lg:text-[16px]">skfednaga@gmail.com</span>
              </div>

              {/* FB */}
              <div className="flex items-center gap-3">
                <div className="bg-white/10 rounded-lg size-8 sm:size-9 lg:size-10 flex items-center justify-center flex-shrink-0">
                  <svg className="size-4 sm:size-[18px] lg:size-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p30c8d680} stroke="#E2E8F0" strokeWidth="1.6" />
                  </svg>
                </div>
                <span className="text-[#e2e8f0] text-[14px] sm:text-[15px] lg:text-[16px]">
                  Sangguniang Kabataan of Naga City
                </span>
              </div>
            </div>
          </div>

          {/* Logos - Right side on desktop, below on mobile */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-10 xl:gap-12 mt-2 lg:mt-0">
            {/* Naga City Official Seal */}
            <div className="bg-white rounded-full size-[52px] sm:size-[62px] md:size-[75px] lg:size-[120px] xl:size-[140px] shadow-lg flex-shrink-0">
              <img 
                src={imgNagaCityOfficialSeal11} 
                alt="Naga City Official Seal"
                className="rounded-full w-full h-full object-cover" 
              />
            </div>
            
            {/* SK Logo */}
            <div className="bg-white rounded-full size-[52px] sm:size-[62px] md:size-[75px] lg:size-[120px] xl:size-[140px] shadow-lg flex-shrink-0">
              <img 
                src={imgImageSkLogo} 
                alt="SK Federation Logo"
                className="rounded-full w-full h-full object-cover" 
              />
            </div>
            
            {/* Ika Ako Kita Naga Logo */}
            <div className="size-[52px] sm:size-[62px] md:size-[75px] lg:size-[125px] xl:size-[145px] flex-shrink-0">
              <img
                src={imgIkaAkoKitaNagaScaledE1758561213777297X3001}
                alt="Ika Ako Kita Naga"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
        <br/>
        {/* Copyright */}
        <p className="text-center text-[#90a1b9] text-[13px] sm:text-[14px] mt-8 lg:mt-12 pt-5 lg:pt-8">
          © 2026 Youth Transparency Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}