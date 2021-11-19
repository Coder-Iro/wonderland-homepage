export interface Rule {
  title: string;
  subtitle: string;
  content: string;
}

export const rules: Rule[] = [
  {
    title: '버그 제보',
    subtitle: '버그를 악용하지 않고 운영자에게 제보했을 경우',
    content: `
    버그 심각성에 따라 Good User 로 승급 및 버그제보 보상 제공
    악용하다 발각되면 추방
    `,
  },
  {
    title: '불균형 조장',
    subtitle: '엑스레이, 미니맵, 오토, 버그, 모드 등 부정한 이득을 취한 경우',
    content: '추방',
  },
  {
    title: '서버 렉 유발',
    subtitle: '너무 많은 가축, 탈것을 모아놓거나 레드스톤 무한회로를 만든 경우',
    content: `
    투옥 및 재범시 추방
    무한반복되는 인서터를 설치한 것도 처벌`,
  },
  {
    title: '용암, 물, 불 등을 사용한 테러',
    subtitle: '타인에게 고의적인 피해를 끼치는 경우',
    content: '투옥 및 재범시 추방',
  },
  {
    title: '재산 피해',
    subtitle: '타인의 보호구역 내의 가축을 죽이거나 재산을 훼손 / 훔친 경우',
    content: `
    의견 조율로 해결되지 않을 경우 투옥 및 재범시 추방
    Coma 내에서 일어난 재산 피해는 처벌하지 않습니다.
    `,
  },
  {
    title: '괴롭힘',
    subtitle: '특정 대상에게 내뱉은 욕설, 악의성 도배, 괴롭힘 등이 발생한 경우',
    content: `
    관리자 판단 후 투옥 또는 추방
    재미로 장난을 친 것이라도, 상대방은 큰 스트레스를 받을 수 있습니다.
    `,
  },
  {
    title: '기타 분쟁',
    subtitle: '사람과 사람간의 다양한 문제들은 검토 후 조치',
    content:
      '타인을 불쾌하게 하는 아이디, 인신공격성 발언 등 조항에 명시되어 있지 않더라도 관리자가 판단하기에 문제가 있는 경우 경고 혹은 추방',
  },
];
