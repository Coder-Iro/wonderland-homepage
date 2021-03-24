<template>
  <div></div>
</template>

<script>
import meta from '../assets/data/metadata.json'
export default {
  name: 'Contents',
  data() {
    return {
      url: `${meta.protocol}://${meta.domain}${this.$nuxt.$route.path}`,
      title: `컨텐츠 사전 | ${meta.title}`,
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

<style scoped></style>
