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

interface Content {
  title: string;
  id: string;
  color: color;
  picture?: boolean;
  description: string;
  subcontents?: SubContent[];
}

interface SubContent {
  title: string;
  color?: color;
  picture?: boolean;
  description: string;
}
/*
💳 경제 (мега)
🧊 특수 화폐 (пемо)
👀 서버 인공지능
📦 우편함
📋 퀘스트
🏃🏻 입체기동
🏄🏻 슬라이딩
⚓️ 항해
🌗️ 천국과 지옥
🏹 아이템
⚙️ 벼려내기
📊 특성
🌀 돌파
🧑‍🤝‍🧑 파티 플레이
🧙 전투와 기술
🏴‍☠️ 점령지
🏯 던전
⚔️ PvP
💀 몬스터
👹 보스 몬스터
🌵 야생
🏠 건축
🎣 낚시
🛒 장터
💎 보물상자
🌏 묻혀있는 보물
🎲 미니게임
🏨 여관 및 호텔
🔌 공학 장치
🧭 탐험가의 지도
♻️ 형상변환
*/
