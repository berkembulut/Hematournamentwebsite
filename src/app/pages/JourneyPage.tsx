import { useParams, Link } from "react-router";
import { useI18n } from "../i18n";

type Section = "how-to-go" | "location" | "accommodation";

export default function JourneyPage() {
  const { section } = useParams<{ section: Section }>();
  const selectedSection = section || "how-to-go";
  const { t } = useI18n();

  const sectionData: Record<Section, { name: string; color: string }> = {
    "how-to-go": { name: t("journey.how_to_go"), color: "#cf6f6f" },
    "location": { name: t("journey.location"), color: "#fc6615" },
    "accommodation": { name: t("journey.accommodation"), color: "#a6684e" },
  };

  const data = sectionData[selectedSection as Section] || sectionData["how-to-go"];

  const getSectionOrder = () => {
    const allSections = [
      { name: t("journey.how_to_go"), color: "#cf6f6f", route: "/journey/how-to-go" },
      { name: t("journey.location"), color: "#fc6615", route: "/journey/location" },
      { name: t("journey.accommodation"), color: "#a6684e", route: "/journey/accommodation" },
    ];
    switch (selectedSection) {
      case "how-to-go":
        return [allSections[2], allSections[1], allSections[0]];
      case "location":
        return [allSections[2], allSections[0], allSections[1]];
      case "accommodation":
        return [allSections[0], allSections[1], allSections[2]];
      default:
        return [allSections[2], allSections[1], allSections[0]];
    }
  };

  const sectionOrder = getSectionOrder();

  const renderContent = () => {
    switch (selectedSection as Section) {
      case "how-to-go":
        return (
          <>
            <div className="absolute font-config font-normal h-[692px] leading-[0] left-[77px] not-italic text-[0px] text-white top-[369px] w-[645px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("journey.option1_title")}
              </p>
              <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>
                {t("journey.option1_desc")}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.option1_departure")}</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.option1_duration")}</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.option1_airport")}</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
                  <span className="leading-[145%]">{t("journey.option1_tickets_pre")}</span>
                  <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://ebilet.tcddtasimacilik.gov.tr/en" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t("journey.option1_tickets_link")}
                    </span>
                  </a>
                  <span className="leading-[145%]">.</span>
                </li>
                <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.option1_note")}</span>
                </li>
              </ul>
              <p className="leading-[145%] text-[24px] whitespace-pre-wrap">&nbsp;</p>
            </div>
            <div className="absolute font-config font-normal h-[600px] leading-[0] left-[766px] not-italic text-[0px] text-white top-[369px] w-[502px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("journey.option2_title")}
              </p>
              <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>
                {t("journey.option2_desc")}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.option2_route")}</span>
                </li>
                <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
                  <span className="leading-[145%]">{t("journey.option2_maps_pre")}</span>
                  <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://maps.app.goo.gl/BETZTYXX63hvfygJ8" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t("journey.option2_maps_link")}
                    </span>
                  </a>
                </li>
              </ul>
              <p className="leading-[145%] mb-0 text-[32px] whitespace-pre-wrap">&nbsp;</p>
            </div>
            <div className="absolute font-config font-normal h-[517px] leading-[0] left-[1312px] not-italic text-[0px] text-white top-[369px] w-[486px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("journey.option3_title")}
              </p>
              <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>
                {t("journey.option3_desc")}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </p>
              <ul className="list-disc">
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.option3_duration")}</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.option3_companies")}</span>
                </li>
                <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
                  <span className="leading-[145%]">{t("journey.option3_booking_pre")}</span>
                  <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://www.obilet.com/en" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t("journey.option3_booking_link")}
                    </span>
                  </a>
                  <span className="leading-[145%]">.</span>
                </li>
              </ul>
            </div>
          </>
        );
      case "location":
        return (
          <>
            <div className="absolute font-config font-normal leading-[0] left-[77px] not-italic text-[0px] text-white top-[369px] w-[500px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("journey.getting_title")}
              </p>
              <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>{t("journey.getting_desc")}</p>
            </div>
            
            <div className="absolute font-config font-normal leading-[0] left-[77px] not-italic text-[0px] text-white top-[640px] w-[500px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("journey.venue_title")}
              </p>
              <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap" style={{ marginTop: "12px" }}>{t("journey.venue_address")}</p>
              <p className="leading-[145%] mb-0 text-[24px] whitespace-pre-wrap">
                <a className="cursor-pointer decoration-solid font-config font-normal leading-[145%] not-italic text-black underline" href="https://maps.app.goo.gl/hzMcFxhAZUoYaD589" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <span className="decoration-solid leading-[145%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {t("journey.venue_maps")}
                  </span>
                </a>
              </p>
            </div>
            
            <div className="absolute font-config font-normal leading-[0] left-[650px] not-italic text-[0px] text-white top-[369px] w-[600px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-config font-semibold leading-[120%] mb-0 text-[32px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {t("journey.protips_title")}
              </p>
              <ul className="list-disc mb-0" style={{ marginTop: "12px" }}>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">
                    {t("journey.protip_currency")}
                    <br aria-hidden="true" /><br aria-hidden="true" />
                  </span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">
                    {t("journey.protip_transport")}
                    <br aria-hidden="true" /><br aria-hidden="true" />
                  </span>
                </li>
                <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[145%] text-[24px]">{t("journey.protip_gear")}</span>
                </li>
              </ul>
            </div>
          </>
        );
      case "accommodation":
        return (
          <div className="absolute left-[77px] top-[369px] right-[77px] bottom-[120px] overflow-y-auto text-white font-config" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-config font-semibold text-[32px] leading-[100%] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("journey.accom_title")}
            </p>
            <p className="text-[24px] leading-[140%] mb-8">
              {t("journey.accom_desc")}
            </p>

            <div className="flex flex-col gap-6">
              {/* Hotel 1 - Grand Arte (moved to top) */}
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t("journey.hotel_grand_arte")}
                    </p>
                    <p className="text-[18px] text-white/70 leading-[140%]">{t("journey.hotel_grand_arte_desc")}</p>
                  </div>
                </div>
                <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.grandeartehotels.com/en-us/home-2/" target="_blank" rel="noopener noreferrer">
                  {t("journey.hotel_visit")}
                </a>
              </div>

              {/* Hotel 2 - Smart by Point */}
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t("journey.hotel_smart")}
                    </p>
                    <p className="text-[18px] text-white/70 leading-[140%]">{t("journey.hotel_smart_desc")}</p>
                  </div>
                </div>
                <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.smartbypoint.com/" target="_blank" rel="noopener noreferrer">
                  {t("journey.hotel_visit")}
                </a>
              </div>

              {/* Hotel 3 - Nova Vista Deluxe Radisson */}
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t("journey.hotel_nova")}
                    </p>
                    <p className="text-[18px] text-white/70 leading-[140%]">{t("journey.hotel_nova_desc")}</p>
                  </div>
                </div>
                <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.radissonhotels.com/en-us/hotels/radisson-individuals-nova-vista-deluxe-suites-eskisehir" target="_blank" rel="noopener noreferrer">
                  {t("journey.hotel_visit")}
                </a>
              </div>

              {/* Hotel 4 - Leto City Visnelik */}
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-config font-semibold text-[26px] leading-[100%] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {t("journey.hotel_leto")}
                    </p>
                    <p className="text-[18px] text-white/70 leading-[140%]">{t("journey.hotel_leto_desc")}</p>
                  </div>
                </div>
                <a className="cursor-pointer text-black underline decoration-solid text-[20px]" href="https://www.letocityhotel.com/en/" target="_blank" rel="noopener noreferrer">
                  {t("journey.hotel_visit")}
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[1080px] w-full">
      {/* Background */}
      <div className="absolute bg-[#f6fbff] content-stretch flex flex-col h-[1080px] items-start left-0 pt-[300px] top-0 w-full z-0">
        <div className="h-[780px] shrink-0 w-full" style={{ backgroundColor: data.color }} />
      </div>

      {/* Section Selector */}
      <div className="absolute right-0 top-[190px] flex gap-0">
        {sectionOrder.map((sec, index) => (
          <Link key={index} to={sec.route} className="h-[110px] w-[210px] flex items-center justify-center cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: sec.color }}>
            <p className="font-config font-bold text-[28px] text-black text-center px-2 leading-tight whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 50" }}>
              {sec.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}
