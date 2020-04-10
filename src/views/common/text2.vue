<template>
  <div class="container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles"
    >
    </vue-particles>
    <div class="text2">i am text2</div>
  </div>
</template>

<script>
export default {
  name: "text2",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  .particles {
    position: fixed;
    // z-index: 1;
    height: 100vh;
  }
  .text2 {
    position: absolute;
    // z-index: 100;
    text-align: center;
    width: 100%;
    height: 200px;
    top: 200px;
  }
}
</style>
