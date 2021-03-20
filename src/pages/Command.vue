<template>
  <HeaderBar>COMMANDS</HeaderBar>
  <article>
    <div class="page-command">
      <div v-for="commands in commandlist" class="box">
        <h3>{{ commands.title }}</h3>
        <dl v-for="command in commands.list">
          <dt>{{ command.name }}</dt>
          <dt class="kor">{{ command.kor }}</dt>
          <dd>{{ command.info }}</dd>
        </dl>
      </div>
    </div>
    <!--    <div class="page-command">
          <div class="box">
            <h3>도움이 필요할 때</h3>
            <dl>
              <dt>/help</dt>
              <dt class="kor">/도움</dt>
              <dd>도움말을 봅니다.</dd>
            </dl>
            <dl>
              <dt>/sos</dt>
              <dt class="kor">/호출</dt>
              <dd>운영자 긴급호출 서비스를 요청합니다.</dd>
            </dl>
          </div>

          <div class="box">
            <h3>기본 명령어</h3>
            <dl>
              <dt><strong class="cyan">/spawn</strong></dt>
              <dt class="kor"><strong class="cyan">/스폰</strong></dt>
              <dd>5초동안 움직이지 않는다면, 스폰 지역으로 순간이동합니다</dd>
            </dl>
            <dl>
              <dt><strong class="cyan">/sethome</strong></dt>
              <dt class="kor"><strong class="cyan">/셋홈</strong></dt>
              <dd>현재 본인이 서있는 곳을 집으로 지정합니다.</dd>
            </dl>
            <dl>
              <dt><strong class="cyan">/home</strong></dt>
              <dt class="kor"><strong class="cyan">/홈</strong></dt>
              <dd>5초동안 움직이지 않는다면, 본인의 집으로 순간이동합니다.</dd>
            </dl>
            <dl>
              <dt>/register <em>암호</em></dt>
              <dt class="kor">/등록 <em>암호</em></dt>
              <dd>웹사이트 로그인에 사용할 비밀번호를 등록합니다.</dd>
            </dl>
            <dl class="wordwrap">
              <dt>/password <em>암호 바꿀암호</em></dt>
              <dt class="kor">/암호 <em>암호 바꿀암호</em></dt>
              <dd>비밀번호를 변경합니다.</dd>
            </dl>
            <dl>
              <dt>/tag</dt>
              <dt class="kor">/칭호</dt>
              <dd>칭호를 설정합니다.</dd>
            </dl>
            <dl>
              <dt>/stat <em>(아이디)</em></dt>
              <dt class="kor">/스텟 <em>(아이디)</em></dt>
              <dd>본인 또는 타인의 정보를 봅니다.</dd>
            </dl>
            <dl>
              <dt>/limitbreak</dt>
              <dt class="kor">/돌파</dt>
              <dd>Lv.1 로 돌아가면서 능력의 제한을 끌어올립니다.</dd>
            </dl>
            <dl>
              <dt>/money</dt>
              <dt class="kor">/돈</dt>
              <dd>보유 재산을 확인합니다.</dd>
            </dl>
            <dl>
              <dt>/item</dt>
              <dt class="kor">/아이템</dt>
              <dd>서버에 존재하는 모든 아이템을 살펴봅니다.</dd>
            </dl>
            <dl>
              <dt>/time</dt>
              <dt class="kor">/시간</dt>
              <dd>던전, 필드보스, 이벤트 현황을 확인합니다.</dd>
            </dl>
            <dl>
              <dt>/quest</dt>
              <dt class="kor">/퀘스트</dt>
              <dd>진행중인 퀘스트를 확인합니다.</dd>
            </dl>
            <dl>
              <dt>/guide <em>x y z</em></dt>
              <dt class="kor">/가이드 <em>x y z</em></dt>
              <dd>해당 좌표로 향하는 방향을 안내받습니다.</dd>
            </dl>
            <dl>
              <dt>/show</dt>
              <dt class="kor">/보이기</dt>
              <dd>다른 플레이어들의 모습을 숨기거나 다시 표시합니다.</dd>
            </dl>
          </div>

          <div class="box">
            <h3>소통 명령어</h3>
            <dl>
              <dt>@<em>아이디</em></dt>
              <dd><em>아이디</em> 에게 멘션을 보내고 알림소리를 듣게 합니다.</dd>
            </dl>
            <dl>
              <dt>/1 <em>할말</em></dt>
              <dd>서버 <span style="color: #00a0a0; "><strong>&lt;전체&gt;</strong></span> 의 모든 사람들이 들을 수 있습니다.</dd>
            </dl>
            <dl>
              <dt>/2 <em>할말</em></dt>
              <dd>현재 본인이 속해있는 <strong class="yellow">&lt;월드&gt;</strong> 내의 사람들만 들을 수 있습니다.</dd>
            </dl>
            <dl>
              <dt>/3 <em>할말</em></dt>
              <dd>내 주변 <strong class="green">&lt;지역&gt;</strong> 150블록 안의 사람들만 들을 수 있습니다.</dd>
            </dl>
            <dl>
              <dt>/p <em>할말</em></dt>
              <dt class="kor">/ㅔ <em>할말</em></dt>
              <dd>내 <strong class="orange">&lt;파티&gt;</strong> 멤버들만 들을 수 있습니다.</dd>
            </dl>
            <dl>
              <dt>/w <em>아이디 할말</em></dt>
              <dt class="kor">/ㅈ <em>아이디 할말</em></dt>
              <dd><em>아이디</em> 에게 <span style="color: #ff00ff; "><strong>&lt;귓속말&gt;</strong></span> 을 합니다.</dd>
            </dl>
            <dl>
              <dt>/r <em>할말</em></dt>
              <dt class="kor">/ㄱ <em>할말</em></dt>
              <dd>가장 최근에 받은 <span style="color: #ff00ff; "><strong>&lt;귓속말&gt;</strong></span> 에 대한 답장을 합니다.</dd>
            </dl>
            <dl>
              <dt>/mute <em>아이디</em></dt>
              <dt class="kor">/차단 <em>아이디</em></dt>
              <dd><em>아이디</em> 의 대화를 차단합니다.</dd>
            </dl>
            <dl>
              <dt>/invite <em>아이디</em></dt>
              <dt class="kor">/초대 <em>아이디</em></dt>
              <dd><em>아이디</em> 를 파티로 초대합니다.</dd>
            </dl>
            <dl>
              <dt>/leader <em>아이디</em></dt>
              <dt class="kor">/파티장 <em>아이디</em></dt>
              <dd><em>아이디</em> 를 파티장으로 임명합니다.</dd>
            </dl>
            <dl>
              <dt>/banish <em>아이디</em></dt>
              <dt class="kor">/추방 <em>아이디</em></dt>
              <dd><em>아이디</em> 를 파티에서 추방합니다.</dd>
            </dl>
            <dl>
              <dt>/leave</dt>
              <dt class="kor">/탈퇴</dt>
              <dd>파티를 탈퇴합니다.</dd>
            </dl>
            <dl>
              <dt>/trade <em>아이디</em></dt>
              <dt class="kor">/거래 <em>아이디</em></dt>
              <dd><em>아이디</em> 에게 거래를 요청합니다..</dd>
            </dl>
            <dl>
              <dt>/link</dt>
              <dt class="kor">/링크</dt>
              <dd>현재 손에 들고있는 아이템을 채팅창에 출력합니다.</dd>
            </dl>
            <dl>
              <dt>/dice</dt>
              <dt class="kor">/주사위</dt>
              <dd>주사위 2개를 굴립니다.</dd>
            </dl>
          </div>

          <div class="box">
            <h3>토지 명령어</h3>
            <dl>
              <dt><strong class="cyan">F3 + G</strong></dt>
              <dd>토지의 범위를 표시합니다.</dd>
            </dl>
            <dl>
              <dt><strong class="cyan">Space x 2</strong></dt>
              <dd>토지 내에서 비행 모드를 켜거나 끕니다. <span style="color: gray; ">(초당 마나 5 소모)</span></dd>
            </dl>
            <dl>
              <dt><strong class="cyan">Shift x 3</strong></dt>
              <dd>건설 모드를 켜거나 끕니다. <span style="color: gray; ">(웅크리기를 빠르게 3번 누르세요)</span></dd>
            </dl>
            <dl>
              <dt>/info</dt>
              <dt class="kor">/정보</dt>
              <dd>현재 속해있는 토지의 상세 정보를 봅니다.</dd>
            </dl>
            <dl>
              <dt>/purchase</dt>
              <dt class="kor">/구매</dt>
              <dd>현재 속해있는 토지를 구매합니다. <span style="color: gray; ">(1,000,000 мега 필요)</span></dd>
            </dl>
            <dl>
              <dt>/list</dt>
              <dt class="kor">/목록</dt>
              <dd>본인이 소유한 토지 목록을 봅니다.</dd>
            </dl>
            <dl>
              <dt>/check</dt>
              <dt class="kor">/검사</dt>
              <dd>40m 내에 있는 토지정보를 눈으로 빠르게 확인합니다.</dd>
            </dl>
            <dl>
              <dt>/add <em>아이디</em></dt>
              <dt class="kor">/추가 <em>아이디</em></dt>
              <dd><em>아이디</em> 에게 해당구역의 권한을 줍니다.</dd>
            </dl>
            <dl>
              <dt>/addall <em>아이디</em></dt>
              <dt class="kor">/모두추가 <em>아이디</em></dt>
              <dd><em>아이디</em> 에게 본인 소유의 모든구역의 권한을 줍니다.</dd>
            </dl>
            <dl>
              <dt>/remove <em>아이디</em></dt>
              <dt class="kor">/제거 <em>아이디</em></dt>
              <dd><em>아이디</em> 의 권한을 해당구역에서 제거합니다.앱니다.</dd>
            </dl>
            <dl>
              <dt>/removeall <em>아이디</em></dt>
              <dt class="kor">/모두제거 <em>아이디</em></dt>
              <dd><em>아이디</em> 의 권한을 본인 소유의 모든구역에서 제거합니다.</dd>
            </dl>
            <dl>
              <dt>/transfer <em>아이디</em></dt>
              <dt class="kor">/양도 <em>아이디</em></dt>
              <dd>토지 소유권을 <em>아이디</em> 에게 양도합니다.</dd>
            </dl>
            <dl>
              <dt>/refund</dt>
              <dt class="kor">/환불</dt>
              <dd>토지 소유권을 포기하고 토지금액의 90% 를 환불받습니다.</dd>
            </dl>
          </div>
        </div>-->

  </article>
  <Footer/>
</template>

<script>
import {reactive} from "vue"
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";
import Commandlist from "../stores/commandlist.json"

export default {
  name: "Command",
  components: {Footer, HeaderBar},
  setup() {
    return {commandlist: reactive(Commandlist)}
  }
}
</script>

<style lang="scss" scoped>
.box {
  clear: both;

  h3 {
    color: #47a;
    font-size: 18px;
    padding-bottom: 12px;
    margin-bottom: -1px;
    border-bottom: 2px solid #fd7;
    position: relative;
    z-index: 1;
  }

  dl {
    border-top: 1px dashed #ccc;
    position: relative;
    z-index: 0;
    min-height: 35px;
    overflow: hidden;

    em {
      font-style: normal;
      font-weight: normal;
      color: #691;
    }

    &.wordwrap {
      min-height: 50px;
    }
  }

  dd, dt {
    display: block;
    padding: 10px 0 10px 0;
    min-height: 15px;

  }

  dt {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 100%;
    border-right: 1px dashed #ddd;
    text-align: center;
    font-weight: bold;
    color: #582;
    word-spacing: -2px;

    &.kor {
      left: 120px;
    }
  }

  dd {
    padding-left: 250px;
  }
}

article .page-command {
  max-width: 1000px;
}
</style>
