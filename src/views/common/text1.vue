<template>
  <div class="container">
    <div class="select-info">
      <el-input
        placeholder="请输入用户ID"
        v-model="value1"
        prefix-icon="el-icon-search"
        style="width:200px"
        clearable
        class="search-id"
      ></el-input>
      <el-date-picker
        v-model="value2"
        type="daterange"
        prefix-icon="el-icon-time"
        clearable
        start-placeholder="开始日期"
        range-separator="至"
        end-placeholder="结束日期"
      ></el-date-picker>
    </div>
    <div class="select-data">
      <template>
        <el-table :data="tables" style="width: 100%" v-loading="loading">
          <el-table-column prop="userID" label="用户ID" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "test1",
  data() {
    return {
      value1: "",
      value2: "",
      tableData: [],
      loading: false
    };
  },
  created() {
    this.getOrders();
  },
  computed: {
    tables() {
      return this.tableData.filter(table => {
        return table.userID.includes(this.value1);
      });
    }
  },
  methods: {
    getOrders() {
      this.loading = true;
      return this.$store
        .dispatch("order/getOrder")
        .then(data => {
          this.tableData = data;
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 35px;
  .select-info {
    width: 100%;
    display: flex;
    justify-self: start;
    margin-bottom: 20px;
    .search-id {
      margin-right: 20px;
    }
  }
}
</style>
