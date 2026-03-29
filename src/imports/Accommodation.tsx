import imgLogo from "Hematournamentwebsite/src/assets/5bae56d0fefec3a49b1f60147899beddff13efde.png";

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

export default function Accommodation() {
  return (
    <div className="bg-white relative size-full" data-name="ACCOMMODATION">
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-[1920px]" data-name="background">
        <div className="bg-[#a6684e] h-[780px] shrink-0 w-[1920px]" />
      </div>
      <div className="absolute h-[161px] left-[77px] top-[64px] w-[552px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[735px] top-[87px] w-[1114px]" data-name="Component 1">
        <Frame />
      </div>
      <div className="absolute h-[64px] left-[1402px] top-[236px] w-[198px]" data-name="Component 2">
        <div className="absolute bg-[#fc6615] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium h-[64px] leading-[normal] left-[calc(50%-78px)] not-italic text-[43px] text-black top-[calc(50%-32px)] w-[157px]" style={{ fontVariationSettings: "'wdth' 50" }}>
          LOCATION
        </p>
      </div>
      <div className="absolute h-[64px] left-[1600px] top-[236px] w-[320px]" data-name="Component 3">
        <div className="absolute bg-[#a6684e] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium h-[64px] leading-[normal] left-[calc(50%-142px)] not-italic text-[43px] text-black top-[calc(50%-32px)] w-[284px]" style={{ fontVariationSettings: "'wdth' 50" }}>
          ACCOMMODATION
        </p>
      </div>
      <div className="absolute h-[64px] left-[1173px] top-[236px] w-[229px]" data-name="Component 4">
        <div className="absolute bg-[#cf6f6f] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-97.5px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          HOW TO GO?
        </p>
      </div>
      <div className="absolute font-['Config_Variable:Semi_Bold',sans-serif] font-semibold h-[79px] leading-[normal] left-[161px] not-italic text-[32px] text-white top-[415px] w-[633px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">coming soon</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}
