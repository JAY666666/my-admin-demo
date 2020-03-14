<template>
  <div class="container">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
