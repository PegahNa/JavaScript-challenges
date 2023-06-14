const Candy = require("./candy.js");
class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    const totalPrice = this.items.reduce(
      (total, item) => total + item.getPrice(),
      0
    );
    return totalPrice.toFixed(2);
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
