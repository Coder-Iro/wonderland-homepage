<template>
  <div class="box">
    <h3>{{ commands.title }}</h3>
    <OneCommand
      v-for="(command, index) in commands.items"
      :key="index"
      :command="command"
    />
  </div>
</template>

<script lang="ts">
import { CommandGroup } from 'assets/data/commands'
import OneCommand from './OneCommand.vue'

export default {
  name: 'CommandBox',
  components: { OneCommand },
  props: {
    commands: {
      type: Object as () => CommandGroup,
      required: true
    }
  }
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
