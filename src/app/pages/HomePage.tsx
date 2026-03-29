import imgComponent3 from "../../assets/5cbc738a3339c1cf7fa787780e81dfc3778ab026.png";
import imgComponent4 from "../../assets/82e5f52c653ebeb293db0874281c7bedd38ae180.png";
import imgComponent5 from "../../assets/3d7cffe6eb979641283edc83def40591f1ec4a46.png";
import imgComponent6 from "../../assets/9df4903d40deb1400b508f633d9cd2820bb47082.png";
import imgEtssLogo from "../../assets/ecfbb3924b1b136e15c1ddaca8cbdad6aa6ecacd.png";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="relative min-h-[1080px] w-full">
      {/* Background */}
      <div className="absolute bg-[#f6fbff] content-start flex flex-wrap gap-0 h-[1080px] items-start left-0 pt-[300px] top-0 w-full z-0">
        <div className="h-[390px] relative shrink-0 w-[50%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 390">
            <path d="M0 0H960V390H0V0Z" fill="var(--fill-0, #147AF4)" />
          </svg>
        </div>
        <div className="bg-[#ff005c] h-[390px] shrink-0 w-[50%]" />
        <div className="bg-[#fca915] h-[390px] shrink-0 w-[50%]" />
        <div className="bg-[#30cc0a] h-[390px] shrink-0 w-[50%]" />
      </div>

      {/* Decorative Images */}
      {/* Eastern Saber - Bottom Right on Green */}
      <div className="absolute h-[310px] left-[1235px] top-[723px] w-[553px] z-20">
        <Link to="/rules/eastern-saber" className="absolute inset-0 group">
          <img alt="Eastern Saber" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent3} />
        </Link>
      </div>

      {/* Longsword - Top Left on Blue */}
      <div className="absolute h-[485px] left-[229px] top-[168px] w-[479px] z-20">
        <Link to="/rules/longsword" className="absolute inset-0 group">
          <img alt="Longsword" className="absolute inset-0 max-w-none object-cover size-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent4} />
        </Link>
      </div>

      {/* Rapier - Top Right on Pink */}
      <div className="absolute h-[291px] left-[1203px] top-[357px] w-[617px] z-20">
        <Link to="/rules/rapier" className="absolute inset-0 group">
          <img alt="Rapier" className="absolute inset-0 max-w-none object-cover size-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent5} />
        </Link>
      </div>

      {/* Military Saber - Bottom Left on Yellow */}
      <div className="absolute h-[450px] left-[142px] top-[615px] w-[530px] z-20">
        <Link to="/rules/military-saber" className="absolute inset-0 group">
          <img alt="Military Saber" className="absolute inset-0 max-w-none object-cover size-full transition-all duration-300 group-hover:brightness-0 group-hover:invert cursor-pointer" src={imgComponent6} />
        </Link>
      </div>

      {/* Registration Button */}
      <div className="absolute h-[60px] left-1/2 -translate-x-1/2 top-[640px] w-[400px] z-30">
        <div className="absolute bg-[#f6fbff] inset-0" />
        <a 
          className="absolute flex items-center justify-start cursor-pointer font-config font-bold inset-0 text-[40px] text-black tracking-[-2.4px] whitespace-nowrap transition-colors hover:bg-black hover:text-white px-4" 
          href="https://forms.gle/u4gTULqxqpvzEKf86" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          REGISTRATION!
        </a>
      </div>

      {/* Event Information */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[720px]">
        <div className="relative">
          <div className="bg-white h-[50px] w-[400px] flex items-center justify-start px-4">
            <p 
              className="font-config font-bold leading-[normal] not-italic text-[52px] text-black" 
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              13-14 June 2026
            </p>
          </div>
          
          <div className="bg-white h-[75px] mt-[16px] w-[400px] flex flex-col items-start justify-center px-4">
            <p 
              className="font-config font-semibold leading-[normal] not-italic text-[20px] text-black" 
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              LOCATION: SEHIT SUAT CELIK GENCLIK MERKEZI
            </p>
            
            <div className="flex items-center justify-start gap-2 mt-1">
              <p 
                className="font-config font-normal leading-[normal] not-italic text-[32px] text-black" 
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                ESKISEHIR
              </p>
              <div className="w-[6px] h-[6px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                  <circle cx="3.5" cy="3.5" fill="black" r="3.5" />
                </svg>
              </div>
              <p 
                className="font-config font-bold leading-[normal] not-italic text-[32px] text-black" 
                style={{ fontVariationSettings: "'wdth' 50" }}
              >
                TURKIYE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ETSS Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[870px] flex justify-center z-30">
        <img alt="ETSS Logo" className="h-[80px] object-contain" src={imgEtssLogo} />
      </div>
    </div>
  );
}
