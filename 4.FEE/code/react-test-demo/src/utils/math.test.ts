import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "@jest/globals";
import { sum } from "./math";

describe("math test", () => {
  beforeAll(() => {
    console.log("beforeAll Testing");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });

  test("sum test", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("sum test", () => {
    // expect(sum(1, 3)).toBe(2);
  });

  afterAll(() => {
    console.log("afterAll");
  });
  afterEach(() => {
    console.log("afterEach");
  });

  test("tobe or toequal", () => {
    const x = { a: { b: 3 } };
    const y = { a: { b: 3 } };
    // expect(x).toBe(y);
    expect(x).toEqual(y);
  });
});
