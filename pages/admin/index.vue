<template>
  <div>
    <!--<ToastuiEditor :options="editoroption" />-->
    <tuiGrid
      :draggable="true"
      :columns="columns"
      :data="data"
      :treeColumnOptions="{ name: 'name' }"
    />
  </div>
</template>

<script>
import commandlist from '../../assets/data/commandlist.json'

const data = []
for (const cate of commandlist) {
  data.push({
    name: cate.title,
    _attributes: {
      expanded: false,
    },
    _children: cate.list,
  })
}
export default {
  name: 'Admin',
  layout: 'adminpage',
  data() {
    return {
      editoroption: {
        language: 'ko',
        usageStatistics: false,
      },
      columns: [
        {
          header: 'Name',
          name: 'name',
        },
        {
          header: 'Name(Kor)',
          name: 'kor',
        },
        {
          header: 'Info',
          name: 'info',
        },
      ],
      data,
    }
  },
}
</script>

<style scoped></style>
