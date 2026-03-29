import { useParams, Link } from "react-router";
import imgLongsword from "figma:asset/82e5f52c653ebeb293db0874281c7bedd38ae180.png";
import imgRapier from "figma:asset/3d7cffe6eb979641283edc83def40591f1ec4a46.png";
import imgEasternSaber from "figma:asset/5cbc738a3339c1cf7fa787780e81dfc3778ab026.png";
import imgMilitarySaber from "figma:asset/9df4903d40deb1400b508f633d9cd2820bb47082.png";

type Category = "general-rules" | "longsword" | "rapier" | "eastern-saber" | "military-saber";

const categories = {
  "general-rules": {
    name: "GENERAL RULES",
    color: "#c8c8c8",
    colors: [],
    image: null,
    rules: {
      keyRules: `Fencers that can provide a hit without getting hit are rewarded → for this reason double hits and after-blows are scored the same, although they are in different tempos.`,
      comingSoon: true
    }
  },
  longsword: {
    name: "LONGSWORD",
    color: "#147af4",
    colors: ["#30cc0a", "#fca915", "#ff005c"],
    image: imgLongsword,
    rules: {
      special: "No after-blow after strike to the head! Flat hit to the head cut as valid score.",
      specs: `Weight: 1350-1550 g
Balance point approx. 5-10 cm (+- 1 cm tolerance) ahead of the start of the blade/guard.
Blade length/Total length: maximum 102 cm/ maximum 145 cm`,
      tipped: "Swords must be tipped unless tip has a surface area of 50 mm².",
      protection: `350 N jacket and Mask, back head protection and gorget is required. Hand protection is hardcover and softcover mitten or hoof shells. Single finger gloves can only be accepted under special occasions (no red dragon gloves and comparable protection). Elbow and knee must be covered in hard shell. Shin guard and groin protection is obligatory.`,
      flexibility: "Blade flexibility should 16 kg according to franklin method"
    }
  },
  rapier: {
    name: "RAPIER",
    color: "#ff005c",
    colors: ["#fca915", "#147af4", "#30cc0a"],
    image: imgRapier,
    rules: {
      special: "Thrust has right of way.",
      specs: `The rapier must have a blade length between 98 cm and 127 cm from the hilt to the point.
The total length of the rapier must not exceed 140 cm.
The weight of the rapier must lay between 800 and 1600 g
The blade must bend at 6 kg.`,
      actions: `Right of way:
▪ Thrust, after blow cut → 1 point for thrust
▪ Cut, after blow thrust → 1 point for thrust`,
      protection: `350 N jacket and Mask, Gorget, back head protection is required. Hand protection is single finger gloves (Both hands). Elbow and knee must be covered in hard shell. Shin guard is obligatory.`
    }
  },
  "eastern-saber": {
    name: "EASTERN SABER",
    color: "#30cc0a",
    colors: ["#fca915", "#147af4", "#ff005c"],
    image: imgEasternSaber,
    rules: {
      special: "No after after-blows after strike to the sword arm.",
      specs: `Weight: max. 850 grams
Balance point: between 15 - 20 cm ahead of the start of the blade/guard.
Length of the blade: max 85 cm`,
      guard: `Cross guard, knuckle guard, disc guard (No cup guard or Military sabre guard)`,
      protection: `350 N jacket and Mask, back head protection and gorget is required. Hand protection is hardcover and softcover mitten or hoof shells. Single finger gloves can only be accepted under special occasions (including Red Dragon Glove like protection). Elbow and knee must be covered in hard shell. Shin guard and groin protection is obligatory.`
    }
  },
  "military-saber": {
    name: "MILITARY SABER",
    color: "#fca915",
    colors: ["#30cc0a", "#147af4", "#ff005c"],
    image: imgMilitarySaber,
    rules: {
      special: "",
      specs: `Weight 650 – 850g
Balance point below 12 cm ahead of the start of the blade/guard.
Total Length: 110 cm
Blade length: 90 cm`,
      guard: `Cup guard or Military sabre guard`,
      tipped: "Swords must be tipped unless tip has a surface area of 20 mm².",
      protection: `350 N jacket and Mask, back head protection and gorget is required. Hand protection is single finger gloves (Both hands). Elbow and knee must be covered in hard shell. Shin guard and groin protection is obligatory.`,
      flexibility: "Blade flexibility should 12 kg according to franklin method"
    }
  }
};

export default function RulesPage() {
  const { category } = useParams<{ category: Category }>();
  const selectedCategory = category || "general-rules";
  const data = categories[selectedCategory as Category] || categories["general-rules"];

  // Define category order based on selected category (active one on the right)
  const getCategoryOrder = () => {
    switch (selectedCategory) {
      case "general-rules":
        return [
          { name: "EASTERN\nSABER", color: "#30cc0a", route: "/rules/eastern-saber" },
          { name: "MILITARY\nSABER", color: "#fca915", route: "/rules/military-saber" },
          { name: "RAPIER", color: "#ff005c", route: "/rules/rapier" },
          { name: "LONGSWORD", color: "#147af4", route: "/rules/longsword" },
          { name: "GENERAL\nRULES", color: "#c8c8c8", route: "/rules/general-rules" }
        ];
      case "longsword":
        return [
          { name: "GENERAL\nRULES", color: "#c8c8c8", route: "/rules/general-rules" },
          { name: "EASTERN\nSABER", color: "#30cc0a", route: "/rules/eastern-saber" },
          { name: "MILITARY\nSABER", color: "#fca915", route: "/rules/military-saber" },
          { name: "RAPIER", color: "#ff005c", route: "/rules/rapier" },
          { name: "LONGSWORD", color: "#147af4", route: "/rules/longsword" }
        ];
      case "eastern-saber":
        return [
          { name: "GENERAL\nRULES", color: "#c8c8c8", route: "/rules/general-rules" },
          { name: "LONGSWORD", color: "#147af4", route: "/rules/longsword" },
          { name: "MILITARY\nSABER", color: "#fca915", route: "/rules/military-saber" },
          { name: "RAPIER", color: "#ff005c", route: "/rules/rapier" },
          { name: "EASTERN\nSABER", color: "#30cc0a", route: "/rules/eastern-saber" }
        ];
      case "military-saber":
        return [
          { name: "GENERAL\nRULES", color: "#c8c8c8", route: "/rules/general-rules" },
          { name: "LONGSWORD", color: "#147af4", route: "/rules/longsword" },
          { name: "EASTERN\nSABER", color: "#30cc0a", route: "/rules/eastern-saber" },
          { name: "RAPIER", color: "#ff005c", route: "/rules/rapier" },
          { name: "MILITARY\nSABER", color: "#fca915", route: "/rules/military-saber" }
        ];
      case "rapier":
        return [
          { name: "GENERAL\nRULES", color: "#c8c8c8", route: "/rules/general-rules" },
          { name: "LONGSWORD", color: "#147af4", route: "/rules/longsword" },
          { name: "EASTERN\nSABER", color: "#30cc0a", route: "/rules/eastern-saber" },
          { name: "MILITARY\nSABER", color: "#fca915", route: "/rules/military-saber" },
          { name: "RAPIER", color: "#ff005c", route: "/rules/rapier" }
        ];
      default:
        return [
          { name: "EASTERN\nSABER", color: "#30cc0a", route: "/rules/eastern-saber" },
          { name: "MILITARY\nSABER", color: "#fca915", route: "/rules/military-saber" },
          { name: "RAPIER", color: "#ff005c", route: "/rules/rapier" },
          { name: "LONGSWORD", color: "#147af4", route: "/rules/longsword" },
          { name: "GENERAL\nRULES", color: "#c8c8c8", route: "/rules/general-rules" }
        ];
    }
  };

  const categoryOrder = getCategoryOrder();

  return (
    <div className="relative min-h-[1080px] w-full">
      {/* Background */}
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-full">
        <div className="h-[780px] shrink-0 w-full" style={{ backgroundColor: data.color }} />
      </div>

      {/* Category Selector */}
      <div className="absolute right-0 top-[215px] flex gap-0">
        {categoryOrder.map((cat, index) => (
          <Link key={index} to={cat.route} className="h-[85px] w-[127px] flex items-center justify-center cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: cat.color }}>
            <p className="font-config font-bold text-[14px] text-black text-center px-2 leading-tight whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 50" }}>
              {cat.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Illustration */}
      {data.image && (
        <div className="absolute h-[700px] left-[100px] top-[250px] w-[850px]">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={data.image} />
        </div>
      )}

      {/* General Rules Content */}
      {selectedCategory === "general-rules" && (
        <>
          <div 
            className="absolute font-config font-normal left-[100px] not-italic top-[350px] w-[900px]" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <h2 
              className="font-config font-medium text-[26px] text-black mb-4 leading-[1.2]" 
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Key Rules:
            </h2>
            <div className="text-[20px] text-black leading-[1.5] space-y-4">
              <p>{data.rules.keyRules}</p>
              <p>Every score zone counts <strong className="font-config">1 point</strong>.</p>
              <p>Every match goes for <strong className="font-config">5 points</strong> or <strong className="font-config">6 minutes</strong></p>
              <p>In the semi finals and finals goes for <strong className="font-config">7 points</strong> or <strong className="font-config">12 minute</strong> with half a minute break.</p>
            </div>
          </div>
          
          <div 
            className="absolute font-config font-medium left-[1100px] not-italic top-[350px] w-[700px]" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="text-[56px] text-black italic leading-[1.2]">full ruleset is coming soon...</p>
          </div>
        </>
      )}

      {/* Rules Content */}
      {selectedCategory !== "general-rules" && (
        <div 
          className="absolute font-config font-normal left-[1240px] not-italic top-[380px] w-[600px] whitespace-pre-wrap" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="mb-4">
            <span className="font-config font-medium text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Special Rule ({selectedCategory.replace('-', ' ')}):
            </span>
            <span className="text-[20px]"> {data.rules.special}</span>
          </p>

          <p className="mb-4">
            <span className="font-config font-medium text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Weapon Specifications:
            </span>
            <br />
            <span className="text-[20px]">{data.rules.specs}</span>
          </p>

          {data.rules.guard && (
            <p className="mb-4">
              <span className="font-config font-medium text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                Guard:
              </span>
              <br />
              <span className="text-[20px]">{data.rules.guard}</span>
            </p>
          )}

          {data.rules.actions && (
            <p className="mb-4">
              <span className="font-config font-medium text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                Actions (right of way):
              </span>
              <br />
              <span className="text-[20px]">{data.rules.actions}</span>
            </p>
          )}

          {data.rules.tipped && (
            <p className="mb-4">
              <span className="font-config font-medium text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                Tipped:
              </span>
              <br />
              <span className="text-[20px]">{data.rules.tipped}</span>
            </p>
          )}

          {data.rules.flexibility && (
            <p className="mb-4">
              <span className="font-config font-medium text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                Flexibility:
              </span>
              <br />
              <span className="text-[20px]">{data.rules.flexibility}</span>
            </p>
          )}

          <p className="mb-4">
            <span className="font-config font-medium text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Protection Gear:
            </span>
            <br />
            <span className="text-[20px]">{data.rules.protection}</span>
          </p>
        </div>
      )}
    </div>
  );
}