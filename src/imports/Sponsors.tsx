import imgLogo from "../assets/ed0ecbd1afa89953aec504b2b18a75fba46fbf31.png";
import imgImage13 from "../assets/f11a370b7a169d5ade99cd4bf2d809d02d191884.png";
import imgImage11 from "../assets/1ed8c6e2e63a03b6e7f02e5082f1de94f670f5ac.png";
import imgImage12 from "../assets/b074409ffcdfd5095d06d4c9c4861921ca188413.png";

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

function Frame1() {
  return (
    <div className="absolute h-[336px] left-[478px] overflow-clip top-[473px] w-[364px]">
      <div className="absolute h-[296px] left-0 top-0 w-[374px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[478px] top-[473px]">
      <Frame1 />
      <a className="absolute block font-['Config_Variable:Regular',sans-serif] font-normal h-[62.578px] leading-[0] left-[478px] not-italic text-[24px] text-white top-[783px] w-[462px]" href="https://www.instagram.com/kut.armoury/" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer decoration-solid leading-[normal] underline">{`https://www.instagram.com/kut.armoury/`}</p>
      </a>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[352px] left-[1007px] overflow-clip top-[473px] w-[285px]">
      <div className="absolute h-[296px] left-0 top-0 w-[258px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.32%] left-0 max-w-none top-[-0.16%] w-full" src={imgImage11} />
        </div>
      </div>
      <a className="absolute block font-['Config_Variable:Regular',sans-serif] font-normal h-[75px] leading-[0] left-0 not-italic text-[24px] text-white top-[309px] w-[348px]" href="https://sparringglove.com/" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer decoration-solid leading-[normal] underline">{`https://sparringglove.com/`}</p>
      </a>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1007px] top-[473px]">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[456.225px] left-[114px] overflow-clip top-[435px] w-[479px]">
      <div className="absolute h-[332px] left-[-9px] top-[14px] w-[271px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
      <a className="absolute block font-['Config_Variable:Regular',sans-serif] font-normal h-[27.586px] leading-[0] left-0 not-italic text-[24px] text-white top-[346px] w-[343.689px]" href="https://silkfencing.pl/home" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer decoration-solid leading-[normal] underline">{`https://silkfencing.pl/home`}</p>
      </a>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[114px] top-[435px]">
      <Frame3 />
    </div>
  );
}

export default function Sponsors() {
  return (
    <div className="bg-white relative size-full" data-name="Sponsors">
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-[1920px]" data-name="background">
        <div className="bg-[#6369e4] h-[780px] shrink-0 w-[1920px]" />
      </div>
      <div className="absolute h-[161px] left-[77px] top-[64px] w-[552px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[735px] top-[87px] w-[1114px]" data-name="Component 3">
        <Frame />
      </div>
      <Group2 />
      <Group1 />
      <Group />
      <div className="absolute h-[64px] left-[1452px] top-[237px] w-[240px]" data-name="Component 4">
        <div className="absolute bg-[#147af4] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-105px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          MEET’N BEAT
        </p>
      </div>
      <div className="absolute h-[64px] left-[1223px] top-[237px] w-[229px]" data-name="Component 2">
        <div className="absolute bg-[#60a856] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-82.5px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          ESKİŞEHİR
        </p>
      </div>
      <div className="absolute h-[64px] left-[1691px] top-[237px] w-[229px]" data-name="Component 2">
        <div className="absolute bg-[#6369e4] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-85.5px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          SPONSORS
        </p>
      </div>
      <div className="absolute h-[64px] left-[994px] top-[237px] w-[229px]" data-name="Component 5">
        <div className="absolute bg-[#ff005c] inset-0" />
        <p className="absolute font-['Config_Variable:Condensed_Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-85.5px)] not-italic text-[43px] text-black top-[calc(50%-30px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 50" }}>
          CONTACT
        </p>
      </div>
    </div>
  );
}
