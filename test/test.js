import { expect } from 'chai';
import { ShoppingCart } from '../index.js';

describe('shopping cart', function() {
  describe('subtotal', function() {
    it('should be 0 if no items are passed in', function() {
      let shoppingCart = new ShoppingCart();
      let subtotal = shoppingCart.subtotal;
      expect(subtotal).to.equal(0);
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

      expect(subtotal).to.equal(12);
    })
  })
  describe('add', function() {
    it('should store an item in the shopping cart', function() {
      // Create an instance of a ShoppingCart and pass it an item.
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50,
        }
      ]);

      // Use the add method to add to the items.
      shoppingCart.add({
        id: 2,
        quantity: 2,
        price: 30
      });
      // The cart items should be an array.
      expect(shoppingCart.__items).to.be.an('array');

      // Does the cart contain both items?
      expect(shoppingCart.__items).to.deep.equal([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
        {
          id: 2,
          quantity: 2,
          price: 30
        }
      ])
    });
    it('should return the item that was stored in the shopping cart', function() {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
      ]);

      let item = {
        id: 2,
        quantity: 2,
        price: 30,
      };

      let addedItem = shoppingCart.add(item);
      expect(addedItem).to.equal(item);
    })
  });
});