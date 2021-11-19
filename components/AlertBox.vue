<template>
  <box><slot /></box>
</template>

<script lang="ts">
  export default defineComponent({ name: 'AlertBox' });
</script>

<style lang="scss" scoped>
  div {
    border-color: #e82;
    background-color: #f5f5f5;
    font-weight: bold;
    line-height: 160%;
  }
</style>
