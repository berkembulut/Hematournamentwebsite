import { useParams, Link } from "react-router";
import svgPaths from "../../imports/svg-bc6bpqriki";
import imgImage10 from "figma:asset/5c1388635773e1189fec4b90c45f40d7ce5f1433.png";
import { useI18n } from "../i18n";

type Section = "day-1" | "day-2" | "workshop";

// The SVG bracket graphic is shared between day-1 and day-2
function BracketSvg() {
  return (
    <div className="absolute h-[449.55px] left-[696px] top-[500px] w-[1097.03px]">
      <div className="absolute inset-[58.7%_69.52%_28.65%_3.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 290.91 56.89"><path d={svgPaths.p22644b00} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[73.73%_71.35%_13.62%_1.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293.66 56.89"><path d={svgPaths.p1fab1b00} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[43.67%_67.69%_43.67%_6.04%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288.14 56.89"><path d={svgPaths.p7522800} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[28.64%_65.86%_58.7%_8.12%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285.39 56.89"><path d={svgPaths.p12566800} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[0_0_88.76%_37.27%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 688.17 50.55"><path d={svgPaths.p236c8240} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[13.62%_64.03%_73.73%_10.2%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 282.63 56.89"><path d={svgPaths.p8bc39f0} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[73.73%_10.35%_13.62%_28.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 674.93 56.89"><path d={svgPaths.p2ea9bc80} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[88.76%_73.17%_0_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294.29 50.55"><path d={svgPaths.p136a8c0} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[0_62.38%_88.76%_12.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 277.98 50.55"><path d={svgPaths.p334f3e30} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[88.76%_12.46%_0_26.47%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 669.96 50.55"><path d={svgPaths.p3324280} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[28.64%_4.02%_58.7%_33.61%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 684.17 56.89"><path d={svgPaths.p15540d00} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[13.62%_1.91%_73.73%_35.44%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 687.26 56.89"><path d={svgPaths.p14535b00} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[43.67%_6.13%_43.67%_31.78%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 681.09 56.89"><path d={svgPaths.p3e05bed0} fill="var(--fill-0, white)" /></svg>
      </div>
      <div className="absolute inset-[58.7%_8.24%_28.65%_29.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 678.01 56.89"><path d={svgPaths.p2964a400} fill="var(--fill-0, white)" /></svg>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const { section } = useParams<{ section: Section }>();
  const selectedSection = section || "day-1";
  const { t } = useI18n();

  const sectionData: Record<Section, { name: string; color: string }> = {
    "day-1": { name: t("schedule.day1"), color: "#fca915" },
    "day-2": { name: t("schedule.day2"), color: "#30cc0a" },
    workshop: { name: t("schedule.workshop"), color: "#0aa8cc" },
  };

  const data = sectionData[selectedSection as Section] || sectionData["day-1"];

  const getSectionOrder = () => {
    const all = [
      { name: t("schedule.day1"), color: "#fca915", route: "/schedule/day-1" },
      { name: t("schedule.day2"), color: "#30cc0a", route: "/schedule/day-2" },
      { name: t("schedule.workshop"), color: "#0aa8cc", route: "/schedule/workshop" },
    ];
    switch (selectedSection) {
      case "day-1": return [all[2], all[1], all[0]];
      case "day-2": return [all[2], all[0], all[1]];
      case "workshop": return [all[0], all[1], all[2]];
      default: return [all[2], all[1], all[0]];
    }
  };

  const sectionOrder = getSectionOrder();

  const renderContent = () => {
    switch (selectedSection as Section) {
      case "day-1":
        return (
          <>
            <p className="absolute font-config font-bold h-[85px] leading-[normal] left-[77px] not-italic text-[73px] text-white top-[371px] w-[185px]" style={{ fontVariationSettings: "'wdth' 50" }}>{`${t("schedule.day1")} `}</p>
            <p className="absolute font-config font-bold h-[85px] italic leading-[normal] left-[269px] text-[48px] text-white top-[397px] w-[387px]" style={{ fontVariationSettings: "'wdth' 50" }}>
              {t("schedule.day1_date")}
            </p>
            <p className="absolute font-config font-normal h-[393px] leading-[normal] left-[77px] not-italic text-[20px] text-white top-[541px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("schedule.detailed")}
            </p>
            <BracketSvg />
          </>
        );
      case "day-2":
        return (
          <>
            <p className="absolute font-config font-bold h-[85px] leading-[normal] left-[77px] not-italic text-[73px] text-white top-[371px] w-[185px]" style={{ fontVariationSettings: "'wdth' 50" }}>{`${t("schedule.day2")} `}</p>
            <p className="absolute font-config font-bold h-[85px] italic leading-[normal] left-[269px] text-[48px] text-white top-[397px] w-[387px]" style={{ fontVariationSettings: "'wdth' 50" }}>
              {t("schedule.day2_date")}
            </p>
            <p className="absolute font-config font-normal h-[393px] leading-[normal] left-[77px] not-italic text-[20px] text-white top-[518px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("schedule.detailed")}
            </p>
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
            <div className="absolute h-[229px] left-[817px] top-[384px] w-[224px]" data-name="image 10">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
            </div>
            <div className="absolute font-config font-normal h-[456px] leading-[0] left-[91px] not-italic text-[0px] text-white top-[379px] w-[550px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0">
                <span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t("schedule.workshop_title_label")}
                </span>
                <span className="leading-[normal] text-[20px]">{t("schedule.workshop_title")}</span>
              </p>
              <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
              <p className="mb-0">
                <span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t("schedule.workshop_info_label")}
                </span>
                <span className="leading-[normal] text-[20px]">{t("schedule.workshop_info")}</span>
              </p>
              <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
              <p className="mb-0">
                <span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t("schedule.workshop_content_label")}
                </span>
                <span className="leading-[normal] text-[20px]">{t("schedule.workshop_content")}</span>
              </p>
              <p className="mb-0">
                <span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t("schedule.workshop_level_label")}
                </span>
                <span className="leading-[normal] text-[20px]">{t("schedule.workshop_level")}</span>
              </p>
              <p className="mb-0">
                <span className="font-config font-medium leading-[normal] not-italic text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {t("schedule.workshop_equipment_label")}
                </span>
                <span className="leading-[normal] text-[20px]">{t("schedule.workshop_equipment")}</span>
              </p>
              <p className="leading-[normal] text-[20px]">&nbsp;</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[1080px] w-full">
      {/* Background */}
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-full">
        <div className="h-[780px] shrink-0 w-full" style={{ backgroundColor: data.color }} />
      </div>

      {/* Section Selector */}
      <div className="absolute right-0 top-[190px] flex gap-0">
        {sectionOrder.map((sec, index) => (
          <Link key={index} to={sec.route} className="h-[110px] w-[170px] flex items-center justify-center cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: sec.color }}>
            <p className="font-config font-bold text-[28px] text-black text-center px-2 leading-tight whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 50" }}>
              {sec.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}
