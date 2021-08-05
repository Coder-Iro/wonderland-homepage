<template>
  <div>
    <HeaderBar>BOARD</HeaderBar>
    <article>
      <table>
        <caption>1 페이지</caption>
        <BoardHead />
        <BoardItem
          v-for="(post, index) in posts"
          :key="index"
          :date="post.date"
          :pid="post.pid"
          :title="post.title"
          :uuid="post.author"
        />
      </table>
      <div id="paging" />
    </article>
    <FooterBar />
  </div>
</template>

<script>
import meta from '../assets/data/metadata.json'

export default {
  name: 'Board',
  data () {
    return {
      url: `https://${meta.domain}${this.$nuxt.$route.path}`,
      title: `게시판 | ${meta.title}`,
      posts: this.posts
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: this.url
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        }
      ]
    }
  },
  async created () {
    this.posts = await this.$axios.$get('http://localhost:3000/api/posts')
  }
}
</script>

<style lang="scss" scoped>
article {
  background: #fff;
  position: relative;
  padding: 30px 50px;
  #paging {
    border-top: 2px solid #ccc;
    margin-top: -1px;
    text-align: center;
    position: relative;
    white-space: nowrap;
  }

  table {
    width: 100%;
    text-align: center;
    border-spacing: 0;

    caption {
      height: 1px;
      overflow: hidden;
      text-align: left;
    }
  }
}
</style>
