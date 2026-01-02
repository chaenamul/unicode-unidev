export interface Session {
  id: number;
  time: string;
  title: string;
  speaker: string;
  tags: string[];
  day: "saturday" | "sunday";
}

export const saturdaySessions: Session[] = [
  {
    id: 1,
    time: "10:00 - 10:40",
    title: "타임 스내쳐 핸디의 개발 및 개발 외 과정 공유",
    speaker: "시계태엽고양이 김민준(하제)",
    tags: ["제3회 UNICON 수상작"],
    day: "saturday",
  },
  {
    id: 2,
    time: "11:00 - 11:40",
    title: "TA(Technical Artist) 직무 소개",
    speaker: "펄어비스 홍선우(CAT&DOG)",
    tags: ["아트/사운드", "프로그래밍"],
    day: "saturday",
  },
  {
    id: 3,
    time: "13:00 - 13:40",
    title: "데브시스터즈의 개발 업무 프로세스 소개",
    speaker: "데브시스터즈 박정수(SNUGDC)",
    tags: ["PM/기획", "프로그래밍"],
    day: "saturday",
  },
  {
    id: 4,
    time: "14:00 - 14:40",
    title: "UNIJAM에서부터 스팀 출시까지",
    speaker: "득도비트 기획자 김예준(ExPmakE)",
    tags: ["제3회 UNICON 수상작"],
    day: "saturday",
  },
  {
    id: 5,
    time: "15:00 - 15:40",
    title: "인디게임으로 정부지원 받는 법에 대해",
    speaker: "Reverie 민경효(SNUGDC)",
    tags: ["PM/기획"],
    day: "saturday",
  },
];

export const sundaySessions: Session[] = [
  {
    id: 6,
    time: "10:00 - 10:40",
    title: "게임 최적화와 엔지니어링의 중요성",
    speaker: "슈퍼셀 엔진 프로그래머 문기영",
    tags: ["프로그래밍"],
    day: "sunday",
  },
  {
    id: 7,
    time: "11:00 - 11:40",
    title: "Modern Game Sound Trend : Phase Shifted Rumble",
    speaker: "신우석(PoolC)",
    tags: ["아트/사운드"],
    day: "sunday",
  },
  {
    id: 8,
    time: "13:00 - 13:40",
    title: "AI써서 개발하는 기획자 이야기",
    speaker: "류다민(PoolC)",
    tags: ["PM/기획", "프로그래밍"],
    day: "sunday",
  },
  {
    id: 9,
    time: "14:00 - 14:40",
    title: "HellPunk 기획, 운영 이야기",
    speaker: "HellPunk 지상우(PoolC)",
    tags: ["PM/기획"],
    day: "sunday",
  },
  {
    id: 10,
    time: "15:00 - 15:40",
    title: "100만 명 서버 만들기",
    speaker: "뒤끝 권오현 대표",
    tags: ["프로그래밍"],
    day: "sunday",
  },
];

export const allSessions = [...saturdaySessions, ...sundaySessions];

export const tagColors: Record<string, string> = {
  // 기존: 기술적이고 신뢰감 있는 블루/인디고 계열 (Primary)
  "프로그래밍": "bg-primary/10 text-primary",

  // 논리적이고 조화로운 느낌의 그린/에메랄드 계열
  "PM/기획": "bg-[#10b981]/20 text-[#059669]",

  // 창의적이고 예술적인 느낌의 퍼플/핑크 계열
  "아트/사운드": "bg-[#d946ef]/20 text-[#a21caf]",

  // 수상작의 권위와 특별함을 나타내는 골드/앰버 계열
  "제3회 UNICON 수상작": "bg-[#f59e0b]/20 text-[#b45309]",
};
