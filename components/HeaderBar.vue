<template>
  <header>
    <h2>
      ::
      <slot />
      ::
    </h2>
  </header>
</template>

<script>
  export default defineComponent({
    name: 'HeaderBar',
  });
</script>

<style lang="scss" scoped>
  header {
    position: relative;
    height: 30px;
    background: #f2f2f2;
    border-bottom: 1px solid #e3e3e3;
    padding: 30px;
    color: #777;

    h2 {
      font-size: 200%;
      letter-spacing: 5px;
      text-indent: 10px;
      text-shadow: 0 0 1px #777;
    }
  }

  @media (max-width: 700px), (orientation: portrait) {
    header {
      height: 84px;
    }
  }
</style>
