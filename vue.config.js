const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

//  自定义设置
// const customOptions = {
//   mozjpeg: {
//     progressive: true,
//     quality: 50
//   },
//   optipng: {
//     enabled: true
//   },
//   pngquant: {
//     quality: [0.5, 0.65],
//     speed: 4
//   },
//   gifsicle: {
//     interlaced: false
//   },
//   // 不支持WEBP就不要写这一项
//   webp: {
//     quality: 75
//   }
// };

module.exports = {
  configureWebpack: config => {
    console.log(config, "233");
    if (process.env.NODE_ENV === "production") {
      //为生产环境修改配置...
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000
      };
    } else {
      config.entry.app.push("./src/mock");
    }
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule("images")
  //     .test(/\.(gif|png|jpe?g|svg)$/i)
  //     .use("image-webpack-loader")
  //     .loader("image-webpack-loader")
  //     .options(customOptions)
  //     .end();
  // }
};
