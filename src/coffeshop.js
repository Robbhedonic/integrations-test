function getCoffeePrice(type) {
  if (type === 'latte') return 40;
  if (type === 'americano') return 30;
  return 0;
}
module.exports = getCoffeePrice;