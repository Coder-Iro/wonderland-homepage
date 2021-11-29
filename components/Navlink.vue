<template>
  <nuxt-link v-slot="{ navigate, href }" :to="`/${linkname}`" custom>
    <li
      :class="[
        $route.path.startsWith(`/${linkname}`) && 'router-link-active',
        linkname,
      ]"
    >
      <a :href="href" @click="navigate">
        <slot />
      </a>
    </li>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'Navlink',
    props: {
      linkname: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  li {
    list-style: none;
    display: block;
    height: 35px;
    background-image: url(assets/img/lnb-icon.png);
    background-repeat: no-repeat;
    border-left: 2px solid #222;
    transition: border-left 0.2s, background-image 0.2s;

    a {
      color: #ddd;
      padding-left: 37px;
      line-height: 35px;
      text-shadow: 2px 2px 5px #000;
      display: block;
      height: inherit;
    }

    &:hover {
      border-left: 2px solid #f33;
      background-color: #111;
      //font-weight: bold;
    }

    &.router-link-active {
      background-color: #111;
      border-left: 2px solid #f33;
      font-weight: 800;
    }

    &.notice {
      background-position: 9px 7px;
    }

    &.rules {
      background-position: 7px -43px;
    }

    &.command {
      background-position: 7px -93px;
    }

    &.contents {
      background-position: 7px -143px;
    }

    &.board {
      background-position: 7px -193px;
    }

    &.donation {
      background-position: 7px -243px;
    }

    &.worldmap {
      background-position: 7px -293px;
    }

    &.discord {
      background-position: 7px -493px;
    }
  }

  @media (max-width: 700px), (orientation: portrait) {
    li {
      width: 33%;
      float: left;
      border: 0;

      &.router-link-active {
        border-left: 0;
        background-color: #111;
      }

      &:hover {
        border: none;
        background-color: #111;
      }

      a {
        padding-left: 0;
        text-align: center;
      }
    }
  }
</style>
