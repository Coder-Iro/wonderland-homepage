<template>
  <div class="box" :class="[type]"><slot /></div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  export default defineComponent({
    name: 'Box',
    props: {
      type: {
        type: String as PropType<'alert' | 'sub'>,
      },
    },
  });
</script>

<style lang="scss" scoped>
  .box {
    position: relative;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #eaeaea;
    background: #fcfcfc;
    border-radius: 5px;
  }
  .alert {
    border-color: #e82;
    background-color: #f5f5f5;
    font-weight: bold;
    line-height: 160%;
  }
</style>
