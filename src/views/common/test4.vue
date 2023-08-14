<template>
  <div class="image-container">
    <img
      ref="zoomImage"
      src="../../assets//logo.png"
      alt="Image"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialDistance: null,
      initialScale: 1
    };
  },
  methods: {
    onTouchStart(e) {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        this.initialDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        this.initialScale =
          parseFloat(
            this.$refs.zoomImage.style.transform
              .replace("scale(", "")
              .replace(")", "")
          ) || 1;
      }
    },
    onTouchMove(e) {
      if (e.touches.length === 2 && this.initialDistance !== null) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const scale =
          this.initialScale * (currentDistance / this.initialDistance);
        this.$refs.zoomImage.style.transform = `scale(${scale})`;
      }
    },
    onTouchEnd() {
      this.initialDistance = null;
    }
  }
};
</script>

<style>
.image-container {
  overflow: hidden;
  width: 400px; /* 设置容器的宽度 */
  height: 300px; /* 设置容器的高度 */
}

img {
  width: 100%; /* 图像的初始宽度 */
  transition: transform 0.3s ease; /* 添加过渡效果 */
  touch-action: none; /* 禁用默认的触摸行为 */
}
</style>
