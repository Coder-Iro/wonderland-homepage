<template>
  <box>
    <h3>
      <a v-html="bbcode(content.title)" />
    </h3>
  </box>
</template>

<script setup lang="ts">
  import bbcode from '@/src/bbcode';
</script>

<script lang="ts">
  import { PropType } from 'vue';
  import { Content } from 'assets/data/contents';
  export default defineComponent({
    name: 'ContentBox',
    props: {
      content: {
        type: Object as PropType<Content>,
        required: true,
      },
    },
  });
</script>

<style lang="scss">
  h3 {
    font-size: 19px;
    letter-spacing: 2px;
    color: #47a;
    border-bottom: 1px dashed #e3e3e3;
    border-width: 0px;
    a {
      display: block;
      color: #47a;
    }
  }
</style>
