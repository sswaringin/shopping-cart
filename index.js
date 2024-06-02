export default class ShoppingCart {
  constructor(items = []) {
    this.__items = items;
  }
  get subtotal() {
    return this.__items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  }
};