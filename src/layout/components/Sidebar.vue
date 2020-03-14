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
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";

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
  components: {},
  computed: {
    variables() {
      return variables;
    }
  }
};
</script>

<style scoped lang="scss"></style>
