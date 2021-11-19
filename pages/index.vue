<template>
  <div>
    <header-bar>Wonderland Server</header-bar>
    <article>
      <youtube
        src="Zd9qb73cj1o"
        width="640"
        height="390"
        host="https://www.youtube-nocookie.com"
        :vars="{
          listType: 'player',
          list: 'PL53hvoBTs0vSt9onWSOIclXklkZtNfg1K',
          origin: 'http://localhost:3000',
          enablejsapi: 1,
        }"
      />
    </article>
  </div>
</template>

<script setup lang="ts">
  import Youtube from 'vue3-youtube';
</script>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({ name: 'Index' });
</script>
