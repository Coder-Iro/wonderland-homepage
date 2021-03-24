<template>
  <div>
    <iframe src="http://wonderland-server.net:8124"></iframe>
  </div>
</template>

<script>
import meta from '../assets/data/metadata.json'
export default {
  name: 'Worldmap',
  data() {
    return {
      url: `${meta.protocol}://${meta.domain}${this.$nuxt.$route.path}`,
      title: `월드맵 | ${meta.title}`,
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
div {
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-color: #000000;
}

iframe {
  width: 100%;
  height: inherit;
  border: 0;
  margin: 0;
  padding: 0;
}

@media (max-width: 700px), (orientation: portrait) {
  div {
    top: 145px;
    margin-bottom: -145px;
  }
}
</style>
