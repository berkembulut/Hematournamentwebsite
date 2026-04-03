import { useParams, Link } from "react-router";
import imgLongsword from "figma:asset/82e5f52c653ebeb293db0874281c7bedd38ae180.png";
import imgRapier from "figma:asset/3d7cffe6eb979641283edc83def40591f1ec4a46.png";
import imgEasternSaber from "figma:asset/5cbc738a3339c1cf7fa787780e81dfc3778ab026.png";
import imgMilitarySaber from "figma:asset/9df4903d40deb1400b508f633d9cd2820bb47082.png";
import { useI18n } from "../i18n";
import { useMobile } from "../MobileContext";
import MobileTabs from "../components/MobileTabs";

type Category = "general-rules" | "longsword" | "rapier" | "eastern-saber" | "military-saber";

export default function RulesPage() {
  const { category } = useParams<{ category: Category }>();
  const selectedCategory = category || "general-rules";
  const { t } = useI18n();
  const isMobile = useMobile();

  const categoryData: Record<Category, { name: string; color: string; image: string | null; mobileScale?: number }> = {
    "general-rules": { name: t("rules.general_title"), color: "#c8c8c8", image: null },
    longsword: { name: "LONGSWORD", color: "#147af4", image: imgLongsword, mobileScale: 1 },
    rapier: { name: "RAPIER", color: "#ff005c", image: imgRapier, mobileScale: 0.75 },
    "eastern-saber": { name: t("rules.eastern_saber_title"), color: "#30cc0a", image: imgEasternSaber, mobileScale: 0.75 },
    "military-saber": { name: t("rules.military_saber_title"), color: "#fca915", image: imgMilitarySaber, mobileScale: 1 },
  };

  const data = categoryData[selectedCategory as Category] || categoryData["general-rules"];

  const allTabs = [
    { name: t("rules.general"), color: "#c8c8c8", route: "/rules/general-rules" },
    { name: t("rules.longsword"), color: "#147af4", route: "/rules/longsword" },
    { name: t("rules.eastern_saber"), color: "#30cc0a", route: "/rules/eastern-saber" },
    { name: t("rules.military_saber"), color: "#fca915", route: "/rules/military-saber" },
    { name: t("rules.rapier"), color: "#ff005c", route: "/rules/rapier" },
  ];

  const getCategoryOrder = () => {
    const all = allTabs;
    switch (selectedCategory) {
      case "general-rules": return [all[2], all[3], all[4], all[1], all[0]];
      case "longsword": return [all[0], all[2], all[3], all[4], all[1]];
      case "eastern-saber": return [all[0], all[1], all[3], all[4], all[2]];
      case "military-saber": return [all[0], all[1], all[2], all[4], all[3]];
      case "rapier": return [all[0], all[1], all[2], all[3], all[4]];
      default: return [all[2], all[3], all[4], all[1], all[0]];
    }
  };

  const renderSpecificRules = (mobile = false) => {
    const prefixMap: Record<string, string> = {
      longsword: "rules.longsword",
      rapier: "rules.rapier",
      "eastern-saber": "rules.eastern",
      "military-saber": "rules.military",
    };
    const prefix = prefixMap[selectedCategory];
    if (!prefix) return null;
    const catLabel = selectedCategory.replace('-', ' ');
    const titleSize = mobile ? "text-[16px]" : "text-[24px]";
    const textSize = mobile ? "text-[14px]" : "text-[20px]";

    return (
      <div className={mobile ? "px-4 py-4 text-white" : ""} style={mobile ? {} : { fontVariationSettings: "'wdth' 100" }}>
        {t(`${prefix}.special`) && (
          <p className="mb-3">
            <span className={`font-config font-medium ${titleSize} ${mobile ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("rules.special_rule")} ({catLabel}):
            </span>
            <span className={textSize}> {t(`${prefix}.special`)}</span>
          </p>
        )}
        <p className="mb-3">
          <span className={`font-config font-medium ${titleSize} ${mobile ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {t("rules.weapon_specs")}
          </span>
          <br />
          <span className={`${textSize} whitespace-pre-wrap`}>{t(`${prefix}.specs`)}</span>
        </p>
        {t(`${prefix}.guard`) !== `${prefix}.guard` && (
          <p className="mb-3">
            <span className={`font-config font-medium ${titleSize} ${mobile ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>{t("rules.guard_label")}</span>
            <br /><span className={textSize}>{t(`${prefix}.guard`)}</span>
          </p>
        )}
        {t(`${prefix}.actions`) !== `${prefix}.actions` && (
          <p className="mb-3">
            <span className={`font-config font-medium ${titleSize} ${mobile ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>{t("rules.actions_label")}</span>
            <br /><span className={`${textSize} whitespace-pre-wrap`}>{t(`${prefix}.actions`)}</span>
          </p>
        )}
        {t(`${prefix}.tipped`) !== `${prefix}.tipped` && (
          <p className="mb-3">
            <span className={`font-config font-medium ${titleSize} ${mobile ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>{t("rules.tipped_label")}</span>
            <br /><span className={textSize}>{t(`${prefix}.tipped`)}</span>
          </p>
        )}
        {t(`${prefix}.flexibility`) !== `${prefix}.flexibility` && (
          <p className="mb-3">
            <span className={`font-config font-medium ${titleSize} ${mobile ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>{t("rules.flexibility_label")}</span>
            <br /><span className={textSize}>{t(`${prefix}.flexibility`)}</span>
          </p>
        )}
        <p className="mb-3">
          <span className={`font-config font-medium ${titleSize} ${mobile ? "text-white" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>{t("rules.protection_label")}</span>
          <br /><span className={textSize}>{t(`${prefix}.protection`)}</span>
        </p>
      </div>
    );
  };

  // =================== MOBILE ===================
  if (isMobile) {
    return (
      <div className="w-full">
        <MobileTabs tabs={allTabs} activeRoute={`/rules/${selectedCategory}`} />
        <div className="w-full min-h-[60vh]" style={{ backgroundColor: data.color }}>
          {/* Weapon image */}
          {data.image && (
            <div className="relative w-full overflow-hidden" style={{ height: "45vw" }}>
              <img alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={data.image} style={{ transform: `scale(${data.mobileScale ?? 1})` }} />
            </div>
          )}

          {/* General Rules */}
          {selectedCategory === "general-rules" && (
            <div className="px-4 py-4 font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
              <h2 className="font-config font-medium text-[18px] text-black mb-3 leading-[1.2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("rules.key_rules_title")}
              </h2>
              <div className="text-[14px] text-black leading-[1.5] space-y-3">
                <p>{t("rules.key_rules")}</p>
                <p>{t("rules.every_score")} <strong className="font-config">{t("rules.1_point")}</strong>.</p>
                <p>{t("rules.every_match")} <strong className="font-config">{t("rules.5_points")}</strong> {t("rules.or")} <strong className="font-config">{t("rules.6_minutes")}</strong></p>
                <p>{t("rules.semi_finals")} <strong className="font-config">{t("rules.7_points")}</strong> {t("rules.or")} <strong className="font-config">{t("rules.12_minutes")}</strong> {t("rules.with_break")}</p>
              </div>

              <p className="font-config font-medium text-[16px] text-black mt-6 mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("rules.docs_title")}
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { href: "https://drive.google.com/file/d/1b2r3XQqP9k-VVgKQgelIrlPePr2CUuNZ/view?usp=sharing", label: t("rules.rules_en") },
                  { href: "https://drive.google.com/file/d/1ASloFQY5Gna4Sp-nhJno_1uBCXy9F0tb/view?usp=share_link", label: t("rules.rules_tr") },
                ].map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="bg-black text-white font-config font-bold text-[14px] px-4 py-2 hover:bg-white hover:text-black transition-colors border-2 border-black"
                    style={{ fontVariationSettings: "'wdth' 80" }}
                  >{link.label}</a>
                ))}
                <div className="mt-3" />
                {[
                  { href: "https://drive.google.com/file/d/1KTbyUZsOHrGURAt0ZVzKKbpNAwxNWfIz/view?usp=share_link", label: t("rules.coc_en") },
                  { href: "https://drive.google.com/file/d/12fOj0WniWw2oRIN9Uwj4d8BuFNBgnLHC/view?usp=share_link", label: t("rules.coc_tr") },
                ].map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="bg-black text-white font-config font-bold text-[14px] px-4 py-2 hover:bg-white hover:text-black transition-colors border-2 border-black"
                    style={{ fontVariationSettings: "'wdth' 80" }}
                  >{link.label}</a>
                ))}
              </div>
            </div>
          )}

          {/* Specific Rules */}
          {selectedCategory !== "general-rules" && renderSpecificRules(true)}
        </div>
      </div>
    );
  }

  // =================== DESKTOP ===================
  const categoryOrder = getCategoryOrder();

  return (
    <div className="relative min-h-[1080px] w-full">
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-full">
        <div className="h-[780px] shrink-0 w-full" style={{ backgroundColor: data.color }} />
      </div>

      <div className="absolute right-0 top-[190px] flex gap-0">
        {categoryOrder.map((cat, index) => (
          <Link key={index} to={cat.route} className="h-[110px] w-[170px] flex items-center justify-center cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: cat.color }}>
            <p className="font-config font-bold text-[28px] text-black text-center px-2 leading-tight whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 50" }}>{cat.name}</p>
          </Link>
        ))}
      </div>

      {data.image && (
        <div className="absolute h-[700px] left-[100px] top-[250px] w-[850px]">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={data.image} />
        </div>
      )}

      {selectedCategory === "general-rules" && (
        <>
          <div className="absolute font-config font-normal left-[100px] not-italic top-[350px] w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <h2 className="font-config font-medium text-[26px] text-black mb-4 leading-[1.2]" style={{ fontVariationSettings: "'wdth' 100" }}>{t("rules.key_rules_title")}</h2>
            <div className="text-[20px] text-black leading-[1.5] space-y-4">
              <p>{t("rules.key_rules")}</p>
              <p>{t("rules.every_score")} <strong className="font-config">{t("rules.1_point")}</strong>.</p>
              <p>{t("rules.every_match")} <strong className="font-config">{t("rules.5_points")}</strong> {t("rules.or")} <strong className="font-config">{t("rules.6_minutes")}</strong></p>
              <p>{t("rules.semi_finals")} <strong className="font-config">{t("rules.7_points")}</strong> {t("rules.or")} <strong className="font-config">{t("rules.12_minutes")}</strong> {t("rules.with_break")}</p>
            </div>
          </div>
          <div className="absolute font-config font-normal left-[1100px] not-italic top-[350px] w-[700px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-config font-medium text-[24px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>{t("rules.docs_title")}</p>
            <div className="flex flex-col gap-4">
              <a href="https://drive.google.com/file/d/1b2r3XQqP9k-VVgKQgelIrlPePr2CUuNZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-config font-bold text-[20px] px-6 py-3 inline-block hover:bg-white hover:text-black transition-colors border-2 border-black cursor-pointer" style={{ fontVariationSettings: "'wdth' 80" }}>{t("rules.rules_en")}</a>
              <a href="https://drive.google.com/file/d/1ASloFQY5Gna4Sp-nhJno_1uBCXy9F0tb/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-config font-bold text-[20px] px-6 py-3 inline-block hover:bg-white hover:text-black transition-colors border-2 border-black cursor-pointer" style={{ fontVariationSettings: "'wdth' 80" }}>{t("rules.rules_tr")}</a>
              <div className="mt-6" />
              <a href="https://drive.google.com/file/d/1KTbyUZsOHrGURAt0ZVzKKbpNAwxNWfIz/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-config font-bold text-[20px] px-6 py-3 inline-block hover:bg-white hover:text-black transition-colors border-2 border-black cursor-pointer" style={{ fontVariationSettings: "'wdth' 80" }}>{t("rules.coc_en")}</a>
              <a href="https://drive.google.com/file/d/12fOj0WniWw2oRIN9Uwj4d8BuFNBgnLHC/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-config font-bold text-[20px] px-6 py-3 inline-block hover:bg-white hover:text-black transition-colors border-2 border-black cursor-pointer" style={{ fontVariationSettings: "'wdth' 80" }}>{t("rules.coc_tr")}</a>
            </div>
          </div>
        </>
      )}

      {selectedCategory !== "general-rules" && (
        <div className="absolute font-config font-normal left-[1240px] not-italic top-[380px] w-[600px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {renderSpecificRules(false)}
        </div>
      )}
    </div>
  );
}