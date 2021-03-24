<template>
  <div>
    <HeaderBar>RULES</HeaderBar>
    <article>
      <div class="box box-alert">
        <div class="alert">
          <p class="icon icon-alert">주의</p>
          <p>
            서버규칙을 어긴 경우 경고 조치 되며 1회 이상 경고 후에는 서버에서
            추방될 수 있습니다.<br /><br />
          </p>
          <p></p>
          <p>
            단, PvP 구역 내에서의 캐릭터 싸움으로 인해 생긴 문제는 예외이며,
          </p>
          <p>Coma 내에서의 재산 훼손 / 절도는 처벌하지 않습니다.</p>
        </div>
      </div>

      <div class="box rule1">
        <div class="img"></div>
        <div class="text">
          <h3>버그 제보</h3>
          <strong>버그를 악용하지 않고 운영자에게 제보했을 경우</strong>
          <p>버그 심각성에 따라 Good User 로 승급 및 버그제보 보상 제공</p>
          <p class="red">악용하다 발각되면 추방</p>
        </div>
      </div>

      <div class="box rule2">
        <div class="img"></div>
        <div class="text">
          <h3>불균형 조장</h3>
          <strong
            >엑스레이, 미니맵, 오토, 버그, 모드 등 부정한 이득을 취한
            경우</strong
          >
          <p>추방</p>
        </div>
      </div>

      <div class="box rule3">
        <div class="img"></div>
        <div class="text">
          <h3>서버 렉 유발</h3>
          <strong
            >너무 많은 가축, 탈것을 모아놓거나 레드스톤 무한회로를 만든
            경우</strong
          >
          <p>투옥 및 재범시 추방</p>
          <p class="red">무한반복되는 인서터를 설치한 것도 처벌</p>
        </div>
      </div>

      <div class="box rule4">
        <div class="img"></div>
        <div class="text">
          <h3>용암, 물, 불 등을 사용한 테러</h3>
          <strong>타인에게 고의적인 피해를 끼치는 경우</strong>
          <p>투옥 및 재범시 추방</p>
        </div>
      </div>

      <div class="box rule5">
        <div class="img"></div>
        <div class="text">
          <h3>재산 피해</h3>
          <strong
            >타인의 보호구역 내의 가축을 죽이거나 재산을 훼손 / 훔친
            경우</strong
          >
          <p>의견 조율로 해결되지 않을 경우 투옥 및 재범시 추방</p>
          <p class="red">Coma 내에서 일어난 재산 피해는 처벌하지 않습니다.</p>
        </div>
      </div>

      <div class="box rule6">
        <div class="img"></div>
        <div class="text">
          <h3>괴롭힘</h3>
          <strong
            >특정 대상에게 내뱉은 욕설, 악의성 도배, 괴롭힘 등이 발생한
            경우</strong
          >
          <p>관리자 판단 후 투옥 또는 추방</p>
          <p class="red">
            재미로 장난을 친 것이라도, 상대방은 큰 스트레스를 받을 수 있습니다.
          </p>
        </div>
      </div>

      <div class="box rule7">
        <div class="img"></div>
        <div class="text">
          <h3>기타 분쟁</h3>
          <strong>사람과 사람간의 다양한 문제들은 검토 후 조치</strong>
          <p>
            타인을 불쾌하게 하는 아이디, 인신공격성 발언 등 조항에 명시되어 있지
            않더라도<br />관리자가 판단하기에 문제가 있는 경우 경고 혹은 추방
          </p>
        </div>
      </div>
    </article>
    <FooterBar />
  </div>
</template>

<script>
import meta from '../assets/data/metadata.json'
export default {
  name: 'Rules',
  data() {
    return {
      url: `${meta.protocol}://${meta.domain}${this.$nuxt.$route.path}`,
      title: `서버 규칙 | ${meta.title}`,
    }
  },
  head() {
    return {
      meta: [
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'twitter:url', property: 'twitter:url', content: this.url },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  clear: both;
  min-height: 110px;

  .text {
    margin-left: 200px;

    h3 {
      display: block;
      height: 25px;
      line-height: 25px;
      color: #47a;
      font-size: 15px;
    }

    strong {
      display: block;
      margin: 8px 0;
    }
  }
}

.box-alert {
  clear: both;
  min-height: 110px;
  text-align: center;
  border-color: #e82;
  background-color: #f5f5f5;
  font-weight: bold;
  line-height: 160%;
}

.icon-alert {
  padding: 5px 0 5px 30px;
  height: 25px;
  line-height: 25px;
}

.img {
  width: 183px;
  height: 110px;
  float: left;
  background-image: url(../assets/img/page-rules.jpg);
  border-radius: 3px;
}

.rule1 .img {
  background-position: 0 0;
}

.rule2 .img {
  background-position: 0px -110px;
}

.rule3 .img {
  background-position: 0px -220px;
}

.rule4 .img {
  background-position: 0px -330px;
}

.rule5 .img {
  background-position: 0px -440px;
}

.rule6 .img {
  background-position: 0px -550px;
}

.rule7 .img {
  background-position: 0px -660px;
}
</style>
