const Candy = require("./candy.js");

class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.items = [];
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.getPrice();
    });

    return totalPrice - this.discount;
  }

  addItem(item) {
    this.items.push(item);
  }
}

const shoppingBasket = new ShoppingBasket();
const candy = new Candy("Mars", 4.99);
shoppingBasket.addItem(candy);

console.log(shoppingBasket.getTotalPrice());

module.exports = ShoppingBasket;
