<template>
  <div>
    <header-bar>COMMANDS</header-bar>
    <article>
      <div>
        <command-group
          v-for="(group, index) in commands"
          :commands="group"
          :key="index"
        />
      </div>
    </article>
    <footer-bar />
  </div>
</template>

<script setup lang="ts">
  import { commands } from 'assets/data/commands';
</script>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({ name: 'Command' });
</script>

<style lang="scss" scoped>
  div {
    max-width: 1000px;
  }
</style>
