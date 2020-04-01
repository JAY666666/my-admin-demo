import Mock from "mockjs";
const Random = Mock.Random;

export default [
  {
    url: "/orders",
    type: "get",
    response: () => {
      let orders = [];
      for (let i = 0; i < 8; i++) {
        let order = {
          userID: Mock.mock({
            "number|1-100": 1
          }).number.toString(),
          name: Random.cname(),
          address: Random.county(true)
        };
        orders.push(order);
      }
      return {
        data: orders,
        code: 200
      };
    }
  }
];
