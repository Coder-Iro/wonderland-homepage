<template>
  <div>
    <header-bar>Wonderland Server</header-bar>
    <article>
      <youtube
        id="yt"
        src="Zd9qb73cj1o"
        width="600"
        height="350"
        host="https://www.youtube-nocookie.com"
        :vars="{
          listType: 'player',
          list: 'PL53hvoBTs0vSt9onWSOIclXklkZtNfg1K',
          origin: 'http://localhost:3000',
          enablejsapi: 1,
          modestbranding: 1,
        }"
      />

      <div class="bar" />
      <div>
        <section></section>
        <section>
          <box>
            <h3>Wonderland Server 소개</h3>
            <dl v-for="(item, index) in introduce">
              <dt v-html="bbcode(item.title)" />
              <dd
                v-if="typeof item.content == 'string'"
                v-html="bbcode(item.content)"
              />
              <dd v-else v-for="line in item.content" v-html="bbcode(line)" />
            </dl>
          </box>
        </section>
        <section></section>
        <section></section>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
  import Youtube from 'vue3-youtube';
  import { introduce } from 'assets/data/introduce';
  import bbcode from '@/src/bbcode';
</script>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({ name: 'Index' });
</script>

<style lang="scss" scoped>
  #yt {
    max-width: 600px;
    margin: 10px auto 30px auto;
    position: relative;
    z-index: 0;
    min-height: 200px;
  }
  .bar {
    border-width: 2px 0 2px 0;
    border-style: solid;
    border-color: #f16567;
  }
  article div {
    max-width: 900px;
    margin: auto;
    clear: both;
    section {
      width: 50%;
      float: left;
      .box {
        min-height: 350px;
        overflow: auto;
        margin-right: 20px;
        h3 {
          margin-bottom: 10px;
          color: #47a;
          font-size: 120%;
          padding-bottom: 10px;
          border-bottom: 1px dashed #ddd;
        }
        dl {
          padding: 2px 0;
          margin: 8px 0;
          position: relative;
        }
        dt,
        dd {
          display: block;
        }
        dt {
          width: 70px;
          border-right: 2px solid #ccc;
          position: absolute;
          left: 2px;
          top: 2px;
          z-index: 1;
        }
        dd {
          padding-left: 85px;
        }
        li {
          list-style-type: square;
          list-style-position: inside;
          padding: 5px 0;
        }
      }
    }
  }
</style>
