import { Link, useLocation } from "react-router";

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0 w-full">
      <Link to="/" className="h-[70px] relative shrink-0 w-[179px] group">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0 group-hover:bg-black transition-colors" />
        <p 
          className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[32px] text-black group-hover:text-white transition-colors" 
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          HOME
        </p>
      </Link>
      
      <Link to="/rules/general-rules" className="h-[70px] relative shrink-0 w-[179px] group">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0 group-hover:bg-black transition-colors" />
        <p 
          className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[32px] text-black group-hover:text-white transition-colors" 
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          RULES
        </p>
      </Link>
      
      <Link to="/journey/how-to-go" className="h-[70px] relative shrink-0 w-[179px] group">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0 group-hover:bg-black transition-colors" />
        <p 
          className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[32px] text-black text-center group-hover:text-white transition-colors" 
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          JOURNEY
        </p>
      </Link>
      
      <Link to="/schedule/day-1" className="h-[70px] relative shrink-0 w-[179px] group">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0 group-hover:bg-black transition-colors" />
        <p 
          className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[32px] text-black group-hover:text-white transition-colors" 
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          SCHEDULE
        </p>
      </Link>
      
      <Link to="/about/meet-n-beat" className="h-[70px] relative shrink-0 w-[179px] group">
        <div className="absolute bg-[#f6fbff] border-7 border-black border-solid inset-0 group-hover:bg-black transition-colors" />
        <p 
          className="absolute font-config font-bold inset-0 flex items-center justify-center leading-[normal] not-italic text-[32px] text-black group-hover:text-white transition-colors" 
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          ABOUT
        </p>
      </Link>
    </div>
  );
}