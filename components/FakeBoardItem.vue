<template>
  <tr>
    <td />
    <td class="title" />
    <td class="face" />
    <td />
  </tr>
</template>

<script>
export default {
  name: 'FakeBoardItem'
}
</script>

<style scoped lang="scss">
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
