<template>
  <div>
    <HeaderBar>DISCORD</HeaderBar>
    <article>
      <div class="box">
        <h3>서버 디스코드에 참여하시려면 아래 Connect 버튼을 눌러주세요.</h3>
      </div>
      <iframe
        allowtransparency="true"
        height="496"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        src="https://discordapp.com/widget?id=326393541263753216&theme=dark"
        width="350"
      />
    </article>
    <FooterBar />
  </div>
</template>

<script>
import meta from '../assets/data/metadata.json'

export default {
  name: 'Discord',
  data () {
    return {
      url: `https://${meta.domain}${this.$nuxt.$route.path}`,
      title: `디스코드 | ${meta.title}`
    }
  },
  head () {
    return {
      meta: [
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'twitter:url', property: 'twitter:url', content: this.url },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
iframe {
  border: none;
}
</style>
