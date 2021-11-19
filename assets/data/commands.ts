export interface Command {
  readonly name: string;
  readonly kor?: string;
  readonly desc: string;
}

export interface CommandGroup {
  readonly title: string;
  readonly items: Command[];
}

export const commands: CommandGroup[] = [
  {
    title: '도움이 필요할 때',
    items: [
      {
        name: '/help',
        kor: '/도움',
        desc: '도움말 보기',
      },
      {
        name: '/sos',
        kor: '/호출',
        desc: '운영자 긴급호출 서비스 요청',
      },
    ],
  },
  {
    title: '특수 조작법',
    items: [
      {
        name: '웅크리기 <em>+</em> F',
        desc: '메뉴 열기',
      },
      {
        name: '웅크리기 <em>+</em> F F',
        desc: '내 정보 보기',
      },
      {
        name: '웅크리고 플레이어 우클릭',
        desc: '플레이어 정보 보기',
      },
      {
        name: '달리기 도중 웅크리기',
        desc: '슬라이딩',
      },
      {
        name: '웅크리기 <em>+</em> 점프',
        desc: '입체기동',
      },
      {
        name: '점프 <em>x 2</em>',
        desc: '토지 내에서의 비행',
      },
      {
        name: '웅크리기 <em>x 3</em>',
        desc: '건축모드 켜고 끄기',
      },
      {
        name: 'F3 <em>+</em> G',
        desc: '토지 범위 표시',
      },
    ],
  },
  {
    title: '채팅 기본 명령어',
    items: [
      {
        name: '/1 <em>할말</em>',
        desc: '서버 <strong class="cyan">&lt;전체&gt;</strong> 사람들에게 채팅',
      },
      {
        name: '/2 <em>할말</em>',
        desc: '내가 속한 <strong class="yellow">&lt;월드&gt;</strong> 내의 사람들에게 채팅',
      },
      {
        name: '/3 <em>할말</em>',
        desc: '내 주변 <strong class="green">&lt;지역&gt;</strong> 150블록 안의 사람들에게 채팅',
      },
      {
        name: '/p <em>할말</em>',
        kor: '/ㅔ <em>할말</em>',
        desc: '<strong class="orange">&lt;파티&gt;</strong> 채팅',
      },
      {
        name: '/w <em>아이디 할말</em>',
        kor: '/ㅈ <em>아이디 할말</em>',
        desc: '<em>아이디</em> 에게 <strong class="pink">&lt;귓속말&gt;</strong>',
      },
      {
        name: '/r <em>할말</em>',
        kor: '/ㄱ <em>할말</em>',
        desc: '가장 최근 <strong class="pink">&lt;귓속말&gt;</strong> 에 답장',
      },
    ],
  },
  {
    title: '채팅 부가 명령어',
    items: [
      {
        name: '@<em>아이디</em>',
        desc: '<em>아이디</em> 호출',
      },
      {
        name: '/mute <em>아이디</em>',
        kor: '/차단 <em>아이디</em>',
        desc: '<em>아이디</em> 차단',
      },
      {
        name: '/link',
        kor: '/링크',
        desc: '손에 든 아이템의 정보를 채팅창에 링크',
      },
      {
        name: '/dice',
        kor: '/주사위',
        desc: '지역 채팅으로 주사위를 굴림',
      },
    ],
  },
  {
    title: '파티 명령어',
    items: [
      {
        name: '/invite <em>아이디</em>',
        kor: '/초대 <em>아이디</em>',
        desc: '<em>아이디</em> 를 파티로 초대',
      },
      {
        name: '/banish <em>아이디</em>',
        kor: '/추방 <em>아이디</em>',
        desc: '<em>아이디</em> 를 파티에서 추방',
      },
      {
        name: '/leader <em>아이디</em>',
        kor: '/파티장 <em>아이디</em>',
        desc: '<em>아이디</em> 를 파티장으로 임명',
      },
      {
        name: '/leave',
        kor: '/탈퇴',
        desc: '파티 탈퇴',
      },
    ],
  },
  {
    title: '토지 명령어',
    items: [
      {
        name: '/list <em>페이지</em>',
        kor: '/목록 <em>페이지</em>',
        desc: '내 토지 목록 보기',
      },
      {
        name: '/add <em>아이디</em>',
        kor: '/추가 <em>아이디</em>',
        desc: '<em>아이디</em> 에게 현재 토지 권한을 추가',
      },
      {
        name: '/addall <em>아이디</em>',
        kor: '/모두추가 <em>아이디</em>',
        desc: '<em>아이디</em> 에게 내 모든 토지 권한을 추가',
      },
      {
        name: '/remove <em>아이디</em>',
        kor: '/제거 <em>아이디</em>',
        desc: '현재 토지에서 <em>아이디</em> 의 권한을 제거',
      },
      {
        name: '/removeall <em>아이디</em>',
        kor: '/모두제거 <em>아이디</em>',
        desc: '내 모든 토지에서 <em>아이디</em> 의 권한을 제거',
      },
    ],
  },
  {
    title: '기타 명령어',
    items: [
      {
        name: '/register <em>암호</em>',
        kor: '/등록 <em>암호</em>',
        desc: '웹사이트 로그인에 사용할 비밀번호를 등록합니다.',
      },
      {
        name: '/pass <em>이전암호</em> <em>새암호</em>',
        kor: '/암호 <em>이전암호</em> <em>새암호</em>',
        desc: '비밀번호를 변경합니다.',
      },
      {
        name: '/guide <em>x y z</em>',
        kor: '/가이드 <em>x y z</em>',
        desc: '해당 좌표로 향하는 방향 안내',
      },
      {
        name: '/guide <em>아이디</em>',
        kor: '/가이드 <em>아이디</em>',
        desc: '<em>아이디</em> 의 위치로 향하는 방향 안내',
      },
      {
        name: '/lag',
        kor: '/렉',
        desc: '서버의 렉 상태 확인',
      },
    ],
  },
];
