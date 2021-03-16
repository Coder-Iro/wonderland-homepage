<template>
  <HeaderBar>RULES</HeaderBar>
  <article>
    <div class="box box-alert">
      <p class="icon icon-alert">주의</p>
      <p>서버규칙을 어긴 경우 경고 조치 되며 1회 이상 경고 후에는 서버에서 추방될 수 있습니다.<br><br></p>
      <p></p>
      <p>단, PvP 구역 내에서의 캐릭터 싸움으로 인해 생긴 문제는 예외이며,</p>
      <p>Coma 내에서의 재산 훼손 / 절도는 처벌하지 않습니다.</p>
    </div>

  </article>
  <Footer/>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Rules",
  components: {Footer, HeaderBar}
}
</script>

<style scoped lang="scss">
.box-alert {
  clear: both;
  min-height: 110px;
  text-align: center;
  border-color: #E82;
  background-color: #f5f5f5;
  font-weight: bold;
  line-height: 160%;
}

.icon-alert {
  padding: 5px 0 5px 30px;
  height: 25px;
  line-height: 25px;
}
</style>