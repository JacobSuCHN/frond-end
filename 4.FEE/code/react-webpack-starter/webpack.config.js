// js模块化规范
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // 指定入口（单个或多个）
  entry: "./src/main.js",

  // 指定输出
  output: {
    clean: true, // 覆盖输出
  },
  // 模块编译转化
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        // css-loader:处理css
        // style-loader:插入css至html
        // use: ["style-loader", "css-loader"],
        // mini-css-extract-plugin:单独提取css
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.yk$/,
        use: {
          loader: "./loaders/yk-loader.js",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Webpack Starter",
      template: "./public/index.html",
    }),
    ,
    new MiniCssExtractPlugin(),
  ],

  // 设置模块解析
  resolve: {
    // 引入模块时省略文件扩展名
    extensions: [".js", ".jsx"],
  },
  // 指定devServer
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
