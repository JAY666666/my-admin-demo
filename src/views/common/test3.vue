<template>
  <div class="test3">
    <el-input
      v-model="value1"
      id="input1"
      size="small"
      style="width:200px"
      placeholder="函数抖动"
      @change="bounce1()"
    ></el-input>
    <el-input
      v-model="value2"
      id="input2"
      size="small"
      style="width:200px"
      placeholder="函数去抖动"
      @change="bounce2()"
    ></el-input>
  </div>
</template>

<script>
import _ from "loadsh";
export default {
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  methods: {
    //函数抖动
    bounce1() {
      this.ajax(this.value1);
    },
    //调用去抖动函数
    bounce2: _.debounce(function() {
      this.ajax(this.value2);
    }, 3000),
    //假的ajax请求
    ajax(value) {
      console.log("抖动", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.test3 {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
