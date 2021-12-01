<template>
  <box class="box">
    <div class="img" :style="{ backgroundPosition: `0 ${-110 * key}px` }" />
    <div class="text">
      <h3>{{ rule.title }}</h3>
      <strong>{{ rule.subtitle }}</strong>
      <p
        v-for="(line, index) in rule.content.trim().split('\n')"
        :key="index"
        :class="{ red: index }"
      >
        {{ line }}
      </p>
    </div>
  </box>
</template>

<script setup lang="ts">
  import { getCurrentInstance } from 'vue';
  const key: number = Number(getCurrentInstance()?.vnode.key);
</script>

<script lang="ts">
  import { Rule } from 'assets/data/rules';
  import { defineComponent, PropType } from 'vue';
  export default defineComponent({
    name: 'RuleBox',
    props: {
      rule: {
        type: Object as PropType<Rule>,
        required: true,
      },
    },
  });
</script>

<style lang="scss" scoped>
  .box {
    clear: both;
    min-height: 110px;
    .img {
      width: 183px;
      height: 110px;
      float: left;
      background-image: url(assets/img/page-rules.jpg);
      border-radius: 3px;
    }
    .text {
      margin-left: 200px;

      h3 {
        display: block;
        height: 25px;
        line-height: 25px;
        color: #47a;
        font-size: 16px;
      }

      strong {
        display: block;
        margin: 8px 0;
      }

      p {
        max-width: 470px;
      }
    }
  }
</style>
