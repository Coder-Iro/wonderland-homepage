<template>
  <nav>
    <router-link id="maintop" to="/home"/>
    <div class="member">
      <form>
        <label for="userid">ID</label>
        <input class="tt" type="text" name="userid" id="userid">
        <label for="password">PW</label>
        <input class="tt" type="password" name="password" id="password">
        <span class="button">
          <input type="submit" class="submit" value="로그인">
                <!--<a href="#" class="icon icon-login">로그인</a>-->
          <a href="/" class="icon icon-join">가입안내</a>
        </span>
      </form>
    </div>
  </nav>
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html, body, ul, li, dl, dd, dt, ol, p, img, h1, h2, h3, h4, h5, input, textarea {
  margin: 0;
  padding: 0;
}
body {
  font-size: 13px;
  font-family: 'gulim';
  height: 100%;
  min-width: 480px;
  background-color: #f2f2f2;
  color: #333;
}
nav {
  #maintop {
    display: block;
    width: 120px;
    height: 60px;
    margin: 25px auto 15px auto;
    background-image: url("assets/home.png");
    text-indent: -999px;
    overflow: hidden;
  }
  .member {
    width: 120px;
    text-align: center;
    margin: 0 auto 20px auto;
    padding: 5px 0;
    border-radius: 5px;
    background-color: #303030;
    position: relative;
    label, input.tt {
      height: 15px;
      line-height: 15px;
      margin-bottom: 5px;
    }
    label {
      display: inline-block;
      width: 20px;
      text-align: left;
      font-size: 10px;
      font-weight: bold;
      color: #fb5;
      font-family: 'arial';
      text-indent: 3px;
    }
    input.tt {
      width: 80px;
      background-color: transparent;
      padding: 2px;
      border: 0;
      border-bottom: 1px dotted #fb5;
      color: #8b5;
    }
    .submit {
      display: block;
      width: 55px;
      height: 20px;
      background: transparent 0px -448px url(assets/lnb-icon.png) no-repeat;
      border: 0;
      color: #693;
      font-size: 12px;
      font-family: 'gulim';
      padding: 5px 0 0 17px;
      text-align: left;
      margin: auto;
    }
  }
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
form .button {
  padding: 5px 0 0 0;
  clear: both;
  text-align: center;
}
</style>
