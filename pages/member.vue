<template>
  <div></div>
</template>

<script>
export default {
  name: 'Member',
  data() {
    return {
      url: `http://wonderland.mrsmc.xyz${this.$nuxt.$route.path}`,
    }
  },
  head() {
    return {
      meta: [
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'twitter:url', property: 'twitter:url', content: this.url },
      ],
    }
  },
}
</script>

<style scoped></style>
