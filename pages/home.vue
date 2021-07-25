<template>
  <div>
    <HeaderBar>Wonderland Server</HeaderBar>
    <article>
      <client-only>
        <youtube
          id="player"
          :player-vars="{
            listType: 'playlist',
            list: 'PL-kUY2NcroAxDrAnUyEaeog7BX8Qj52uh',
          }"
          host="https://www.youtube-nocookie.com"
          player-height="390"
          player-width="640"
          video-id="PgIzZfS9RP0"
        />
      </client-only>
      <div class="bar" />
      <div class="info">
        <div class="section">
          <div class="box box-alert">
            <h3>
              최근알림
              <router-link to="/notice/">
                더보기 &gt;&gt;
              </router-link>
            </h3>
            <div class="str">
              <br>
              <strong
                class="red"
              ># Wonderland Server Season II 정식 업데이트</strong><br>
              <br>
              - 서버 웹사이트가 리뉴얼 되었습니다.<br>
              <br>
              - 서버 로고가 변경됐습니다.<br>
              <br>
              - 서버 웹사이트 아이콘이 변경됐습니다.<br>
              <br>
              - 명령어가 시즌2에 맞게 안내됩니다.<br>
              <br>
              - 컨텐츠 사전에 대부분의 컨텐츠 설명이 업데이트 됐습니다.<br>
              <br>
              - 디스코드 메뉴가 추가됐습니다.<br>
              <br>
              - 마인리스트의 서버 홍보 이미지가 변경됐습니다.
            </div>
            <span class="date">2020-10-25 15:15:30</span>
          </div>
        </div>

        <div class="section">
          <div class="box">
            <h3>Wonderland Server 소개</h3>
            <dl>
              <dt><strong class="red">서버사양</strong></dt>
              <dd><strong class="green">OS</strong> 64bit CentOS ver 6.5</dd>
              <dd>
                <strong class="green">CPU</strong> Intel Xeon E3-1230 3.30 GHz
              </dd>
              <dd>
                <strong class="green">RAM</strong> 18GB
                <strong class="green">HDD</strong> 500GB
              </dd>
            </dl>
            <dl>
              <dt>접속주소</dt>
              <dd><strong class="orange">wonderland-server.net</strong></dd>
            </dl>
            <dl>
              <dt>게임버전</dt>
              <dd>1.16.5</dd>
            </dl>
            <dl>
              <dt>관리자</dt>
              <dd><strong class="red">Warak</strong> (1인 관리자)</dd>
            </dl>
            <dl>
              <dt>운영시간</dt>
              <dd>24시간</dd>
            </dl>
            <dl>
              <dt>장르</dt>
              <dd>스토리 RPG / 경제 / 야생 / 건축 / PvP / 미니게임</dd>
            </dl>
            <dl>
              <dt>접속허용</dt>
              <dd>정품만 가능</dd>
            </dl>
            <dl>
              <dt>수용인원</dt>
              <dd>40명</dd>
            </dl>
            <dl>
              <dt>월드</dt>
              <dd>Prologue, Wonderland, Normaland, Coma</dd>
            </dl>
            <dl>
              <dt>PvP</dt>
              <dd>PvP 구역에서만 가능</dd>
            </dl>
            <dl>
              <dt>난이도</dt>
              <dd>어려움</dd>
            </dl>
            <dl>
              <dt>게임모드</dt>
              <dd>서바이벌</dd>
            </dl>
            <dl>
              <dt>리소스팩</dt>
              <dd>서버 리소스팩 필수</dd>
            </dl>
          </div>
        </div>

        <div class="clear" />

        <div class="section">
          <div class="box">
            <h3>기본설정</h3>
            <ul>
              <li>전체, 월드, 지역, 귓속말로 구분되는 채팅 시스템 지원</li>
              <li>죽었을 때 소지품과 경험치를 잃어버리지 않음</li>
              <li>별도의 경험치 시스템, 마나 시스템 존재</li>
              <li>레벨업을 통해 끌어올릴 수 있는 9개의 특성 존재</li>
              <li>크리퍼 / 엔더맨 / 가스트 / TNT 가 블록에 피해를 주지 않음</li>
              <li>텔레포트(<span class="green">/tp</span>) 불가능</li>
              <li>
                <span class="green">에메랄드</span>를 화폐로 사용하며, 은행계좌
                사용 가능
              </li>
              <li>파티플레이 지원</li>
              <li>치트/테러 방지 시스템 사용</li>
              <li>레벨에 따라 능력치가 증가하는 성장 시스템</li>
              <li>
                <span class="red">비 / 눈</span> 이 내리지 않으며
                <span class="red">눈 / 얼음</span> 이 녹지 않음
              </li>
              <li>좀비가 나무문을 부수지 못함</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="box">
            <h3>컨텐츠</h3>
            <ul>
              <li>독자적으로 개발된 총기 / 마법 플러그인 존재</li>
              <li>
                매주 월요일마다 최신버전의 맵으로 리셋되는
                <span class="red">Coma</span> 월드 존재
              </li>
              <li>청크(16x16) 별로 토지 구매 가능한 부동산 시스템</li>
              <li>월드에딧 처럼 자동건축을 도와주는 시스템 존재</li>
              <li>다양한 능력을 가진 무기/방어구 아이템 존재</li>
              <li>2시간마다 열리는 퀴즈 이벤트 참여 가능</li>
              <li>34종에 이르는 어류가 포함된 특수 낚시 시스템 존재</li>
              <li>PvE 지역 점령 및 방어전 플레이 가능</li>
              <li>아이템 분해 및 제련 시스템 존재</li>
              <li>매번 다르게 공략해야 하는 독자적인 던전 시스템 존재</li>
            </ul>
          </div>
        </div>

        <div class="clear" />
      </div>
    </article>
    <FooterBar />
  </div>
</template>

<script>
import meta from '../assets/data/metadata.json'
export default {
  name: 'Home',
  data () {
    return {
      url: `${meta.protocol}://${meta.domain}${this.$nuxt.$route.path}`
    }
  },
  head () {
    return {
      meta: [
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'twitter:url', property: 'twitter:url', content: this.url }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: #f16567;
}

::v-deep #player {
  max-width: 600px;
  margin: 10px auto 30px auto;
  position: relative;
  z-index: 0;
  min-height: 200px;

  iframe {
    width: 100%;
    height: 350px;
    border: 0;
  }
}
@media (max-width: 700px), (orientation: portrait) {
  ::v-deep #player {
    max-width: 100%;
    padding: 0;
    iframe {
      width: 100%;
      height: 330px;
      border: 0;
    }
    .thumb {
      width: 100%;
      position: relative;
      h3 {
        display: none;
      }
      ul {
        padding: 0;
        width: 100%;
        height: 115px;
        white-space: nowrap;
        li {
          border: 0;
          margin: 0;
          width: 25%;
          height: 90px;
          display: inline-block;
          overflow: hidden;
        }
        img {
          width: 100%;
        }
        .title, .date {
          display: none;
        }
      }
    }
  }
}
.info {
  max-width: 900px;
  margin: auto;
  clear: both;

  .box {
    min-height: 350px;
    overflow: auto;
    margin-right: 20px;

    h3 {
      margin-bottom: 10px;
      color: #47a;
      font-size: 120%;
      padding-bottom: 10px;
      border-bottom: 1px dashed #ddd;
    }

    dl {
      padding: 2px 0;
      margin: 8px 0;
      position: relative;
    }

    dt {
      width: 70px;
      border-right: 2px solid #ccc;
      position: absolute;
      left: 2px;
      top: 2px;
      z-index: 1;
    }

    dd {
      padding-left: 85px;
    }

    li {
      list-style-type: square;
      list-style-position: inside;
      padding: 5px 0;
    }
  }

  .section {
    width: 50%;
    float: left;

    .box-alert {
      min-height: 420px;

      h3 {
        border-color: #f16567;
        color: #000;

        a {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 11px;
          font-weight: normal;
        }
      }

      .str {
        max-height: 350px;
        overflow: auto;
      }

      .date {
        font-weight: normal;
        font-size: 11px;
        margin-top: 10px;
        display: block;
        color: #47a;
      }
    }
  }
}
@media (max-width: 700px), (orientation: portrait) {
  .info {
    .section {
      width: 100%;
    }
    .box {
      margin-right: 0;
    }
  }
}
</style>
