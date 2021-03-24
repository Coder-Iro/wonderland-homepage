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
export default {
  name: 'Discord',
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

<style lang="scss" scoped>
iframe {
  border: none;
}
</style>
