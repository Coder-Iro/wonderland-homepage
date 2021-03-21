<template>
  <HeaderBar>COMMANDS</HeaderBar>
  <article>
    <div class="page-command">
      <CommandBox v-for="commands in commandlist" v-once :commands="commands"/>
    </div>
  </article>
  <Footer/>
</template>

<script>
import {reactive} from "vue";
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";
import Commandlist from "../stores/commandlist.json";
import CommandBox from "../components/CommandBox.vue";

export default {
  name: "Commands",
  components: {CommandBox, Footer, HeaderBar},
  setup() {
    return {commandlist: reactive(Commandlist)};
  },
};
</script>

<style lang="scss" scoped>
em {
  font-style: normal;
  font-weight: normal;
  color: #691;
}

article .page-command {
  max-width: 1000px;
}
</style>
