<template>
  <div class="app-wrapper" :class="{ hiddenSidebar: isHiddenSidebar }">
    <sidebar class="sidebar" :isCollapse="isHiddenSidebar" />
    <div class="app-right">
      <navbar
        class="navbar"
        @toggleClick="toggleSidebar"
        :isCollapse="isHiddenSidebar"
      />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";

export default {
  name: "layout",
  data() {
    return {
      isHiddenSidebar: false
    };
  },
  components: { Navbar, Sidebar, AppMain },
  methods: {
    toggleSidebar() {
      this.isHiddenSidebar = !this.isHiddenSidebar;
    }
  }
};
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  border-right: 1px solid whitesmoke;
  width: $sideBarWidth;
  overflow: hidden;
}
.app-right {
  position: absolute;
  margin-left: $sideBarWidth;
  width: calc(100% - #{$sideBarWidth});
}
.hiddenSidebar {
  .sidebar {
    width: 70px;
  }
  .app-right {
    margin-left: 70px;
    width: calc(100% - 70px);
  }
}
</style>
