import { getUserInfo } from '../src/userInfo';

test('getUserInfo()返回对象深度相等', () => {
  expect(getUserInfo()).toEqual(getUserInfo());
});

test('getUserInfo()返回对象内存地址不同', () => {
  expect(getUserInfo()).not.toBe(getUserInfo());
});

test('getUserInfo().name 应该包含bear', () => {
  expect(getUserInfo().name).toMatch(/bear/i);
});
