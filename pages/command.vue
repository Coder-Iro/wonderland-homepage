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

export default {
  name: 'Command',
  components: { CommandBox },
  data() {
    return {
      commandlist,
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
em {
  font-style: normal;
  font-weight: normal;
  color: #691;
}

article .page-command {
  max-width: 1000px;
}
</style>
