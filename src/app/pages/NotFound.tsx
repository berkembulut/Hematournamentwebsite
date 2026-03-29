import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="relative min-h-[1080px] w-full flex items-center justify-center">
      {/* Background with all colors */}
      <div className="absolute inset-0 flex flex-wrap">
        <div className="w-1/2 h-1/2 bg-[#147af4]" />
        <div className="w-1/2 h-1/2 bg-[#ff005c]" />
        <div className="w-1/2 h-1/2 bg-[#fca915]" />
        <div className="w-1/2 h-1/2 bg-[#30cc0a]" />
      </div>

      {/* Content */}
      <div className="relative bg-white border-7 border-black p-16 text-center max-w-[800px] mx-auto">
        <h1 
          className="font-config font-bold text-[120px] mb-4 text-black" 
          style={{ fontVariationSettings: "'wdth' 50" }}
        >
          404
        </h1>
        <p 
          className="font-config font-medium text-[36px] mb-8 text-black" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Page Not Found
        </p>
        <p 
          className="font-config text-[24px] mb-12 text-gray-700" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-[#147af4] text-white border-7 border-black px-12 py-4 font-config font-bold text-[32px] hover:bg-[#0d5cbd] transition-colors"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
}