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
    <el-button @click="handleDeepClone">xxx</el-button>
  </div>
</template>

<script>
import { debounce, cloneDeep } from "loadsh";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      obj: {
        name: "wxl",
        money: null,
        like: [1, 2, 3],
        sex: undefined,
        likes: { sport: "basketball" },
        children: this.obj
      }
    };
  },
  methods: {
    //函数抖动
    bounce1() {
      this.ajax(this.value1);
    },
    //调用去抖动函数
    bounce2: debounce(function() {
      this.ajax(this.value2);
    }, 3000),
    //假的ajax请求
    ajax(value) {},
    handleDeepClone() {
      let obj2 = cloneDeep(this.obj);
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
