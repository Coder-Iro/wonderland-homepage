<template>
  <box>
    <h3 :style="actived ? ['border-width: 1px;'] : ['']">
      <a>
        <strong :class="content.color">{{ content.title }}</strong>
      </a>
    </h3>
    <section v-show="actived">
      <img v-if="content.img" :src="`assets/img/contents/${content.id}.png`" />
    </section>
  </box>
</template>

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

<style lang="scss">
  h3 {
    font-size: 19px;
    letter-spacing: 2px;
    border-bottom: 0px dashed #e3e3e3;
    padding-bottom: 10px;
    margin-bottom: 10px;
    a {
      display: block;
    }
  }
</style>
