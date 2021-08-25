<template>
  <div>
    <HeaderBar>BOARD</HeaderBar>
    <article v-if="page >= 1">
      <table>
        <caption>1 페이지</caption>
        <BoardHead />
        <tbody v-if="$fetchState.pending">
          <FakeBoardItem v-for="(_,index) in Array(10)" :key="index" />
        </tbody>
        <tbody v-else>
          <BoardItem
            v-for="(post, index) in posts"
            :key="index"
            :date="post.date"
            :pid="post.pid"
            :title="post.title"
            :uuid="post.uuid"
            :name="post.username"
            :comments="post.comments"
          />
        </tbody>
      </table>
      <div id="paging">
        <ul id="left">
          <li v-if="page !== 1">
            <NuxtLink to="/board/1">
              1
            </NuxtLink>
          </li>
        </ul>
        <span v-for="(pag, index) in paging" :key="index" :class="{border: index === 0}"><NuxtLink :to="`/board/${pag}`">{{ pag }}</NuxtLink></span>
      </div>
      <form id="search_form" name="search_form">
        <input id="search_box" type="text" name="filter" placeholder="제목, 내용, ID 검색">
        <input id="search_submit" type="submit" value="검색">
      </form>
    </article>
    <FooterBar />
  </div>
</template>

<script>
import meta from '~/assets/data/metadata.json'
import FakeBoardItem from '~/components/FakeBoardItem'
import BoardItem from '~/components/BoardItem'
import BoardHead from '~/components/BoardHead'

export default {
  name: 'Board',
  components: { BoardHead, BoardItem, FakeBoardItem },
  // fetchOnServer: false,
  data () {
    return {
      url: `https://${meta.domain}${this.$nuxt.$route.path}`,
      title: `게시판 | ${meta.title}`,
      posts: this.posts,
      page: parseInt(this.$route.params.pid ? this.$route.params.pid : '1')
    }
  },
  async fetch () {
    this.posts = await this.$axios.$get('/api/posts')
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
  computed: {
    paging () {
      return Array.from({ length: 8 }, (_, i) => i + (this.page > 4 ? this.page - 4 : 1))
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  position: relative;
  padding: 30px 50px;

  #paging {
    border-top: 2px solid #ccc;
    margin-top: -1px;
    text-align: center;
    position: relative;
    white-space: nowrap;
    #left {
      float: left;
    }
    span, li {
      display: inline-block;
      height: 10px;
      width: 29px;
      margin-bottom: 30px;
      border-right: 1px solid #ccc;
      &.border {
        border-left: 1px solid #ccc;
      }
    }
    a {
      display: block;
      height: 30px;
      line-height: 30px;
      color: #E82;
      font-weight: bold;
    }
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
#search_form {
  padding: 10px;
  text-align: center;
  #search_box {
    text-align: center;
    border: 2px solid #aaa;
    width: 300px;
    height: 30px;
    line-height: 30px;
  }
  #search_submit {
    display: inline-block;
    height: 30px;
    width: 50px;
    background: #eaeaea;
    border: 2px solid #ccc;
    font-weight: bold;
    color: #555;
  }
}
</style>
