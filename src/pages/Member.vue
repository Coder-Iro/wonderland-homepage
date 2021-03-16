<template>
  <HeaderBar>Wonderland Server</HeaderBar>
  <article>
    <div class="box">
      <h3 class="title">회원가입 안내</h3>
      마인크래프트 클라이언트를 통해 <strong class="orange">wonderland-server.net</strong> 에 접속 도중에<br>
      <strong class="green">/register </strong><span class="green">암호 e-mail</span> 명령어를 이용해 가입 할 수 있습니다.<br><br>
      만약 e-mail 을 기입하지 않았다면, 웹사이트에 로그인 하여<br>
      회원정보수정을 통해 e-mail 을 등록하시면 암호 분실 시 메일을 통해 찾으실 수 있습니다.
    </div>
  </article>
  <Footer/>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Member",
  components: {Footer, HeaderBar}
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 18px;
  letter-spacing: 2px;
  color: #47a;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px dashed #e3e3e3;
}
</style>
