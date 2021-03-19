<template>
  <HeaderBar>Wonderland Server</HeaderBar>
  <article>
    <youtube-iframe no-cookie video-id="PgIzZfS9RP0"
                    :player-parameters="{listType: 'playlist',list:'PL-kUY2NcroAxDrAnUyEaeog7BX8Qj52uh'}"/>
  </article>
  <Footer/>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {Footer, HeaderBar}
}
</script>

<style lang="scss">
.vue-youtube-iframe {
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
</style>
