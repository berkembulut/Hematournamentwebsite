import { Link, useLocation } from "react-router";
import { useI18n } from "../i18n";
import { useMobile } from "../MobileContext";

export default function Navigation() {
  const location = useLocation();
  const { lang, setLang, t } = useI18n();
  const isMobile = useMobile();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/rules/general-rules", label: t("nav.rules") },
    { to: "/journey/how-to-go", label: t("nav.journey") },
    { to: "/schedule/day-1", label: t("nav.schedule") },
    { to: "/about/meet-n-beat", label: t("nav.about") },
  ];

  if (isMobile) {
    const row1 = navItems.slice(0, 3);
    const row2 = navItems.slice(3);

    return (
      <div className="flex flex-col gap-[6px]">
        {/* Row 1: HOME, RULES, JOURNEY */}
        <div className="flex gap-[6px]">
          {row1.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex-1 h-[38px] relative group"
            >
              <div className="absolute bg-[#f6fbff] border-[3px] border-black border-solid inset-0 group-hover:bg-black transition-colors" />
              <p
                className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[15px] text-black group-hover:text-white transition-colors"
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        {/* Row 2: SCHEDULE, ABOUT, TR/EN */}
        <div className="flex gap-[6px]">
          {row2.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex-1 h-[38px] relative group"
            >
              <div className="absolute bg-[#f6fbff] border-[3px] border-black border-solid inset-0 group-hover:bg-black transition-colors" />
              <p
                className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[15px] text-black group-hover:text-white transition-colors"
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                {item.label}
              </p>
            </Link>
          ))}
          {/* Language Toggle */}
          <div className="flex-1 h-[38px] flex items-center justify-center gap-1">
            <span
              onClick={() => setLang("tr")}
              className={`font-config font-bold text-[14px] transition-opacity cursor-pointer ${lang === "tr" ? "text-black opacity-100" : "text-black/30 opacity-60"}`}
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              TR
            </span>
            <span className="text-black/30 font-config text-[12px]" style={{ fontVariationSettings: "'wdth' 50" }}>/</span>
            <span
              onClick={() => setLang("en")}
              className={`font-config font-bold text-[14px] transition-opacity cursor-pointer ${lang === "en" ? "text-black opacity-100" : "text-black/30 opacity-60"}`}
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              EN
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Desktop navigation
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0 w-full">
      {navItems.map((item) => (
        <Link key={item.to} to={item.to} className="h-[70px] relative shrink-0 w-[179px] group">
          <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0 group-hover:bg-black transition-colors" />
          <p
            className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[32px] text-black group-hover:text-white transition-colors"
            style={{ fontVariationSettings: "'wdth' 50" }}
          >
            {item.label}
          </p>
        </Link>
      ))}

      {/* Language Toggle */}
      <div className="h-[35px] relative shrink-0 flex items-center gap-1 cursor-pointer self-center ml-[-20px]">
        <span
          onClick={() => setLang("tr")}
          className={`font-config font-bold text-[16px] transition-opacity cursor-pointer ${lang === "tr" ? "text-black opacity-100" : "text-black/30 opacity-60 hover:opacity-80"}`}
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          TR
        </span>
        <span className="text-black/30 font-config text-[14px]" style={{ fontVariationSettings: "'wdth' 50" }}>/</span>
        <span
          onClick={() => setLang("en")}
          className={`font-config font-bold text-[16px] transition-opacity cursor-pointer ${lang === "en" ? "text-black opacity-100" : "text-black/30 opacity-60 hover:opacity-80"}`}
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          EN
        </span>
      </div>
    </div>
  );
}
