<template>
  <HeaderBar>DISCORD</HeaderBar>
  <article>
    <div class="box">
      <h3>서버 디스코드에 참여하시려면 아래 Connect 버튼을 눌러주세요.</h3>
    </div>
    <iframe allowtransparency="true" height="496"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            src="https://discordapp.com/widget?id=326393541263753216&theme=dark"
            width="350"/>
  </article>
  <Footer/>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Discord",
  components: {Footer, HeaderBar}
}
</script>

<style lang="scss" scoped>
iframe {
  border: none;
}

</style>
