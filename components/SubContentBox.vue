<template>
  <box type="sub">
    <h4>
      <a :href="`#${parent.id}`" @click="actived = !actived">
        <strong :class="content.color || parent.color"
          >🔍 {{ content.title }}
        </strong>
      </a>
    </h4>
    <section v-show="actived" v-html="'<br>' + bbcode(content.desc)" />
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
        type: Object as PropType<SubContent>,
        required: true,
      },
      parent: {
        type: Object as PropType<Content>,
        required: true,
      },
    },
    data() {
      return reactive({ actived: false });
    },
  });
</script>
