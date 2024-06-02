const assert = require('assert');
const ShoppingCart = require('../index');

describe('shopping cart', function() {
  describe('subtotal', function() {
    it('should be 0 if no items are passed in', function() {
      let shoppingCart = new ShoppingCart();
      let subtotal = shoppingCart.subtotal;
      assert.equal(subtotal, 0);
    })
    it('should be the sum of items * price', function(){
      let shoppingCart = new ShoppingCart([
        {
          "name": "coffee",
          "price": 2,
          "quantity": 1,
        },
        {
          "name": "eggs",
          "price": 5,
          "quantity": 2,
        }
      ]);
      let subtotal = shoppingCart.subtotal;

      assert.equal(subtotal, 12);
    })
  })
})