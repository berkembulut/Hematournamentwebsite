import { useParams, Link } from "react-router";
import imgImage10 from "figma:asset/5c1388635773e1189fec4b90c45f40d7ce5f1433.png";
import { useI18n } from "../i18n";
import { useMobile } from "../MobileContext";
import MobileTabs from "../components/MobileTabs";
import Timetable, { day1Slots, day2Slots } from "../components/Timetable";

type Section = "day-1" | "day-2" | "day-3";

export default function SchedulePage() {
  const { section } = useParams<{ section: Section }>();
  const selectedSection = (section || "day-1") as Section;
  const { t } = useI18n();
  const isMobile = useMobile();

  const allTabs = [
    { name: `${t("schedule.day1")}\n${t("schedule.day1_tab_suffix")}`, color: "#0aa8cc", route: "/schedule/day-1" },
    { name: t("schedule.day2"), color: "#fca915", route: "/schedule/day-2" },
    { name: t("schedule.day3"), color: "#30cc0a", route: "/schedule/day-3" },
  ];

  const sectionData: Record<Section, { name: string; color: string }> = {
    "day-1": { name: t("schedule.day1"), color: "#0aa8cc" },
    "day-2": { name: t("schedule.day2"), color: "#fca915" },
    "day-3": { name: t("schedule.day3"), color: "#30cc0a" },
  };

  const data = sectionData[selectedSection] || sectionData["day-1"];

  const getSectionOrder = () => {
    switch (selectedSection) {
      case "day-1": return [allTabs[2], allTabs[1], allTabs[0]];
      case "day-2": return [allTabs[2], allTabs[0], allTabs[1]];
      case "day-3": return [allTabs[0], allTabs[1], allTabs[2]];
      default: return [allTabs[2], allTabs[1], allTabs[0]];
    }
  };

  // =================== MOBILE ===================
  if (isMobile) {
    const renderMobileContent = () => {
      switch (selectedSection) {
        case "day-1":
          return (
            <div className="px-4 py-4 font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-bold text-[32px] leading-[normal] mb-1 text-white" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day1")}</p>
              <p className="font-config font-bold text-[20px] italic leading-[normal] mb-4 text-white/80" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day1_date")}</p>
              <div className="text-white mb-4 space-y-2">
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_title_label")}</span><span className="text-[14px]">{t("schedule.workshop_title")}</span></p>
                <p className="text-black"><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_friday_label")}</span><span className="text-[14px]">{t("schedule.workshop_friday")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_info_label")}</span><span className="text-[14px]">{t("schedule.workshop_info")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_content_label")}</span><span className="text-[14px]">{t("schedule.workshop_content")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_level_label")}</span><span className="text-[14px]">{t("schedule.workshop_level")}</span></p>
                <p><span className="font-config font-medium text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_equipment_label")}</span><span className="text-[14px]">{t("schedule.workshop_equipment")}</span></p>
              </div>
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
        case "day-2":
          return (
            <div className="px-4 py-4 text-white font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-bold text-[32px] leading-[normal] mb-1" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day2")}</p>
              <p className="font-config font-bold text-[20px] italic leading-[normal] mb-4 text-white/80" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day2_date")}</p>
              <Timetable slots={day1Slots} compact />
            </div>
          );
        case "day-3":
          return (
            <div className="px-4 py-4 text-white font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-bold text-[32px] leading-[normal] mb-1" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day3")}</p>
              <p className="font-config font-bold text-[20px] italic leading-[normal] mb-4 text-white/80" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day3_date")}</p>
              <Timetable slots={day2Slots} compact />
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
            <div className="absolute font-config font-normal h-[602px] leading-[normal] left-[1070px] not-italic text-[20px] text-black top-[379px] w-[769px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("schedule.workshop_bio").split('\n\n').map((para, i) => (
                <p key={i} className="mb-0">{para}{i < t("schedule.workshop_bio").split('\n\n').length - 1 && <><br />&nbsp;</>}</p>
              ))}
            </div>
            <div className="absolute h-[229px] left-[817px] top-[384px] w-[224px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
            </div>
            <div className="absolute font-config font-normal h-[456px] leading-[0] left-[91px] not-italic text-[0px] text-white top-[500px] w-[700px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_title_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_title")}</span></p>
              <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
              <p className="mb-0 text-black"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_friday_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_friday")}</span></p>
              <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_info_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_info")}</span></p>
              <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_content_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_content")}</span></p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_level_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_level")}</span></p>
              <p className="mb-0"><span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("schedule.workshop_equipment_label")}</span><span className="leading-[normal] text-[20px]">{t("schedule.workshop_equipment")}</span></p>
            </div>
          </>
        );
      case "day-2":
        return (
          <>
            <p className="absolute font-config font-bold h-[85px] leading-[normal] left-[77px] not-italic text-[73px] text-white top-[371px] w-[185px]" style={{ fontVariationSettings: "'wdth' 50" }}>{`${t("schedule.day2")} `}</p>
            <p className="absolute font-config font-bold h-[85px] italic leading-[normal] left-[269px] text-[48px] text-white top-[397px] w-[387px]" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day2_date")}</p>
            <div className="absolute left-[820px] top-[380px]">
              <Timetable slots={day1Slots} />
            </div>
          </>
        );
      case "day-3":
        return (
          <>
            <p className="absolute font-config font-bold h-[85px] leading-[normal] left-[77px] not-italic text-[73px] text-white top-[371px] w-[185px]" style={{ fontVariationSettings: "'wdth' 50" }}>{`${t("schedule.day3")} `}</p>
            <p className="absolute font-config font-bold h-[85px] italic leading-[normal] left-[269px] text-[48px] text-white top-[397px] w-[387px]" style={{ fontVariationSettings: "'wdth' 50" }}>{t("schedule.day3_date")}</p>
            <div className="absolute left-[820px] top-[380px]">
              <Timetable slots={day2Slots} />
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
