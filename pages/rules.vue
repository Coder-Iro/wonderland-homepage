<template>
  <div>
    <header-bar>RULES</header-bar>
    <article>
      <alert-box id="alert">
        <icon name="alert">주의</icon>
        <p>
          서버규칙을 어긴 경우 경고 조치 되며 1회 이상 경고 후에는 서버에서
          추방될 수 있습니다.<br /><br />
        </p>
        <p />
        <p>단, PvP 구역 내에서의 캐릭터 싸움으로 인해 생긴 문제는 예외이며,</p>
        <p>Coma 내에서의 재산 훼손 / 절도는 처벌하지 않습니다.</p>
      </alert-box>
      <rule-box v-for="(rule, index) in rules" :rule="rule" :key="index" />
    </article>
    <footer-bar />
  </div>
</template>

<script setup lang="ts">
  import { rules } from 'assets/data/rules';
</script>

<script lang="ts">
  export default defineComponent({ name: 'rules' });
</script>

<style lang="scss" scoped>
  #alert {
    min-height: 110px;
    text-align: center;
  }
</style>
