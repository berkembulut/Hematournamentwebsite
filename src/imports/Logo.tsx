import imgLogo from "figma:asset/c655a8c72fae78f6d44a8d51c7945b1131376d22.png";

export default function Logo() {
  return (
    <div className="relative size-full" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[100.3%] left-0 max-w-none top-[-0.15%] w-full" src={imgLogo} />
      </div>
    </div>
  );
}