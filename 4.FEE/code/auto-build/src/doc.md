# 自动化构建

## 课程大纲

- 构建的整体设计思路
- 构建的技术选型与方案
- 搭建自动化构建场景

## 什么是自动化构建

通过自动化手段 提高效率 可靠性

构建工具：grunt webpack gulp vite rollup esbuild swc turpupack

编译 测试 部署 区分环境

## 构建的整体设计思路

- 构建工具的选择
  实际业务出发

  - UI rollup
  - 小型项目 vite
  - 大型项目 vite webpack

  - swc swc-loader 对标 babel-loader =》 ast

- 确定构建流程 ✅
  - loader （解析 编译 文件处理 ） webpack 需要了解 基础
  - plugin 增强 最后阶段进行输出 webpack
- 确定构建产物的输出
  分 chunk 输出 可以对内容进行按需加载

- 优化打包构建流程 ✅

  - review 构建过程 优化部分阶段
  - 怎么让打出来的包体积更小？
  - tree shaking webpack5 静态编译的时候
    - 尽量减少 commonjs 库的使用，尽量使用 esm 的库 ？
  - 按需加载 （异步组件） 把非首屏的组件异步出来
  - 配合缓存 splitChunks
    - 不怎么变动的包打包到一块 vue pinia vue-router vender.js
      - 优势 减小入口 js 体积
      - vender 利用缓存 无需跟新
  - externals 通过这种方式导入第三方资源
    - 微前端 引用公共资源

- 提升构建速度
  - 空间 时间
    - 缓存 cache
    - 利用好计算机算力
    - 多线程打包 happy-pack thread-loader

学 练习 考试 =》 面试

- 构建的技术选型和方案
- 初始化工程
- 依赖盘点与安装
- 确定一些工程化脚本
- start build
- test lint type-check
- 基于 git 钩子 commit pre-commit
- 前端代码规范 确定代码规范 ts eslint spellcheck git flow 规范
  https://encode-studio-fe.github.io/fe-spec/

TODO

- webpack 热更新原理内容
- 前端工程化 webpack 面试题

### 自定义 loader
