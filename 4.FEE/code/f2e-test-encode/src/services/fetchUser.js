export const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'bigbear',
        age: 30,
      });
    }, 1000);
  });
};
