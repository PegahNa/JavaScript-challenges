const ShoppingBasket = require("./shoppingBasket.js");

describe("mocking test", () => {
  it("applies discount correctly", () => {
    const candyDouble1 = { getPrice: () => 10 };
    const candyDouble2 = { getPrice: () => 8 };

    const shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem(candyDouble1);
    shoppingBasket.addItem(candyDouble2);

    const discount = 5;
    shoppingBasket.applyDiscount(discount);

    const totalPrice = shoppingBasket.getTotalPrice();
    const expectedPrice =
      candyDouble1.getPrice() + candyDouble2.getPrice() - discount;

    expect(totalPrice).toBe(expectedPrice);
  });
});
