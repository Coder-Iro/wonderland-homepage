<template>
  <div class="box">
    <h3 class="title">
      <p>
        <strong :class="[content.color]">{{ content.title }}</strong>
      </p>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'ContentBox',
  props: {
    content: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h3.title {
  font-size: 18px;
  letter-spacing: 2px;
  color: #47a;
  padding: 0;
  margin: 0;
  border-width: 0;

  p {
    text-decoration: none;
    display: block;
    line-height: 130%;
  }
}
</style>
