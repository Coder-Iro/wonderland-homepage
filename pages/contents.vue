<template>
  <div>
    <header-bar>CONTENTS</header-bar>
    <article>
      <div>
        <content-box v-for="content in contents" :content="content" />
      </div>
    </article>
    <footer-bar />
  </div>
</template>

<script setup lang="ts">
  import { contents } from 'assets/data/contents';
</script>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'contents',
  });
</script>

<style lang="scss" scoped>
  article div {
    max-width: 1000px;
  }
</style>
