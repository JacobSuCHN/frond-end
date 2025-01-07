import { getInitArray } from '../src/getIntArray';

test('getInitArray(3) 返回数组长度应该为3', () => {
  expect(getInitArray(3)).toHaveLength(3);
  //   expect(getInitArray('3')).toThrow(TypeError);
});
