<template>
  <div class="sidebar">
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
          v-for="route in routes"
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
    variables() {
      return variables;
    },
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style scoped lang="scss"></style>
