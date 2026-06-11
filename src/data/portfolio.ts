export const profile = {
  name: "김서연",
  role: "Frontend Developer",
  period: "2025.3 ~ 현재",
  headline: "어떤 상황에서도 유연하게 적응하며,\n그 안에서 자신의 역량을 드러내는 개발자",
  intro: [
    {
      title: "유연하게 적응하고 빠르게 방향을 조정합니다.",
      body: "코드 리뷰와 사용자 피드백을 열린 태도로 수용하며, 변화하는 요구사항에 맞춰 빠르게 방향을 조정합니다. 이를 통해 단순한 기능 구현을 넘어, 더 나은 사용자 경험과 완성도 높은 결과를 만들어냅니다.",
    },
    {
      title: "협업과 소통을 중요하게 생각합니다.",
      body: "더 나은 결과를 만들기 위해선 협업과 소통이 가장 중요한 요소 중 하나라고 생각합니다. 약 6년간 운영된 더모먼트 팀에서 협업하며, 광주소프트웨어마이스터고등학교 입학 지원 서비스를 실제로 운영하고 개선하는 과정에 참여했습니다. 팀원들과의 적극적인 협업과 소통을 바탕으로 사용자 흐름을 개선하고, 서비스 완성도를 높이는 데 기여했습니다.",
    },
  ],
};

export const contacts = [
  {
    label: "GitHub",
    value: "github.com/s2yeons",
    href: "https://github.com/s2yeons",
  },
  {
    label: "Email",
    value: "ksycloud07@gmail.com",
    href: "mailto:ksycloud07@gmail.com",
  },
  {
    label: "Phone",
    value: "010-9362-8676",
    href: "tel:01093628676",
  },
  {
    label: "Blog",
    value: "seoxeon09.tistory.com",
    href: "https://seoxeon09.tistory.com/",
  },
  {
    label: "학력",
    value: "광주소프트웨어마이스터고등학교 (졸업 예정)",
    href: null,
  },
];

export type Project = {
  name: string;
  period: string;
  summary: string;
  description: string;
  metrics?: { label: string; value: string }[];
  stack: string[];
  links: { label: string; href: string }[];
  contributions: {
    title: string;
    points: string[];
  }[];
  troubleshooting: {
    problem: string;
    cause: string;
    solution: string;
  }[];
};

/* ---------- Skills (visualized as categorized proficiency bars) ---------- */
export type SkillGroup = {
  category: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    category: "State & Data",
    items: [
      { name: "TanStack Query", level: 85 },
      { name: "Jotai", level: 75 },
      { name: "react-hook-form", level: 80 },
      { name: "Axios", level: 80 },
    ],
  },
  {
    category: "Collaboration & Tools",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Turborepo", level: 72 },
      { name: "Figma", level: 70 },
      { name: "코드 리뷰 · 협업", level: 90 },
    ],
  },
];

/* ---------- Timeline (visualized as a yearly gantt chart) ---------- */
export type TimelineItem = {
  name: string;
  kind: "project" | "side" | "activity";
  start: number; // year (can be fractional, e.g. 2025.5)
  end: number;
  note: string;
};

export const timelineRange = { from: 2022, to: 2026 };

export const timeline: TimelineItem[] = [
  {
    name: "Hello, GSM",
    kind: "project",
    start: 2022,
    end: 2026.4,
    note: "v1 ~ v2 유지보수 · 기능 개선",
  },
  {
    name: "프론트엔드 스터디",
    kind: "activity",
    start: 2025.5,
    end: 2026.25,
    note: "교내 주간 발표 스터디",
  },
  {
    name: "아이디어 페스티벌",
    kind: "activity",
    start: 2025.55,
    end: 2025.99,
    note: "최우수상 (1위)",
  },
  {
    name: "EveryGSM",
    kind: "side",
    start: 2025.95,
    end: 2026.3,
    note: "교내 프로젝트 관리 플랫폼",
  },
  {
    name: "Ready, GSM",
    kind: "project",
    start: 2026.3,
    end: 2026.6,
    note: "학과체험 · 입학설명회 신청",
  },
];

export const projects: Project[] = [
  {
    name: "Hello, GSM",
    period: "2022(v1) ~ 2026(v2)",
    summary: "광주소프트웨어마이스터고등학교 입학 지원 웹 서비스",
    description:
      "지원서 작성부터 합격자 발표 확인까지 입학 지원 전 과정을 간편하게 제공하는 서비스입니다. 매년 인수인계를 기반으로 프론트엔드 유지보수 및 기능 개선에 기여했으며, 실제 학교 선생님들의 요구사항을 반영해 입학 전형 과정에 맞게 서비스 동작을 보완했습니다.",
    metrics: [
      { label: "페이지 뷰", value: "17,000+" },
      { label: "사용자 수", value: "1,800명" },
      { label: "운영 기간", value: "2022 ~ 2026" },
    ],
    stack: ["React", "Next.js", "TypeScript", "Turborepo"],
    links: [
      { label: "Live", href: "https://www.hellogsm.kr/" },
      {
        label: "GitHub",
        href: "https://github.com/themoment-team/HelloGSM-client-26",
      },
    ],
    contributions: [
      {
        title: "원서 제출 전 미리보기 기능 구현",
        points: [
          "기존 API에 preview 파라미터를 추가해 미리보기 데이터를 분리하고 서버 fetch 함수와 커스텀 훅을 리팩터링했습니다.",
          "PreviewOneseoType을 정의해 제출 전/후 상태를 타입 레벨에서 분리하고 안정성을 확보했습니다.",
          "/print?preview=true 기반 미리보기 페이지와 워터마크 배너를 구성하고, client일 때만 버튼이 노출되도록 admin 화면과 분리했습니다.",
          "preview 여부를 query key에 포함하고 staleTime: 0을 설정해 React Query 캐시 충돌을 해결했습니다.",
        ],
      },
      {
        title: "학생 인적사항 수정 기능 구현",
        points: [
          "이름·생년월일·성별 필드를 read-only에서 편집 가능한 form 필드로 전환하고, 생년월일은 연/월/일 Select를 조합해 YYYY-MM-DD로 반영했습니다.",
          "admin의 인적사항 수정을 memberId 기반의 별도 엔드포인트로 분리해 client와의 충돌을 방지했습니다.",
          "client/admin용 커스텀 훅을 각각 추가하고, 원서 제출 시 인적사항을 먼저 저장한 뒤 데이터를 전송하도록 순서를 정리했습니다.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "미리보기 API에 성적·출결 필드 누락",
        cause:
          "미리보기 API 응답에 calculatedScore, absentDaysCount가 없어 렌더링 중 런타임 에러 발생",
        solution:
          "임시로 optional + optional chaining 적용 후, API 안정화 시점에 필수 타입으로 엄격하게 재정의",
      },
      {
        problem: "미리보기에 인적사항 변경 미반영",
        cause:
          "handlePreviewPrint에서 patchPersonalInfo 없이 postTempStorage만 호출",
        solution:
          "제출 흐름과 동일하게 patchPersonalInfo를 먼저 호출한 뒤 postTempStorage 호출",
      },
      {
        problem: "admin 화면에 미리보기 버튼 노출",
        cause: "StepBar가 handlePreviewPrint prop 유무와 무관하게 버튼 렌더링",
        solution:
          "prop이 없으면 버튼을 렌더링하지 않고, client일 때만 prop을 전달하도록 분리",
      },
      {
        problem: "1-1학기 교과 성적 빗금 미표시",
        cause: "미리보기 모드에서 빗금 표시 조건이 적용되지 않음",
        solution: "빗금 조건에 key === '1_1' 조건을 명시적으로 추가",
      },
      {
        problem: "인쇄 시 토스트 함께 출력",
        cause: "화면의 토스트 알림이 인쇄 영역에 포함됨",
        solution: "인쇄 스타일에 print:hidden을 적용해 토스트 숨김 처리",
      },
    ],
  },
  {
    name: "Ready, GSM",
    period: "2026.4 ~",
    summary: "학과체험 및 입학설명회 신청 서비스",
    description:
      "광주소프트웨어마이스터고등학교 학과체험 및 입학설명회 신청을 위한 서비스로, 프로그램 탐색부터 신청 완료까지 전 과정을 직관적인 사용자 경험으로 제공하는 데 초점을 두었습니다.",
    stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/themoment-team/readygsm-front",
      },
    ],
    contributions: [
      {
        title: "Google / Kakao OAuth 2.0 소셜 로그인 구현",
        points: [
          "provider별 OAuth 인가 URL을 생성하고 sessionStorage에 저장한 뒤 리다이렉트하는 useLogin 훅과 유틸 함수를 entities/auth로 분리했습니다.",
          "/oauth/callback 페이지에서 code와 provider를 읽어 로그인을 처리하고, role 기반으로 페이지를 분기(ADMIN/ROOT → /admin)하도록 구성했습니다.",
          "useRef 플래그로 React StrictMode의 useEffect 이중 호출에 따른 중복 로그인 요청을 방지했습니다.",
          "axios에 withCredentials를 추가해 쿠키 기반 인증을 적용하고, UserRoleType과 어드민 판별 로직(checkIsAdmin)을 일원화했습니다.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "StrictMode 이중 호출로 중복 로그인 요청",
        cause:
          "개발 환경의 StrictMode로 useEffect가 두 번 실행되어 콜백 시 로그인 API 중복 호출",
        solution: "useRef로 called 플래그를 두어 API가 단 한 번만 실행되도록 방지",
      },
      {
        problem: "유저 정보 조회 실패 미처리",
        cause: "콜백 페이지의 fetchQuery 실패 케이스에 대한 처리가 없음",
        solution: "실패 시 catch 블록에서 메인 페이지(/)로 리다이렉트하도록 예외 처리",
      },
      {
        problem: "어드민 role 확인 로직 중복",
        cause: "ADMIN/ROOT 판별 조건이 여러 컴포넌트에 분산되어 유지보수 어려움",
        solution: "checkIsAdmin 유틸 함수로 추출해 entities/user에서 공통 참조",
      },
      {
        problem: "OAuth 응답 코드 불일치",
        cause: "Google은 204, Kakao는 200을 반환하고 Kakao 세션이 내려오지 않음",
        solution: "프론트 정상 동작을 확인 후 재현 조건을 정리해 서버팀에 공유·리포트",
      },
    ],
  },
];

export type SideProject = {
  name: string;
  period: string;
  summary: string;
  description: string;
  highlight: {
    title: string;
    body: string;
    link?: { label: string; href: string };
  };
};

export const sideProjects: SideProject[] = [
  {
    name: "EveryGSM",
    period: "2025.12 ~ 2026.04",
    summary: "교내 프로젝트 통합 관리 플랫폼",
    description:
      "교내 프로젝트를 통합적으로 관리하고, 학생들이 직접 프로젝트를 등록하고 운영할 수 있도록 지원하는 플랫폼입니다. 자율적인 프로젝트 참여와 협업을 활성화하는 것을 목표로 합니다.",
    highlight: {
      title: "오픈소스 이슈 분석 및 해결안 제시 — react-hook-form",
      body: "react-hook-form 7.71.0에서 발생한 Controller 충돌 버그를 재현하고, 7.70.0과의 diff를 추적해 새로 분리된 HookFormControlContext가 메모이제이션되지 않아 Context 업데이트 타이밍이 어긋나는 점을 원인으로 분석했습니다. useMemo를 적용해 참조 안정성을 보장하는 해결안을 제안하고 이슈에 공유했습니다.",
      link: {
        label: "Issue #13272",
        href: "https://github.com/react-hook-form/react-hook-form/issues/13272",
      },
    },
  },
];

export const activities = [
  {
    title: "2025 아이디어 페스티벌 최우수상 (1위)",
    period: "2025.07 ~ 2025.12",
    body: "교내에서 매년 개최되는 프로젝트 발표 대회로, 교사 심사를 통해 기획력과 기술 완성도를 평가받는 행사에서 최우수상을 수상했습니다.",
  },
  {
    title: "프론트엔드 스터디",
    period: "2025.06 ~ 2026.03",
    body: "6년간 활동 중인 교내 프론트엔드 스터디로, 매주 자유로운 주제에 대해 각자 학습한 내용을 발표하며 운영되고 있습니다.",
  },
];
