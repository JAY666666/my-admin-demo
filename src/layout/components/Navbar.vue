<template>
  <div class="navbar">
    <i
      :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      class="toggle"
      @click="toggleClick()"
    ></i>
    <breadcrumb class="breadcrumb-container" />
    <div class="user-info">
      <el-dropdown trigger="hover">
        <span class="user-name">{{ name }}</span>
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
import { mapGetters } from "vuex";
import Breadcrumb from "@/component/Breadcrumb";
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
  components: { Breadcrumb },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    },
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      });
    }
  },
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style scoped lang="scss">
.navbar {
  overflow: hidden;
  position: relative;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .toggle {
    line-height: 50px;
    margin-left: 10px;
    font-size: 18px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .breadcrumb-container {
    float: left;
    margin-left: 10px;
  }
  .user-info {
    float: right;
    margin-right: 20px;
    height: 100%;
    line-height: 50px;
    .user-name {
      cursor: pointer;
    }
  }
}
</style>
