import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Logo from "../../imports/Logo";
import { useEffect, useState } from "react";
import { MobileContext } from "../MobileContext";

const MOBILE_BREAKPOINT = 768;

export default function Layout() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const designWidth = 1920;
  const designHeight = 1080;

  useEffect(() => {
    function update() {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) {
        const scaleX = window.innerWidth / designWidth;
        const scaleY = window.innerHeight / designHeight;
        setScale(Math.min(scaleX, scaleY));
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      {isMobile ? (
        /* =================== MOBILE LAYOUT =================== */
        <div className="bg-[#f6fbff] min-h-screen w-full overflow-y-auto">
          {/* Header - Logo */}
          <div className="px-4 pt-3 pb-1">
            <div className="w-[180px] h-[53px]">
              <Logo />
            </div>
          </div>

          {/* Navigation */}
          <div className="px-4 pb-3">
            <Navigation />
          </div>

          {/* Page Content */}
          <Outlet />
        </div>
      ) : (
        /* =================== DESKTOP LAYOUT =================== */
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
      )}
    </MobileContext.Provider>
  );
}
