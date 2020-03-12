<template>
  <div class="app-wrapper">
    <div class="app-left">
      <sidebar></sidebar>
    </div>
    <div class="app-right">
      <navbar class="navbar"></navbar>
      <app-main class="app-main"></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";

export default {
  name: "layout",
  data() {
    return {};
  },
  components: { Navbar, Sidebar, AppMain }
};
</script>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  height: 100vh;
}
.app-left {
  width: 30%;
  background-color: aqua;
  height: 100%;
}
.app-right {
  width: 70%;
  height: 100%;
}
.navbar {
  height: 30px;
  background-color: blueviolet;
}
</style>
