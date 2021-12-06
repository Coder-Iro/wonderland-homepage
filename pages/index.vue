<template>
  <div>
    <header-bar>Wonderland Server</header-bar>
    <article>
      <youtube
        id="yt"
        src="Zd9qb73cj1o"
        width="600"
        height="354"
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
      <div class="info">
        <section>
          <box type="alert">
            <h3>최근알림<nuxt-link to="/notice">더보기 >></nuxt-link></h3>
          </box>
        </section>
        <section>
          <box>
            <h3>Wonderland Server 소개</h3>
            <dl v-for="(item, index) in introduce">
              <dt v-html="bbcode(item.title)" />
              <dd
                v-for="line in item.content.split('\n')"
                v-html="bbcode(line)"
              />
            </dl>
          </box>
        </section>
        <div class="clear" />
        <section>
          <box>
            <h3>기본설정</h3>
            <ul>
              <li v-for="feature in features" v-html="bbcode(feature)" />
            </ul>
          </box>
        </section>
        <section>
          <box>
            <h3>컨텐츠</h3>
            <ul>
              <li v-for="content in contentsinfo" v-html="bbcode(content)" />
            </ul>
          </box>
        </section>
        <div class="clear" />
      </div>
    </article>
    <footer-bar />
  </div>
</template>

<script setup lang="ts">
  import Youtube from 'vue3-youtube';
  import { introduce } from 'assets/data/introduce';
  import { features } from 'assets/data/feature';
  import { contentsinfo } from 'assets/data/contentsinfo';
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
  article {
    div.info {
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
          line-height: 19px;
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
        .alert {
          min-height: 420px;
          h3 {
            border-color: #f16567;
            color: #000;
            a {
              position: absolute;
              top: 20px;
              right: 20px;
              font-size: 12px;
              font-weight: normal;
            }
          }
        }
      }
      div.clear {
        clear: both;
      }
    }
  }
  @media (max-width: 700px), (orientation: portrait) {
    article {
      div.info {
        section {
          width: 100%;
          .box {
            margin-right: 0;
          }
        }
      }
    }
    #yt {
      max-width: 100%;
      padding: 0px;
      height: 334px !important;
      :deep(iframe) {
        width: 100% !important;
        height: 330px !important;
        border: 0px !important;
      }
    }
  }
</style>
