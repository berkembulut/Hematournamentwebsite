import imgLogo from "figma:asset/2450ef6bcf74176f59ea94f8abb89fb298f91882.png";
import imgIllustration from "figma:asset/9df4903d40deb1400b508f633d9cd2820bb47082.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0 w-full">
      <div className="h-[70px] relative shrink-0 w-[179px]" data-name="Button 1 Blue">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Bold',sans-serif] font-bold inset-[17.14%_0_18.57%_1.12%] leading-[normal] not-italic text-[32px] text-black text-center" style={{ fontVariationSettings: "'wdth' 50" }}>
          HOME
        </p>
      </div>
      <div className="h-[70px] relative shrink-0 w-[179px]" data-name="Button 1 Blue">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Bold',sans-serif] font-bold inset-[17.14%_0_18.57%_1.12%] leading-[normal] not-italic text-[32px] text-black text-center" style={{ fontVariationSettings: "'wdth' 50" }}>
          RULES
        </p>
      </div>
      <div className="h-[70px] relative shrink-0 w-[179px]" data-name="Button 1 Blue">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0" />
        <div className="absolute font-['Config_Variable:Condensed_Bold',sans-serif] font-bold inset-[17.14%_0_18.57%_1.12%] leading-[normal] not-italic text-[32px] text-black text-center" style={{ fontVariationSettings: "'wdth' 50" }}>
          <p className="mb-0">JOURNEY</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className="h-[70px] relative shrink-0 w-[179px]" data-name="Button 1 Blue">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Bold',sans-serif] font-bold inset-[17.14%_0_18.57%_1.12%] leading-[normal] not-italic text-[32px] text-black text-center" style={{ fontVariationSettings: "'wdth' 50" }}>
          SCHEDULE
        </p>
      </div>
      <div className="h-[70px] relative shrink-0 w-[179px]" data-name="Button 1 Blue">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Bold',sans-serif] font-bold inset-[17.14%_0_18.57%_1.12%] leading-[normal] not-italic text-[32px] text-black text-center" style={{ fontVariationSettings: "'wdth' 50" }}>
          ABOUT
        </p>
      </div>
    </div>
  );
}

export default function HomeMilitarySabre() {
  return (
    <div className="bg-white relative size-full" data-name="Home-Military Sabre">
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-[1920px]" data-name="background">
        <div className="bg-[#fca915] h-[780px] shrink-0 w-[1920px]" />
      </div>
      <div className="absolute h-[161px] left-[77px] top-[64px] w-[552px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="absolute h-[891px] left-[213px] top-[168px] w-[1050px]" data-name="illustration">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIllustration} />
      </div>
      <div className="absolute h-[85px] left-[1388px] top-[215px] w-[532px]" data-name="Rec categories">
        <div className="absolute bg-[#fca915] inset-[0_0_-5.88%_0]" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium inset-[2.35%_16.35%_0_17.67%] leading-[normal] not-italic text-[58px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          MILITARY SABER
        </p>
      </div>
      <div className="absolute h-[85px] left-[1261px] top-[215px] w-[127px]" data-name="Rects extra">
        <div className="absolute bg-[#ff005c] inset-0" />
      </div>
      <div className="absolute h-[85px] left-[1134px] top-[215px] w-[127px]" data-name="Rects extra">
        <div className="absolute bg-[#147af4] inset-0" />
      </div>
      <div className="absolute h-[85px] left-[1007px] top-[215px] w-[127px]" data-name="Rects extra">
        <div className="absolute bg-[#30cc0a] inset-0" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[735px] top-[87px] w-[1114px]" data-name="Component 1">
        <Frame />
      </div>
      <p className="absolute font-['Config_Variable:Regular',sans-serif] font-normal h-[455px] leading-[0] left-[1241px] not-italic text-[0px] text-black top-[446px] w-[592px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Config_Variable:Medium',sans-serif] font-medium leading-[normal] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Special Rule (M. Saber): `}</span>
        <span className="leading-[normal] text-[20px]">
          {`No specific rules   `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Config_Variable:Medium',sans-serif] font-medium leading-[normal] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Weapon specifics:
          <br aria-hidden="true" />
        </span>
        <span className="leading-[normal] text-[20px]">
          {`Weight 750 – 850g   Balance point approx. 10 cm (+- 1 cm tolerance) ahead of the start of the blade/guard.   Length: 100 cm   Blade length: 85 cm   `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Config_Variable:Medium',sans-serif] font-medium leading-[normal] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {`Guard: `}
          <br aria-hidden="true" />
        </span>
        <span className="leading-[normal] text-[20px]">
          {`Cup guard or military saber guard   `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Config_Variable:Medium',sans-serif] font-medium leading-[normal] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Protection Gear:
          <br aria-hidden="true" />
        </span>
        <span className="leading-[normal] text-[20px]">350 N jacket and mask, gorget, back head protection, groin protection is required. Hand protection is single finger gloves (Both hands). Elbow and knee must be covered in hard shell. Shin guard is obligatory.</span>
      </p>
    </div>
  );
}