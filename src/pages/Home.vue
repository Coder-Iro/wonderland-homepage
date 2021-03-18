<template>
  <HeaderBar>Wonderland Server</HeaderBar>
  <article>
    <youtube-iframe player-parameters="listType=playlist&list=PL-kUY2NcroAxDrAnUyEaeog7BX8Qj52uh&v=PgIzZfS9RP0"/>
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

<style scoped lang="scss">

</style>
