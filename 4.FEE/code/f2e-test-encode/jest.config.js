module.exports = {
  // 是否显示覆盖率报告
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  coverageThreshold: {
    global: {
      statements: 90,
      functions: 90,
      branches: 90,
    },
  },
};
