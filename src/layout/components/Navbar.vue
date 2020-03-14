<template>
  <div class="navbar">
    <i
      :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="toggle"
      @click="toggleClick()"
    ></i>
    <div class="user-info">
      xxx
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
}
.toggle {
  font-size: 16px;
  margin-left: 10px;
}
.user-info {
  margin-right: 15px;
}
</style>
