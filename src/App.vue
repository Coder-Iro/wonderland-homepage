<template>
  <nav>
    <h1>
      <router-link id="maintop" to="/home" />
    </h1>
    <MemberForm />
    <ul id="lnb">
      <Navlink clas="worldmap" linkname="월드맵" linkto="/worldmap" />
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navlink from "./components/Navlink.vue";
import MemberForm from "./components/MemberForm.vue";

export default defineComponent({
  name: "App",
  components: { MemberForm, Navlink },
});
</script>

<style lang="scss">
ul,
li {
  list-style: none;
}

#app {
  height: 100%;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  // box-sizing: border-box;
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

.icon {
  background-image: url(assets/icons.gif);
  background-repeat: no-repeat;
  display: inline;
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
body {
  font-size: 13px;
  font-family: "gulim";
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

main {
  position: relative;
  min-height: 100%;
  margin-left: 150px;
}

@media (max-width: 700px), (orientation: portrait) {
  html,
  body {
    min-width: 0;
  }
  nav {
    // position: absolute;
    width: 100%;
    height: 150px;
    overflow: hidden;
    min-width: inherit;
    padding: 0;

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

    .member {
      width: 250px;
      height: 22px;
      text-align: right;
      padding: 3px 5px;
      margin: 5px;
      float: right;

      form {
        text-align: left;
        vertical-align: middle;
      }

      label {
        display: inline;
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
    }

    #maintop {
      width: 200px;
      height: 20px;
      margin: 8px 3px 3px 3px;
      background-position: 0 -60px;
    }

    #lnb {
      clear: both;
      padding: 0;
      display: block;
      height: 110px;
    }

    input.tt {
      width: 50px !important;
    }
  }

  main {
    margin-left: 0;
  }
}
</style>
