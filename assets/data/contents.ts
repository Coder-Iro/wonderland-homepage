type color =
  | 'green'
  | 'blue'
  | 'red'
  | 'orange'
  | 'grey'
  | 'cyan'
  | 'yellow'
  | 'pink'
  | 'normal'
  | 'superior'
  | 'epic'
  | 'mysterious'
  | 'wonderous'
  | 'npc'
  | 'mob';

export interface Content {
  title: string;
  id: string;
  color: color;
  img?: boolean;
  //  description: string;
  //  subcontents?: SubContent[];
}

interface SubContent {
  title: string;
  color?: color;
  picture?: boolean;
  description: string;
}

export const contents: Content[] = [
  { title: '💳 경제 (мега)', color: 'green', id: 'economy', img: true },
  { title: '🧊 특수 화폐 (пемо)', color: 'cyan', id: 'nemo' },
  { title: '👀 서버 인공지능', color: 'cyan', id: 'nano' },
  { title: '📦 우편함', color: 'cyan', id: 'post' },
  { title: '📋 퀘스트', color: 'cyan', id: 'quest' },
  { title: '🏃🏻 입체기동', color: 'cyan', id: 'harpoon' },
  { title: '🏄🏻 슬라이딩', color: 'cyan', id: 'sliding' },
  { title: '⚓️ 항해', color: 'cyan', id: 'voyage' },
  { title: '🌗️ 천국과 지옥', color: 'cyan', id: 'aethernether' },
  { title: '⚙️ 벼려내기', color: 'orange', id: 'items' },
  { title: '🏹 아이템', color: 'orange', id: 'smithing' },
  { title: '📊 특성', color: 'orange', id: 'stats' },
  { title: '🌀 돌파', color: 'orange', id: 'limitbreak' },
  { title: '🧑‍🤝‍🧑 파티 플레이', color: 'orange', id: 'party' },
  { title: '🧙 전투와 기술', color: 'red', id: 'battle' },
  { title: '🏴‍☠️ 점령지', color: 'red', id: 'territory' },
  { title: '🏯 던전', color: 'red', id: 'dungeon' },
  { title: '⚔️ PvP', color: 'red', id: 'pvp' },
  { title: '💀 몬스터', color: 'red', id: 'monster' },
  { title: '👹 보스 몬스터', color: 'red', id: 'boss' },
  { title: '🌵 야생', color: 'blue', id: 'coma' },
  { title: '🏠 건축', color: 'blue', id: 'building' },
  { title: '🎣 낚시', color: 'blue', id: 'coma' },
  { title: '🛒 장터', color: 'blue', id: 'market' },
  { title: '💎 보물상자', color: 'blue', id: 'coma' },
  { title: '🌏 묻혀있는 보물', color: 'blue', id: 'treasure' },
  { title: '🎲 미니게임', color: 'blue', id: 'minigame' },
  { title: '🏨 여관 및 호텔', color: 'blue', id: 'hotel' },
  { title: '🔌 공학 장치', color: 'blue', id: 'engineering' },
  { title: '🧭 탐험가의 지도', color: 'blue', id: 'explorersmap' },
  { title: '♻️ 형상변환', color: 'blue', id: 'transmogrify' },
];
