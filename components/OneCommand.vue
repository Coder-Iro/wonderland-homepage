
<template>
  <!--eslint-disable vue/no-v-html-->
  <dl :class="{ wordwrap: command.wordwrap }">
    <dt :class="{ ctrl: command.ctrl}" v-html="command.name" />
    <dt v-if="!command.ctrl" class="kor" v-html="command.kor" />
    <dd v-html="command.info.replace('아이디', '<em class=\'id\'>아이디</em>')" />
  </dl>
</template>

<script>
export default {
  name: 'OneCommand',
  props: {
    command: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
dl {
  border-top: 1px dashed #ccc;
  position: relative;
  z-index: 0;
  min-height: 35px;
  overflow: hidden;

  ::v-deep em {
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
  width: 150px;
  height: 100%;
  border-right: 1px dashed #ddd;
  text-align: center;
  font-weight: bold;
  color: #582;
  word-spacing: -2px;

  &.kor {
    left: 150px;
  }

  &.ctrl {
    width: 300px;
  }
}

dd {
  padding-left: 310px;
}

@media (max-width: 700px), (orientation: portrait) {
  dt {
    width: 50%;
    border: 0;

    &.kor {
      left: 50%;
    }
  }
  dd {
    padding-top: 36px;
    padding-left: 0;
    text-align: center;
  }
}
</style>
