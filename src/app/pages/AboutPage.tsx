import { useParams, Link } from "react-router";
import imgImage14 from "../../assets/532931be6e07d19c1ac51421a0c8d8a7bef883e0.png";
import imgImage16 from "../../assets/4ac7464aa18369a18fba01901df1d62f55e54a12.png";
import imgRectangle from "../../assets/6ca275bf3ca47535cc199b86e269d90d48bb04cd.png";
import imgRectangle1 from "../../assets/ee4a19b47400eea3246d0fe8ae5c28fa5e5527b7.png";
import imgEskisehirCastle from "../../assets/8482251e87ed0dec6bacb7204ed8250496ea5865.png";
import imgEskisehirHouses from "../../assets/edb9ef0039a812c11ccc3f352af6bb355120168b.png";
import imgEskisehirCity from "../../assets/4c9f2aaa831a27276118f21a48ee23863c78e69f.png";
import imgEskisehirMeerschaum from "../../assets/e4d2ad7fc972ceb5e8133edaab5a56850d385769.png";
import imgImage13 from "../../assets/f11a370b7a169d5ade99cd4bf2d809d02d191884.png";
import imgImage11 from "../../assets/1ed8c6e2e63a03b6e7f02e5082f1de94f670f5ac.png";
import imgImage12 from "../../assets/b074409ffcdfd5095d06d4c9c4861921ca188413.png";
import imgEtssLogo from "../../assets/ecfbb3924b1b136e15c1ddaca8cbdad6aa6ecacd.png";

type Section = "meet-n-beat" | "sponsors" | "eskisehir" | "contact";

const sections = {
  "meet-n-beat": {
    name: "MEET'N BEAT",
    color: "#147af4",
    content: (
      <div className="absolute font-config font-medium h-[634px] leading-[1.43] left-[90px] not-italic text-[22px] text-white top-[388px] tracking-[-0.88px] w-[733px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`In 2019 we had our first Meet'n Beat, at that time it was just a workshop with with Jerzy Miklaszewski and Ingulf Kohlweiss-Popp as instructors.  `}</p>
        <p className="mb-0">{`It was at that time a small and familier event where we joined with great joy the lessons and spars with Ingulf and Jerzy. `}</p>
        <p className="mb-0">{`After that the community in Türkiye got struck by COVID and had to reshape again after the pandemie. `}</p>
        <p className="mb-0">{`In 2024 the Meet 'n Beat got a revival and turned into a tournament next to other national and international events. At that time Longsword and Eastern saber were the categories of the tournament which got a very positive feedback.  `}</p>
        <p className="mb-0">{`In 2025 the Meet'n Beat has turned into the biggest national event in Türkiye with  4 categories (Longsword, Eastern Saber, Military Saber and Rapier) and a lot of positive vibes.  `}</p>
        <p className="mb-0">{`This year in 2026 we open the Meet'n Beat the first time for an international Community and hope that we can create the same positive vibe that we have experienced in the past. `}</p>
        <p className="mb-0">{`We are very happy, that our friend Jerzy is coming again and is willing to hold another workshop and sponsor this event to close the circle.  `}</p>
        <p className="mb-0">{` `}</p>
        <p className="mb-0">{`We are therefore happy to welcome you in our City,  Eskisehir `}</p>
        <p className="mb-0">{` `}</p>
        <p className="mb-0">{`Your organization team from Eskisehir Hema `}</p>
        <p>&nbsp;</p>
      </div>
    ),
    images: (
      <>
        <div className="absolute inset-[36.48%_27.34%_35.65%_51.93%]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
        </div>
        <div className="absolute inset-[62.96%_4.32%_8.52%_75.16%]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
        </div>
        <div className="absolute inset-[36.3%_4.38%_37.04%_68.7%]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
          </div>
        </div>
        <div className="absolute inset-[62.96%_24.53%_8.33%_51.93%]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
          </div>
        </div>
      </>
    )
  },
  "eskisehir": {
    name: "ESKISEHIR",
    color: "#60a856",
    content: (
      <p className="absolute font-config font-medium h-[485px] leading-[1.43] left-[102px] not-italic text-[22px] text-white top-[398px] tracking-[-0.88px] w-[490px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Discover the enchanting charm of Eskisehir, often called the "Venice of the East" for its picturesque canals and vibrant riverside life. Wander through the colorful Ottoman streets of Odunpazari or escape into a fairytale at the stunning Sazova Park. As Turkey's premier student city, it pulses with a youthful energy, offering trendy cafes, world-class museums, and a safe, welcoming atmosphere. Indulge in the authentic taste of Ciborek and explore the unique artistry of Meerschaum carvings found nowhere else on earth. Perfectly connected by high-speed train, Eskisehir is the ultimate modern destination where rich history meets a dynamic future.`}</p>
    ),
    images: (
      <>
        <div className="absolute inset-[36.2%_31.77%_36.11%_39.06%]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEskisehirCastle} />
        </div>
        <div className="absolute inset-[63.89%_4.32%_5.65%_69.38%]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEskisehirHouses} />
        </div>
        <div className="absolute inset-[63.89%_30.63%_5.65%_39.06%]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEskisehirCity} />
        </div>
        <div className="absolute inset-[36.2%_4.32%_28.43%_68.23%]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEskisehirMeerschaum} />
        </div>
      </>
    )
  },
  "sponsors": {
    name: "SPONSORS",
    color: "#6369e4",
    content: null,
    images: (
      <>
        <div className="absolute h-[336px] left-[114px] overflow-clip top-[435px] w-[271px]">
          <a href="https://silkfencing.pl/home" target="_blank" rel="noopener noreferrer" className="absolute h-[332px] left-0 top-[14px] w-[271px] cursor-pointer group">
            <img alt="Silk Fencing" className="absolute inset-0 max-w-none object-cover size-full transition-opacity group-hover:opacity-80" src={imgImage12} />
          </a>
        </div>

        <div className="absolute h-[336px] left-[478px] overflow-clip top-[473px] w-[364px]">
          <a href="https://www.instagram.com/kut.armoury/" target="_blank" rel="noopener noreferrer" className="absolute h-[296px] left-0 top-0 w-[374px] cursor-pointer group">
            <img alt="Kut Armoury" className="absolute inset-0 max-w-none object-cover size-full transition-opacity group-hover:opacity-80" src={imgImage13} />
          </a>
        </div>

        <div className="absolute h-[352px] left-[1007px] overflow-clip top-[473px] w-[285px]">
          <a href="https://sparringglove.com/" target="_blank" rel="noopener noreferrer" className="absolute h-[296px] left-0 top-0 w-[258px] cursor-pointer group">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="Sparring Glove" className="absolute h-[100.32%] left-0 max-w-none top-[-0.16%] w-full transition-opacity group-hover:opacity-80" src={imgImage11} />
            </div>
          </a>
        </div>
      </>
    )
  },
  "contact": {
    name: "CONTACT",
    color: "#ff005c",
    content: (
      <div className="absolute left-[123px] top-[382px] flex flex-col gap-8">
        <a href="https://www.instagram.com/eskisehirhema" target="_blank" rel="noopener noreferrer" className="group">
          <img alt="ETSS Logo" className="h-[140px] object-contain transition-opacity group-hover:opacity-80" src={imgEtssLogo} />
        </a>
        <p className="font-config font-medium not-italic text-[36px] text-white" style={{ fontVariationSettings: "'wdth' 50" }}>
          contact: <a href="mailto:eskisehirhema@gmail.com" className="underline decoration-solid hover:opacity-80">eskisehirhema@gmail.com</a>
        </p>
      </div>
    ),
    images: null
  }
};

export default function AboutPage() {
  const { section } = useParams<{ section: Section }>();
  const selectedSection = section || "meet-n-beat";
  const data = sections[selectedSection as Section] || sections["meet-n-beat"];

  // Define section order based on selected section (active one on the right)
  const getSectionOrder = () => {
    switch (selectedSection) {
      case "meet-n-beat":
        return [
          { name: "CONTACT", color: "#ff005c", route: "/about/contact" },
          { name: "SPONSORS", color: "#6369e4", route: "/about/sponsors" },
          { name: "ESKISEHIR", color: "#60a856", route: "/about/eskisehir" },
          { name: "MEET'N BEAT", color: "#147af4", route: "/about/meet-n-beat" }
        ];
      case "eskisehir":
        return [
          { name: "CONTACT", color: "#ff005c", route: "/about/contact" },
          { name: "SPONSORS", color: "#6369e4", route: "/about/sponsors" },
          { name: "MEET'N BEAT", color: "#147af4", route: "/about/meet-n-beat" },
          { name: "ESKISEHIR", color: "#60a856", route: "/about/eskisehir" }
        ];
      case "sponsors":
        return [
          { name: "CONTACT", color: "#ff005c", route: "/about/contact" },
          { name: "ESKISEHIR", color: "#60a856", route: "/about/eskisehir" },
          { name: "MEET'N BEAT", color: "#147af4", route: "/about/meet-n-beat" },
          { name: "SPONSORS", color: "#6369e4", route: "/about/sponsors" }
        ];
      case "contact":
        return [
          { name: "SPONSORS", color: "#6369e4", route: "/about/sponsors" },
          { name: "ESKISEHIR", color: "#60a856", route: "/about/eskisehir" },
          { name: "MEET'N BEAT", color: "#147af4", route: "/about/meet-n-beat" },
          { name: "CONTACT", color: "#ff005c", route: "/about/contact" }
        ];
      default:
        return [
          { name: "CONTACT", color: "#ff005c", route: "/about/contact" },
          { name: "SPONSORS", color: "#6369e4", route: "/about/sponsors" },
          { name: "ESKISEHIR", color: "#60a856", route: "/about/eskisehir" },
          { name: "MEET'N BEAT", color: "#147af4", route: "/about/meet-n-beat" }
        ];
    }
  };

  const sectionOrder = getSectionOrder();

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
      {data.content}

      {/* Images */}
      {data.images}
    </div>
  );
}