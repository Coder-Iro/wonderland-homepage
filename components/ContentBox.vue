<template>
  <box :id="content.id">
    <h3
      :style="
        !actived
          ? ['border-width: 0;', 'padding-bottom: 0;', 'margin-bottom: 0;']
          : undefined
      "
    >
      <a :href="`#${content.id}`" @click="actived = !actived">
        <strong :class="content.color">{{ content.title }}</strong>
      </a>
    </h3>

    <section v-show="actived">
      <div v-html="bbcode(content.desc)" />
      <sub-content-box
        v-if="content.subcontents"
        v-for="subcontent in content.subcontents"
        :content="subcontent"
        :parent="content"
      />
    </section>
  </box>
</template>

<script setup lang="ts">
  import bbcode from '@/src/bbcode';
</script>

<script lang="ts">
  import { PropType } from 'vue';
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
  :deep(h3) {
    height: 100%;
    font-size: 19px;
    letter-spacing: 2px;
    border-bottom: 1px dashed #e3e3e3;
    margin-bottom: 10px;
    padding-bottom: 10px;

    a {
      width: 100%;
      background: none;
      font-size: inherit;
      border: none;
      letter-spacing: 2px;
      text-align: left;
      padding: 0;
      user-select: none;
    }
  }
  section {
    line-height: 19px;
    :deep(img) {
      margin-bottom: 15px;
      border-radius: 3px;
      box-shadow: 2px 2px 3px #555;
    }
    :deep(p) {
      line-height: 20px;
      margin-bottom: 15px;
    }
  }
</style>
