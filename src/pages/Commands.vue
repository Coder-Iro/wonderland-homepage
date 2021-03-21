<template>
  <HeaderBar>COMMANDS</HeaderBar>
  <article>
    <div class="page-command">
      <CommandBox v-for="commands in commandlist" v-once :commands="commands"/>
      <!--      <div v-for="commands in commandlist" v-once class="box">
              <h3>{{ commands.title }}</h3>
              <dl v-for="command in commands.list" :class="{wordwrap: command.wordwrap}">
                <dt :class="{ bold: command.bold }" v-html="command.name.startsWith('/') ? command.name.split(' ')[0] + '<em>' +command.name.split(' ').slice(1).join(' ')+'</em>':
                command.name">
                </dt>
                <dt :class="{ bold: command.bold }" class="kor">{{ command.kor }}</dt>
                <dd v-html="command.info"></dd>
              </dl>
            </div>-->
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
