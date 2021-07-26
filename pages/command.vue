<template>
  <div>
    <HeaderBar>COMMANDS</HeaderBar>
    <article>
      <div v-once class="page-command">
        <CommandBox
          v-for="commands in commandlist"
          :key="commands.title"
          :commands="commands"
        />
      </div>
    </article>
    <FooterBar />
  </div>
</template>

<script>
import commandlist from '../assets/data/commandlist.json'
import CommandBox from '../components/CommandBox'
import meta from '../assets/data/metadata.json'

export default {
  name: 'Command',
  components: { CommandBox },
  data () {
    return {
      commandlist,
      url: `https://${meta.domain}${this.$nuxt.$route.path}`,
      title: `명령어 | ${meta.title}`
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
em {
  font-style: normal;
  font-weight: normal;
  color: #691;
}

article .page-command {
  max-width: 1000px;
}
</style>
