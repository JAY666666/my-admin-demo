const tableData = [
  {
    userID: "000001",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄"
  },
  {
    userID: "000002",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄"
  },
  {
    userID: "000003",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄"
  },
  {
    userID: "000004",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄"
  }
];

export default [
  {
    url: "/orders",
    type: "get",
    response: () => {
      return tableData;
    }
  }
];
