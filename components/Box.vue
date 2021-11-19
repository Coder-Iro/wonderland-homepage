<template>
  <div><slot /></div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({ name: 'Box' });
</script>

<style lang="scss" scoped>
  div {
    position: relative;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #eaeaea;
    background: #fcfcfc;
    border-radius: 5px;
  }
</style>
