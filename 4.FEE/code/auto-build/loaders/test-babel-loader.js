// 自定义loader
// loader本质 一个函数
// loader本质 loader runner
// 执行顺序 从右向左
// 第一个参数 上一个loader产出的结果或者资源文件

// 类似babel-loader的逻辑
// loader 同步和异步
// 语法转化 es6 转成es5
const babelCore = require("@babel/core");

module.exports = function (content) {
  const callback = this.async(); // 转成异步
  // 获取配置
  const options = this.getOptions();
  // presets: ['@babel/preset-env'],
  console.log("test-babel-loader");
  // AST
  babelCore.transform(content, options, (err, res) => {
    if (err) {
      callback(err);
    } else {
      // 第一个参数err信息
      // 第二个参数资源字符串
      callback(null, res.code);
    }
  });
};
