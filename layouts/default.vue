<template>
  <div id="root">
    <nav>
      <homelink />
      <login-form v-if="!user.isLoggedIn" />
      <user-info v-else />
      <ul id="lnb">
        <navlink linkname="notice"> 서버 알림 </navlink>
        <navlink linkname="rules"> 서버 규칙 </navlink>
        <navlink linkname="command"> 명령어 </navlink>
        <navlink linkname="contents"> 컨텐츠 사전 </navlink>
        <navlink linkname="board"> 게시판 </navlink>
        <navlink linkname="discord"> 디스코드 </navlink>
        <navlink linkname="donation"> 서버 후원</navlink>
        <navlink linkname="worldmap"> 월드맵 </navlink>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  const { useUser } = useNuxtApp();
  const user = useUser();
</script>

<style lang="scss">
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');
  ul,
  li {
    list-style: none;
  }

  #app {
    height: 100%;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a,
  img,
  table {
    border: 0;
  }

  a,
  a:hover,
  a:active,
  a:visited,
  a:hover {
    text-decoration: none;
    line-height: 130%;
    color: #333;
  }

  html,
  body,
  ul,
  li,
  dl,
  dd,
  dt,
  ol,
  p,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  input,
  textarea {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #__nuxt,
  #__layout,
  #root {
    font-size: 14px;

    //font-family: 'gulim';
    height: 100%;
    // min-width: 480px;
    color: #333;
    background-color: #f2f2f2;
  }
  body * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  nav {
    width: 150px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: #222;
    color: #777;
    overflow: auto;
    overflow-x: hidden;
  }

  main {
    position: relative;
    min-height: 100%;
    margin-left: 150px;
  }

  @media (max-width: 700px), (orientation: portrait) {
    #root {
      min-width: 480px;
    }
    nav {
      position: absolute;
      width: 100%;
      height: 145px;
      overflow: hidden;
      min-width: inherit;
      padding: 0;

      #lnb {
        clear: both;
        padding: 0;
        display: block;
        height: 110px;
      }
    }

    main {
      margin-left: 0;
    }
  }

  article {
    position: relative;
    padding: 30px 50px;
    background: #fff;
  }

  @media (max-width: 700px), (orientation: portrait) {
    article {
      padding: 30px 20px;
    }
  }

  em.id {
    font-style: normal;
    font-weight: normal;
    color: #691;
  }
</style>

<style lang="scss" src="../assets/css/color.scss"></style>
