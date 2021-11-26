<template>
  <div>
    <strong>{{ user.username }}</strong>
    <img
      :src="`https://crafatar.com/avatars/${user.uuid}?overlay&default=MHF_Steve&size=40`"
    />
    <button id="modify">정보수정</button>
    <button id="logout" @click="user.logout()">로그아웃</button>
  </div>
</template>

<script setup lang="ts">
  const { useUser } = useNuxtApp();
  const user = useUser();
</script>

<style lang="scss" scoped>
  div {
    width: 120px;
    text-align: center;
    margin: 0 auto 20px auto;
    padding: 5px 0;
    border-radius: 5px;
    background-color: #303030;
    position: relative;
    strong {
      padding: 2px 5px;
      background-color: #111;
      color: #ccc;
    }
    img {
      width: 40px;
      height: 40px;
      display: block;
      margin: 10px auto 15px auto;
      box-shadow: 4px 4px 0px #101010;
    }
    button {
      background-color: transparent;
      background-image: url(assets/img/lnb-icon.png);
      background-repeat: no-repeat;
      cursor: pointer;
      overflow: hidden;
      padding: 0;
      padding-left: 15px;
      width: 45px;
      height: 30px;
      font-size: 12px;
      line-height: 13px;
      font-family: 'gulim';
      border: none;
      &#modify {
        background-position: 0px -398px;
        color: #fb5;
        margin-right: 5px;
      }
      &#logout {
        background-position: 0px -448px;
        color: #693;
      }
    }
  }
</style>
