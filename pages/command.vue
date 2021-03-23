<template>
  <div>
    <HeaderBar>COMMANDS</HeaderBar>
    <article>
      <div class="page-command">
        <CommandBox
          v-for="(commands, index) in commandlist"
          v-once
          :key="index"
          :commands="commands"
        />
      </div>
    </article>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Command',
  async asyncData() {
    return { commandlist: await import('../assets/data/commandlist.json') }
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
