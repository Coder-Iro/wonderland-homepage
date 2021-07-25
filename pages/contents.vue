<template>
  <div>
    <HeaderBar>CONTENTS</HeaderBar>
    <article>
      <div class="container">
        <ContentBox
          v-for="content in contents"
          :key="content.title"
          :content="content"
        />
      </div>
    </article>
    <FooterBar/>
  </div>
</template>

<script>
import contents from '../assets/data/contents.json'
import meta from '../assets/data/metadata.json'
import ContentBox from '../components/ContentBox'

export default {
  name: 'Contents',
  components: { ContentBox },
  data () {
    return {
      contents,
      url: `${meta.protocol}://${meta.domain}${this.$nuxt.$route.path}`,
      title: `컨텐츠 사전 | ${meta.title}`
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: this.url
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>
