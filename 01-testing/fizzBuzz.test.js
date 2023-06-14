const fizzBuzz = require("./fizzBuzz.js");

describe("fizzBuzz", () => {
  it("returns fizzBuzz if divisible by 3 and 5 ", () => {
    expect(fizzBuzz(15)).toBe("fizzBuzz");
  });

  it("returns Fizz if the number is divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("returns Buzz if the number is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("returns number if the number is not divisible by 3 and 5", () => {
    expect(fizzBuzz(17)).toBe(17);
  });
});
