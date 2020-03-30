<template>
  <div class="container">
    <el-button v-permission="['editor', 'admin']">editor user</el-button>
  </div>
</template>

<script>
export default {
  name: "user2",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
