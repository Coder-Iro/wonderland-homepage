<template>
  <div id="h2">
    <h2>
      ::
      <slot></slot>
      ::
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
}
</script>

<style lang="scss" scoped>
div {
  position: relative;
  height: 30px;
  background: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;
  padding: 30px;
  color: #777;

  h2 {
    font-family: arial;
    font-size: 200%;
    letter-spacing: 5px;
    text-indent: 10px;
    text-shadow: 0 0 1px #777;
  }
}

@media (max-width: 700px), (orientation: portrait) {
  div {
    height: 90px;
  }
}
</style>
