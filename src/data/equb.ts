/**
 * Equb Core Brand Facts & Derived Calculations
 * All numbers across the application must derive from this single source of truth.
 */

export interface EqubConfig {
  brandName: string;
  brandNameAmharic: string;
  rewardVehicle: string;
  vehicleModelYear: string;
  totalMembers: number;
  dailyContributionPerMember: number; // in ETB
  drawIntervalDays: number;
  durationMonths: number;
  totalDays: number;
}

export const EQUB_CONFIG: EqubConfig = {
  brandName: "I store by dev",
  brandNameAmharic: "አይ ስቶር ባይ ዴቭ እቁብ", // TODO: native review
  rewardVehicle: "Suzuki Dzire",
  vehicleModelYear: "2024 / 2025 Edition",
  totalMembers: 25,
  dailyContributionPerMember: 12000,
  drawIntervalDays: 9,
  durationMonths: 3,
  totalDays: 90,
};

// Derived numbers (strictly calculated from base config)
export const DERIVED_EQUB = {
  // 25 * 12,000 = 300,000 ETB daily collected
  dailyPool: EQUB_CONFIG.totalMembers * EQUB_CONFIG.dailyContributionPerMember,
  
  // 300,000 * 9 = 2,700,000 ETB per round draw
  poolPerRound: (EQUB_CONFIG.totalMembers * EQUB_CONFIG.dailyContributionPerMember) * EQUB_CONFIG.drawIntervalDays,
  
  // floor(90 / 9) = 10 draws
  totalDraws: Math.floor(EQUB_CONFIG.totalDays / EQUB_CONFIG.drawIntervalDays),
  
  // 12,000 * 90 = 1,080,000 ETB total saved per individual member
  totalContributionPerMember: EQUB_CONFIG.dailyContributionPerMember * EQUB_CONFIG.totalDays,
  
  // Total grand pool across the entire 3 months (10 cars total = 27,000,000 ETB)
  totalGrandPool: ((EQUB_CONFIG.totalMembers * EQUB_CONFIG.dailyContributionPerMember) * EQUB_CONFIG.drawIntervalDays) * Math.floor(EQUB_CONFIG.totalDays / EQUB_CONFIG.drawIntervalDays),
};

// Formatter helper for ETB currency
export function formatETB(amount: number): string {
  return `${amount.toLocaleString("en-US")} ETB`;
}

// TODO: Integrate Ethiopian Calendar (Ge'ez calendar converter) in production.
// For now, demo mock dates are projected based on day offsets.

export interface DrawRound {
  roundNumber: number;
  dayNumber: number;
  status: 'completed' | 'current' | 'upcoming';
  winner?: {
    name: string;
    amharicName: string;
    memberId: string;
    avatarInitials: string;
    winDate: string;
    winDateEth: string;
  };
  scheduledDate: string;
  scheduledDateEth: string;
  poolAmount: number;
}

export const DEMO_DRAW_ROUNDS: DrawRound[] = [
  {
    roundNumber: 1,
    dayNumber: 9,
    status: 'completed',
    winner: {
      name: "Dawit Bekele",
      amharicName: "ዳዊት በቀለ",
      memberId: "EQ-007",
      avatarInitials: "DB",
      winDate: "Oct 12, 2026",
      winDateEth: "ጥቅምት 2, 2017 ዓ.ም",
    },
    scheduledDate: "Oct 12, 2026",
    scheduledDateEth: "ጥቅምት 2, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 2,
    dayNumber: 18,
    status: 'completed',
    winner: {
      name: "Tigist Mengistu",
      amharicName: "ትዕግስት መንግስቱ",
      memberId: "EQ-014",
      avatarInitials: "TM",
      winDate: "Oct 21, 2026",
      winDateEth: "ጥቅምት 11, 2017 ዓ.ም",
    },
    scheduledDate: "Oct 21, 2026",
    scheduledDateEth: "ጥቅምት 11, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 3,
    dayNumber: 27,
    status: 'completed',
    winner: {
      name: "Yonas Haile",
      amharicName: "ዮናስ ኃይሌ",
      memberId: "EQ-003",
      avatarInitials: "YH",
      winDate: "Oct 30, 2026",
      winDateEth: "ጥቅምት 20, 2017 ዓ.ም",
    },
    scheduledDate: "Oct 30, 2026",
    scheduledDateEth: "ጥቅምት 20, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 4,
    dayNumber: 36,
    status: 'current',
    scheduledDate: "Nov 08, 2026",
    scheduledDateEth: "ጥቅምት 29, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 5,
    dayNumber: 45,
    status: 'upcoming',
    scheduledDate: "Nov 17, 2026",
    scheduledDateEth: "ኅዳር 8, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 6,
    dayNumber: 54,
    status: 'upcoming',
    scheduledDate: "Nov 26, 2026",
    scheduledDateEth: "ኅዳር 17, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 7,
    dayNumber: 63,
    status: 'upcoming',
    scheduledDate: "Dec 05, 2026",
    scheduledDateEth: "ኅዳር 26, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 8,
    dayNumber: 72,
    status: 'upcoming',
    scheduledDate: "Dec 14, 2026",
    scheduledDateEth: "ታኅሣሥ 5, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 9,
    dayNumber: 81,
    status: 'upcoming',
    scheduledDate: "Dec 23, 2026",
    scheduledDateEth: "ታኅሣሥ 14, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
  {
    roundNumber: 10,
    dayNumber: 90,
    status: 'upcoming',
    scheduledDate: "Jan 01, 2027",
    scheduledDateEth: "ታኅሣሥ 23, 2017 ዓ.ም",
    poolAmount: DERIVED_EQUB.poolPerRound,
  },
];

export interface MemberProfile {
  id: string;
  name: string;
  amharicName: string;
  initials: string;
  joinedRound: number;
  verified: boolean;
  hasWon: boolean;
  avatarColor: string;
}

// 25 close friends who know each other well
export const DEMO_MEMBERS: MemberProfile[] = [
  { id: "EQ-001", name: "Abebe Kebede", amharicName: "አበበ ከበደ", initials: "AK", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-emerald-600" },
  { id: "EQ-002", name: "Sara Tefera", amharicName: "ሳራ ተፈራ", initials: "ST", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-amber-600" },
  { id: "EQ-003", name: "Yonas Haile", amharicName: "ዮናስ ኃይሌ", initials: "YH", joinedRound: 1, verified: true, hasWon: true, avatarColor: "bg-blue-600" },
  { id: "EQ-004", name: "Bethlehem Tadesse", amharicName: "ቤተልሔም ታደሰ", initials: "BT", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-purple-600" },
  { id: "EQ-005", name: "Henok Girma", amharicName: "ሄኖክ ግርማ", initials: "HG", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-teal-600" },
  { id: "EQ-006", name: "Meron Assefa", amharicName: "ሜሮን አሰፋ", initials: "MA", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-rose-600" },
  { id: "EQ-007", name: "Dawit Bekele", amharicName: "ዳዊት በቀለ", initials: "DB", joinedRound: 1, verified: true, hasWon: true, avatarColor: "bg-indigo-600" },
  { id: "EQ-008", name: "Hiwot Alemu", amharicName: "ህይወት አለሙ", initials: "HA", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-emerald-700" },
  { id: "EQ-009", name: "Kidus Worku", amharicName: "ኪዱስ ወርቁ", initials: "KW", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-amber-700" },
  { id: "EQ-010", name: "Liya Seyoum", amharicName: "ሊያ ሥዩም", initials: "LS", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-cyan-600" },
  { id: "EQ-011", name: "Ermias Fekadu", amharicName: "ኤርሚያስ ፈቃዱ", initials: "EF", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-emerald-600" },
  { id: "EQ-012", name: "Hanna Daniel", amharicName: "ሃና ዳንኤል", initials: "HD", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-fuchsia-600" },
  { id: "EQ-013", name: "Samuel Getachew", amharicName: "ሳሙኤል ጌታቸው", initials: "SG", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-yellow-600" },
  { id: "EQ-014", name: "Tigist Mengistu", amharicName: "ትዕግስት መንግስቱ", initials: "TM", joinedRound: 1, verified: true, hasWon: true, avatarColor: "bg-violet-600" },
  { id: "EQ-015", name: "Biniyam Berhanu", amharicName: "ቢንያም ብርሃኑ", initials: "BB", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-orange-600" },
  { id: "EQ-016", name: "Rahel Solomon", amharicName: "ራሄል ሰሎሞን", initials: "RS", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-rose-700" },
  { id: "EQ-017", name: "Tamrat Wolde", amharicName: "ታምራት ወልደ", initials: "TW", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-emerald-800" },
  { id: "EQ-018", name: "Semhar Tesfaye", amharicName: "ሰምሃር ተስፋዬ", initials: "ST", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-amber-600" },
  { id: "EQ-019", name: "Natnael Demissie", amharicName: "ናትናኤል ደሚሴ", initials: "ND", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-indigo-700" },
  { id: "EQ-020", name: "Eden Kassahun", amharicName: "ኤደን ካሳሁን", initials: "EK", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-pink-600" },
  { id: "EQ-021", name: "Mikias Belay", amharicName: "ሚኪያስ በላይ", initials: "MB", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-blue-700" },
  { id: "EQ-022", name: "Tsion Gebre", amharicName: "ጽዮን ገብሬ", initials: "TG", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-teal-700" },
  { id: "EQ-023", name: "Robel Melaku", amharicName: "ሮቤል መላኩ", initials: "RM", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-lime-700" },
  { id: "EQ-024", name: "Meklit Desta", amharicName: "መክሊት ደስታ", initials: "MD", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-red-700" },
  { id: "EQ-025", name: "Kaleb Yohannes", amharicName: "ካሌብ ዮሐንስ", initials: "KY", joinedRound: 1, verified: true, hasWon: false, avatarColor: "bg-amber-800" },
];

export const CAR_SPECIFICATIONS = [
  { key: "engine", labelEn: "Fuel Efficient Engine", labelAm: "ነዳጅ ቆጣቢ ሞተር", valueEn: "1.2L DualJet Dual VVT", valueAm: "1.2L ዱዋል ጄት ሞተር" },
  { key: "fuel", labelEn: "Economy Mileage", labelAm: "የነዳጅ ፍጆታ", valueEn: "~22.61 km/L", valueAm: "በአማካይ 22.61 ኪ.ሜ/ሊ" },
  { key: "transmission", labelEn: "Transmission", labelAm: "የማርሽ አይነት", valueEn: "5-Speed AGS / Manual", valueAm: "5-ደረጃ AGS / ማኑዋል" },
  { key: "infotainment", labelEn: "Smart Screen", labelAm: "ዘመናዊ ስክሪን", valueEn: "7\" SmartPlay Touchscreen", valueAm: "7 ኢንች ስማርት ንክኪ ስክሪን" },
  { key: "comfort", labelEn: "Cabin Comfort", labelAm: "ምቾትና ቅንጦት", valueEn: "Rear AC Vents & Keyless Push Start", valueAm: "የኋላ አየር ማቀዝቀዣና ፑሽ ስታርት" },
  { key: "safety", labelEn: "Safety Standard", labelAm: "የደህንነት ጥበቃ", valueEn: "Dual Front Airbags & ABS with EBD", valueAm: "ድርብ ኤርባግ እና ABS ሲስተም" },
];

