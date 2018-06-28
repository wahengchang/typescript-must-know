import { showProduct } from '../index.ts';
const { showProduct: fun } = require('../index.ts')


test('showProduct', () => {
  expect(showProduct(2,3)).toBe(6);
});


test('showProduct', () => {
    expect(fun(2,3)).toBe(6);
});
  