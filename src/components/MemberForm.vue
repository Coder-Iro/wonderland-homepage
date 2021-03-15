<template>
  <div class="form">
    <form>
      <div class="block">
        <label for="userid">ID</label>
        <input id="userid" name="userid" type="text" />
      </div>
      <div class="block">
        <label for="password">PW</label>
        <input id="password" name="password" type="password" />
      </div>
      <span class="button">
        <input class="submit" type="submit" value="로그인" />
        <a class="icon icon-join" href="/">가입안내</a>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "MemberForm",
};
</script>

<style scoped lang="scss">
.form {
  width: 120px;
  text-align: center;
  margin: 0 auto 20px auto;
  padding: 5px 0px;
  border-radius: 5px;
  background-color: #303030;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 10px;
    overflow: hidden;
    .block {
      display: flex;
      flex-direction: row;
      align-items: center;
      // justify-content: center;
    }
  }

  label {
    display: inline-block;
    width: 30px;
    text-align: left;
    font-size: 10px;
    font-weight: bold;
    color: #fb5;
    font-family: "arial";
    text-indent: 3px;
    margin-right: 3px;
    flex-shrink: 1;
  }

  input {
    display: inline-block;
    width: 100%;
    background-color: transparent;
    padding: 2px;
    border: 0;
    border-bottom: 1px dotted #fb5;
    color: #8b5;
    max-width: 100px;
  }
  input:focus {
    outline: none;
  }

  .submit {
    // display: block;
    width: 55px;
    background: transparent 0px -448px url(../assets/lnb-icon.png) no-repeat;
    border: 0;
    color: #693;
    font-size: 12px;
    font-family: "gulim";
    padding: 5px 0 0 17px;
    margin: auto;
    cursor: pointer;
  }

  .icon {
    background-image: url(../assets/lnb-icon.png);
    overflow: hidden;
    display: inline-block;
    padding-left: 15px;
    width: 30px;
    height: 30px;
    font-size: 12px;
    line-height: 13px;
    font-family: "gulim";
  }

  .icon-join {
    background-position: 0px -348px;
    color: #fb5;
    width: 50px;
    height: 13px;
    padding: 7px 0 0 18px;
  }
}

@media (max-width: 700px), (orientation: portrait) {
  .form {
    width: auto;
    height: 22px;
    text-align: right;
    padding: 3px 5px;
    margin: 5px;
    align-items: center;
    float: right;

    .block {
      flex: 1;
      &:last-child {
        margin-left: 5px;
      }
    }

    form {
      text-align: left;
      vertical-align: middle;
      flex-direction: row;
    }

    label {
      display: inline;
      width: 20px;
    }

    label,
    input.tt {
      height: 15px;
      margin-top: -5px;
    }

    .button {
      padding: 0;
      display: flex;
      align-items: center;
      margin-left: 10px;
    }

    .submit {
      display: block;
      float: left;
    }
    .icon {
      width: 1px;
    }
  }
}
</style>