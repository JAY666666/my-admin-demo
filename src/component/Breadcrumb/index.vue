<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
        <span
          v-if="item.redirect === 'noRedirect' || index == breadList.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleClick(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadList: null
    };
  },
  components: {},
  watch: {
    $route() {
      this.getBreadList();
    }
  },
  created() {
    this.getBreadList();
  },
  methods: {
    getBreadList() {
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      ); //获取当前路由
      const first = matched[0]; //路由头部
      if (!this.isHome(first)) {
        //if first is not home,concat home
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched.filter(item => item.meta && item.meta.title); //去除index页title，无meta
    },
    isHome(route) {
      return route.name === "home";
    },
    handleClick(item) {
      const { path, redirect } = item;
      if (redirect) {
        this.$router.push(redirect);
      } else {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.breadcrumb-container .el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
