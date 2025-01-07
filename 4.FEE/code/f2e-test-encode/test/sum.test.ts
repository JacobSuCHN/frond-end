import { sum } from '../src/sum';

test('sum(2,4) to equal 6', () => {
  expect(sum(2, 4)).toBe(6);
  expect(sum(2, 4)).not.toBe(5);
});

test('sum(2,5) 不等于6', () => {
  expect(sum(2, 5)).not.toBe(6);
});
