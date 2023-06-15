const Thermostat = require("./thermostat.js");

describe("Thermostat", () => {
  it("returns 20", () => {
    const new_thermostat = new Thermostat();
    new_thermostat.getTemperature();
    expect(new_thermostat.getTemperature()).toEqual(20);
  });
});
