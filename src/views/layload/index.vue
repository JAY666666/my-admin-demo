<template>
  <div id="lazyload">
    <div class="img">
      <div v-for="img in images" :key="img.index">
        <img v-lazy="img.src" object-fit="fill" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 0
        },
        {
          src: require("../../assets/微信图片_20210323135149.jpg"),
          index: 1
        },
        {
          src: require("../../assets/微信图片_20210323135153.jpg"),
          index: 2
        },
        {
          src: require("../../assets/微信图片_20210323135157.jpg"),
          index: 3
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 4
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 5
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 6
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 7
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 8
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 9
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 10
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 11
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 12
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 13
        },
        {
          src: require("../../assets/微信图片_20210322115927.jpg"),
          index: 14
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#lazyload {
  height: 100vh;
  overflow: scroll;
}
</style>
