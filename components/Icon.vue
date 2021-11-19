<template>
  <p v-bind:class="name"><slot /></p>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'Icon',
    props: {
      name: {
        validator: (value: string) => ['alert', 'heart'].includes(value),
        required: true,
      },
    },
  });
</script>

<style lang="scss" scoped>
  p {
    background-image: url(/assets/img/icons.gif);
    background-repeat: no-repeat;
    display: inline;

    &.alert {
      padding: 5px 0 5px 30px;
      height: 25px;
      line-height: 25px;
    }
    &.heart {
      background-position: 0 -40px;
      padding: 2px 0 2px 20px;
      height: 21px;
      line-height: 21px;
      word-spacing: -1px;
    }
  }
</style>
