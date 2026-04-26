const getCoffeePrice = require('../src/coffeshop');

test('latte price is 40', () => {
  expect(getCoffeePrice('latte')).toBe(40);
});