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

<style scoped lang="scss"></style>
