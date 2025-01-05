// js模块化规范
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // 指定入口（单个或多个）
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    // 1.提取公共依赖
    // 2.开发多页面应用 SPA MPA
    // deps: "./src/deps.js",
  },

  // 指定输出
  output: {
    clean: true, // 覆盖输出
  },
  // 模块编译转化
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [
        //   {
        //     loader: "babel-loader",
        //     options: {
        //       presets: ["@babel/preset-env"],
        //       // plugins: ["@babel/plugin-transform-arrow-functions"],
        //     },
        //   },
        // ],
        use: "swc-loader",
      },
      {
        test: /\.(css|less)$/,
        // css-loader:处理css
        // style-loader:插入css至html
        // use: ["style-loader", "css-loader"],
        // mini-css-extract-plugin:单独提取css
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  // 目标环境
  // target: ["web", "es5"],
  target: "browserslist", // 需要配置package.json browserslist

  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],

  resolve: {
    extensions: [".js"],
  },
};
