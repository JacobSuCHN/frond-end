import { fetchUser } from '../src/services/fetchUser';

test('fetchUser() 可以请求到一个用户名为bigbear', async () => {
  const data = await fetchUser();
  expect(data.name).toBe('bigbear');
});
