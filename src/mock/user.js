export default {
  login: config => {
    const data = JSON.parse(config.body);
    return data;
  }
};
