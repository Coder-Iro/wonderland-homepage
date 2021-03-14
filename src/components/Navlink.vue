<template>
  <router-link v-slot="{isActive,isExactActive, navigate, href}" :to="linkto" custom>
    <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active', clas]">
      <a :href="href" @click="navigate">월드맵</a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "Navlink",
  props: {
    linkname: String,
    linkto: String,
    clas: String
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: block;
  height: 35px;
  background-image: url(../assets/lnb-icon.png);
  background-repeat: no-repeat;
  border-left: 2px solid #222;

  a {
    color: #ddd;
    padding-left: 37px;
    line-height: 35px;
    text-shadow: 2px 2px 5px #000;
    display: block;
    height: inherit;
  }

  &.router-link-exact-active {
    background-color: #111;
    border-left: 2px solid #f33;
    font-weight: bold;
  }

  &.worldmap {
    background-position: 7px -293px;
  }

}

@media (max-width: 700px), (orientation: portrait) {
  li {
    width: 33%;
    float: left;
    border: 0;

    &.router-link-exact-active {
      border-left: 0;
      background-color: #111;
    }

    a {
      padding-left: 0;
      text-align: center;
    }
  }
}
</style>
