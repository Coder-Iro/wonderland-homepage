<template>
  <tr>
    <td>{{ pid }}</td>
    <td class="title">
      <a>{{ title }}</a>
    </td>
    <td class="face">
      <img :src="`https://crafatar.com/avatars/${uuid}?size=16&overlay&default=MHF_Steve`" alt="Coder_Iro">Coder_Iro
    </td>
    <td :title="date">
      {{ date }}
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  name: 'BoardItem',
  props: {
    pid: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    uuid: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
tr {
  td {
    padding: 0;
    height: 40px;
    border-bottom: 1px dotted #d2d2d2;
    img {
      vertical-align: middle;
      margin-right: 5px;
    }
    &.title {
      text-align: left;
      a {
        display: block;
      }
    }
  }
}
</style>
