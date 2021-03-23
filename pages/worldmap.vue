<template>
  <div>
    <iframe src="http://wonderland-server.net:8124"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Worldmap',
}
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-color: #000000;
}

iframe {
  width: 100%;
  height: inherit;
  border: 0;
  margin: 0;
  padding: 0;
}

@media (max-width: 700px), (orientation: portrait) {
  div {
    top: 145px;
    margin-bottom: -145px;
  }
}
</style>
