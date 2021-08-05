<template>
  <thead>
    <tr>
      <th class="hno" scope="col">
        no
      </th>
      <th class="htitle" scope="col">
        title
      </th>
      <th class="huserid" scope="col">
        userid
      </th>
      <th class="hdate" scope="col">
        date
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'BoardHead'
}
</script>

<style lang="scss" scoped>

thead th {
  height: 50px;
  font-size: 120%;
  border-bottom: 2px solid #ccc;
  padding: 0;

  &.hno {
    width: 50px;
  }

  &.huserid, &.hdate {
    width: 100px;
  }
}
</style>
