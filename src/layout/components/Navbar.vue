<template>
  <div class="navbar">
    <i
      :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      class="toggle"
      @click="toggleClick()"
    ></i>
    <div class="user-info">
      <el-dropdown trigger="hover">
        <span class="user-name">jay chou</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native.prevent="logout()">
            logout
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    },
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router
          .push(`/login?redirect=${this.$route.fullPath}`)
          .catch(error => console.log(error));
      });
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.toggle {
  font-size: 18px;
  margin-left: 10px;
}
.user-info {
  margin-right: 15px;
}
.user-name {
  cursor: pointer;
}
</style>
