<template>
  <box>
    <h3>{{ commands.title }}</h3>
    <command-info
      v-for="(command, index) in commands.items"
      :key="index"
      :command="command"
    />
  </box>
</template>

<script lang="ts">
  import { CommandGroup } from 'assets/data/commands';
  import { defineComponent, PropType } from 'vue';
  export default defineComponent({
    name: 'CommandGroup',
    props: {
      commands: {
        type: Object as PropType<CommandGroup>,
        required: true,
      },
    },
  });
</script>

<style lang="scss" scoped>
  h3 {
    color: #47a;
    font-size: 18px;
    padding-bottom: 12px;
    margin-bottom: -1px;
    border-bottom: 2px solid #fd7;
    position: relative;
    z-index: 1;
  }
</style>
