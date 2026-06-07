import { useI18n } from "../i18n";

type SlotKind = "start" | "break" | "longsword-pools" | "longsword-elim" | "eastern-pools" | "eastern-elim" | "military-pools" | "military-elim" | "rapier-pools" | "rapier-elim" | "seminar" | "celebration";

interface Slot {
  time: string;
  kind: SlotKind;
}

export const day1Slots: Slot[] = [
  { time: "08:00", kind: "start" },
  { time: "09:00", kind: "longsword-pools" },
  { time: "12:00", kind: "longsword-elim" },
  { time: "13:30", kind: "break" },
  { time: "14:00", kind: "military-pools" },
  { time: "17:00", kind: "break" },
  { time: "17:30", kind: "military-elim" },
  { time: "19:00", kind: "celebration" },
];

export const day2Slots: Slot[] = [
  { time: "08:00", kind: "start" },
  { time: "09:00", kind: "eastern-pools" },
  { time: "12:00", kind: "eastern-elim" },
  { time: "13:30", kind: "break" },
  { time: "14:00", kind: "rapier-pools" },
  { time: "17:00", kind: "break" },
  { time: "17:30", kind: "rapier-elim" },
  { time: "19:00", kind: "celebration" },
];

function labelFor(kind: SlotKind, t: (k: string) => string): string {
  switch (kind) {
    case "start": return t("schedule.start");
    case "break": return t("schedule.break");
    case "celebration": return t("schedule.celebration");
    case "seminar": return t("schedule.seminar");
    case "longsword-pools": return `${t("schedule.longsword")} - ${t("schedule.pools")}`;
    case "longsword-elim": return `${t("schedule.longsword")} - ${t("schedule.elimination")}`;
    case "eastern-pools": return `${t("schedule.eastern_saber")} - ${t("schedule.pools")}`;
    case "eastern-elim": return `${t("schedule.eastern_saber")} - ${t("schedule.elimination")}`;
    case "military-pools": return `${t("schedule.military_saber")} - ${t("schedule.pools")}`;
    case "military-elim": return `${t("schedule.military_saber")} - ${t("schedule.elimination")}`;
    case "rapier-pools": return `${t("schedule.rapier")} - ${t("schedule.pools")}`;
    case "rapier-elim": return `${t("schedule.rapier")} - ${t("schedule.elimination")}`;
  }
}

interface Props {
  slots: Slot[];
  compact?: boolean;
}

export default function Timetable({ slots, compact = false }: Props) {
  const { t } = useI18n();
  const rowPad = compact ? 14 : 22;
  const timeW = compact ? 90 : 130;
  const fontSize = compact ? 18 : 28;
  const timeSize = compact ? 18 : 26;

  return (
    <div className="flex flex-col font-config text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
      {slots.map((s, i) => (
        <div
          key={i}
          className="flex items-center gap-6"
          style={{
            paddingTop: rowPad,
            paddingBottom: rowPad,
            borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.55)",
          }}
        >
          <div
            className="font-config text-white"
            style={{ width: timeW, fontVariationSettings: "'wdth' 100", fontSize: timeSize, fontWeight: 500 }}
          >
            {s.time}
          </div>
          <div
            className="font-config"
            style={{
              fontVariationSettings: "'wdth' 75",
              fontSize,
              fontWeight: 600,
              lineHeight: 1.2,
              color: s.kind.includes("pools") || s.kind.includes("elim") ? "#000" : "#fff",
            }}
          >
            {labelFor(s.kind, t)}
          </div>
        </div>
      ))}
    </div>
  );
}
