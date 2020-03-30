<template>
  <div class="container">
    <el-button v-permission="['admin']">admin user</el-button>
  </div>
</template>

<script>
export default {
  name: "user1",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
