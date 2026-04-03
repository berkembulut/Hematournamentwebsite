import { Link } from "react-router";

interface Tab {
  name: string;
  color: string;
  route: string;
}

interface MobileTabsProps {
  tabs: Tab[];
  activeRoute: string;
}

export default function MobileTabs({ tabs, activeRoute }: MobileTabsProps) {
  return (
    <div className="flex w-full overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = activeRoute === tab.route || tab.route.endsWith(activeRoute);
        return (
          <Link
            key={tab.route}
            to={tab.route}
            className="flex-1 min-w-0 h-[42px] flex items-center justify-center transition-all"
            style={{
              backgroundColor: tab.color,
              opacity: isActive ? 1 : 0.6,
            }}
          >
            <p
              className="font-config font-bold text-[12px] text-black text-center px-1 leading-tight whitespace-pre-line"
              style={{ fontVariationSettings: "'wdth' 50" }}
            >
              {tab.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
