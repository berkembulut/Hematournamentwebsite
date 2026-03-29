import { useParams, Link } from "react-router";

type Section = "how-to-go" | "location" | "accommodation";

const sections = {
  "how-to-go": {
    name: "HOW TO GO?",
    color: "#cf6f6f",
    content: (
      <>
        <div className="absolute font-config font-normal h-[692px] leading-[0] left-[77px] not-italic text-[0px] text-white top-[369px] w-[645px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Option 1: The High-Speed Train (Recommended)
          </p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>
            The Yuksek Hizli Tren (YHT) is the fastest and most comfortable way to travel.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">Departure Stations: Sogutlucesme or Pendik (Istanbul Asian Side).</span>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">Duration: Approximately 3 hours.</span>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">How to get there from Istanbul Airport (IST): Take the Havaist Shuttle Bus or a taxi to Sogutlucesme Station.</span>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
              <span className="leading-[145%]">{`Tickets: You can book online via the `}</span>
              <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://ebilet.tcddtasimacilik.gov.tr/en" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
                <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Turkish State Railways (TCDD) Website
                </span>
              </a>
              <span className="leading-[145%]">.</span>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">Note: We recommend booking 1–2 weeks in advance as tickets sell out quickly!</span>
            </li>
          </ul>
          <p className="leading-[145%] text-[24px] whitespace-pre-wrap">&nbsp;</p>
        </div>
        <div className="absolute font-config font-normal h-[600px] leading-[0] left-[766px] not-italic text-[0px] text-white top-[369px] w-[502px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Option 2: Private Car / Taxi
          </p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>
            If you prefer a direct door-to-door route, driving takes about 3.5 to 4 hours (approx. 300 km).
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">Route: Follow the O-4 and D650 highways via Kocaeli and Bilecik.</span>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
              <span className="leading-[145%]">{`Google Maps Link: `}</span>
              <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://maps.app.goo.gl/BETZTYXX63hvfygJ8" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
                <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Navigate to the Venue
                </span>
              </a>
            </li>
          </ul>
          <p className="leading-[145%] mb-0 text-[32px] whitespace-pre-wrap">&nbsp;</p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap">&nbsp;</p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap">&nbsp;</p>
          <p className="leading-[145%] text-[24px] whitespace-pre-wrap">&nbsp;</p>
        </div>
        <div className="absolute font-config font-normal h-[517px] leading-[0] left-[1312px] not-italic text-[0px] text-white top-[369px] w-[486px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Option 3: Intercity Bus
          </p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>
            Buses run 24/7 from the Istanbul Main Bus Terminal (Otogar).
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <ul className="list-disc">
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">Duration: 5–6 hours.</span>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">Companies: Pamukkale, Kamil Koc, and Metro are reliable options.</span>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
              <span className="leading-[145%]">{`Booking: You can check schedules on `}</span>
              <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://www.obilet.com/en" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
                <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Obilet
                </span>
              </a>
              <span className="leading-[145%]">.</span>
            </li>
          </ul>
        </div>
      </>
    )
  },
  "location": {
    name: "LOCATION",
    color: "#fc6615",
    content: (
      <>
        <div className="absolute font-config font-normal leading-[0] left-[77px] not-italic text-[0px] text-white top-[369px] w-[500px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Getting to the Tournament
          </p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>Welcome to Turkey! Whether you are flying into Istanbul or traveling locally, here is everything you need to know to reach the Eskisehir Sehit Suat Celik Genclik Merkezi.</p>
        </div>
        
        <div className="absolute font-config font-normal leading-[0] left-[77px] not-italic text-[0px] text-white top-[640px] w-[500px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Venue Location
          </p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>Eskisehir Sehit Suat Celik Genclik Merkezi Gundogdu, 26080 Odunpazari/Eskisehir</p>
          <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap">
            <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://maps.app.goo.gl/hzMcFxhAZUoYaD589" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Click here for the Google Maps Location
              </span>
            </a>
          </p>
        </div>
        
        <div className="absolute font-config font-normal leading-[0] left-[650px] not-italic text-[0px] text-white top-[369px] w-[600px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pro-Tips for International Travelers:
          </p>
          <ul className="list-disc mb-0" style={{ marginTop: "12px" }}>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">
                Currency: While cards are widely accepted, keep some Turkish Lira (TRY) for small snacks or local transport.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">
                {`Local Transport: In Eskisehir, use the "Estram" (Tram) or taxis—they are very affordable compared to Europe/US.`}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[145%] text-[24px]">{`Gear: If you are traveling with swords, ensure they are in a locked hard case and check your airline's sporting equipment policy!`}</span>
            </li>
          </ul>
        </div>
      </>
    )
  },
  "accommodation": {
    name: "ACCOMMODATION",
    color: "#a6684e",
    content: (
      <>
        <div className="absolute left-[77px] top-[369px] right-[77px] bottom-[120px] overflow-y-auto text-white font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-config font-semibold text-[32px] leading-[100%] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Accommodation Options
          </p>
          <p className="text-[24px] leading-[140%] mb-8">
            We have negotiated special rates at the following hotels for tournament participants. All hotels offer bed and breakfast. Book early to secure your spot!
          </p>

          {/* Hotel Cards */}
          <div className="flex flex-col gap-6">
            {/* Hotel 1 - Smart by point */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Smart by Point
                  </p>
                  <p className="text-[18px] text-white/70 leading-[140%]">Close to the venue · 13–14 June</p>
                </div>
              </div>
              <p className="text-[16px] text-white/60 italic mb-2">Prices being negotiated — expected to be the cheapest option.</p>
              <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.smartbypoint.com/" target="_blank" rel="noopener noreferrer">
                Visit Hotel Website →
              </a>
            </div>

            {/* Hotel 2 - Nova Vista Deluxe Radisson */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Nova Vista Deluxe Radisson
                  </p>
                  <p className="text-[18px] text-white/70 leading-[140%]">Close to the venue · 13–14 June · Bed & Breakfast · 20 people</p>
                </div>
              </div>
              <div className="flex gap-6 mt-4 mb-4">
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Single Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>4,000 TL</p>
                </div>
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Double Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>5,000 TL</p>
                </div>
              </div>
              <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.radissonhotels.com/en-us/hotels/radisson-individuals-nova-vista-deluxe-suites-eskisehir" target="_blank" rel="noopener noreferrer">
                Visit Hotel Website →
              </a>
            </div>

            {/* Hotel 3 - LETO CİTY VİŞNELİK */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Leto City Visnelik
                  </p>
                  <p className="text-[18px] text-white/70 leading-[140%]">Hotel of the after party · 13–14 June · Bed & Breakfast · 20 people</p>
                </div>
              </div>
              <div className="flex gap-6 mt-4 mb-4">
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Single Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>2,500 TL</p>
                </div>
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Double Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>3,500 TL</p>
                </div>
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Triple Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>4,500 TL</p>
                </div>
              </div>
              <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.letocityhotel.com/en/" target="_blank" rel="noopener noreferrer">
                Visit Hotel Website →
              </a>
            </div>

            {/* Hotel 4 - Grand Arte */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Grand Arte Hotel
                  </p>
                  <p className="text-[18px] text-white/70 leading-[140%]">In the center, best price performance · 13–14 June · Bed & Breakfast · 20 people</p>
                </div>
              </div>
              <div className="flex gap-6 mt-4 mb-4">
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Single Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>3,500 TL</p>
                </div>
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Double Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>4,500 TL</p>
                </div>
                <div className="bg-white/10 rounded px-4 py-2 text-center">
                  <p className="text-[14px] text-white/60 mb-1">Triple Room</p>
                  <p className="text-[20px] font-config font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>5,700 TL</p>
                </div>
              </div>
              <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.grandeartehotels.com/en-us/home-2/" target="_blank" rel="noopener noreferrer">
                Visit Hotel Website →
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default function JourneyPage() {
  const { section } = useParams<{ section: Section }>();
  const selectedSection = section || "how-to-go";
  const data = sections[selectedSection as Section] || sections["how-to-go"];

  // Define section order based on selected section (active one on the right)
  const getSectionOrder = () => {
    switch (selectedSection) {
      case "how-to-go":
        return [
          { name: "ACCOMMODATION", color: "#a6684e", route: "/journey/accommodation" },
          { name: "LOCATION", color: "#fc6615", route: "/journey/location" },
          { name: "HOW TO GO?", color: "#cf6f6f", route: "/journey/how-to-go" }
        ];
      case "location":
        return [
          { name: "ACCOMMODATION", color: "#a6684e", route: "/journey/accommodation" },
          { name: "HOW TO GO?", color: "#cf6f6f", route: "/journey/how-to-go" },
          { name: "LOCATION", color: "#fc6615", route: "/journey/location" }
        ];
      case "accommodation":
        return [
          { name: "HOW TO GO?", color: "#cf6f6f", route: "/journey/how-to-go" },
          { name: "LOCATION", color: "#fc6615", route: "/journey/location" },
          { name: "ACCOMMODATION", color: "#a6684e", route: "/journey/accommodation" }
        ];
      default:
        return [
          { name: "ACCOMMODATION", color: "#a6684e", route: "/journey/accommodation" },
          { name: "LOCATION", color: "#fc6615", route: "/journey/location" },
          { name: "HOW TO GO?", color: "#cf6f6f", route: "/journey/how-to-go" }
        ];
    }
  };

  const sectionOrder = getSectionOrder();

  return (
    <div className="relative min-h-[1080px] w-full">
      {/* Background */}
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-full z-0">
        <div className="h-[780px] shrink-0 w-full" style={{ backgroundColor: data.color }} />
      </div>

      {/* Section Selector */}
      <div className="absolute right-0 top-[215px] flex gap-0">
        {sectionOrder.map((sec, index) => (
          <Link key={index} to={sec.route} className="h-[85px] w-[160px] flex items-center justify-center cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: sec.color }}>
            <p className="font-config font-bold text-[14px] text-black text-center px-2 leading-tight whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 50" }}>
              {sec.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Content */}
      {data.content}
    </div>
  );
}