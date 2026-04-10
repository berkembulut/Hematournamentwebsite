import imgComponent3 from "figma:asset/5cbc738a3339c1cf7fa787780e81dfc3778ab026.png";
import imgComponent4 from "figma:asset/82e5f52c653ebeb293db0874281c7bedd38ae180.png";
import imgComponent5 from "figma:asset/3d7cffe6eb979641283edc83def40591f1ec4a46.png";
import imgComponent6 from "figma:asset/9df4903d40deb1400b508f633d9cd2820bb47082.png";
import imgEtssLogo from "figma:asset/ecfbb3924b1b136e15c1ddaca8cbdad6aa6ecacd.png";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useI18n } from "../i18n";
import { useMobile } from "../MobileContext";

export default function HomePage() {
  const { t } = useI18n();
  const isMobile = useMobile();

  const targetDate = new Date("2026-04-03T11:00:00Z");
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft > 0]);

  const isOpen = timeLeft <= 0;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  if (isMobile) {
    const categories = [
      { color: "#30cc0a", img: imgComponent3, alt: "Eastern Saber", link: "/rules/eastern-saber", scale: 1 },
      { color: "#147af4", img: imgComponent4, alt: "Longsword", link: "/rules/longsword", scale: 1.2 },
      { color: "#ff005c", img: imgComponent5, alt: "Rapier", link: "/rules/rapier", scale: 1 },
      { color: "#fca915", img: imgComponent6, alt: "Military Saber", link: "/rules/military-saber", scale: 1 },
    ];

    return (
      <div className="w-full">
        {/* Registration + Info */}
        <div className="px-4 pb-3 flex flex-col gap-2">
          {/* Registration Button */}
          <div className="relative h-[44px]">
            {isOpen ? (
              <a
                className="flex items-center justify-start font-config font-bold h-full text-[28px] text-white tracking-[-1.5px] whitespace-nowrap px-3 bg-black hover:bg-white hover:text-black transition-colors"
                href="https://forms.gle/u4gTULqxqpvzEKf86"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {t("home.registration")}
              </a>
            ) : (
              <div
                className="flex items-center justify-start font-config font-bold h-full text-[18px] text-white/60 tracking-[-1px] whitespace-nowrap px-3 bg-black"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <span className="mr-2">{t("home.registration_label")}</span>
                <span className="font-config text-[14px] tracking-normal" style={{ fontVariationSettings: "'wdth' 80" }}>
                  {String(days).padStart(2, '0')}d {String(hours).padStart(2, '0')}h {String(minutes).padStart(2, '0')}m {String(seconds).padStart(2, '0')}s
                </span>
              </div>
            )}
          </div>

          {/* Date + Location */}
          <Link to="/schedule/day-1" className="bg-black h-[36px] flex items-center justify-start px-3 hover:bg-white group transition-colors">
            <p
              className="font-config font-bold leading-[normal] not-italic text-[28px] text-white group-hover:text-black transition-colors"
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              13-14 June 2026
            </p>
          </Link>

          <Link to="/journey/location" className="bg-black py-2 px-3 hover:bg-white group transition-colors block">
            <p
              className="font-config font-semibold leading-[normal] not-italic text-[11px] text-white/70 group-hover:text-black/70 transition-colors"
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              {t("home.location_label")}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <p
                className="font-config font-normal leading-[normal] not-italic text-[20px] text-white group-hover:text-black transition-colors"
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                ESKISEHIR
              </p>
              <svg width="5" height="5" viewBox="0 0 7 7" fill="none">
                <circle cx="3.5" cy="3.5" r="3.5" fill="currentColor" className="text-white group-hover:text-black transition-colors" />
              </svg>
              <p
                className="font-config font-bold leading-[normal] not-italic text-[20px] text-white group-hover:text-black transition-colors"
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                TURKIYE
              </p>
            </div>
          </Link>
        </div>

        {/* Stacked Weapon Categories */}
        {categories.map((cat) => (
          <Link
            key={cat.alt}
            to={cat.link}
            className="block w-full relative group overflow-hidden"
            style={{ backgroundColor: cat.color, height: "65vw" }}
          >
            <img
              alt={cat.alt}
              className="absolute inset-0 w-full h-full object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              style={{ transform: `scale(${cat.scale})` }}
              src={cat.img}
            />
          </Link>
        ))}

        {/* ETSS Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[870px] flex items-center justify-center z-30">
          <img alt="ETSS Logo" className="h-[80px] object-contain" src={imgEtssLogo} />
        </div>
      </div>
    );
  }

  // =================== DESKTOP ===================
  return (
    <div className="relative min-h-[1080px] w-full">
      {/* Background */}
      <div className="absolute bg-[#f6fbff] content-start flex flex-wrap gap-0 h-[1080px] items-start left-[-50%] pt-[300px] top-0 w-[200%] z-0">
        <div className="h-[390px] relative shrink-0 w-[50%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 390">
            <path d="M0 0H960V390H0V0Z" fill="var(--fill-0, #147AF4)" />
          </svg>
        </div>
        <div className="bg-[#ff005c] h-[390px] shrink-0 w-[50%]" />
        <div className="bg-[#fca915] h-[390px] shrink-0 w-[50%]" />
        <div className="bg-[#30cc0a] h-[390px] shrink-0 w-[50%]" />
      </div>

      <div className="absolute h-[310px] left-[1235px] top-[723px] w-[553px] z-20">
        <Link to="/rules/eastern-saber" className="absolute inset-0 group">
          <img alt="Eastern Saber" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent3} />
        </Link>
      </div>

      <div className="absolute h-[485px] left-[229px] top-[168px] w-[479px] z-20">
        <Link to="/rules/longsword" className="absolute inset-0 group">
          <img alt="Longsword" className="absolute inset-0 max-w-none object-cover size-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent4} />
        </Link>
      </div>

      <div className="absolute h-[291px] left-[1203px] top-[357px] w-[617px] z-20">
        <Link to="/rules/rapier" className="absolute inset-0 group">
          <img alt="Rapier" className="absolute inset-0 max-w-none object-cover size-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent5} />
        </Link>
      </div>

      <div className="absolute h-[450px] left-[142px] top-[615px] w-[530px] z-20">
        <Link to="/rules/military-saber" className="absolute inset-0 group">
          <img alt="Military Saber" className="absolute inset-0 max-w-none object-cover size-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent6} />
        </Link>
      </div>

      {/* Registration Button */}
      <div className="absolute h-[60px] left-1/2 -translate-x-1/2 top-[640px] w-[400px] z-30">
        <div className="absolute bg-[#f6fbff] inset-0" />
        {isOpen ? (
          <a
            className="absolute flex items-center justify-start cursor-pointer font-config font-bold inset-0 text-[40px] text-black tracking-[-2.4px] whitespace-nowrap transition-colors hover:bg-black hover:text-white px-4"
            href="https://forms.gle/u4gTULqxqpvzEKf86"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {t("home.registration")}
          </a>
        ) : (
          <div
            className="absolute flex items-center justify-start font-config font-bold inset-0 text-[28px] text-black/40 tracking-[-1.5px] whitespace-nowrap px-4 cursor-default"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span className="mr-2">{t("home.registration_label")}</span>
            <span className="font-config text-[22px] tracking-normal" style={{ fontVariationSettings: "'wdth' 80" }}>
              {String(days).padStart(2, '0')}d {String(hours).padStart(2, '0')}h {String(minutes).padStart(2, '0')}m {String(seconds).padStart(2, '0')}s
            </span>
          </div>
        )}
      </div>

      {/* Event Information */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[720px]">
        <div className="relative">
          <Link to="/schedule/day-1" className="bg-white h-[50px] w-[400px] flex items-center justify-start px-4 transition-colors hover:bg-black group cursor-pointer block">
            <p
              className="font-config font-bold leading-[normal] not-italic text-[52px] text-black group-hover:text-white transition-colors"
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              13-14 June 2026
            </p>
          </Link>

          <Link to="/journey/location" className="bg-white h-[75px] mt-[16px] w-[400px] flex flex-col items-start justify-center px-4 transition-colors hover:bg-black group cursor-pointer block">
            <p
              className="font-config font-semibold leading-[normal] not-italic text-[20px] text-black group-hover:text-white transition-colors"
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              {t("home.location_label")}
            </p>
            <div className="flex items-center justify-start gap-2 mt-1">
              <p
                className="font-config font-normal leading-[normal] not-italic text-[32px] text-black group-hover:text-white transition-colors"
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                ESKISEHIR
              </p>
              <div className="w-[6px] h-[6px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                  <circle cx="3.5" cy="3.5" fill="currentColor" r="3.5" className="text-black group-hover:text-white transition-colors" />
                </svg>
              </div>
              <p
                className="font-config font-bold leading-[normal] not-italic text-[32px] text-black group-hover:text-white transition-colors"
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                TURKIYE
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Sponsors */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[870px] flex items-center justify-center z-30">
        <img alt="ETSS Logo" className="h-[80px] object-contain" src={imgEtssLogo} />
      </div>
    </div>
  );
}