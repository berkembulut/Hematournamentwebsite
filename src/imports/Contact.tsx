import imgLogo from "../assets/ed0ecbd1afa89953aec504b2b18a75fba46fbf31.png";

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

export default function Contact() {
  return (
    <div className="bg-white relative size-full" data-name="contact">
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-[1920px]" data-name="background">
        <div className="bg-[#ff005c] h-[780px] shrink-0 w-[1920px]" />
      </div>
      <div className="absolute h-[161px] left-[77px] top-[64px] w-[552px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[735px] top-[87px] w-[1114px]" data-name="Component 3">
        <Frame />
      </div>
      <div className="absolute h-[64px] left-[1451px] top-[237px] w-[240px]" data-name="Component 4">
        <div className="absolute bg-[#147af4] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-105px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          MEET’N BEAT
        </p>
      </div>
      <div className="absolute h-[64px] left-[1222px] top-[237px] w-[229px]" data-name="Component 2">
        <div className="absolute bg-[#60a856] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-82.5px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          ESKİŞEHİR
        </p>
      </div>
      <div className="absolute h-[64px] left-[994px] top-[237px] w-[229px]" data-name="Component 2">
        <div className="absolute bg-[#6369e4] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-85.5px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          SPONSORS
        </p>
      </div>
      <div className="absolute h-[64px] left-[1691px] top-[237px] w-[229px]" data-name="Component 2">
        <div className="absolute bg-[#ff005c] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-85.5px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          CONTACT
        </p>
      </div>
      <a className="absolute block font-['Config_Variable:Condensed_Medium',sans-serif] font-medium h-[91px] leading-[0] left-[123px] not-italic text-[43px] text-white top-[382px] w-[587px]" href="https://www.instagram.com/eskisehirhema" style={{ fontVariationSettings: "'wdth' 50" }}>
        <p className="cursor-pointer decoration-solid leading-[normal] underline">www.instagram.com/eskisehirhema</p>
      </a>
    </div>
  );
}
