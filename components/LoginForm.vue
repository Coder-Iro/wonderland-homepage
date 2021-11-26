<template>
  <div class="formWrapper">
    <form>
      <label for="userid">ID</label>{{ ' ' }}
      <input id="userid" name="userid" type="text" />
      <label for="password">PW</label>{{ ' ' }}
      <input id="password" name="password" type="password" />
      <div class="button">
        <button
          type="button"
          @click="
            user.login({
              username: 'Coder_Iro',
              uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d',
              token: '',
            })
          "
        >
          로그인
        </button>
        <nuxt-link to="/member"> 가입안내 </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  const { useUser } = useNuxtApp();
  const user = useUser();
</script>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'LoginForm',
  });
</script>

<style lang="scss" scoped>
  .formWrapper {
    width: 120px;
    text-align: center;
    margin: 0 auto 20px auto;
    padding: 5px 0;
    border-radius: 5px;
    background-color: #303030;
    position: relative;

    label,
    input {
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

    input {
      width: 80px;
      background-color: transparent;
      padding: 2px;
      border: 0;
      border-bottom: 1px dotted #fb5;
      color: #8b5;
    }

    button {
      cursor: pointer;
      display: block;
      width: 55px;
      height: 20px;
      background: transparent 0px -448px url(../assets/img/lnb-icon.png) no-repeat;
      border: 0;
      color: #693;
      font-size: 12px;
      font-family: 'gulim';
      padding: 5px 0 0 17px;
      text-align: left;
      margin: auto;
    }

    a {
      color: #fb5;
      width: 50px;
      height: 13px;
      padding: 7px 0 0 18px;

      background: transparent 0px -348px url(../assets/img/lnb-icon.png) no-repeat;
      overflow: hidden;
      display: inline-block;
      font-size: 12px;
      line-height: 13px;
      font-family: 'gulim';
    }

    div.button {
      clear: both;
      text-align: center;
    }
  }

  @media (max-width: 700px), (orientation: portrait) {
    .formWrapper {
      width: 250px;
      height: 22px;
      text-align: right;
      padding: 3px 5px;
      margin: 5px;
      float: right;

      strong {
        float: left;
      }
      img {
        width: 20px;
        height: 20px;
        display: inline;
        margin: 0;
        float: left;
      }
      .icon-myinfo,
      .icon-logout {
        height: 14px;
        width: 50px;
        padding-top: 6px;
      }

      form {
        text-align: left;
        vertical-align: middle;
      }
      label {
        display: inline;
      }
      input {
        width: 50px;
      }
      label,
      input {
        height: 15px;
        margin-top: -5px;
      }
      .button {
        float: right;
        padding: 0;
      }
      button {
        display: block;
        float: left;
      }
      a {
        width: 1px;
        margin-left: 5px;
        color: #303030;
      }
    }
  }
</style>
