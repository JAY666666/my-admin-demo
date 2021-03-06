module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      //为生产环境修改配置...
    } else {
      config.entry.app.push("./src/mock");
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
};
