<template>
  <div class="box">
    <h3 :class="[isActive && 'active']" class="title" @click="unfold">
      <a href="javascript:void(0);">
        <strong :class="[content.color]">{{ content.title }}</strong>
      </a>
    </h3>
    <div ref="content" :style="collapsed" class="content">
      <img
        src="http://wonderland-server.net/_asset/img/economy1.png"
        alt="메라 화폐"
      >
      <p>
        이 서버에서는 <span class="green">에메랄드</span> 를 주요 화폐로
        사용합니다.<br>
        이 에메랄드의 통화단위를 <strong class="green">мега (메라)</strong> 라고
        부르며,
      </p>
      <p>
        · <strong class="green">1 мега</strong> (Емегаıđ)<br>
        · <strong class="green">10 мега</strong> 지폐<br>
        · <strong class="green">50 мега</strong> 지폐<br>
        · <strong class="green">100 мега</strong> 지폐<br>
        · <strong class="green">500 мега</strong> 지폐<br>
        · <strong class="green">1,000 мега</strong> 지폐
      </p>
      <p>의 실물 화폐가 존재합니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBox',
  props: {
    content: {
      type: Object,
      default: null,
      required: true
    }
  },
  data () {
    return { isActive: false }
  },
  computed: {
    collapsed () {
      if (this.isActive) {
        return {
          'max-height': this.$refs.content.scrollHeight + 'px'
        }
      } else {
        return {
          'max-height': 0
        }
      }
    }
  },
  methods: {
    unfold () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
h3.title {
  font-size: 18px;
  letter-spacing: 2px;
  color: #47a;
  padding: 0;
  margin: 0;

  border-width: 0;
  transition: margin-bottom 0.2s ease-out, padding-bottom 0.2s ease-out;

  &.active {
    border-bottom: 1px dashed #e3e3e3;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  p {
    text-decoration: none;
    display: block;
    line-height: 130%;
  }
}

.content {
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  img {
    margin-bottom: 15px;
    border-radius: 3px;
    box-shadow: 2px 2px 3px #555;
  }
  p {
    line-height: 20px;
    margin-bottom: 15px;
  }
}
</style>
