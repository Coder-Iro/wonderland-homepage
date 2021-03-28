<template>
  <ToastuiEditor :options="editoroption" />
</template>

<script>
export default {
  name: 'Admin',
  layout: 'adminpage',
  data() {
    return {
      editoroption: {
        language: 'ko',
        usageStatistics: false,
      },
    }
  },
}
</script>

<style scoped></style>
