let __value = 42;
const isomorphicFetch = jest.fn(() => {
  return __value;
});
isomorphicFetch.__setValue = (v) => (__value = v);
export default isomorphicFetch;
