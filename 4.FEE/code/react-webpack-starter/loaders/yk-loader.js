// yk-loaders.js
// webpack loader 实质上是一个函数
module.exports = function (source) {
  console.log(arguments);
  return source;
};

// webpack plugin 实质上是一类
