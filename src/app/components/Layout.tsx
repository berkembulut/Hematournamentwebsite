import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Logo from "../../imports/Logo";
import { useEffect, useState } from "react";

export default function Layout() {
  const [scale, setScale] = useState(1);
  const designWidth = 1920;
  const designHeight = 1080;

  useEffect(() => {
    function updateScale() {
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      setScale(Math.min(scaleX, scaleY));
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="bg-[#f6fbff] w-full overflow-hidden flex items-start justify-center" style={{ height: '100vh' }}>
      <div
        style={{
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          flexShrink: 0,
        }}
      >
        <div className="relative">
          {/* Logo */}
          <div className="absolute h-[161px] left-[77px] top-[64px] w-[552px] z-50">
            <Logo />
          </div>
          
          {/* Navigation */}
          <div className="absolute left-[735px] top-[87px] w-[1114px] z-50">
            <Navigation />
          </div>
          
          {/* Page Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}