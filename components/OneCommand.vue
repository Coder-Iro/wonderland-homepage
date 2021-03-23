<template>
  <dl :class='{ wordwrap: command.wordwrap }'>
    <dt v-if="command.name.startsWith('/')" :class='{ bold: command.bold }'>
      {{ command.name.split(' ')[0] }}
      <em>{{ command.name.split(' ').slice(1).join(' ') }}</em>
    </dt>
    <dt v-else :class='{ bold: command.bold }'>
      {{ command.name }}
    </dt>
    <dt
      v-if="command.kor.startsWith('/')"
      :class='{ bold: command.bold }'
      class='kor'
    >
      {{ command.kor.split(' ')[0] }}
      <em>{{ command.kor.split(' ').slice(1).join(' ') }}</em>
    </dt>
    <dt v-else :class='{ bold: command.bold }' class='kor'>
      {{ command.kor }}
    </dt>
    <dd
      v-html="command.info.replace('아이디', '<em class=\'id\'>아이디</em>')"
    ></dd>
  </dl>
</template>

<script>
export default {
  name: 'OneCommand',
  props: {
    command: Object
  }
}
</script>

<style lang='scss' scoped>
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
</style>
