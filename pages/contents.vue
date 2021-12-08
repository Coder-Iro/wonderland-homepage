<template>
  <div>
    <header-bar>CONTENTS</header-bar>
    <article>
      <content-box :content="{ title: '[GREEN]💳 경제 (мега)[/GREEN]' }" />
    </article>
    <footer-bar />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'contents',
  });
</script>

<style lang="scss"></style>
