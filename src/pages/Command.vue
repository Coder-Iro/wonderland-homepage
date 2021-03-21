<template>
  <HeaderBar>COMMANDS</HeaderBar>
  <article>
    <div class="page-command">
      <div v-for="(commands, index) in commandlist" :key="index" class="box">
        <h3>{{ commands.title }}</h3>
        <dl v-for="(command, index) in commands.list" :key="index">
          <dt :class="{ bold: command.bold }">{{ command.name }}</dt>
          <dt class="kor" :class="{ bold: command.bold }">{{ command.kor }}</dt>
          <dd>{{ command.info }}</dd>
        </dl>
      </div>
    </div>
  </article>
  <Footer />
</template>

<script>
import { reactive } from "vue";
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";
import Commandlist from "../stores/commandlist.json";

export default {
  name: "Command",
  components: { Footer, HeaderBar },
  setup() {
    return { commandlist: reactive(Commandlist) };
  },
};
</script>

<style lang="scss" scoped>
.box {
  clear: both;

  h3 {
    color: #47a;
    font-size: 18px;
    padding-bottom: 12px;
    margin-bottom: -1px;
    border-bottom: 2px solid #fd7;
    position: relative;
    z-index: 1;
  }

  dl {
    border-top: 1px dashed #ccc;
    position: relative;
    z-index: 0;
    min-height: 35px;
    overflow: hidden;

    em {
      font-style: normal;
      font-weight: normal;
      color: #691;
    }

    &.wordwrap {
      min-height: 50px;
    }
  }

  dd,
  dt {
    display: block;
    padding: 10px 0 10px 0;
    min-height: 15px;
  }

  dt {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 100%;
    border-right: 1px dashed #ddd;
    text-align: center;
    font-weight: bold;
    color: #582;
    word-spacing: -2px;

    &.kor {
      left: 120px;
    }
  }

  dd {
    padding-left: 250px;
  }

  .bold {
    color: #00a0a0;
  }
}

article .page-command {
  max-width: 1000px;
}
</style>
