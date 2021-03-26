<template>
  <div class="formWrapper">
    <form>
      <label for="userid">ID</label>
      <input id="userid" class="tt" name="userid" type="text" />
      <label for="password">PW</label>
      <input id="password" class="tt" name="password" type="password" />
      <div class="button">
        <input class="submit" type="submit" value="로그인" />
        <router-link class="icon icon-join" to="/member">가입안내</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MemberForm',
}
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
  input.tt {
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
    background: transparent 0px -448px url(../assets/img/lnb-icon.png) no-repeat;
    border: 0;
    color: #693;
    font-size: 12px;
    font-family: 'gulim';
    padding: 5px 0 0 17px;
    text-align: left;
    margin: auto;
  }

  .icon {
    background-image: url(../assets/img/lnb-icon.png);
    overflow: hidden;
    display: inline-block;
    padding-left: 15px;
    width: 30px;
    height: 30px;
    font-size: 12px;
    line-height: 13px;
    font-family: 'gulim';
  }

  .icon-join {
    background-position: 0px -348px;
    color: #fb5;
    width: 50px;
    height: 13px;
    padding: 7px 0 0 18px;
  }
  div.button {
    padding: 0;
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
    input.tt {
      width: 50px;
    }
    label,
    input.tt {
      height: 15px;
      margin-top: -5px;
    }
    .button {
      float: right;
      padding: 0;
    }
    .submit {
      display: block;
      float: left;
    }
    .icon-join {
      width: 1px;
      margin-left: 5px;
      color: #303030;
    }
  }
}
</style>
