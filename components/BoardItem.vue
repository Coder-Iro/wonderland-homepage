<template>
  <tr>
    <td>{{ pid }}</td>
    <td class="title" :class="{admin: admins.includes(uuid)}">
      <a>{{ title }} <span v-if="comments" class="board-icon icon-count">{{ comments }}</span></a>
    </td>
    <td class="face" :class="{admin: admins.includes(uuid)}">
      <img :src="`https://crafatar.com/avatars/${uuid}?size=16&overlay&default=MHF_Steve`" :alt="name">{{ name }}
    </td>
    <td :title="date">
      {{ date }}
    </td>
  </tr>
</template>

<script lang="ts">
import admins from '~/assets/data/admins'

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
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    comments: {
      type: Number,
      required: true
    }
  },
  data () {
    return { admins }
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

      .board-icon {
        background-image: url(~/assets/img/icon-board.gif);
        background-repeat: no-repeat;
      }

      span.icon-count {
        color: #f16567;
        font-size: 85%;
        padding: 2px 0 0 17px;
        margin-left: 5px;
      }

      &.admin {
        font-weight: bold;
      }

      a {
        display: block;
      }
    }

    &.face.admin {
      color: #36c !important;
      font-weight: bold;
    }
  }
}
</style>
