const { expect, it, describe } = require("./test");

function sum(a, b) {
  return a + b;
}

describe("用来测试相关功能", () => {
  it("测试sum函数", () => {
    expect(sum(1, 1)).toBe(2);
  });

  // it("测试sum函数其他场景", () => {
  //   expect(sum(1, 1)).toBe(4);
  // });
});
