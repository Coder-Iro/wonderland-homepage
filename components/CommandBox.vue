<template>
  <div class="box">
    <h3>{{ commands.title }}</h3>
    <OneCommand
      v-for="(command, index) in commands.list"
      :key="index"
      :command="command"
    ></OneCommand>
  </div>
</template>

<script>
import OneCommand from './OneCommand.vue'

export default {
  name: 'CommandBox',
  components: { OneCommand },
  props: {
    commands: Object,
  },
}
</script>

<style lang="scss" scoped>
div {
  clear: both;

  h3 {
    color: #47a;
    font-size: 18px;
    padding-bottom: 12px;
    margin-bottom: -1px;
    border-bottom: 2px solid #fd7;
    position: relative;
    z-index: 1;
  }
}
</style>
