<template>
  <box>
    <h3
      :style="
        actived
          ? [
              'border-width: 1px;',
              'padding-bottom: 10px;',
              'margin-bottom: 10px;',
            ]
          : undefined
      "
    >
      <button type="button" @click="actived = !actived">
        <strong :class="content.color">{{ content.title }}</strong>
      </button>
    </h3>

    <section v-show="actived">
      <img v-if="content.img" :src="`assets/img/contents/${content.id}.png`" />
      <div v-html="bbcode(content.desc)" />
    </section>
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
    data() {
      return reactive({ actived: false });
    },
  });
</script>

<style lang="scss" scoped>
  h3 {
    height: 100%;
    font-size: 19px;
    letter-spacing: 2px;
    border-bottom: 0px dashed #e3e3e3;

    button {
      width: 100%;
      background: none;
      font-size: inherit;
      border: none;
      letter-spacing: 2px;
      text-align: left;
      padding: 0;
    }
  }
  section {
    img {
      margin-bottom: 15px;
      border-radius: 3px;
      box-shadow: 2px 2px 3px #555;
    }
  }
</style>
