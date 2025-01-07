// describe 作用域 分组
// test it
// expect 期望
import { fetchEnv } from '../src/featchEnv';

describe('FetchEnv', () => {
  it('判断是否是dev环境', () => {
    expect(fetchEnv('https://dev.baidu.com')).toBe('dev');
  });

  it('判断是否是test环境', () => {
    expect(fetchEnv('https://test.baidu.com')).toBe('test');
  });

  it('判断是否是pre环境', () => {
    expect(fetchEnv('https://pre.baidu.com')).toBe('pre');
  });

  it('判断是否是prod环境', () => {
    expect(fetchEnv('https://prod.baidu.com')).toBe('prod');
  });
});
