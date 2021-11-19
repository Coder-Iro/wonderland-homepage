<template>
  <h1>
    <nuxt-link to="/" />
  </h1>
</template>

<style lang="scss" scoped>
  a {
    display: block;
    width: 120px;
    height: 60px;
    margin: 25px auto 15px auto;
    background-image: url('assets/img/home.png');
    text-indent: -999px;
    overflow: hidden;
  }
  @media (max-width: 700px), (orientation: portrait) {
    h1 {
      display: inline;
      float: left;
      height: 40px;

      a {
        width: 200px;
        height: 20px;
        margin: 8px 3px 3px 3px;
        background-position: 0 -60px;
      }
    }
  }
</style>
