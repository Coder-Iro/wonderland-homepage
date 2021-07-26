
<template>
  <!--eslint-disable vue/no-v-html-->
  <dl>
    <dt :class="{ big: !command.kor}" v-html="command.name" />
    <dt v-if="command.kor" class="kor" v-html="command.kor" />
    <dd v-html="command.desc" />
  </dl>
</template>

<script lang="ts">
import { Command } from '~/assets/data/commands'

export default {
  name: 'OneCommand',
  props: {
    command: {
      type: Object as () => Command,
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

  &.big {
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

    &.big {
      width: 100%;
    }
  }
  dd {
    padding-top: 36px;
    padding-left: 0;
    text-align: center;
  }
}
</style>
