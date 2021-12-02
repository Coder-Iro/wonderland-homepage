interface Introduce {
  title: string;
  content: string;
}

export const introduce: Introduce[] = [
  {
    title: '[RED]서버사양[/RED]',
    content: `[GREEN]OS[/GREEN] Windows Server 2022 Datacenter 64bit
      [GREEN]CPU[/GREEN] AMD Ryzen 9 5900X 3.70Ghz
      [GREEN]RAM[/GREEN] 32GB [GREEN]SSD[/GREEN] 1TB M.2 R7,300M W6,900M`,
  },
  { title: '접속주소', content: '[ORANGE]wonderland-server.net[/ORANGE]' },
  { title: '게임버전', content: '1.17.1' },
  { title: '관리자', content: '[RED]Warak[/RED] (1인 관리자)' },
  { title: '운영시간', content: '24시간' },
  {
    title: '장르',
    content: '스토리 RPG / 경제 / 야생 / 건축 / PvP / 미니게임',
  },
  { title: '접속허용', content: '정품만 가능' },
  { title: '수용인원', content: '100명' },
  { title: '월드', content: 'Prologue, Wonderland, Normaland, Coma' },
  { title: 'PvP', content: 'PvP 구역에서만 가능' },
  { title: '난이도', content: '어려움' },
  { title: '게임모드', content: '서바이벌' },
  { title: '리소스팩', content: '서버 리소스팩 필수' },
];
