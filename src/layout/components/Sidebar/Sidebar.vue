<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/" class="logo-container">
        <el-image
          :src="
            require('@/assets/' + (isCollapse ? 'logo-login.png' : 'logo.png'))
          "
          class="logo-image"
          fit="contain"
        ></el-image>
      </router-link>
    </div>
    <el-scrollbar>
      <el-menu
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :router="true"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {};
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permission_routes"]),
    variables() {
      return variables;
    }
  }
};
</script>

<style scoped lang="scss">
.logo {
  height: 50px;
  .logo-container {
    width: 100%;
    .logo-image {
      padding: 0 20px;
      height: 100%;
    }
  }
}
</style>
