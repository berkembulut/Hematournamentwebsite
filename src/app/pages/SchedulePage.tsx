import { useParams, Link } from "react-router";
import svgPaths from "../../imports/svg-bc6bpqriki";
import imgImage10 from "figma:asset/5c1388635773e1189fec4b90c45f40d7ce5f1433.png";
import { useI18n } from "../i18n";
import { useMobile } from "../MobileContext";
import MobileTabs from "../components/MobileTabs";

type Section = "day-1" | "day-2" | "workshop";

function BracketSvg() {
  return (
    <div className="absolute h-[449.55px] left-[696px] top-[500px] w-[1097.03px]">
      {[
        { inset: "58.7%_69.52%_28.65%_3.96%", vb: "0 0 290.91 56.89", d: svgPaths.p22644b00 },
        { inset: "73.73%_71.35%_13.62%_1.89%", vb: "0 0 293.66 56.89", d: svgPaths.p1fab1b00 },
        { inset: "43.67%_67.69%_43.67%_6.04%", vb: "0 0 288.14 56.89", d: svgPaths.p7522800 },
        { inset: "28.64%_65.86%_58.7%_8.12%", vb: "0 0 285.39 56.89", d: svgPaths.p12566800 },
        { inset: "0_0_88.76%_37.27%", vb: "0 0 688.17 50.55", d: svgPaths.p236c8240 },
        { inset: "13.62%_64.03%_73.73%_10.2%", vb: "0 0 282.63 56.89", d: svgPaths.p8bc39f0 },
        { inset: "73.73%_10.35%_13.62%_28.13%", vb: "0 0 674.93 56.89", d: svgPaths.p2ea9bc80 },
        { inset: "88.76%_73.17%_0_0", vb: "0 0 294.29 50.55", d: svgPaths.p136a8c0 },
        { inset: "0_62.38%_88.76%_12.28%", vb: "0 0 277.98 50.55", d: svgPaths.p334f3e30 },
        { inset: "88.76%_12.46%_0_26.47%", vb: "0 0 669.96 50.55", d: svgPaths.p3324280 },
        { inset: "28.64%_4.02%_58.7%_33.61%", vb: "0 0 684.17 56.89", d: svgPaths.p15540d00 },
        { inset: "13.62%_1.91%_73.73%_35.44%", vb: "0 0 687.26 56.89", d: svgPaths.p14535b00 },
        { inset: "43.67%_6.13%_43.67%_31.78%", vb: "0 0 681.09 56.89", d: svgPaths.p3e05bed0 },
        { inset: "58.7%_8.24%_28.65%_29.96%", vb: "0 0 678.01 56.89", d: svgPaths.p2964a400 },
      ].map((item, i) => (
        <div key={i} className="absolute" style={{ inset: item.inset }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={item.vb}><path d={item.d} fill="var(--fill-0, white)" /></svg>
        </div>
      ))}
    </div>
  );
}

export default function SchedulePage() {
  const { section } = useParams<{ section: Section }>();
  const selectedSection = (section || "day-1") as Section;
  const { t } = useI18n();
  const isMobile = useMobile();

  const allTabs = [
    { name: t("schedule.day1"), color: "#fca915", route: "/schedule/day-1" },
    { name: t("schedule.day2"), color: "#30cc0a", route: "/schedule/day-2" },
    { name: t("schedule.workshop"), color: "#0aa8cc", route: "/schedule/workshop" },
  ];

  const sectionData: Record<Section, { name: string; color: string }> = {
    "day-1": { name: t("schedule.day1"), color: "#fca915" },
    "day-2": { name: t("schedule.day2"), color: "#30cc0a" },
    workshop: { name: t("schedule.workshop"), color: "#0aa8cc" },
  };

  const data = sectionData[selectedSection] || sectionData["day-1"];

  const getSectionOrder = () => {
    switch (selectedSection) {
      case "day-1": return [allTabs[2], allTabs[1], allTabs[0]];
      case "day-2": return [allTabs[2], allTabs[0], allTabs[1]];
      case "workshop": return [allTabs[0], allTabs[1], allTabs[2]];
      default: return [allTabs[2], allTabs[1], allTabs[0]];
    }
  };

  // =================== MOBILE ===================
  if (isMobile) {
    const renderMobileContent = () => {
      switch (selectedSection) {
        case "day-1":
          return (
            <div className="px-4 py-4 text-white font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-bold text-[32px] leading-[normal] mb-1" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day1")}</p>
              <p className="font-config font-bold text-[20px] italic leading-[normal] mb-4 text-white/80" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day1_date")}</p>
              <p className="text-[14px] leading-[normal]">{t("schedule.detailed")}</p>
            </div>
          );
        case "day-2":
          return (
            <div className="px-4 py-4 text-white font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-bold text-[32px] leading-[normal] mb-1" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day2")}</p>
              <p className="font-config font-bold text-[20px] italic leading-[normal] mb-4 text-white/80" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day2_date")}</p>
              <p className="text-[14px] leading-[normal]">{t("schedule.detailed")}</p>
            </div>
          );
        case "workshop":
          return (
            <div className="px-4 py-4 font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
              {/* Workshop details */}
              <div className="text-white mb-4 space-y-2">
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_title_label")}</span><span className="text-[14px]">{t("schedule.workshop_title")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_info_label")}</span><span className="text-[14px]">{t("schedule.workshop_info")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_content_label")}</span><span className="text-[14px]">{t("schedule.workshop_content")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_level_label")}</span><span className="text-[14px]">{t("schedule.workshop_level")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_equipment_label")}</span><span className="text-[14px]">{t("schedule.workshop_equipment")}</span></p>
              </div>
              {/* Instructor image + bio */}
              <div className="flex gap-3 mb-3">
                <img alt="" className="w-[80px] h-[80px] object-cover shrink-0" src={imgImage10} />
                <p className="text-[12px] text-black leading-[1.4]">{t("schedule.workshop_bio").substring(0, 250)}...</p>
              </div>
              <details className="text-[12px] text-black leading-[1.4]">
                <summary className="cursor-pointer font-config font-medium text-[14px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>Read more</summary>
                <p className="whitespace-pre-wrap mt-2">{t("schedule.workshop_bio")}</p>
              </details>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="w-full">
        <MobileTabs tabs={allTabs} activeRoute={`/schedule/${selectedSection}`} />
        <div className="w-full min-h-[60vh]" style={{ backgroundColor: data.color }}>
          {renderMobileContent()}
        </div>
      </div>
    );
  }

  // =================== DESKTOP ===================
  const sectionOrder = getSectionOrder();

  const renderDesktopContent = () => {
    switch (selectedSection) {
      case "day-1":
        return (
          <>
            <p className="absolute font-config font-bold h-[85px] leading-[normal] left-[77px] not-italic text-[73px] text-white top-[371px] w-[185px]" style={{ fontVariationSettings: "'wdth' 50" }}>{`${t("schedule.day1")} `}</p>
            <p className="absolute font-config font-bold h-[85px] italic leading-[normal] left-[269px] text-[48px] text-white top-[397px] w-[387px]" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day1_date")}</p>
            <p className="absolute font-config font-normal h-[393px] leading-[normal] left-[77px] not-italic text-[20px] text-white top-[541px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.detailed")}</p>
            <BracketSvg />
          </>
        );
      case "day-2":
        return (
          <>
            <p className="absolute font-config font-bold h-[85px] leading-[normal] left-[77px] not-italic text-[73px] text-white top-[371px] w-[185px]" style={{ fontVariationSettings: "'wdth' 50" }}>{`${t("schedule.day2")} `}</p>
            <p className="absolute font-config font-bold h-[85px] italic leading-[normal] left-[269px] text-[48px] text-white top-[397px] w-[387px]" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day2_date")}</p>
            <p className="absolute font-config font-normal h-[393px] leading-[normal] left-[77px] not-italic text-[20px] text-white top-[518px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.detailed")}</p>
            <BracketSvg />
          </>
        );
      case "workshop":
        return (
          <>
            <div className="absolute font-config font-normal h-[602px] leading-[normal] left-[1070px] not-italic text-[20px] text-black top-[379px] w-[769px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("schedule.workshop_bio").split('\n\n').map((para, i) => (
                <p key={i} className="mb-0">{para}{i < t("schedule.workshop_bio").split('\n\n').length - 1 && <><br />&nbsp;</>}</p>
              ))}
            </div>
            <div className="absolute h-[229px] left-[817px] top-[384px] w-[224px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
            </div>
            <div className="absolute font-config font-normal h-[456px] leading-[0] left-[91px] not-italic text-[0px] text-white top-[379px] w-[550px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_title_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_title")}</span></p>
              <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_info_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_info")}</span></p>
              <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_content_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_content")}</span></p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_level_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_level")}</span></p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_equipment_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_equipment")}</span></p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[1080px] w-full">
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-full">
        <div className="h-[780px] shrink-0 w-full" style={{ backgroundColor: data.color }} />
      </div>
      <div className="absolute right-0 top-[190px] flex gap-0">
        {sectionOrder.map((sec, index) => (
          <Link key={index} to={sec.route} className="h-[110px] w-[170px] flex items-center justify-center cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: sec.color }}>
            <p className="font-config font-bold text-[28px] text-black text-center px-2 leading-tight whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 50" }}>{sec.name}</p>
          </Link>
        ))}
      </div>
      {renderDesktopContent()}
    </div>
  );
}
