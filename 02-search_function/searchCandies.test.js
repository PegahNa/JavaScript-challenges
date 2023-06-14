const searchCandies = require("./searchCandies.js");

describe("searchCandies", () => {
  it("returns one candy", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns two candies", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("works with lower case search string", () => {
    expect(searchCandies("s", 4)).toEqual(["Skitties", "Skittles"]);
  });
});
